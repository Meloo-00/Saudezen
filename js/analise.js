// Página de Análise: confere o login, deixa escolher o arquivo, confere as caixinhas,
// envia para a IA (ou mostra o exame de exemplo) e monta o resultado.
//
// Importante (privacidade): nada aqui salva o exame. Ele fica só na memória
// da página enquanto ela está aberta, e some ao fechar ou recarregar.

// ---------- 1. Pegando os elementos da página ----------

const portao       = document.querySelector('.portao');
const secaoEnvio    = document.querySelector('#envio');

const formulario    = document.querySelector('.form-envio');
const inputArquivo  = document.querySelector('#arquivo');
const caixaUpload   = document.querySelector('.upload');
const areaUpload    = document.querySelector('.upload-area');
const caixaEscolhido = document.querySelector('.upload-escolhido');
const previaFoto    = document.querySelector('.upload-previa');
const previaPdf     = document.querySelector('.upload-previa-pdf');
const nomeArquivo   = document.querySelector('.upload-nome');
const checkDados    = document.querySelector('#sem-dados');
const checkEntendi  = document.querySelector('#entendi');
const avisoForm     = document.querySelector('.form-aviso');
const botaoEnviar   = document.querySelector('.envio-botao');

const estadoCarregando = document.querySelector('.estado-carregando');
const estadoErro    = document.querySelector('.estado-erro');
const erroTitulo    = document.querySelector('.erro-titulo');
const erroTexto     = document.querySelector('.erro-texto');
const botaoTentar   = document.querySelector('.erro-tentar');
const linkEntrar    = document.querySelector('.erro-entrar');

const resultado     = document.querySelector('#resultado');
const tituloResultado = document.querySelector('#titulo-resultado');
const etiquetaExemplo = document.querySelector('.resultado-etiqueta');
const caixaContagem = document.querySelector('.resumo-contagem');
const caixaResumo   = document.querySelector('.resumo-texto');
const listaItens    = document.querySelector('.itens');
const moldeItem     = document.querySelector('#molde-item');

// ---------- 2. Regras ----------

const TIPOS_ACEITOS = ['application/pdf', 'image/jpeg', 'image/png'];

// A Vercel não aceita envios maiores que ~4,5 MB. O arquivo vai "traduzido" em texto
// (base64), que fica ~33% maior. Por isso o PDF pode ter no máximo 3 MB.
// Fotos não têm esse problema: nós diminuímos a foto antes de enviar (veja prepararArquivo).
const LIMITE_PDF = 3 * 1024 * 1024;        // 3 MB
const LIMITE_FOTO = 20 * 1024 * 1024;      // 20 MB (antes de diminuir)
const LADO_MAXIMO_FOTO = 1600;             // em pixels; é o bastante para a IA ler o exame
const TEMPO_LIMITE = 45000;                // 45 segundos esperando a IA; depois disso, desiste

// Texto de cada selo
const SELOS = {
  'normal':       { texto: 'Normal',               atencao: false },
  'pouco-acima':  { texto: 'Um pouco acima',       atencao: true },
  'acima':        { texto: 'Acima da referência',  atencao: true },
  'pouco-abaixo': { texto: 'Um pouco abaixo',      atencao: true },
  'abaixo':       { texto: 'Abaixo da referência', atencao: true }
};

// Ícones dos selos (Lucide). Ícone + palavra: a cor nunca é o único sinal.
const ICONE_NORMAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICONE_ATENCAO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';

let arquivoEscolhido = null; // o arquivo que a pessoa escolheu (null = nenhum)
let logado = false;

// ---------- 3. Login: mostra o envio ou o "portão" ----------

function mostrarConforme(estaLogado) {
  logado = estaLogado;
  portao.hidden = logado;
  secaoEnvio.hidden = !logado;
}

// 1º: decide na hora, pelo sinal rápido do navegador (evita a página "pular" enquanto carrega)
mostrarConforme(Conta.pareceLogado());

// 2º: confirma com o Supabase (pode levar um instante) e corrige, se precisar
async function conferirConta() {
  const sessao = await Conta.obterSessao();
  if (Boolean(sessao) !== logado) mostrarConforme(Boolean(sessao));
}
conferirConta();

// Link direto para o exemplo (analise.html#exemplo)
if (location.hash === '#exemplo') mostrarExemplo();

// ---------- 4. Escolher o arquivo (clicando ou arrastando) ----------

inputArquivo.addEventListener('change', function () {
  escolherArquivo(inputArquivo.files[0]);
});

// Arrastar e soltar. O preventDefault() impede o navegador de abrir o arquivo numa aba nova.
areaUpload.addEventListener('dragover', function (evento) {
  evento.preventDefault();
  caixaUpload.classList.add('arrastando');
});
areaUpload.addEventListener('dragleave', function (evento) {
  // Passar por cima do ícone ou do texto (que ficam DENTRO da área) não conta como sair
  if (areaUpload.contains(evento.relatedTarget)) return;
  caixaUpload.classList.remove('arrastando');
});
areaUpload.addEventListener('drop', function (evento) {
  evento.preventDefault();
  caixaUpload.classList.remove('arrastando');
  escolherArquivo(evento.dataTransfer.files[0]);
});

// Confere o arquivo e, se estiver tudo certo, guarda e mostra a prévia
function escolherArquivo(arquivo) {
  esconderMensagens();
  if (!arquivo) return;

  if (!TIPOS_ACEITOS.includes(arquivo.type)) {
    limparArquivo();
    mostrarAvisoForm('Esse tipo de arquivo não funciona. Escolha um PDF ou uma foto (JPG ou PNG).');
    return;
  }
  if (arquivo.type === 'application/pdf' && arquivo.size > LIMITE_PDF) {
    limparArquivo();
    mostrarAvisoForm('Esse PDF é grande demais (máximo 3 MB). Tire uma foto do exame no lugar.');
    return;
  }
  if (arquivo.size > LIMITE_FOTO) {
    limparArquivo();
    mostrarAvisoForm('Essa foto é grande demais. Escolha outra foto do exame.');
    return;
  }

  arquivoEscolhido = arquivo;
  mostrarPrevia(arquivo);
}

// Mostra o que a pessoa escolheu, para ela ter certeza de que é o arquivo certo
function mostrarPrevia(arquivo) {
  apagarPrevia();
  const ehFoto = arquivo.type !== 'application/pdf';

  if (ehFoto) {
    // createObjectURL cria um endereço temporário que aponta para o arquivo NO COMPUTADOR da pessoa.
    // Nada é enviado para a internet nessa hora.
    previaFoto.src = URL.createObjectURL(arquivo);
  }
  previaFoto.toggleAttribute('hidden', !ehFoto);
  previaPdf.toggleAttribute('hidden', ehFoto);

  nomeArquivo.textContent = arquivo.name;
  caixaEscolhido.hidden = false;
  areaUpload.hidden = true; // com o arquivo escolhido, a área grande dá lugar à prévia
}

function apagarPrevia() {
  if (previaFoto.src) {
    URL.revokeObjectURL(previaFoto.src);
    previaFoto.removeAttribute('src');
  }
}

function limparArquivo() {
  arquivoEscolhido = null;
  inputArquivo.value = '';
  apagarPrevia();
  caixaEscolhido.hidden = true;
  areaUpload.hidden = false;
}

// "Trocar arquivo": limpa e já abre a janela para escolher outro
document.querySelector('.upload-remover').addEventListener('click', function () {
  limparArquivo();
  esconderMensagens();
  inputArquivo.focus();
  inputArquivo.click();
});

// ---------- 5. Enviar o exame ----------

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault(); // não deixa a página recarregar
  enviarExame();
});

botaoTentar.addEventListener('click', enviarExame);

// Todos os botões "Ver exame de exemplo" (funciona sem login: é fictício e não envia nada)
document.querySelectorAll('.ver-exemplo').forEach(function (botao) {
  botao.addEventListener('click', mostrarExemplo);
});

// "async" deixa a função esperar (com "await") coisas que demoram, como a resposta da IA
async function enviarExame() {
  esconderMensagens();

  // Confere, na ordem da tela, se falta alguma coisa
  if (!arquivoEscolhido) {
    mostrarAvisoForm('Escolha a foto ou o PDF do exame no passo 1.');
    inputArquivo.focus();
    return;
  }
  if (!checkDados.checked || !checkEntendi.checked) {
    mostrarAvisoForm('Marque as duas caixas do passo 2 para continuar.');
    (checkDados.checked ? checkEntendi : checkDados).focus();
    return;
  }

  estadoCarregando.hidden = false;
  botaoEnviar.disabled = true;
  botaoEnviar.textContent = 'Analisando…';

  // try/catch: "tenta" fazer tudo; se qualquer passo der erro, pula para o catch
  try {
    const arquivo = await prepararArquivo(arquivoEscolhido);
    const dados = await pedirAnaliseParaIA(arquivo);
    mostrarResultado(dados, false);
  } catch (erro) {
    mostrarErro(erro.message);
  } finally {
    // "finally" roda sempre, dando certo ou errado
    estadoCarregando.hidden = true;
    botaoEnviar.disabled = false;
    botaoEnviar.textContent = 'Analisar exame';
  }
}

// Transforma o arquivo em texto (base64) para poder mandar pela internet.
// Se for foto, antes diminui o tamanho dela.
async function prepararArquivo(arquivo) {
  if (arquivo.type === 'application/pdf') {
    return { tipo: 'application/pdf', dados: await lerComoTexto(arquivo) };
  }
  return { tipo: 'image/jpeg', dados: await diminuirFoto(arquivo) };
}

// Lê o arquivo e devolve só a parte em base64
// (o navegador devolve "data:application/pdf;base64,AAAA..."; ficamos com o que vem depois da vírgula)
function lerComoTexto(arquivo) {
  return new Promise(function (resolver, falhar) {
    const leitor = new FileReader();
    leitor.onload = function () { resolver(leitor.result.split(',')[1]); };
    leitor.onerror = function () { falhar(new Error('leitura')); };
    leitor.readAsDataURL(arquivo);
  });
}

// Desenha a foto num "quadro" (canvas) menor e salva de novo como JPG.
// Uma foto de celular de 5 MB costuma virar uns 300 KB, e a IA continua lendo bem.
function diminuirFoto(arquivo) {
  return new Promise(function (resolver, falhar) {
    const imagem = new Image();
    const endereco = URL.createObjectURL(arquivo);

    imagem.onload = function () {
      const escala = Math.min(1, LADO_MAXIMO_FOTO / Math.max(imagem.width, imagem.height));
      const largura = Math.round(imagem.width * escala);
      const altura = Math.round(imagem.height * escala);

      const quadro = document.createElement('canvas');
      quadro.width = largura;
      quadro.height = altura;
      const pincel = quadro.getContext('2d');
      pincel.fillStyle = '#fff'; // fundo branco (PNG transparente ficaria preto no JPG)
      pincel.fillRect(0, 0, largura, altura);
      pincel.drawImage(imagem, 0, 0, largura, altura);

      URL.revokeObjectURL(endereco);
      resolver(quadro.toDataURL('image/jpeg', 0.85).split(',')[1]);
    };
    imagem.onerror = function () {
      URL.revokeObjectURL(endereco);
      falhar(new Error('leitura'));
    };
    imagem.src = endereco;
  });
}

// Manda o arquivo para a nossa função na Vercel (api/analisar.js), junto com o "token" do login.
// Se passar de TEMPO_LIMITE, desiste (o AbortController é o "botão de cancelar" do fetch).
async function pedirAnaliseParaIA(arquivo) {
  const sessao = await Conta.obterSessao();
  if (!sessao) throw new Error('login');

  const cancelar = new AbortController();
  const relogio = setTimeout(function () { cancelar.abort(); }, TEMPO_LIMITE);

  let resposta;
  try {
    resposta = await fetch('/api/analisar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessao.access_token
      },
      body: JSON.stringify(arquivo),
      signal: cancelar.signal
    });
  } finally {
    clearTimeout(relogio);
  }

  let dados;
  try {
    dados = await resposta.json();
  } catch (e) {
    throw new Error('servidor');
  }

  if (dados.erro) throw new Error(dados.erro);
  if (!resposta.ok || !resultadoValido(dados)) throw new Error('servidor');
  return dados;
}

// Confere se a resposta tem o formato esperado, para não mostrar uma página quebrada
function resultadoValido(dados) {
  return Array.isArray(dados.resumo) && Array.isArray(dados.itens) && dados.itens.length > 0;
}

// ---------- 6. Mostrar o resultado ----------

function mostrarExemplo() {
  esconderMensagens();
  mostrarResultado(EXAME_EXEMPLO, true);
}

// Cria um selo (ícone + palavra)
function criarSelo(texto, atencao) {
  const selo = document.createElement('span');
  selo.className = 'selo ' + (atencao ? 'selo-atencao' : 'selo-normal');
  selo.innerHTML = atencao ? ICONE_ATENCAO : ICONE_NORMAL; // ícone fixo, nosso
  selo.append(texto); // texto puro
  return selo;
}

// Monta o resultado a partir dos dados (da IA ou do exemplo).
// SEGURANÇA: o texto da IA entra sempre com textContent (texto puro), nunca com innerHTML.
// Assim, mesmo que a IA devolva algo estranho, aquilo aparece como texto e nunca vira código.
function mostrarResultado(dados, ehExemplo) {
  // Contagem: quantos dentro e quantos fora da referência
  const comSelo = dados.itens.filter(function (item) { return SELOS[item.situacao]; });
  const fora = comSelo.filter(function (item) { return SELOS[item.situacao].atencao; }).length;
  const dentro = comSelo.length - fora;
  caixaContagem.replaceChildren(
    criarSelo(dentro + (dentro === 1 ? ' item dentro' : ' itens dentro') + ' da referência', false)
  );
  if (fora > 0) {
    caixaContagem.appendChild(criarSelo(fora + (fora === 1 ? ' item fora' : ' itens fora') + ' da referência', true));
  }

  // Resumo: um <p> para cada parágrafo
  caixaResumo.replaceChildren();
  dados.resumo.forEach(function (paragrafo) {
    const p = document.createElement('p');
    p.textContent = paragrafo;
    caixaResumo.appendChild(p);
  });

  // Itens: copia o molde (<template>) e preenche
  listaItens.replaceChildren();
  dados.itens.forEach(function (item) {
    const copia = moldeItem.content.cloneNode(true);
    const li = copia.querySelector('.item');
    const selo = copia.querySelector('.selo');
    const infoSelo = SELOS[item.situacao];

    copia.querySelector('.item-nome').textContent = item.nome;
    copia.querySelector('.item-valor strong').textContent = item.valor;
    copia.querySelector('.item-valor span').textContent = item.referencia ? 'Referência: ' + item.referencia : 'Sem referência no exame';
    copia.querySelector('.item-explicacao').textContent = item.explicacao;

    if (infoSelo) {
      selo.replaceWith(criarSelo(infoSelo.texto, infoSelo.atencao));
      if (infoSelo.atencao) li.classList.add('item-atencao');
    } else {
      selo.remove(); // situação desconhecida: melhor sem selo do que com um selo errado
    }

    listaItens.appendChild(copia);
  });

  etiquetaExemplo.hidden = !ehExemplo;
  resultado.hidden = false;

  // Leva a pessoa até o resultado e coloca o foco no título
  // (quem usa leitor de tela ouve "Resultado" e sabe que chegou)
  tituloResultado.focus({ preventScroll: true });
  resultado.scrollIntoView({ behavior: movimentoReduzido() ? 'auto' : 'smooth' });
}

// "Analisar outro exame": esconde o resultado e volta para o envio (ou para o portão, sem login)
document.querySelector('.resultado-outro').addEventListener('click', function () {
  resultado.hidden = true;
  limparArquivo();
  esconderMensagens();
  const destino = logado ? secaoEnvio : portao;
  destino.scrollIntoView({ behavior: movimentoReduzido() ? 'auto' : 'smooth' });
  if (logado) inputArquivo.focus({ preventScroll: true });
});

// ---------- 7. Mensagens ----------

function mostrarAvisoForm(texto) {
  avisoForm.innerHTML = ICONE_ATENCAO;
  const p = document.createElement('p');
  p.textContent = texto;
  avisoForm.appendChild(p);
  avisoForm.hidden = false;
}

// Mostra a caixa de erro com um texto diferente para cada problema
function mostrarErro(codigo) {
  botaoTentar.hidden = false;
  linkEntrar.hidden = true;

  if (codigo === 'nao-hemograma') {
    erroTitulo.textContent = 'Não encontramos um hemograma nesse arquivo.';
    erroTexto.textContent = 'Confira se a foto está nítida e mostra a tabela com os valores. O Saudezen só explica hemogramas.';
  } else if (codigo === 'leitura') {
    erroTitulo.textContent = 'Não conseguimos abrir esse arquivo.';
    erroTexto.textContent = 'Escolha o arquivo de novo ou tire outra foto do exame.';
  } else if (codigo === 'login') {
    erroTitulo.textContent = 'A sua sessão terminou.';
    erroTexto.textContent = 'Entre na sua conta de novo para analisar o exame.';
    botaoTentar.hidden = true;
    linkEntrar.hidden = false;
  } else {
    erroTitulo.textContent = 'Não conseguimos analisar agora.';
    erroTexto.textContent = 'Pode ser a internet ou o serviço de IA. Tente de novo ou veja como funciona com o exame de exemplo.';
  }
  estadoErro.hidden = false;
  estadoErro.scrollIntoView({ block: 'center', behavior: movimentoReduzido() ? 'auto' : 'smooth' });
}

function esconderMensagens() {
  avisoForm.hidden = true;
  estadoErro.hidden = true;
}

// Quando a pessoa marca a caixinha que faltava, a mensagem some
checkDados.addEventListener('change', function () { avisoForm.hidden = true; });
checkEntendi.addEventListener('change', function () { avisoForm.hidden = true; });

function movimentoReduzido() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
