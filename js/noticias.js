// Carrossel de notícias da Home: mostra uma notícia por vez e troca sozinho.
//
// Quem controla o TEMPO é o CSS: a barrinha da notícia atual enche em 8 segundos
// (animação "encher-barra"). Quando ela termina de encher, o navegador avisa
// (evento "animationend") e aqui passamos para a próxima notícia.
// Vantagem: para PAUSAR, basta o CSS congelar a barra. O tempo para junto, sem cronômetro no JS.

const carrossel = document.querySelector('.carrossel');

if (carrossel) {
  const noticias    = carrossel.querySelectorAll('.noticia');
  const botoes      = carrossel.querySelectorAll('.carrossel-botao');
  const lista       = carrossel.querySelector('.carrossel-lista');
  const botaoPausa  = carrossel.querySelector('.carrossel-pausa');
  const areaNoticias = carrossel.querySelector('.carrossel-slides');

  const ICONE_PAUSAR   = '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>';
  const ICONE_CONTINUAR = '<polygon points="6 3 20 12 6 21 6 3"/>';

  let atual = 0; // número da notícia que está aparecendo (0 = primeira)

  // Mostra a notícia de número "indice" e marca o botão dela na lista
  function mostrar(indice) {
    atual = indice;
    noticias.forEach(function (noticia, i) {
      noticia.classList.toggle('ativa', i === indice);
    });
    botoes.forEach(function (botao, i) {
      if (i === indice) botao.setAttribute('aria-current', 'true');
      else botao.removeAttribute('aria-current');
    });
  }

  // A barra encheu: vai para a próxima (depois da última, volta para a primeira)
  carrossel.addEventListener('animationend', function (evento) {
    if (evento.animationName !== 'encher-barra') return; // ignora as outras animações
    mostrar((atual + 1) % noticias.length);
  });

  // Tocar numa manchete da lista mostra aquela notícia (e a barra dela começa do zero)
  botoes.forEach(function (botao, i) {
    botao.addEventListener('click', function () { mostrar(i); });
  });

  // Botão Pausar / Continuar
  function definirPausa(pausar) {
    carrossel.classList.toggle('pausado', pausar);
    botaoPausa.querySelector('span').textContent = pausar ? 'Continuar' : 'Pausar';
    botaoPausa.querySelector('svg').innerHTML = pausar ? ICONE_CONTINUAR : ICONE_PAUSAR;
    // Pausado, o leitor de tela anuncia a notícia nova quando a pessoa troca.
    // Rodando sozinho, não anuncia (seria interromper a pessoa a cada 8 segundos).
    areaNoticias.setAttribute('aria-live', pausar ? 'polite' : 'off');
  }
  botaoPausa.addEventListener('click', function () {
    definirPausa(!carrossel.classList.contains('pausado'));
  });

  // No celular: arrastar o dedo para o lado troca de notícia
  let inicioDoToque = null;
  areaNoticias.addEventListener('touchstart', function (evento) {
    inicioDoToque = evento.touches[0].clientX;
  }, { passive: true });
  areaNoticias.addEventListener('touchend', function (evento) {
    if (inicioDoToque === null) return;
    const distancia = evento.changedTouches[0].clientX - inicioDoToque;
    inicioDoToque = null;
    if (Math.abs(distancia) < 50) return; // foi só um toque, não um arrasto
    const total = noticias.length;
    mostrar(distancia < 0 ? (atual + 1) % total : (atual - 1 + total) % total);
  });

  // Só conta o tempo quando o carrossel está na tela.
  // Assim a pessoa não chega nas notícias e encontra a 4ª passando.
  carrossel.classList.add('fora-da-tela');
  if ('IntersectionObserver' in window) {
    const vigia = new IntersectionObserver(function (entradas) {
      carrossel.classList.toggle('fora-da-tela', !entradas[0].isIntersecting);
    }, { threshold: 0.4 });
    vigia.observe(areaNoticias);
  } else {
    carrossel.classList.remove('fora-da-tela');
  }

  // Liga o carrossel: mostra a lista e o botão (sem JS, eles ficam escondidos)
  lista.hidden = false;
  botaoPausa.hidden = false;
  mostrar(0);
  carrossel.classList.add('rodando');

  // Quem pediu "menos movimento" no sistema: começa pausado (pode apertar "Continuar")
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) definirPausa(true);
}
