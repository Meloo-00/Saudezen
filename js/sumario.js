// Página de Aviso: deixa em evidência, no sumário ("Nesta página"),
// o tópico que a pessoa está lendo agora.
//
// Como funciona:
// 1. Para cada link do sumário, achamos a seção que ele aponta (pelo #endereço).
// 2. Sempre que a página rola, vemos qual foi a última seção cujo topo já passou
//    de uma "linha imaginária" a 35% da altura da tela. Essa é a seção atual.
// 3. O link dessa seção ganha aria-current="location" (o leitor de tela anuncia
//    "local atual") e o CSS usa esse mesmo atributo para deixá-lo em evidência.

const linksSumario = Array.from(document.querySelectorAll('.sumario a'));
const secoesSumario = linksSumario.map(function (link) {
  return document.querySelector(link.hash); // link.hash é o "#nao-somos-medicos" do href
});

function marcarTopicoAtual() {
  const linha = window.innerHeight * 0.35;
  let atual = 0;

  secoesSumario.forEach(function (secao, i) {
    if (secao && secao.getBoundingClientRect().top <= linha) atual = i;
  });

  // No fim da página a última seção pode nunca chegar na linha: se rolou até o fim, é ela
  const chegouNoFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (chegouNoFim) atual = secoesSumario.length - 1;

  linksSumario.forEach(function (link, i) {
    if (i === atual) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

// O evento "scroll" dispara muitas vezes por segundo. O requestAnimationFrame junta
// tudo em no máximo um cálculo por quadro da tela, para não deixar a rolagem pesada.
let agendado = false;
window.addEventListener('scroll', function () {
  if (agendado) return;
  agendado = true;
  requestAnimationFrame(function () {
    marcarTopicoAtual();
    agendado = false;
  });
}, { passive: true });

window.addEventListener('resize', marcarTopicoAtual);
marcarTopicoAtual();
