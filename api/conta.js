// Rotas da conta: criar conta, entrar, sair, "esqueci minha senha" e nova senha.
// Tudo passa pelas procedures do banco bd_login (banco/bd_login.sql).
//
// Segurança:
// - A senha vira "hash" com bcrypt antes de ir para o banco. O hash não dá para desfazer:
//   nem quem abre o banco descobre a senha. No login, o bcrypt compara a senha com o hash.
// - Quem entrou recebe um cookie "HttpOnly" (o JavaScript da página não consegue ler,
//   então um script malicioso não consegue roubar a sessão).
// - O token de "esqueci a senha" vai para o banco só embaralhado (SHA-256): quem vir a
//   tabela RecuperarSenha não consegue usar os tokens.
// - Depois de 5 senhas erradas em 15 minutos, o e-mail fica bloqueado (tabela LogLogin).

const crypto = require('crypto');
const express = require('express');
const bcrypt = require('bcryptjs');
const { sql, procedure, errosRecentes } = require('./banco');

const rotas = express.Router();

const DURACAO_SESSAO = 7 * 24 * 60 * 60 * 1000; // 7 dias
const LIMITE_ERROS = 5;
const JANELA_ERROS = 15; // minutos

// Hash de uma senha qualquer, usado quando o e-mail não tem conta (veja a rota /entrar)
const HASH_FALSO = bcrypt.hashSync('senha-que-ninguem-usa', 12);

// ---------- Sessões ----------
// Fica na memória do servidor: { token -> { id, nome, email, expira } }.
// Se o servidor for reiniciado, todo mundo precisa entrar de novo (normal para um protótipo).
const sessoes = new Map();

function criarSessao(res, usuario) {
  const token = crypto.randomBytes(32).toString('hex');
  sessoes.set(token, { id: usuario.id, nome: usuario.nome, email: usuario.email, expira: Date.now() + DURACAO_SESSAO });
  const segundos = DURACAO_SESSAO / 1000;
  res.append('Set-Cookie', 'sessao=' + token + '; HttpOnly; SameSite=Lax; Path=/; Max-Age=' + segundos);
  // Cookie "logado=1" sem HttpOnly: não dá acesso a nada, só avisa a página para trocar
  // "Entrar" por "Sua conta" no menu sem esperar o servidor.
  res.append('Set-Cookie', 'logado=1; SameSite=Lax; Path=/; Max-Age=' + segundos);
}

function lerCookie(req, nome) {
  const cookies = (req.headers.cookie || '').split(';');
  for (const cookie of cookies) {
    const [chave, ...resto] = cookie.trim().split('=');
    if (chave === nome) return resto.join('=');
  }
  return null;
}

// Devolve quem está logado neste pedido (ou null). Usado aqui e na análise (api/analisar.js).
function usuarioDaSessao(req) {
  const token = lerCookie(req, 'sessao');
  const sessao = token && sessoes.get(token);
  if (!sessao) return null;
  if (sessao.expira < Date.now()) {
    sessoes.delete(token);
    return null;
  }
  return sessao;
}

// ---------- Conferências ----------

function emailValido(texto) {
  return typeof texto === 'string' && texto.length <= 150 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto);
}

// O bcrypt só usa os primeiros 72 bytes da senha, por isso o limite
function senhaValida(texto) {
  return typeof texto === 'string' && texto.length >= 8 && Buffer.byteLength(texto) <= 72;
}

// E-mail sempre minúsculo e sem espaços: "Ana@Email.com " e "ana@email.com" são a mesma conta
function limparEmail(texto) {
  return typeof texto === 'string' ? texto.trim().toLowerCase() : '';
}

function hashDoToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Erro de banco desligado/inacessível: avisa no terminal e responde "banco" para a página
function falhaNoBanco(res, erro) {
  console.error('Erro no banco de dados: ' + erro.message);
  return res.status(503).json({ erro: 'banco' });
}

// ---------- Rotas ----------

// Quem está logado agora?
rotas.get('/eu', function (req, res) {
  const usuario = usuarioDaSessao(req);
  res.json({ usuario: usuario ? { nome: usuario.nome, email: usuario.email } : null });
});

// Criar conta -> sp_CriarConta
rotas.post('/criar-conta', async function (req, res) {
  const nome = typeof req.body.nome === 'string' ? req.body.nome.trim() : '';
  const email = limparEmail(req.body.email);
  const senha = req.body.senha;

  if (nome.length < 2 || nome.length > 100) return res.status(400).json({ erro: 'nome' });
  if (!emailValido(email)) return res.status(400).json({ erro: 'email' });
  if (!senhaValida(senha)) return res.status(400).json({ erro: 'senha' });

  try {
    const hash = await bcrypt.hash(senha, 12);
    const linhas = await procedure('sp_CriarConta', {
      nome: [sql.VarChar(100), nome],
      email: [sql.VarChar(150), email],
      senha_hash: [sql.VarChar(255), hash]
    });
    const id = Number(linhas[0].id_usuario);
    criarSessao(res, { id: id, nome: nome, email: email }); // já entra na conta nova
    res.json({ usuario: { nome: nome, email: email } });
  } catch (erro) {
    // A procedure avisa com RAISERROR quando o e-mail já existe
    if (erro.message.includes('cadastrado')) return res.status(409).json({ erro: 'email-existe' });
    return falhaNoBanco(res, erro);
  }
});

// Entrar -> sp_Logar + sp_RegistrarLogin
rotas.post('/entrar', async function (req, res) {
  const email = limparEmail(req.body.email);
  const senha = typeof req.body.senha === 'string' ? req.body.senha : '';
  if (!emailValido(email) || !senha) return res.status(400).json({ erro: 'dados' });

  try {
    if (await errosRecentes(email, JANELA_ERROS) >= LIMITE_ERROS) {
      return res.status(429).json({ erro: 'bloqueado' });
    }

    const linhas = await procedure('sp_Logar', { email: [sql.VarChar(150), email] });
    const usuario = linhas[0];
    // Mesmo sem usuário, compara com um hash qualquer: assim a resposta demora o mesmo tempo
    // e ninguém descobre quais e-mails têm conta só medindo a demora.
    const hash = usuario ? usuario.senha_hash : HASH_FALSO;
    const certo = await bcrypt.compare(senha, hash) && Boolean(usuario);

    await procedure('sp_RegistrarLogin', {
      email: [sql.VarChar(150), email],
      sucesso: [sql.Bit, certo]
    });

    // Mesma resposta para "e-mail não existe" e "senha errada" (não entrega quem tem conta)
    if (!certo) return res.status(401).json({ erro: 'credenciais' });

    criarSessao(res, { id: usuario.id_usuario, nome: usuario.nome, email: usuario.email });
    res.json({ usuario: { nome: usuario.nome, email: usuario.email } });
  } catch (erro) {
    return falhaNoBanco(res, erro);
  }
});

// Sair: apaga a sessão e os cookies
rotas.post('/sair', function (req, res) {
  const token = lerCookie(req, 'sessao');
  if (token) sessoes.delete(token);
  res.append('Set-Cookie', 'sessao=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0');
  res.append('Set-Cookie', 'logado=; SameSite=Lax; Path=/; Max-Age=0');
  res.json({ ok: true });
});

// Esqueci minha senha -> sp_SolicitarRecuperacao
// Sem serviço de e-mail (o site roda no computador), o link aparece no TERMINAL do servidor.
// Num site publicado, este é o ponto em que o link seria enviado por e-mail.
rotas.post('/esqueci', async function (req, res) {
  const email = limparEmail(req.body.email);
  if (!emailValido(email)) return res.status(400).json({ erro: 'email' });

  try {
    const existe = (await procedure('sp_Logar', { email: [sql.VarChar(150), email] })).length > 0;
    if (existe) {
      const token = crypto.randomBytes(32).toString('hex');
      await procedure('sp_SolicitarRecuperacao', {
        email: [sql.VarChar(150), email],
        token: [sql.VarChar(100), hashDoToken(token)]
      });
      const porta = process.env.PORT || 3000;
      console.log('\n[Esqueci a senha] Link para ' + email + ' (vale por 1 hora):');
      console.log('http://localhost:' + porta + '/entrar.html?token=' + token + '\n');
    } else {
      console.log('\n[Esqueci a senha] Pedido para ' + email + ', mas não existe conta com esse e-mail.\n');
    }
    // A página recebe a mesma resposta nos dois casos (não entrega quem tem conta)
    res.json({ ok: true });
  } catch (erro) {
    return falhaNoBanco(res, erro);
  }
});

// Nova senha, usando o token do link -> sp_RedefinirSenha
rotas.post('/nova-senha', async function (req, res) {
  const token = typeof req.body.token === 'string' ? req.body.token : '';
  const senha = req.body.senha;
  if (!/^[0-9a-f]{64}$/.test(token)) return res.status(400).json({ erro: 'token' });
  if (!senhaValida(senha)) return res.status(400).json({ erro: 'senha' });

  try {
    const hash = await bcrypt.hash(senha, 12);
    await procedure('sp_RedefinirSenha', {
      token: [sql.VarChar(100), hashDoToken(token)],
      nova_senha_hash: [sql.VarChar(255), hash]
    });
    res.json({ ok: true });
  } catch (erro) {
    if (erro.message.includes('Token')) return res.status(400).json({ erro: 'token' });
    return falhaNoBanco(res, erro);
  }
});

module.exports = { rotas: rotas, usuarioDaSessao: usuarioDaSessao };
