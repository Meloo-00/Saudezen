# Saudezen

Site de saúde em linguagem simples. Projeto escolar (protótipo), sucessor do ExamIA
(pasta `../Expotec`, só para consulta: nunca editar). Prazo: TROCAR (data ainda não definida).

## Páginas
1. Home (`index.html`), nesta ordem (pedido do usuário): topo com o "tradutor" (laudo fictício:
   tocar num item mostra a explicação, `js/tradutor.js`) → faixa clara (broto) do aviso → notícias
   fixas → "Doenças de A a Z" (só a explicação: o que cada doença traz + botão para a página;
   sem busca nem letras, pedido do usuário).
2. Doenças A-Z (`doencas.html`): lista montada por `js/doencas.js` a partir de
   `js/dados-doencas.js` (37 doenças, fonte: páginas do Ministério da Saúde "Saúde de A a Z").
   Busca com lupa filtra na hora, ignora acentos e compara o COMEÇO das palavras
   ("pressao" acha Hipertensão, não Depressão). Busca vai para o endereço (?busca=).
   Cada doença é um `<details>`; link direto abre ela (`doencas.html#dengue`).
3. Entrar (`entrar.html`, `js/entrar.js`): entrar, criar conta, esqueci a senha, sair (Supabase).
4. Análise (`analise.html`, `js/analise.js`): IA do hemograma. Sem login mostra o "portão";
   o exame de exemplo funciona sem login (`analise.html#exemplo`).
5. Aviso (`aviso.html`): limites do site, IA pode errar, dados, quando procurar médico.
- Menu: Início · Doenças de A a Z · Aviso · Entrar · botão "Analisar exame".
- Topo e rodapé são iguais em todas as páginas: ao mudar um, mude nos 5 arquivos.

## Regras
- Não diagnosticar. A IA e as doenças explicam o que algo PODE indicar e sempre sugerem
  procurar um profissional. Emergência: SAMU 192. Saúde mental: CVV 188.
- Conteúdo de doenças: linguagem simples, sem alarmismo, sem números inventados, sempre
  com a fonte. Nada de gerar em massa sem revisão.
- Notícias: fixas no HTML, em carrossel (`js/noticias.js`): uma por vez, troca a cada 8 s
  (o tempo é a animação da barrinha no CSS; pausa com mouse em cima, teclado dentro, botão
  Pausar ou fora da tela; com "reduzir movimento" começa pausado). Cada notícia: tema com ícone,
  título, resumo, "Para você" (dica prática escrita por nós), links para as doenças da A-Z e
  link da fonte. Sem JS, aparecem uma embaixo da outra.
  Só título, resumo curto escrito por nós, data, fonte e link.
  Nunca copiar o texto da matéria. Ideia de RSS: `docs/ideias-futuras.md`.

## Login e privacidade (LGPD)
- Exames e resultados nunca são salvos. A conta guarda só o e-mail (no Supabase).
- `api/config.js` entrega ao site `SUPABASE_URL` e `SUPABASE_ANON_KEY` (variáveis da Vercel).
  A anon key é pública por natureza; a service_role NUNCA entra no projeto.
- `api/analisar.js` confere o token no Supabase (`/auth/v1/user`) antes de chamar o Gemini.
- Chaves só em variáveis de ambiente na Vercel: `GEMINI_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`.
- Abrindo o arquivo direto no computador (file://), o login aparece como "ainda não funcionando".

## Design (decidido em 08/10/2026; diferente do ExamIA de propósito)
- Paleta da mesma família do ExamIA, mas com fundo branco-sálvia em vez de bege:
  papel `#F5F6F0`, areia `#ECE7DA`, cartão `#FDFDFA`, broto `#E2EAD5`, folha `#3D5A32`
  (botões/links), folha-escura `#2C4324`, tinta `#1F2A1B` (texto), tinta-suave `#525B4B`.
  Atenção = âmbar (fundo `#F6E4C0`, texto `#774705`), não terracota e nunca vermelho.
  Todas as cores ficam em variáveis no topo de `css/estilo.css`. Contraste conferido (≥ 4,5:1).
- Fonte única: Atkinson Hyperlegible Next (feita para baixa visão), títulos em peso 800.
  Atkinson Hyperlegible Mono só para valores de exame (como num laudo).
- Texto base 18px; nada abaixo de 16px; áreas clicáveis com 48px ou mais.
- Ícones: Lucide (desenhos SVG colados no HTML/JS), só onde ajudam.
- A peça marcante é o tradutor da Home. Títulos principais em duas cores (pedido do usuário,
  como no ExamIA, mas sem itálico): o fim do título em `<span class="tom">` (#4F7A35). Sem numeração onde não há sequência (só nos 3 passos do envio), sem cards iguais em grade.
- Animações (pedido do usuário, como no ExamIA; `js/animacoes.js`): classe `.revelar` só na
  ENTRADA de cada página (título, texto, tradutor, portão; atraso com `style="--atraso: 0.2s"`).
  Blocos mais abaixo (notícias, doenças, textos do Aviso) NÃO animam ao rolar, de propósito
  (animação em tudo parece template). `.arte` faz a imagem 3D subir do bloco verde, o tradutor
  entra linha por linha, os passos do envio aparecem em sequência com a linha descendo.
  Tudo parado com "reduzir movimento".
- Células decorativas (pedido do usuário): `.decoracao` no começo do <body>, imagens
  `imagens/celula-lateral.webp` (cor #DCE2D3) flutuando nas laterais
  (`.cel-topo-dir`, `.cel-meio-esq`, `.cel-baixo-dir`); `celula-faixa.webp` (#C5D1B4) dentro da
  faixa do aviso. No Aviso, as células são "desenhadas" ao rolar (`.desenhar` + `js/desenho.js`).
- Letras da página de doenças (computador): efeito "lupa" tipo Dock do Mac, só CSS
  (flex-grow + :hover + :has). Sumário do Aviso: vidro (backdrop-filter), sem números, mesmo
  efeito lupa, e o tópico que está sendo lido fica em evidência (`js/sumario.js`, aria-current).
- Imagens em WebP (bem mais leves que PNG, mantêm a transparência).
- Cor nunca é o único sinal: selos sempre com ícone + palavra.
- Lighthouse (celular): 100 de acessibilidade em todas as páginas.

## Plano e status
- [x] Base (git, CSS, imagens)
- [x] Home com tradutor, busca, notícias e aviso
- [x] Doenças A-Z com busca (37 doenças)
- [x] Entrar (código pronto; falta criar o projeto no Supabase)
- [x] Análise com login no servidor e exame de exemplo
- [x] Aviso
- [ ] Criar o projeto no Supabase e colocar as 3 variáveis na Vercel
- [ ] Publicar na Vercel e testar login + análise de verdade no celular
- [ ] Conferir equipe/e-mail do rodapé (copiados do ExamIA)
- [ ] Data da apresentação (ainda não informada)
- [ ] Primeiro commit: NADA foi salvo no git ainda (perguntar antes de commitar)

## Próxima sessão: começar por aqui (anotado em 09/10/2026)
1. ESPERANDO RESPOSTA do usuário sobre as doenças mais detalhadas (pedido dele):
   - Formato proposto para as 37: novas partes "Como se pega" e "O que ajuda a aliviar em casa".
   - Só medidas que o Ministério da Saúde recomenda; sem nome de remédio nem dose
     ("use o que o profissional indicar" + alertas oficiais, ex.: dengue = não tomar AAS/ibuprofeno).
   - Doenças sem alívio em casa (infarto, AVC, meningite): no lugar, alerta "ligue 192".
   - Exemplo já mostrado (Dengue): beber bastante líquido mesmo sem sede, descansar, febre/dor só
     com o remédio indicado, não tomar AAS nem anti-inflamatórios.
   - Perguntado: criar uma seção de SINTOMAS comuns (cólica, febre, dor de cabeça, diarreia)?
     O exemplo do usuário ("cólica: compressa de água quente") é sintoma, não doença.
   - Precisa mudar `js/dados-doencas.js` (campos novos) e `js/doencas.js` (mostrar os campos).
2. Pontos fracos que eu (Claude) apontei e ainda estão abertos:
   - Carrossel esconde 4 das 5 notícias; no celular só as barrinhas indicam que há mais.
   - Ícones das notícias são provisórios: ilustrações 3D por tema (como sangue/microscópio)
     ficariam melhores, se o grupo conseguir as imagens.
   - Dicas "Para você" e os links para Diabetes/Pressão alta nas notícias foram escritos pelo
     Claude: alguém do grupo ou um professor da área deve conferir.
   - Conteúdo das 37 doenças precisa de revisão de alguém da área da saúde.
   - Vidro do sumário do Aviso só "aparece" quando uma célula passa atrás dele.
   - Verde vivo dos títulos (`.tom`): manter só nos títulos principais, senão perde o efeito.
   - Topo e rodapé repetidos nos 5 HTML (mudar um = mudar os 5).
3. Ferramentas de teste (pasta temporária do Claude, podem ter sumido): `foto.js` (captura com
   Chrome headless; MOUSE=x,y para simular o mouse), `servidor.js` (http://127.0.0.1:5517, o
   Lighthouse do MCP precisa de http). MCPs Figma e 21st não conectaram nesta sessão.

## Como trabalhar comigo
- Sou iniciante (HTML/CSS mediano, pouco JS). Ao final de cada tarefa, explique
  o que foi feito e por quê, de forma simples. Explique com mais cuidado todo JS.
- Antes de qualquer mudança grande, mostre o plano e espere minha aprovação.
- Seja crítico: se uma ideia minha for ruim ou arriscada, diga antes de fazer.
- Responder sempre em português do Brasil.
