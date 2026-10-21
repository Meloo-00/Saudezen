// Página "Entrar": login, cadastro, "esqueci minha senha" e sair.
// Quem faz o trabalho de verdade é o Supabase (veja js/conta.js).

const abaEntrar      = document.querySelector('#aba-entrar');
const abaCriar       = document.querySelector('#aba-criar');
const formEntrar     = document.querySelector('#painel-entrar');
const formCriar      = document.querySelector('#painel-criar');
const formNovaSenha  = document.querySelector('#painel-nova-senha');
const caixaForms     = document.querySelector('.conta-forms');
const caixaLogada    = document.querySelector('.conta-logada');
const caixaDesligado = document.querySelector('.login-desligado');
const textoEmail     = document.querySelector('.conta-email');

// Para onde ir depois de entrar (ex.: entrar.html?voltar=analise volta para a análise)
const VOLTAR_PARA = new URLSearchParams(location.search).get('voltar') === 'analise' ? 'analise.html' : null;

const ICONE_ATENCAO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';
const ICONE_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>';

// ---------- Abas "Entrar" / "Criar conta" ----------

function escolherAba(aba) {
  const ehEntrar = aba === abaEntrar;
  abaEntrar.setAttribute('aria-selected', ehEntrar);
  abaCriar.setAttribute('aria-selected', !ehEntrar);
  // Só a aba escolhida recebe o foco com Tab; as setas trocam de aba (padrão de acessibilidade)
  abaEntrar.tabIndex = ehEntrar ? 0 : -1;
  abaCriar.tabIndex = ehEntrar ? -1 : 0;
  formEntrar.hidden = !ehEntrar;
  formCriar.hidden = ehEntrar;
  esconderMensagens();
}

abaEntrar.addEventListener('click', function () { escolherAba(abaEntrar); });
abaCriar.addEventListener('click', function () { escolherAba(abaCriar); });

// Setas esquerda/direita trocam de aba
[abaEntrar, abaCriar].forEach(function (aba) {
  aba.addEventListener('keydown', function (evento) {
    if (evento.key === 'ArrowRight' || evento.key === 'ArrowLeft') {
      const outra = aba === abaEntrar ? abaCriar : abaEntrar;
      escolherAba(outra);
      outra.focus();
    }
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
  p.textContent = texto;
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

// O Supabase responde em inglês; aqui traduzimos para algo que ajude a pessoa a resolver
function traduzirErro(erro) {
  const msg = (erro && erro.message ? erro.message : '').toLowerCase();
  if (msg.includes('invalid login credentials')) return 'E-mail ou senha incorretos. Confira e tente de novo.';
  if (msg.includes('email not confirmed')) return 'Falta confirmar o seu e-mail. Abra o link que enviamos para a sua caixa de entrada.';
  if (msg.includes('already registered')) return 'Já existe uma conta com esse e-mail. Use a aba "Entrar".';
  if (msg.includes('password')) return 'Essa senha não serve. Use pelo menos 8 caracteres.';
  if (msg.includes('rate limit') || msg.includes('too many')) return 'Muitas tentativas seguidas. Espere alguns minutos e tente de novo.';
  if (msg.includes('fetch') || msg.includes('network')) return 'Sem conexão com a internet. Confira a sua rede e tente de novo.';
  return 'Não foi possível concluir agora. Tente de novo em alguns minutos.';
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

// ---------- Começo: descobre se o login funciona e se a pessoa já entrou ----------

let cliente = null;

async function iniciar() {
  cliente = await Conta.obterCliente();

  if (!cliente) {
    caixaDesligado.hidden = false;
    caixaForms.hidden = true;
    return;
  }

  // Quando a pessoa volta pelo link do e-mail de "Esqueci minha senha",
  // o Supabase avisa com o evento PASSWORD_RECOVERY: mostramos o formulário de nova senha.
  cliente.auth.onAuthStateChange(function (evento) {
    if (evento === 'PASSWORD_RECOVERY') {
      caixaForms.querySelector('.abas').hidden = true;
      formEntrar.hidden = true;
      formCriar.hidden = true;
      caixaLogada.hidden = true;
      caixaForms.hidden = false;
      formNovaSenha.hidden = false;
      formNovaSenha.querySelector('input').focus();
    }
  });

  const sessao = await Conta.obterSessao();
  if (sessao && formNovaSenha.hidden) mostrarLogado(sessao.user.email);
}

function mostrarLogado(email) {
  textoEmail.textContent = email;
  caixaForms.hidden = true;
  caixaLogada.hidden = false;
}

iniciar();

// ---------- Entrar ----------

formEntrar.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const email = formEntrar.email.value.trim();
  const senha = formEntrar.senha.value;

  if (!emailValido(email)) return erroNoCampo(formEntrar, formEntrar.email, 'Escreva o seu e-mail completo, por exemplo: nome@exemplo.com.');
  if (!senha) return erroNoCampo(formEntrar, formEntrar.senha, 'Escreva a sua senha.');

  const liberar = aguardar(formEntrar, 'Entrando…');
  const { data, error } = await cliente.auth.signInWithPassword({ email: email, password: senha });
  liberar();

  if (error) return mostrarMensagem(formEntrar, traduzirErro(error), 'atencao');

  if (VOLTAR_PARA) {
    location.href = VOLTAR_PARA;
  } else {
    mostrarLogado(data.user.email);
    document.querySelector('[data-conta]').textContent = 'Sua conta';
  }
});

// ---------- Criar conta ----------

formCriar.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const email = formCriar.email.value.trim();
  const senha = formCriar.senha.value;

  if (!emailValido(email)) return erroNoCampo(formCriar, formCriar.email, 'Escreva o seu e-mail completo, por exemplo: nome@exemplo.com.');
  if (senha.length < 8) return erroNoCampo(formCriar, formCriar.senha, 'A senha precisa ter pelo menos 8 caracteres.');

  const liberar = aguardar(formCriar, 'Criando conta…');
  const { data, error } = await cliente.auth.signUp({
    email: email,
    password: senha,
    options: { emailRedirectTo: location.origin + '/entrar.html' }
  });
  liberar();

  if (error) return mostrarMensagem(formCriar, traduzirErro(error), 'atencao');

  if (data.session) {
    // Supabase configurado sem confirmação de e-mail: já entrou
    if (VOLTAR_PARA) location.href = VOLTAR_PARA;
    else mostrarLogado(data.user.email);
  } else {
    formCriar.reset();
    mostrarMensagem(formCriar, 'Conta criada. Enviamos um link para ' + email + '. Abra o e-mail e toque no link para ativar a conta.', 'ok');
  }
});

// ---------- Esqueci minha senha ----------

document.querySelector('.esqueci').addEventListener('click', async function () {
  esconderMensagens();
  const email = formEntrar.email.value.trim();
  if (!emailValido(email)) {
    return erroNoCampo(formEntrar, formEntrar.email, 'Escreva o seu e-mail no campo acima e toque de novo em "Esqueci minha senha".');
  }
  const { error } = await cliente.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/entrar.html' });
  if (error) return mostrarMensagem(formEntrar, traduzirErro(error), 'atencao');
  mostrarMensagem(formEntrar, 'Se existir uma conta com esse e-mail, enviamos um link para criar uma nova senha.', 'ok');
});

formNovaSenha.addEventListener('submit', async function (evento) {
  evento.preventDefault();
  esconderMensagens();
  const senha = formNovaSenha.senha.value;
  if (senha.length < 8) return erroNoCampo(formNovaSenha, formNovaSenha.senha, 'A senha precisa ter pelo menos 8 caracteres.');

  const liberar = aguardar(formNovaSenha, 'Salvando…');
  const { data, error } = await cliente.auth.updateUser({ password: senha });
  liberar();
  if (error) return mostrarMensagem(formNovaSenha, traduzirErro(error), 'atencao');

  formNovaSenha.hidden = true;
  caixaForms.querySelector('.abas').hidden = false;
  mostrarLogado(data.user.email);
});

// ---------- Sair ----------

document.querySelector('.conta-sair').addEventListener('click', async function () {
  await cliente.auth.signOut();
  document.querySelector('[data-conta]').textContent = 'Entrar';
  caixaLogada.hidden = true;
  caixaForms.hidden = false;
  escolherAba(abaEntrar);
  formEntrar.email.focus();
});
