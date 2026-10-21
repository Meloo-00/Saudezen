// Animações que aparecem conforme a página desce (vieram do ExamIA).
// O visual (sumir, aparecer, a linha crescendo) está no CSS.
// Aqui o JavaScript só descobre QUANDO cada coisa chegou na tela e coloca a classe "visivel".

const blocos = document.querySelectorAll('.revelar');
const passos = document.querySelectorAll('.passo-envio');

// Tempo de cada passo: número + texto + linha até o próximo número.
// O próximo passo só começa depois disso, para o número aparecer quando a linha chegar nele.
const TEMPO_DO_PASSO = 1400; // em milissegundos (1400 = 1,4 segundo)

// Quem pediu "menos movimento" no sistema, ou navegador muito antigo: mostra tudo de uma vez.
const semAnimacao =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  !('IntersectionObserver' in window);

if (semAnimacao) {
  blocos.forEach(function (bloco) { bloco.classList.add('visivel'); });
  passos.forEach(function (passo) { passo.classList.add('visivel'); });
} else {
  // ----- Blocos comuns: aparecem assim que entram na tela -----
  // O IntersectionObserver é um "vigia": ele avisa quando um elemento entra na parte visível da página.
  const vigiaBlocos = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        vigiaBlocos.unobserve(entrada.target); // já apareceu, não precisa mais vigiar
      }
    });
  }, { threshold: 0.15 }); // 0.15 = quando 15% do elemento estiver na tela

  blocos.forEach(function (bloco) { vigiaBlocos.observe(bloco); });

  // ----- Passos do envio (Análise): aparecem um de cada vez, sempre em ordem -----
  let animando = false; // true enquanto um passo ainda está no meio da animação

  // Procura o próximo passo que ainda não apareceu e mostra ele, se já tiver chegado na tela
  function mostrarProximoPasso() {
    if (animando) return; // espera o passo atual terminar

    for (let i = 0; i < passos.length; i++) {
      const passo = passos[i];
      if (passo.classList.contains('visivel')) continue; // esse já apareceu, vai para o próximo
      if (passo.dataset.chegou !== 'sim') return;        // ainda não chegou na tela: espera rolar mais

      passo.classList.add('visivel');
      animando = true;
      setTimeout(function () {
        animando = false;
        mostrarProximoPasso(); // terminou: tenta mostrar o seguinte
      }, TEMPO_DO_PASSO);
      return;
    }
  }

  const vigiaPassos = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      // Marca esse passo e todos os anteriores como "chegou"
      // (se a pessoa rolou rápido e pulou um passo, ele não fica travado)
      const posicao = Array.prototype.indexOf.call(passos, entrada.target);
      for (let i = 0; i <= posicao; i++) {
        passos[i].dataset.chegou = 'sim';
      }
      vigiaPassos.unobserve(entrada.target);
    });
    mostrarProximoPasso();
  }, { threshold: 0.3 });

  passos.forEach(function (passo) { vigiaPassos.observe(passo); });
}
