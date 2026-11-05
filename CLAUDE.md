# Saudezen

Site de saúde em linguagem simples. Projeto escolar (protótipo), sucessor do ExamIA
(pasta `../Expotec`, só para consulta: nunca editar). Prazo: TROCAR (data ainda não definida).

## Páginas
1. Home (`index.html`), nesta ordem (pedido do usuário): topo com o "tradutor" (laudo fictício:
   tocar num item mostra a explicação, `js/tradutor.js`) → faixa clara (broto) do aviso → notícias
   fixas → "Doenças de A a Z" (só a explicação: o que cada doença traz + botão para a página;
   sem busca nem letras, pedido do usuário).
2. Doenças A-Z (`doencas.html`): lista montada por `js/doencas.js` a partir de
   `js/dados-doencas.js` (125 doenças). Fontes: só oficiais. MS "Saúde de A a Z", BVS/MS "Dicas em Saúde",
   gov.br/aids (ISTs), INCA (cânceres), Linhas de Cuidado do MS e HU Brasil. O nome do link da fonte
   sai do endereço (`nomeDaFonte` em `js/doencas.js`). Doença sem página oficial para o público NÃO entra.
   Busca com lupa filtra na hora, ignora acentos e compara o COMEÇO das palavras
   ("pressao" acha Hipertensão, não Depressão). Busca vai para o endereço (?busca=).
   Cada doença é um `<details>`; link direto abre ela (`doencas.html#dengue`).
   Partes de cada doença: O que é · Sinais · Prevenção e cuidados · "Como se pega" ou "Por que
   acontece" · "O que ajuda em casa" / "No dia a dia" / "Sobre o tratamento" · caixa âmbar
   "Não dá para tratar em casa" (AVC, infarto, meningite, coqueluche, febre amarela, pólio,
   leptospirose) · Quando procurar ajuda · Fonte. Conteúdo novo (20/10/2026) tirado das páginas do
   MS, sem nome de remédio nem dose. Herpes usa a página "Herpes simples" da BVS/MS (a página
   "herpes" do gov.br é sobre cobreiro).
3. Entrar (`entrar.html`, `js/entrar.js`), redesenhada em 05/11/2026: um cartão só, no meio, com
   "telas" que o JS troca (`data-tela`): entrar · criar (nome, e-mail, senha) · esqueci · enviado ·
   nova-senha (aberta por `?token=`) · criada · logada · desligado (file://). Sem a coluna
   "Por que pedimos uma conta": só uma linha de privacidade embaixo do cartão.
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

## Login e banco de dados (requisito do trabalho: SQL Server, decidido em 05/11/2026)
- O site roda NO COMPUTADOR: `npm start` → http://localhost:3000 (`servidor.js`, Express).
  Supabase e Vercel saíram do projeto.
- Banco: `banco/bd_login.sql` (script do usuário, SQL Server; NÃO mudar a estrutura sem ele pedir).
  Tabelas Usuario, RecuperarSenha, LogLogin; o servidor usa SÓ as procedures dele
  (`api/conta.js` + `api/banco.js`, pacote mssql). Atenção: o script começa com DROP DATABASE.
- Senha: bcrypt (custo 12). Sessão: cookie HttpOnly "sessao" (na memória do servidor; reiniciar = sair)
  + cookie "logado=1" só para o menu. Token do "esqueci" vai para o banco em SHA-256.
- 5 senhas erradas em 15 min (LogLogin) = e-mail bloqueado. Mesma resposta para "e-mail não existe"
  e "senha errada".
- "Esqueci minha senha" NÃO manda e-mail: o link aparece no terminal do servidor (protótipo).
- Variáveis de ambiente (nunca em arquivo): GEMINI_API_KEY, DB_USUARIO, DB_SENHA
  (opcionais: DB_SERVIDOR=localhost, DB_INSTANCIA=SQLEXPRESS, DB_PORTA, DB_NOME=bd_login, PORT=3000).
- Só css/, js/, imagens/ e as 5 páginas ficam públicas (servidor.js); api/, banco/ etc. dão 404.
- Exames e resultados nunca são salvos. Banco guarda nome, e-mail, hash e tentativas de login.
- `api/analisar.js` confere a sessão (cookie) antes de chamar o Gemini.

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
- [x] Doenças A-Z com busca (125 doenças: 37 em 08/10 + 88 em 21/10/2026)
- [x] Entrar redesenhada + login próprio com SQL Server (05/11/2026; testado com banco falso na memória)
- [x] Análise com login no servidor e exame de exemplo
- [x] Aviso
- [x] SQL Server 2025 Express instalado (05/11/2026): instância localhostSQLEXPRESS, TCP + SQL Browser
      ligados, modo misto, "sa" desativado, usuário do Windows é sysadmin (SSMS entra sem senha).
      Banco criado com banco/bd_login.sql + banco/permissoes-site.sql (login "saudezen_app", só EXECUTE
      nas procedures + SELECT no LogLogin). DB_USUARIO/DB_SENHA salvas nas variáveis do usuário do Windows.
      Testado de verdade: criar, duplicado, senha errada, entrar, esqueci + nova senha.
- [ ] SSMS (opcional, para mostrar as tabelas na apresentação)
- [ ] Testar a análise com GEMINI_API_KEY no computador
- [x] Rodapé: nomes da equipe trocados por "Contato" (e-mail + telefone FICTÍCIO (11) 4000-0000, sem link de ligar) em 05/11/2026
- [ ] Data da apresentação (ainda não informada)
- [x] Primeiro commit (20/10/2026)
- [x] GitHub: https://github.com/Meloo-00/Saudezen (branch main, push em 21/10/2026)
- [x] Doenças detalhadas: como se pega + o que ajuda em casa (sem seção de sintomas, decisão do usuário)

## Próxima sessão: começar por aqui (anotado em 21/10/2026)
1. SQL Server (itens do plano acima). Doenças já feitas.
   Da lista que o usuário mandou em 21/10, ficaram FORA (decisão dele ou sem fonte oficial):
   - Não são doenças (decisão do usuário): Autismo, Síndrome de Down, Vacinas. Celulite (BVS diz que é estética).
   - Vagos: Eritema, Cistos, Disbiose, Má circulação, Retenção de líquidos.
   - Sem página oficial para o público: Arritmia, Sarna, Otite, H. pylori, Úlcera gástrica, Daltonismo,
     Pancreatite, Diverticulite, Síndrome do intestino irritável, Colite, Virose, Foliculite, Faringite,
     Má digestão, Escoliose, Esporão de calcâneo, Tendinite, Gota, Anorexia, Bulimia.
   - Viraram outro nome de uma doença: Reumatismo, Eczema, Enfisema, Nervo ciático, Intolerância ao glúten, Vaginite.
   - Fascite plantar entrou no lugar do Esporão (é parecida, mas o usuário não pediu: confirmar se fica).
2. Pontos fracos que eu (Claude) apontei e ainda estão abertos:
   - (Resolvido 05/11/2026) No celular, o carrossel agora tem setas + "1 de 5 · A seguir: <tema>" embaixo da notícia (`.carrossel-nav`; no computador fica escondido, a lista de manchetes já mostra tudo).
   - Ícones das notícias são provisórios: ilustrações 3D por tema (como sangue/microscópio)
     ficariam melhores, se o grupo conseguir as imagens.
   - Dicas "Para você" e os links para Diabetes/Pressão alta nas notícias foram escritos pelo
     Claude: alguém do grupo ou um professor da área deve conferir.
   - Conteúdo das 125 doenças precisa de revisão de alguém da área da saúde (prioridade: as 88 novas).
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
