// Página "Doenças de A a Z": monta a lista a partir de js/dados-doencas.js
// e filtra enquanto a pessoa digita na busca.

const campoBusca   = document.querySelector('#busca-doencas');
const botaoLimpar  = document.querySelector('.busca-limpar');
const listaGrupos  = document.querySelector('.doencas-grupos');
const barraLetras  = document.querySelector('.letras');
const textoStatus  = document.querySelector('.doencas-status');
const caixaVazio   = document.querySelector('.vazio');
const termoVazio   = document.querySelector('.vazio-termo');

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Ícones (Lucide) usados nos cards
const ICONE_SETA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const ICONE_ALERTA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
const ICONE_LINK ='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

// ---------- 1. Preparar ----------

// Deixa o texto "simples" para comparar: minúsculo e sem acento.
// Assim "Hipertensão", "hipertensao" e "HIPERTENSÃO" são iguais na busca.
// (normalize('NFD') separa a letra do acento; o replace apaga os acentos.)
function simplificar(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

// Primeira letra sem acento ("Úlcera" fica em "U")
function letraDe(nome) {
  return simplificar(nome).charAt(0).toUpperCase();
}

// Ordem alfabética do português (localeCompare sabe tratar acentos)
const doencasOrdenadas = DOENCAS.slice().sort(function (a, b) {
  return a.nome.localeCompare(b.nome, 'pt-BR');
});

// Para cada doença, junta tudo que pode ser buscado num texto só
doencasOrdenadas.forEach(function (doenca) {
  doenca.textoBusca = simplificar([doenca.nome].concat(doenca.tambem, doenca.chaves).join(' '));
});

// ---------- 2. Montar a lista ----------

// Cria os elementos com createElement + textContent (texto puro), exceto os ícones fixos.
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

function criarLista(itens) {
  const ul = document.createElement('ul');
  itens.forEach(function (texto) { ul.appendChild(criar('li', '', texto)); });
  return ul;
}

// Nome do link da fonte, descoberto pelo endereço da página
function nomeDaFonte(endereco) {
  if (endereco.includes('/inca/')) return 'INCA (Instituto Nacional de Câncer)';
  if (endereco.includes('/hubrasil/')) return 'HU Brasil (hospitais universitários federais)';
  if (endereco.includes('bvsms.saude.gov.br')) return 'Biblioteca Virtual em Saúde (Ministério da Saúde)';
  return 'Ministério da Saúde';
}

// Um card de doença: <details> abre e fecha sozinho, sem JavaScript
function criarDoenca(doenca) {
  const li = criar('li');
  li.dataset.id = doenca.id;

  const details = criar('details', 'doenca');
  details.id = doenca.id;

  const summary = document.createElement('summary');
  summary.appendChild(criar('span', 'doenca-nome', doenca.nome));
  if (doenca.tambem.length) {
    summary.appendChild(criar('span', 'doenca-tambem', 'Outros nomes: ' + doenca.tambem.join(', ')));
  }
  const seta = criar('span', 'doenca-seta');
  seta.innerHTML = ICONE_SETA;
  summary.appendChild(seta);
  details.appendChild(summary);

  const corpo = criar('div', 'doenca-corpo');

  const resumo = criar('div', 'doenca-resumo');
  resumo.appendChild(criar('h3', '', 'O que é'));
  resumo.appendChild(criar('p', '', doenca.oQueE));
  corpo.appendChild(resumo);

  const sinais = criar('div');
  sinais.appendChild(criar('h3', '', 'Sinais mais comuns'));
  sinais.appendChild(criarLista(doenca.sinais));
  corpo.appendChild(sinais);

  const cuidados = criar('div');
  cuidados.appendChild(criar('h3', '', 'Prevenção e cuidados'));
  cuidados.appendChild(criarLista(doenca.cuidados));
  corpo.appendChild(cuidados);

  // "Como se pega" ou "Por que acontece" (o título vem de dados-doencas.js)
  // Sem 'em casa' ao lado, ocupa a linha inteira (no computador)
  const pega = criar('div', doenca.emCasa ? '' : 'doenca-largo');
  pega.appendChild(criar('h3', '', doenca.comoPega.titulo));
  pega.appendChild(criarLista(doenca.comoPega.itens));
  corpo.appendChild(pega);

  // "O que ajuda em casa", "No dia a dia"... (nem toda doença tem)
  if (doenca.emCasa) {
    const casa = criar('div');
    casa.appendChild(criar('h3', '', doenca.emCasa.titulo));
    casa.appendChild(criarLista(doenca.emCasa.itens));
    corpo.appendChild(casa);
  }

  // Quando não dá para cuidar em casa: caixa âmbar com ícone + texto
  // (a cor nunca é o único sinal)
  if (doenca.alerta) {
    const alerta = criar('div', 'doenca-alerta');
    const titulo = criar('h3');
    titulo.innerHTML = ICONE_ALERTA;
    titulo.appendChild(document.createTextNode('Não dá para tratar em casa'));
    alerta.appendChild(titulo);
    alerta.appendChild(criar('p', '', doenca.alerta));
    corpo.appendChild(alerta);
  }

  const ajuda = criar('div', 'doenca-ajuda');
  ajuda.appendChild(criar('h3', '', 'Quando procurar ajuda'));
  ajuda.appendChild(criar('p', '', doenca.ajuda));
  corpo.appendChild(ajuda);

  const fonte = criar('p', 'doenca-fonte', 'Fonte: ');
  const link = criar('a', '', nomeDaFonte(doenca.fonte));
  link.href = doenca.fonte;
  link.target = '_blank';
  link.rel = 'noopener';
  link.insertAdjacentHTML('beforeend', ICONE_LINK + '<span class="sr-only"> (abre em outra aba)</span>');
  fonte.appendChild(link);
  corpo.appendChild(fonte);

  details.appendChild(corpo);
  li.appendChild(details);
  return li;
}

// Agrupa por letra e coloca tudo na página
ALFABETO.forEach(function (letra) {
  const doencasDaLetra = doencasOrdenadas.filter(function (d) { return letraDe(d.nome) === letra; });
  if (doencasDaLetra.length === 0) return;

  const secao = criar('section', 'grupo');
  secao.id = 'letra-' + letra.toLowerCase();
  secao.dataset.letra = letra;
  secao.setAttribute('aria-labelledby', 'titulo-letra-' + letra.toLowerCase());

  const titulo = criar('h2', 'grupo-letra', letra);
  titulo.id = 'titulo-letra-' + letra.toLowerCase();
  secao.appendChild(titulo);

  const ul = criar('ul', 'doencas-lista');
  doencasDaLetra.forEach(function (d) { ul.appendChild(criarDoenca(d)); });
  secao.appendChild(ul);

  listaGrupos.appendChild(secao);
});

// ---------- 3. Barra de letras ----------

// Atualiza as letras: só vira link a letra que tem doença aparecendo na lista
function atualizarLetras() {
  barraLetras.replaceChildren();
  ALFABETO.forEach(function (letra) {
    const li = document.createElement('li');
    const grupo = document.querySelector('#letra-' + letra.toLowerCase());
    if (grupo && !grupo.hidden) {
      const a = criar('a', '', letra);
      a.href = '#letra-' + letra.toLowerCase();
      a.setAttribute('aria-label', 'Letra ' + letra);
      li.appendChild(a);
    } else {
      const span = criar('span', '', letra);
      span.setAttribute('aria-hidden', 'true');
      li.appendChild(span);
    }
    barraLetras.appendChild(li);
  });
}

// ---------- 4. Busca ----------

function filtrar() {
  const termo = simplificar(campoBusca.value);
  let total = 0;

  document.querySelectorAll('.grupo').forEach(function (grupo) {
    let visiveisNoGrupo = 0;
    grupo.querySelectorAll('.doencas-lista > li').forEach(function (li) {
      const doenca = doencasOrdenadas.find(function (d) { return d.id === li.dataset.id; });
      // Compara com o COMEÇO das palavras: "pressao" acha "pressão alta", mas não "depressão"
      const aparece = termo === '' || (' ' + doenca.textoBusca).includes(' ' + termo);
      li.hidden = !aparece;
      if (aparece) visiveisNoGrupo++;
    });
    grupo.hidden = visiveisNoGrupo === 0;
    total += visiveisNoGrupo;
  });

  // Mensagem de quantas apareceram (o leitor de tela lê, porque a caixa tem aria-live)
  if (termo === '') {
    textoStatus.textContent = total + ' doenças, em ordem alfabética.';
  } else if (total === 0) {
    textoStatus.textContent = 'Nenhuma doença encontrada.';
  } else if (total === 1) {
    textoStatus.textContent = '1 doença encontrada para "' + campoBusca.value.trim() + '".';
  } else {
    textoStatus.textContent = total + ' doenças encontradas para "' + campoBusca.value.trim() + '".';
  }

  caixaVazio.hidden = total > 0;
  termoVazio.textContent = campoBusca.value.trim();
  botaoLimpar.hidden = campoBusca.value === '';

  // Guarda a busca no endereço (doencas.html?busca=febre): dá para voltar ou compartilhar o link
  const endereco = new URL(location.href);
  if (termo) endereco.searchParams.set('busca', campoBusca.value.trim());
  else endereco.searchParams.delete('busca');
  history.replaceState(null, '', endereco);

  atualizarLetras();
}

campoBusca.addEventListener('input', filtrar);

// Enter no campo não recarrega a página (a lista já filtra enquanto digita)
document.querySelector('.doencas-busca').addEventListener('submit', function (evento) {
  evento.preventDefault();
  campoBusca.blur(); // no celular, fecha o teclado para mostrar o resultado
});

function limparBusca() {
  campoBusca.value = '';
  filtrar();
  campoBusca.focus();
}
botaoLimpar.addEventListener('click', limparBusca);
document.querySelector('.vazio .btn').addEventListener('click', limparBusca);

// ---------- 5. Começo ----------

// Se veio da Home com uma busca (doencas.html?busca=dengue), já começa filtrado
const buscaInicial = new URLSearchParams(location.search).get('busca');
if (buscaInicial) campoBusca.value = buscaInicial;
filtrar();

// Se veio com um link para uma letra ou doença (#letra-d ou #dengue), vai até lá.
// (A lista foi criada pelo JavaScript depois que a página carregou, então o navegador
// não conseguiu pular sozinho.) Se for uma doença, ela já abre.
function irParaEndereco() {
  if (!location.hash) return;
  const alvo = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!alvo) return;
  if (alvo.tagName === 'DETAILS') alvo.open = true;
  alvo.scrollIntoView();
}
irParaEndereco();
window.addEventListener('hashchange', irParaEndereco);
