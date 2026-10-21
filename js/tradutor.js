// "Tradutor" do topo da Home: tocar num item do laudo fictício mostra a explicação dele embaixo.
// É só uma demonstração, com textos fixos: não usa a IA nem envia nada para a internet.

// Os textos de cada item, na mesma ordem dos botões (data-item="0", "1", "2")
const TRADUCOES = [
  {
    nome: 'Hemoglobina',
    texto: 'É a parte do sangue que carrega o oxigênio. O valor está dentro da referência.',
    selo: 'Normal',
    atencao: false
  },
  {
    nome: 'Leucócitos',
    texto: 'São as células de defesa do corpo. Um pouco acima pode aparecer durante uma gripe ou infecção leve, entre outros motivos. Vale mostrar ao médico.',
    selo: 'Um pouco acima',
    atencao: true
  },
  {
    nome: 'Plaquetas',
    texto: 'Ajudam o sangue a parar de sair quando você se machuca. Um pouco abaixo pode ter várias causas, e muitas não são graves. Vale mostrar ao médico.',
    selo: 'Um pouco abaixo',
    atencao: true
  }
];

// Desenho dos ícones dos selos (Lucide): "✓" para normal, "!" para atenção
const ICONE_NORMAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICONE_ATENCAO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';

const linhasLaudo = document.querySelectorAll('.laudo-linha');
const caixaTraducao = document.querySelector('.traducao');
const textoTraducao = document.querySelector('.traducao-texto');

linhasLaudo.forEach(function (botao) {
  botao.addEventListener('click', function () {
    const item = TRADUCOES[Number(botao.dataset.item)];

    // Marca só o botão tocado como "pressionado" (o CSS pinta ele de verde)
    linhasLaudo.forEach(function (outro) { outro.setAttribute('aria-pressed', outro === botao); });

    // Monta a tradução. Os textos são nossos (fixos, escritos acima), por isso podemos usar innerHTML aqui.
    // (Nunca use innerHTML com texto que vem de fora, como a resposta da IA.)
    textoTraducao.innerHTML =
      '<div class="traducao-rotulo">' +
        '<strong>' + item.nome + ', em palavras simples</strong>' +
        '<span class="selo ' + (item.atencao ? 'selo-atencao' : 'selo-normal') + '">' +
          (item.atencao ? ICONE_ATENCAO : ICONE_NORMAL) + item.selo +
        '</span>' +
      '</div>' +
      '<p>' + item.texto + '</p>';

    // Reinicia a animação de "chegada" do texto (tirar e colocar a classe de novo)
    caixaTraducao.classList.remove('trocou');
    void caixaTraducao.offsetWidth; // força o navegador a perceber que a classe saiu
    caixaTraducao.classList.add('trocou');
  });
});
