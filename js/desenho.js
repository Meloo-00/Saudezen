// Células "sendo desenhadas" enquanto a página desce (página de Aviso; veio do ExamIA).
// O efeito visual (a máscara em leque) está no CSS, na variável --desenho.
// Aqui o JavaScript só calcula, para cada célula, quanto dela já deve aparecer:
// 0 = nada, 1 = inteira. E nunca "apaga" de novo quando a pessoa sobe a página.

const celulasDesenho = document.querySelectorAll('.desenhar');
const semMovimentoDesenho = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Com "menos movimento", o CSS já mostra as células inteiras: não precisa fazer nada.
if (!semMovimentoDesenho && celulasDesenho.length > 0) {
  let agendado = false; // evita recalcular várias vezes no mesmo quadro da tela

  function atualizarDesenho() {
    agendado = false;
    const alturaTela = window.innerHeight;

    celulasDesenho.forEach(function (celula) {
      // getBoundingClientRect() diz onde a célula está em relação à tela agora
      const caixa = celula.getBoundingClientRect();

      // Começa (0) quando o topo da célula aparece embaixo da tela.
      // Termina (1) quando o meio da célula chega a 40% da altura da tela.
      const comeco = alturaTela;
      const fim = alturaTela * 0.4 - caixa.height / 2;
      let progresso = (comeco - caixa.top) / (comeco - fim);
      progresso = Math.min(1, Math.max(0, progresso)); // prende entre 0 e 1

      // Só avança: se a pessoa subir a página, o desenho continua lá
      const atual = Number(celula.dataset.desenho || 0);
      if (progresso > atual) {
        celula.dataset.desenho = progresso;
        celula.style.setProperty('--desenho', progresso);
      }
    });
  }

  // A rolagem dispara muitas vezes por segundo. requestAnimationFrame junta tudo
  // e calcula uma vez só, no próximo quadro que o navegador for desenhar.
  function pedirAtualizacao() {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(atualizarDesenho);
    }
  }

  window.addEventListener('scroll', pedirAtualizacao, { passive: true });
  window.addEventListener('resize', pedirAtualizacao);
  atualizarDesenho(); // as células que já estão na tela ao abrir a página se desenham logo
}
