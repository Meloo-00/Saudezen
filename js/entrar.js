// Página "Entrar": entrar, criar conta, esqueci a senha, nova senha e sair.
// Quem faz o trabalho de verdade é o servidor (api/conta.js), que usa o banco bd_login.
// Aqui só mostramos a tela certa e mandamos os dados para ele (veja Conta.pedir em js/conta.js).

const telas = document.querySelectorAll('.tela');
const formEntrar    = document.querySelector('#form-entrar');
const formCriar     = document.querySelector('#form-criar');
const formEsqueci   = document.querySelector('#form-esqueci');
const formNovaSenha = document.querySelector('#form-nova-senha');

// Para onde ir depois de entrar (ex.: entrar.html?voltar=analise volta para a análise)
const parametros = new URLSearchParams(location.search);
const VOLTAR_PARA = parametros.get('voltar') === 'analise' ? 'analise.html' : null;

// Token do link de "Esqueci minha senha" (entrar.html?token=...)
const TOKEN = parametros.get('token');

// Mensagem usada em vários formulários
const MSG_EMAIL = 'Escreva o seu e-mail completo, por exemplo: nome@exemplo.com.';

const ICONE_ATENCAO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';
const ICONE_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>';

// ---------- Trocar de tela ----------

// Mostra só a tela com esse nome (data-tela="...") e esconde as outras.
// moverFoco: leva o foco para o título da tela nova, para quem usa leitor de tela
// saber que a tela mudou. Na primeira tela da página não precisa.
function mostrarTela(nome, moverFoco) {
  telas.forEach(function (tela) {
    tela.hidden = tela.dataset.tela !== nome;
  });
  esconderMensagens();
  if (moverFoco) document.querySelector('[data-tela="' + nome + '"] h1').focus();
}

// Botões com data-ir="criar", data-ir="esqueci" etc. levam para aquela tela
document.querySelectorAll('[data-ir]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const destino = botao.dataset.ir;
    // Indo para "Esqueci", aproveita o e-mail que a pessoa já escreveu
    if (destino === 'esqueci' && formEntrar.email.value) {
      formEsqueci.email.value = formEntrar.email.value;
    }
    mostrarTela(destino, true);
  });
});

// ---------- Botão "Mostrar" senha ----------

document.querySelectorAll('.mostrar').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const campo = document.getElementById(botao.getAttribute('aria-controls'));
    const mostrando = campo.type === 'text';
    campo.type = mostrando ? 'password' : 'text';
    botao.setAttribute('aria-pressed', !mostrando);
    botao.querySelector('span').textContent = mostrando ? 'Mostrar' : 'Esconder';
  });
});

// ---------- Mensagens ----------

// tipo: 'atencao' (algo deu errado) ou 'ok' (deu certo)
function mostrarMensagem(form, texto, tipo) {
  const caixa = form.querySelector('.form-mensagem');
  caixa.className = 'mensagem form-mensagem mensagem-' + tipo;
  caixa.innerHTML = tipo === 'ok' ? ICONE_OK : ICONE_ATENCAO;
  const p = document.createElement('p');
  p.textContent = texto; // textContent (e não innerHTML): o texto nunca vira código
  caixa.appendChild(p);
  caixa.hidden = false;
}

function esconderMensagens() {
  document.querySelectorAll('.form-mensagem').forEach(function (caixa) { caixa.hidden = true; });
  document.querySelectorAll('.campo input').forEach(function (campo) { campo.removeAttribute('aria-invalid'); });
}

// Marca o campo com problema, coloca o foco nele e mostra a mensagem
function erroNoCampo(form, campo, texto) {
  campo.setAttribute('aria-invalid', 'true');
  mostrarMensagem(form, texto, 'atencao');
  campo.focus();
}

// O servidor responde com um código curto (ex.: { erro: 'credenciais' }).
// Aqui viramos o código numa frase que ajude a pessoa a resolver.
function textoDoErro(resposta) {
  if (resposta.status === 0) return 'Não foi possível falar com o servidor. Confira a conexão e tente de novo.';
  switch (resposta.dados.erro) {
    case 'credenciais':  return 'E-mail ou senha incorretos. Confira e tente de novo.';
    case 'bloqueado':    return 'Muitas tentativas erradas. Por segurança, espere 15 minutos ou use "Esqueci minha senha".';
    case 'email-existe': return 'Já existe uma conta com esse e-mail. Entre com ela ou use "Esqueci minha senha".';
    case 'nome':         return 'Escreva o seu nome.';
    case 'email':
    case 'dados':        return MSG_EMAIL;
    case 'senha':        return 'A senha precisa ter pelo menos 8 caracteres.';
    case 'token':        return 'Este link não vale mais: passou de 1 hora ou já foi usado. Peça outro abaixo.';
    case 'banco':        return 'O banco de dados não está respondendo. Tente de novo em alguns minutos.';
    default:             return 'Não foi possível concluir agora. Tente de novo em alguns minutos.';
  }
}

function emailValido(texto) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto);
}

// Trava o botão e troca o texto enquanto espera ("Entrando…")
function aguardar(form, textoEspera) {
  const botao = form.querySelector('button[type="submit"]');
  const textoOriginal = botao.textContent;
  botao.disabled = true;
  botao.textContent = textoEspera;
  return function liberar() {
    botao.disabled = false;
    botao.textContent = textoOriginal;
  };
}

// Depois de entrar: volta para a análise (se veio de lá) ou mostra "Olá, fulano"
function depoisDeEntrar(usuario) {
  Conta.atualizarMenu();
  if (VOLTAR_PARA) {
    location.href = VOLTAR_PARA;
  } else {
    mostrarLogado(usuario, true);
  }
}

function mostrarLogado(usuario, moverFoco) {
  document.querySelector('.logada-nome').textContent = primeiroNome(usuario.nome);
  document.querySelector('.logada-email').textContent = usuario.email;
  mostrarTela('logada', moverFoco);
}

// "Ana Carolina Alves" -> "Ana"
function primeiroNome(nome) {
  return nome.trim().split(/\s+/)[0];
}

// ---------- Começo: qual tela mostrar primeiro? ----------

async function iniciar() {
  // Arquivo aberto direto do computador: sem servidor, sem login
  if (!Conta.loginDisponivel()) return mostrarTela('desligado');

  // Veio pelo link de "Esqueci minha senha"
  if (TOKEN) {
    // Tira o token do endereço, para ele não ficar no histórico do navegador
    history.replaceState(null, '', location.pathname);
    return mostrarTela('nova-senha');
  }

  // Quem não parece logado já vê "Entrar" na hora, sem esperar o servidor
  if (!Conta.pareceLogado()) mostrarTela(location.hash === '#criar' ? 'criar' : 'entrar');

  const usuario = await Conta.obterSessao();
  if (usuario) {
    mostrarLogado(usuario);
  } else if (Conta.pareceLogado()) {
    // O cookie dizia "logado", mas a sessão acabou (ex.: o servidor foi reiniciado)
    document.cookie = 'logado=; Path=/; Max-Age=0';
    Conta.atualizarMenu();
    mostrarTela('entrar');
  }
}

iniciar();

// ---------- Entrar ----------

formEntrar.addEventListener('submit', async function (evento) {
  evento.preventDefault(); // não deixa o navegador recarregar a página
  esconderMensagens();
  const email = formEntrar.email.value.trim();
  const senha = formEntrar.senha.value;

  if (!emailValido(email)) return erroNoCampo(formEntrar, formEntrar.email, MSG_EMAIL);
  if (!senha) return erroNoCampo(formEntrar, formEntrar.senha, 'Escreva a sua senha.');

  const liberar = aguardar(formEntrar, 'Entrando…');
  const resposta = await Conta.pedir('/api/entrar', { email: email, senha: senha });
  liberar();

  if (!resposta.ok) {
    if (resposta.dados.erro === 'credenciais') {
      // Marca os dois campos: não dizemos qual está errado (segurança)
      formEntrar.email.setAttribute('aria-invalid', 'true');
      formEntrar.senha.setAttribute('aria-invalid', 'true');
      formEntrar.senha.value = '';
      formEntrar.senha.focus();
    }
    return mostrarMensagem(formEntrar, textoDoErro(resposta), 'atencao');
  }

  formEntrar.reset();
  depoisDeEntrar(resposta.dados.usuario);
});

// ---------- Criar conta ----------

formCriar.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const nome = formCriar.nome.value.trim();
  const email = formCriar.email.value.trim();
  const senha = formCriar.senha.value;

  if (nome.length < 2) return erroNoCampo(formCriar, formCriar.nome, 'Escreva o seu nome.');
  if (!emailValido(email)) return erroNoCampo(formCriar, formCriar.email, MSG_EMAIL);
  if (senha.length < 8) return erroNoCampo(formCriar, formCriar.senha, 'A senha precisa ter pelo menos 8 caracteres.');

  const liberar = aguardar(formCriar, 'Criando conta…');
  const resposta = await Conta.pedir('/api/criar-conta', { nome: nome, email: email, senha: senha });
  liberar();

  if (!resposta.ok) {
    if (resposta.dados.erro === 'email-existe') return erroNoCampo(formCriar, formCriar.email, textoDoErro(resposta));
    return mostrarMensagem(formCriar, textoDoErro(resposta), 'atencao');
  }

  // Conta criada: o servidor já deixou a pessoa logada
  formCriar.reset();
  Conta.atualizarMenu();
  if (VOLTAR_PARA) return (location.href = VOLTAR_PARA);
  document.querySelector('.criada-nome').textContent = primeiroNome(resposta.dados.usuario.nome);
  document.querySelector('.criada-email').textContent = resposta.dados.usuario.email;
  mostrarTela('criada', true);
});

// ---------- Esqueci minha senha ----------

formEsqueci.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const email = formEsqueci.email.value.trim();
  if (!emailValido(email)) return erroNoCampo(formEsqueci, formEsqueci.email, MSG_EMAIL);

  const liberar = aguardar(formEsqueci, 'Enviando…');
  const resposta = await Conta.pedir('/api/esqueci', { email: email });
  liberar();
  if (!resposta.ok) return mostrarMensagem(formEsqueci, textoDoErro(resposta), 'atencao');

  document.querySelector('.enviado-email').textContent = email;
  mostrarTela('enviado', true);
});

// ---------- Nova senha (link do "Esqueci") ----------

formNovaSenha.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const senha = formNovaSenha.senha.value;
  if (senha.length < 8) return erroNoCampo(formNovaSenha, formNovaSenha.senha, 'A senha precisa ter pelo menos 8 caracteres.');

  const liberar = aguardar(formNovaSenha, 'Salvando…');
  const resposta = await Conta.pedir('/api/nova-senha', { token: TOKEN, senha: senha });
  liberar();
  if (!resposta.ok) return mostrarMensagem(formNovaSenha, textoDoErro(resposta), 'atencao');

  formNovaSenha.reset();
  mostrarTela('entrar', true);
  mostrarMensagem(formEntrar, 'Senha nova salva. Agora entre com ela.', 'ok');
});

// ---------- Sair ----------

document.querySelector('.conta-sair').addEventListener('click', async function () {
  await Conta.pedir('/api/sair', {});
  Conta.atualizarMenu();
  mostrarTela('entrar', true);
});
