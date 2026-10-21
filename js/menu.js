// Menu do celular: abre e fecha a lista de links quando o botão "Menu" é tocado.
// O visual (painel aberto, ícone virando "X") está no CSS; aqui só trocamos o estado.

const botaoMenu = document.querySelector('.menu-botao');
const listaMenu = document.querySelector('.menu-links');

// Guarda no botão se o menu está aberto (true) ou fechado (false).
// O CSS olha esse atributo (aria-expanded) para mostrar a lista e trocar o ícone.
// O leitor de tela também lê esse atributo e avisa "expandido" ou "recolhido".
function mudarMenu(aberto) {
  botaoMenu.setAttribute('aria-expanded', aberto);
}

botaoMenu.addEventListener('click', function () {
  const estaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
  mudarMenu(!estaAberto);
});

// Tocar num link fecha o menu (senão ele cobre a página)
listaMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () { mudarMenu(false); });
});

// Tecla Esc fecha o menu e devolve o foco ao botão (para quem usa teclado)
document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && botaoMenu.getAttribute('aria-expanded') === 'true') {
    mudarMenu(false);
    botaoMenu.focus();
  }
});

// Tocar fora do menu também fecha
document.addEventListener('click', function (evento) {
  if (!evento.target.closest('.menu')) mudarMenu(false);
});
