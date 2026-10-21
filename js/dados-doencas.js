// Lista de doenças da página "Doenças de A a Z".
//
// Para adicionar uma doença, copie um bloco { ... }, cole no lugar certo e troque os textos.
// A ordem não importa: a página organiza por ordem alfabética sozinha.
//
// Campos:
//   id        nome curto sem acento e sem espaço (vira o link: doencas.html#dengue)
//   nome      como aparece na lista
//   tambem    outros nomes conhecidos (aparecem embaixo do nome e entram na busca)
//   chaves    palavras extras só para a busca (não aparecem na tela)
//   oQueE     o que é, em 2 ou 3 frases simples
//   sinais    sinais mais comuns (lista)
//   cuidados  prevenção e cuidados (lista)
//   ajuda     quando procurar um profissional de saúde
//   fonte     página do Ministério da Saúde usada como base
//
// Regras do conteúdo: linguagem simples, sem alarmismo, sem diagnóstico e
// sempre com a fonte. Nada de inventar números.

const MS = 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/';

const DOENCAS = [
  {
    id: 'aids-hiv',
    nome: 'Aids e HIV',
    tambem: [],
    chaves: ['ist', 'dst', 'virus', 'imunidade'],
    oQueE: 'O HIV é um vírus que ataca as células de defesa do corpo. Sem tratamento, com o tempo, ele pode causar a aids, fase em que o corpo fica sem proteção contra outras doenças. Com o tratamento de hoje, gratuito no SUS, a pessoa pode viver bem por muitos anos.',
    sinais: [
      'Muitas vezes não há nenhum sinal por anos',
      'Logo depois da infecção, pode haver febre, cansaço e mal-estar parecidos com uma gripe',
      'Só o teste mostra se a pessoa tem o vírus'
    ],
    cuidados: [
      'Usar camisinha nas relações sexuais',
      'Fazer o teste, que é rápido e gratuito no SUS',
      'Não compartilhar seringas e agulhas'
    ],
    ajuda: 'Depois de uma situação de risco, como uma relação sem camisinha, procure um serviço de saúde o quanto antes, em até 72 horas. Existe um remédio de prevenção (PEP) que precisa começar logo.',
    fonte: MS + 'a/aids-hiv'
  },
  {
    id: 'alzheimer',
    nome: 'Alzheimer',
    tambem: [],
    chaves: ['demencia', 'memoria', 'esquecimento', 'idoso'],
    oQueE: 'É uma doença do cérebro que piora aos poucos e afeta a memória, o raciocínio e o comportamento. É a causa mais comum de demência, principalmente em pessoas idosas. Não tem cura, mas o tratamento ajuda a manter a qualidade de vida.',
    sinais: [
      'Esquecer fatos recentes com frequência',
      'Repetir as mesmas perguntas',
      'Se perder em lugares conhecidos',
      'Dificuldade em tarefas do dia a dia, como cuidar do dinheiro',
      'Mudanças de humor ou de comportamento'
    ],
    cuidados: [
      'Manter a mente e o corpo ativos',
      'Cuidar da pressão e do diabetes',
      'Manter contato com outras pessoas'
    ],
    ajuda: 'Se você ou alguém da família notar esquecimentos que atrapalham o dia a dia, procure uma unidade de saúde. Esquecer coisas de vez em quando é normal.',
    fonte: MS + 'a/alzheimer'
  },
  {
    id: 'asma',
    nome: 'Asma',
    tambem: ['Bronquite asmática'],
    chaves: ['falta de ar', 'chiado', 'bombinha', 'pulmao'],
    oQueE: 'É uma inflamação nos brônquios, os tubos que levam o ar até os pulmões. Eles ficam sensíveis e se fecham durante as crises, o que dificulta a respiração. Não tem cura, mas com tratamento a pessoa leva uma vida normal.',
    sinais: [
      'Falta de ar',
      'Chiado no peito',
      'Tosse, principalmente à noite ou de manhã cedo',
      'Sensação de aperto no peito'
    ],
    cuidados: [
      'Usar os remédios do jeito que o médico indicou, mesmo sem crise',
      'Evitar fumaça, poeira e mofo',
      'Manter a casa arejada'
    ],
    ajuda: 'Procure atendimento de urgência se a falta de ar for forte, se a bombinha não aliviar ou se os lábios e as unhas ficarem arroxeados.',
    fonte: MS + 'a/asma'
  },
  {
    id: 'avc',
    nome: 'AVC',
    tambem: ['Derrame', 'Acidente vascular cerebral'],
    chaves: ['cerebro', 'boca torta', 'emergencia'],
    oQueE: 'Acontece quando o sangue para de chegar a uma parte do cérebro, por um entupimento ou um sangramento. É uma emergência: quanto mais rápido o atendimento, menores as sequelas.',
    sinais: [
      'Boca torta de repente',
      'Fraqueza ou dormência em um lado do corpo',
      'Fala enrolada ou dificuldade para entender',
      'Perda da visão ou do equilíbrio de repente',
      'Dor de cabeça forte e repentina'
    ],
    cuidados: [
      'Controlar a pressão, o diabetes e o colesterol',
      'Não fumar',
      'Fazer atividade física'
    ],
    ajuda: 'Ao notar qualquer um desses sinais, ligue 192 (SAMU) na hora. Não espere passar.',
    fonte: MS + 'a/avc'
  },
  {
    id: 'cancer-de-mama',
    nome: 'Câncer de mama',
    tambem: [],
    chaves: ['cancer', 'nodulo', 'caroco', 'mamografia', 'outubro rosa', 'seio'],
    oQueE: 'É o crescimento descontrolado de células na mama. É um dos cânceres mais comuns entre as mulheres e também pode acontecer em homens, mais raramente. Descoberto cedo, as chances de cura são altas.',
    sinais: [
      'Caroço (nódulo) na mama ou na axila, geralmente sem dor',
      'Pele da mama repuxada ou parecendo casca de laranja',
      'Mudança no bico do seio ou saída de líquido',
      'Vermelhidão ou inchaço na mama'
    ],
    cuidados: [
      'Conhecer o próprio corpo e observar as mamas',
      'Conversar com a equipe de saúde sobre a mamografia, de acordo com a sua idade',
      'Fazer atividade física e evitar bebida alcoólica'
    ],
    ajuda: 'Se notar qualquer mudança na mama, procure uma unidade de saúde. Na maioria das vezes não é câncer, mas precisa ser examinado.',
    fonte: MS + 'c/cancer-de-mama'
  },
  {
    id: 'catapora',
    nome: 'Catapora',
    tambem: ['Varicela'],
    chaves: ['bolhas', 'coceira', 'crianca'],
    oQueE: 'É uma doença causada por um vírus, muito contagiosa e mais comum na infância. Em geral é leve, mas pode ser mais séria em bebês, adultos, gestantes e pessoas com a defesa baixa.',
    sinais: [
      'Manchas vermelhas que viram bolhas com líquido e depois casquinhas',
      'Coceira',
      'Febre',
      'Cansaço'
    ],
    cuidados: [
      'A vacina faz parte do calendário do SUS',
      'Não coçar e manter as unhas curtas',
      'Evitar contato com outras pessoas até todas as bolhas virarem casca'
    ],
    ajuda: 'Procure atendimento se a febre durar vários dias, se as bolhas inflamarem, ou se houver falta de ar ou sonolência fora do normal. Gestantes e bebês devem sempre ser avaliados.',
    fonte: MS + 'c/catapora-varicela'
  },
  {
    id: 'caxumba',
    nome: 'Caxumba',
    tambem: ['Papeira'],
    chaves: ['inchaco', 'rosto', 'saliva'],
    oQueE: 'É uma infecção causada por um vírus que incha as glândulas que produzem a saliva, perto das orelhas. Passa pela saliva, pela tosse e pelo espirro.',
    sinais: [
      'Inchaço de um ou dos dois lados do rosto, abaixo das orelhas',
      'Dor ao mastigar ou engolir',
      'Febre',
      'Dor de cabeça e cansaço'
    ],
    cuidados: [
      'A vacina tríplice viral (sarampo, caxumba e rubéola) protege e é gratuita no SUS',
      'Evitar compartilhar copos e talheres'
    ],
    ajuda: 'Procure uma unidade de saúde para confirmar. Volte se houver dor forte na barriga ou nos testículos, dor de cabeça forte ou vômitos.',
    fonte: MS + 'c/caxumba'
  },
  {
    id: 'chikungunya',
    nome: 'Chikungunya',
    tambem: ['Febre chikungunya'],
    chaves: ['aedes', 'mosquito', 'dor nas juntas', 'articulacao'],
    oQueE: 'É uma doença causada por um vírus transmitido pela picada do mosquito Aedes aegypti, o mesmo da dengue. A marca dela é a dor forte nas juntas, que pode durar meses.',
    sinais: [
      'Febre alta de repente',
      'Dor forte e inchaço nas juntas, como mãos, pés e joelhos',
      'Dor de cabeça',
      'Manchas vermelhas na pele'
    ],
    cuidados: [
      'Acabar com a água parada',
      'Usar repelente',
      'Não tomar remédio por conta própria: alguns podem fazer mal se for dengue'
    ],
    ajuda: 'Procure uma unidade de saúde ao ter febre com dor nas juntas.',
    fonte: MS + 'c/chikungunya'
  },
  {
    id: 'coqueluche',
    nome: 'Coqueluche',
    tambem: ['Tosse comprida'],
    chaves: ['tosse', 'bebe'],
    oQueE: 'É uma infecção causada por uma bactéria que ataca as vias respiratórias. É mais perigosa em bebês pequenos.',
    sinais: [
      'Começa como um resfriado',
      'Depois, crises de tosse seca, uma atrás da outra',
      'Um som de "guincho" ao puxar o ar depois da tosse',
      'Vômito depois das crises de tosse'
    ],
    cuidados: [
      'Manter as vacinas das crianças em dia',
      'Gestantes tomam a vacina dTpa, que também protege o bebê'
    ],
    ajuda: 'Bebê com crises de tosse, pausas na respiração ou ficando roxo: procure atendimento na hora. Tosse que dura mais de duas semanas também precisa ser avaliada.',
    fonte: MS + 'c/coqueluche'
  },
  {
    id: 'covid-19',
    nome: 'Covid-19',
    tambem: ['Coronavírus'],
    chaves: ['covid', 'sars-cov-2', 'pandemia', 'gripe'],
    oQueE: 'É uma doença causada pelo coronavírus SARS-CoV-2. Na maioria das pessoas é leve, mas pode ser mais séria em idosos, gestantes e pessoas com outras doenças.',
    sinais: [
      'Febre',
      'Tosse',
      'Dor de garganta e nariz escorrendo',
      'Cansaço',
      'Perda do olfato ou do paladar'
    ],
    cuidados: [
      'Manter a vacina em dia',
      'Lavar as mãos com frequência',
      'Usar máscara se estiver com sintomas'
    ],
    ajuda: 'Procure atendimento se houver falta de ar, dor no peito, lábios arroxeados ou febre que não passa.',
    fonte: MS + 'c/covid-19'
  },
  {
    id: 'dengue',
    nome: 'Dengue',
    tambem: [],
    chaves: ['aedes', 'aegypti', 'mosquito', 'febre'],
    oQueE: 'É uma doença causada por um vírus transmitido pela picada do mosquito Aedes aegypti. Em geral melhora em cerca de uma semana, mas alguns casos podem se agravar.',
    sinais: [
      'Febre alta de repente',
      'Dor atrás dos olhos',
      'Dor no corpo e nas juntas',
      'Manchas vermelhas na pele',
      'Cansaço'
    ],
    cuidados: [
      'Acabar com a água parada: pratos de vaso, pneus, caixas-d\'água abertas',
      'Beber bastante líquido se estiver doente',
      'Não tomar AAS nem anti-inflamatórios sem orientação',
      'O SUS oferece vacina para alguns grupos'
    ],
    ajuda: 'Ao ter febre, procure uma unidade de saúde. Procure atendimento na hora se houver dor forte na barriga, vômitos que não param, sangramento ou tontura ao levantar, principalmente quando a febre começa a baixar.',
    fonte: MS + 'd/dengue'
  },
  {
    id: 'depressao',
    nome: 'Depressão',
    tambem: [],
    chaves: ['tristeza', 'saude mental', 'ansiedade', 'desanimo'],
    oQueE: 'É uma doença que afeta o humor, os pensamentos e o corpo. É mais do que uma tristeza passageira: dura semanas e atrapalha a vida. Tem tratamento, e pedir ajuda é um passo importante.',
    sinais: [
      'Tristeza ou sensação de vazio na maior parte do tempo',
      'Perder o interesse por coisas que antes davam prazer',
      'Cansaço e falta de energia',
      'Mudanças no sono e no apetite',
      'Dificuldade de concentração',
      'Sentimento de culpa ou de não ter valor'
    ],
    cuidados: [
      'Conversar com alguém de confiança',
      'O SUS oferece atendimento nas unidades básicas e nos CAPS'
    ],
    ajuda: 'Se os sinais durarem mais de duas semanas, procure uma unidade de saúde. Se tiver pensamentos de se machucar, ligue para o CVV no 188 (gratuito, 24 horas) ou para o SAMU no 192.',
    fonte: MS + 'd/depressao'
  },
  {
    id: 'diabetes',
    nome: 'Diabetes',
    tambem: ['Açúcar alto no sangue'],
    chaves: ['glicose', 'glicemia', 'insulina', 'acucar'],
    oQueE: 'É uma doença em que o açúcar (glicose) fica alto no sangue, porque o corpo não produz insulina suficiente ou não consegue usá-la bem. Com o tempo, pode afetar os olhos, os rins, os nervos e o coração. Com tratamento e cuidados, dá para viver bem.',
    sinais: [
      'Muita sede',
      'Vontade de urinar muitas vezes',
      'Fome frequente',
      'Perda de peso sem motivo',
      'Visão embaçada',
      'Feridas que demoram a cicatrizar',
      'No começo, muitas vezes não há sinais'
    ],
    cuidados: [
      'Alimentação equilibrada, com menos açúcar',
      'Atividade física',
      'Fazer o exame de glicemia quando a equipe de saúde indicar'
    ],
    ajuda: 'Se tiver esses sinais ou casos de diabetes na família, procure uma unidade de saúde para fazer o exame de sangue.',
    fonte: MS + 'd/diabetes'
  },
  {
    id: 'doenca-de-chagas',
    nome: 'Doença de Chagas',
    tambem: [],
    chaves: ['barbeiro', 'chagas', 'coracao', 'acai'],
    oQueE: 'É causada por um parasita transmitido principalmente pelo inseto barbeiro e também por alimentos contaminados, como açaí e caldo de cana mal preparados. Pode ficar anos sem sinais e, com o tempo, afetar o coração e o intestino.',
    sinais: [
      'No começo: febre, mal-estar e inchaço no rosto ou perto de um olho',
      'Muitas pessoas não têm sinais por anos'
    ],
    cuidados: [
      'Não esmagar nem pegar o barbeiro com as mãos',
      'Usar telas nas janelas em áreas com o inseto',
      'Consumir alimentos de origem segura'
    ],
    ajuda: 'Se você morou em área com barbeiro ou teve contato com ele, peça um exame na unidade de saúde. Se encontrar um barbeiro, leve-o à vigilância em saúde do seu município.',
    fonte: MS + 'd/doenca-de-chagas'
  },
  {
    id: 'doenca-falciforme',
    nome: 'Doença falciforme',
    tambem: ['Anemia falciforme'],
    chaves: ['hemacias', 'sangue', 'anemia', 'hemograma', 'teste do pezinho'],
    oQueE: 'É uma doença herdada dos pais em que as hemácias, as células vermelhas do sangue, ficam com formato de foice. Elas circulam com dificuldade e duram menos, o que causa anemia e crises de dor. O teste do pezinho descobre a doença logo ao nascer.',
    sinais: [
      'Crises de dor nos ossos, nas costas ou no peito',
      'Cansaço e palidez (anemia)',
      'Olhos amarelados',
      'Inchaço nas mãos e nos pés das crianças',
      'Infecções frequentes'
    ],
    cuidados: [
      'Fazer o acompanhamento regular, que o SUS oferece',
      'Beber bastante água',
      'Manter as vacinas em dia'
    ],
    ajuda: 'Febre em quem tem doença falciforme pede atendimento rápido. Procure também se houver dor forte, falta de ar ou fraqueza.',
    fonte: MS + 'd/doenca-falciforme'
  },
  {
    id: 'febre-amarela',
    nome: 'Febre amarela',
    tambem: [],
    chaves: ['mosquito', 'mata', 'vacina', 'viagem'],
    oQueE: 'É uma doença causada por um vírus transmitido por mosquitos, principalmente em áreas de mata. Pode ser leve ou grave. A vacina protege e é gratuita no SUS.',
    sinais: [
      'Febre de repente',
      'Calafrios',
      'Dor de cabeça forte',
      'Dor nas costas e no corpo',
      'Enjoo e vômitos'
    ],
    cuidados: [
      'Tomar a vacina e conferir a carteira de vacinação, principalmente antes de viajar para áreas de mata',
      'Usar repelente'
    ],
    ajuda: 'Ao ter febre depois de visitar área de mata ou rural, procure atendimento e conte onde esteve.',
    fonte: MS + 'f/febre-amarela'
  },
  {
    id: 'gripe',
    nome: 'Gripe',
    tambem: ['Influenza'],
    chaves: ['resfriado', 'febre', 'tosse', 'virus'],
    oQueE: 'É uma infecção causada pelo vírus influenza. Passa pela tosse, pelo espirro e pelas mãos. Costuma melhorar em cerca de uma semana, mas pode complicar em idosos, crianças pequenas, gestantes e pessoas com doenças crônicas.',
    sinais: [
      'Febre de repente',
      'Dor no corpo',
      'Dor de cabeça',
      'Tosse e dor de garganta',
      'Cansaço'
    ],
    cuidados: [
      'Tomar a vacina todo ano, na campanha do SUS',
      'Lavar as mãos e cobrir a boca ao tossir',
      'Descansar e beber líquidos'
    ],
    ajuda: 'Procure atendimento se houver falta de ar, febre por mais de três dias ou piora depois de começar a melhorar. Pessoas dos grupos de risco devem procurar logo.',
    fonte: MS + 'g/gripe-influenza'
  },
  {
    id: 'hanseniase',
    nome: 'Hanseníase',
    tambem: [],
    chaves: ['lepra', 'manchas', 'pele', 'dormencia'],
    oQueE: 'É uma doença causada por uma bactéria que afeta principalmente a pele e os nervos. Tem cura, e o tratamento é gratuito no SUS. Depois que o tratamento começa, a pessoa deixa de transmitir.',
    sinais: [
      'Manchas mais claras, avermelhadas ou amarronzadas na pele',
      'Menos sensibilidade ao calor, ao frio, à dor ou ao toque nessas manchas',
      'Formigamento ou dormência nas mãos e nos pés',
      'Caroços ou inchaços na pele'
    ],
    cuidados: [
      'Diagnóstico e tratamento cedo evitam sequelas',
      'Quem mora com a pessoa também deve ser examinado'
    ],
    ajuda: 'Se tiver uma mancha na pele com alteração de sensibilidade, procure uma unidade de saúde.',
    fonte: MS + 'h/hanseniase'
  },
  {
    id: 'hepatites-virais',
    nome: 'Hepatites virais',
    tambem: ['Hepatite A', 'Hepatite B', 'Hepatite C'],
    chaves: ['figado', 'amarelao', 'ictericia'],
    oQueE: 'São inflamações do fígado causadas por vírus. As mais comuns no Brasil são as hepatites A, B e C. Muitas vezes não dão sinais por anos. Há vacina para as hepatites A e B, e a hepatite C tem cura.',
    sinais: [
      'Muitas vezes, nenhum',
      'Cansaço e enjoo',
      'Pele e olhos amarelados',
      'Urina escura e fezes claras'
    ],
    cuidados: [
      'Vacinas do SUS contra as hepatites A e B',
      'Usar camisinha',
      'Não compartilhar alicates, lâminas e seringas',
      'Beber água tratada e lavar bem os alimentos'
    ],
    ajuda: 'Faça o teste rápido das hepatites B e C pelo menos uma vez na vida (é gratuito no SUS). Procure atendimento se notar pele ou olhos amarelados.',
    fonte: MS + 'h/hepatites-virais'
  },
  {
    id: 'herpes',
    nome: 'Herpes',
    tambem: ['Herpes labial', 'Herpes genital'],
    chaves: ['bolhas', 'boca', 'ferida'],
    oQueE: 'É uma infecção causada pelo vírus herpes simples. Depois da primeira vez, o vírus fica "adormecido" no corpo e pode voltar em momentos de estresse, febre ou muito sol. Não tem cura, mas há tratamento para as crises.',
    sinais: [
      'Formigamento ou ardência antes das bolhas',
      'Pequenas bolhas juntas nos lábios ou na região genital',
      'Feridas que depois viram casquinha'
    ],
    cuidados: [
      'Não tocar nas bolhas',
      'Não compartilhar copos e toalhas durante a crise',
      'Usar camisinha'
    ],
    ajuda: 'Procure atendimento na primeira crise, se as feridas forem perto dos olhos ou se você estiver grávida.',
    fonte: MS + 'h/herpes'
  },
  {
    id: 'hipertensao',
    nome: 'Hipertensão',
    tambem: ['Pressão alta'],
    chaves: ['pressao', 'coracao', 'sal'],
    oQueE: 'É quando a pressão do sangue nas artérias fica alta o tempo todo. Geralmente não dá sinais, por isso é chamada de doença silenciosa. Sem controle, aumenta o risco de infarto, AVC e problemas nos rins.',
    sinais: [
      'Na maioria das vezes, nenhum',
      'Às vezes, dor de cabeça, tontura ou zumbido no ouvido',
      'Só medindo a pressão dá para saber'
    ],
    cuidados: [
      'Medir a pressão regularmente (é grátis nas unidades de saúde)',
      'Usar menos sal',
      'Fazer atividade física e não fumar',
      'Tomar os remédios todos os dias, mesmo se sentindo bem'
    ],
    ajuda: 'Meça a pressão pelo menos uma vez por ano. Se der alta, procure uma unidade de saúde. Dor no peito, falta de ar ou sinais de AVC: ligue 192.',
    fonte: MS + 'h/hipertensao'
  },
  {
    id: 'hpv',
    nome: 'HPV',
    tambem: ['Papilomavírus humano'],
    chaves: ['verruga', 'colo do utero', 'ist', 'preventivo'],
    oQueE: 'É um vírus muito comum, transmitido pelo contato íntimo. Na maioria das vezes o corpo elimina o vírus sozinho, mas alguns tipos podem causar verrugas e, com os anos, câncer do colo do útero e de outras partes do corpo.',
    sinais: [
      'Geralmente, nenhum',
      'Verrugas na região genital ou anal'
    ],
    cuidados: [
      'Vacina gratuita no SUS para meninas e meninos de 9 a 14 anos, e para alguns outros grupos',
      'Usar camisinha',
      'Fazer o exame preventivo (Papanicolau) conforme a orientação da equipe de saúde'
    ],
    ajuda: 'Procure uma unidade de saúde se notar verrugas na região genital.',
    fonte: MS + 'h/hpv'
  },
  {
    id: 'infarto',
    nome: 'Infarto',
    tambem: ['Ataque cardíaco'],
    chaves: ['coracao', 'dor no peito', 'emergencia'],
    oQueE: 'Acontece quando o sangue para de chegar a uma parte do coração, geralmente pelo entupimento de uma artéria. É uma emergência: cada minuto conta.',
    sinais: [
      'Dor ou aperto no peito, que pode ir para o braço, as costas, o pescoço ou o queixo',
      'Falta de ar',
      'Suor frio',
      'Enjoo e mal-estar',
      'Em mulheres, idosos e pessoas com diabetes, os sinais podem ser mais fracos'
    ],
    cuidados: [
      'Controlar a pressão, o diabetes e o colesterol',
      'Não fumar',
      'Fazer atividade física'
    ],
    ajuda: 'Ao sentir esses sinais, ligue 192 (SAMU) na hora. Não vá dirigindo sozinho.',
    fonte: MS + 'i/infarto'
  },
  {
    id: 'leptospirose',
    nome: 'Leptospirose',
    tambem: [],
    chaves: ['rato', 'enchente', 'lama', 'urina de rato'],
    oQueE: 'É uma infecção causada por uma bactéria presente na urina de ratos. A pessoa se contamina no contato com água ou lama de enchentes e de esgoto.',
    sinais: [
      'Febre de repente',
      'Dor de cabeça',
      'Dor nas pernas, principalmente na batata da perna',
      'Olhos vermelhos'
    ],
    cuidados: [
      'Evitar contato com água de enchente',
      'Usar botas e luvas na limpeza depois de enchentes',
      'Guardar lixo e alimentos bem fechados'
    ],
    ajuda: 'Se tiver febre depois de contato com enchente ou lama, procure atendimento e conte isso ao profissional de saúde.',
    fonte: MS + 'l/leptospirose'
  },
  {
    id: 'lupus',
    nome: 'Lúpus',
    tambem: [],
    chaves: ['autoimune', 'manchas', 'articulacao'],
    oQueE: 'É uma doença autoimune: o sistema de defesa ataca o próprio corpo e causa inflamação na pele, nas juntas, nos rins e em outros órgãos. É mais comum em mulheres jovens. Não tem cura, mas o tratamento controla a doença.',
    sinais: [
      'Manchas vermelhas no rosto, em forma de borboleta',
      'Dor e inchaço nas juntas',
      'Cansaço e febre sem motivo',
      'Sensibilidade ao sol',
      'Queda de cabelo'
    ],
    cuidados: [
      'Usar protetor solar',
      'Seguir o tratamento e ir às consultas'
    ],
    ajuda: 'Se tiver alguns desses sinais juntos ou por muito tempo, procure uma unidade de saúde.',
    fonte: MS + 'l/lupus'
  },
  {
    id: 'malaria',
    nome: 'Malária',
    tambem: [],
    chaves: ['mosquito', 'amazonia', 'febre', 'calafrio'],
    oQueE: 'É uma doença causada por um parasita transmitido pela picada de um mosquito. No Brasil, quase todos os casos acontecem na região amazônica. Tem cura com o tratamento gratuito do SUS.',
    sinais: [
      'Febre alta',
      'Calafrios e tremores',
      'Suor intenso',
      'Dor de cabeça e no corpo',
      'Os sinais podem ir e voltar'
    ],
    cuidados: [
      'Em área de risco, usar repelente, roupas compridas e mosquiteiro'
    ],
    ajuda: 'Febre depois de estar na região amazônica, mesmo meses depois: procure atendimento e conte onde esteve.',
    fonte: MS + 'm/malaria'
  },
  {
    id: 'meningite',
    nome: 'Meningite',
    tambem: [],
    chaves: ['pescoco duro', 'cerebro', 'manchas roxas'],
    oQueE: 'É a inflamação das membranas que envolvem o cérebro e a medula. Pode ser causada por vírus ou por bactérias. A causada por bactéria é uma emergência. Várias vacinas do SUS protegem.',
    sinais: [
      'Febre alta',
      'Dor de cabeça forte',
      'Pescoço duro (dificuldade de encostar o queixo no peito)',
      'Vômitos',
      'Manchas roxas na pele',
      'Em bebês: moleira estufada, choro e irritação'
    ],
    cuidados: [
      'Manter as vacinas do calendário em dia'
    ],
    ajuda: 'Com esses sinais, procure atendimento de urgência na hora.',
    fonte: MS + 'm/meningite'
  },
  {
    id: 'mpox',
    nome: 'Mpox',
    tambem: [],
    chaves: ['variola', 'bolhas', 'lesoes'],
    oQueE: 'É uma doença causada por um vírus. Passa pelo contato próximo com as feridas, secreções ou objetos de uma pessoa infectada, inclusive no contato íntimo.',
    sinais: [
      'Feridas na pele que viram bolhas e depois casquinhas, inclusive na região genital',
      'Febre',
      'Ínguas (caroços no pescoço, axila ou virilha)',
      'Dor no corpo'
    ],
    cuidados: [
      'Evitar contato com as feridas de outras pessoas',
      'Não compartilhar roupas de cama e toalhas',
      'Quem tem a doença deve ficar isolado até as feridas cicatrizarem'
    ],
    ajuda: 'Procure uma unidade de saúde se surgirem feridas na pele, principalmente depois de contato com alguém com a doença.',
    fonte: MS + 'm/mpox'
  },
  {
    id: 'oropouche',
    nome: 'Oropouche',
    tambem: ['Febre Oropouche'],
    chaves: ['maruim', 'mosquito', 'febre'],
    oQueE: 'É uma doença causada por um vírus transmitido principalmente pelo maruim, um mosquito bem pequeno. Os sinais lembram os da dengue.',
    sinais: [
      'Febre de repente',
      'Dor de cabeça forte',
      'Dor no corpo e nas juntas',
      'Tontura e enjoo',
      'Os sinais podem voltar alguns dias depois'
    ],
    cuidados: [
      'Usar telas finas, roupas compridas e repelente em áreas com maruim',
      'Limpar folhas e restos de frutas do quintal'
    ],
    ajuda: 'Procure uma unidade de saúde ao ter febre. Gestantes devem sempre procurar atendimento.',
    fonte: MS + 'o/oropouche'
  },
  {
    id: 'poliomielite',
    nome: 'Poliomielite',
    tambem: ['Paralisia infantil', 'Pólio'],
    chaves: ['vacina', 'gotinha', 'crianca'],
    oQueE: 'É uma doença causada por um vírus que pode causar paralisia, principalmente nas pernas. O Brasil não tem casos há décadas graças à vacina, que precisa continuar em dia.',
    sinais: [
      'Febre, mal-estar e dor de cabeça',
      'Em alguns casos, fraqueza repentina nas pernas ou nos braços'
    ],
    cuidados: [
      'Vacinar as crianças conforme o calendário do SUS'
    ],
    ajuda: 'Confira a carteira de vacinação das crianças. Fraqueza repentina em um braço ou uma perna pede atendimento na hora.',
    fonte: MS + 'p/poliomielite'
  },
  {
    id: 'sarampo',
    nome: 'Sarampo',
    tambem: [],
    chaves: ['manchas', 'vacina', 'triplice viral'],
    oQueE: 'É uma doença causada por um vírus e muito contagiosa: passa pela tosse, pelo espirro e até pela respiração. Pode causar complicações, como pneumonia, principalmente em crianças pequenas.',
    sinais: [
      'Febre alta',
      'Manchas vermelhas que começam no rosto e descem pelo corpo',
      'Tosse e nariz escorrendo',
      'Olhos vermelhos'
    ],
    cuidados: [
      'Tomar a vacina tríplice viral, gratuita no SUS'
    ],
    ajuda: 'Ao notar febre com manchas vermelhas, procure uma unidade de saúde e evite contato com outras pessoas.',
    fonte: MS + 's/sarampo'
  },
  {
    id: 'sifilis',
    nome: 'Sífilis',
    tambem: [],
    chaves: ['ist', 'dst', 'ferida', 'gestante'],
    oQueE: 'É uma infecção sexualmente transmissível causada por uma bactéria. Também pode passar da gestante para o bebê. Tem cura com penicilina, gratuita no SUS.',
    sinais: [
      'Primeiro, uma ferida sem dor na região genital, no ânus ou na boca, que some sozinha',
      'Depois, manchas no corpo, inclusive nas palmas das mãos e nas plantas dos pés',
      'Pode ficar anos sem sinais'
    ],
    cuidados: [
      'Usar camisinha',
      'Fazer o teste rápido, gratuito no SUS',
      'Gestantes fazem o teste no pré-natal',
      'Parceiros também precisam se tratar'
    ],
    ajuda: 'Faça o teste depois de uma relação sem camisinha ou se notar feridas ou manchas.',
    fonte: MS + 's/sifilis'
  },
  {
    id: 'talassemia',
    nome: 'Talassemia',
    tambem: [],
    chaves: ['anemia', 'hemoglobina', 'hemograma', 'vcm', 'sangue'],
    oQueE: 'É uma doença herdada dos pais em que o corpo produz menos hemoglobina, a parte do sangue que leva o oxigênio. Pode ser leve, sem precisar de tratamento, ou mais séria. No hemograma, costuma aparecer com hemácias pequenas (VCM baixo).',
    sinais: [
      'Na forma leve, geralmente nenhum',
      'Cansaço e palidez',
      'Nas formas mais sérias, atraso no crescimento das crianças'
    ],
    cuidados: [
      'Fazer acompanhamento médico',
      'Não tomar ferro por conta própria: na talassemia, isso pode fazer mal'
    ],
    ajuda: 'Se o hemograma mostrar anemia ou hemácias pequenas, leve o exame ao médico. Ele pode pedir outros exames para descobrir a causa.',
    fonte: MS + 't/talassemia'
  },
  {
    id: 'toxoplasmose',
    nome: 'Toxoplasmose',
    tambem: [],
    chaves: ['gato', 'carne crua', 'gravidez', 'gestante'],
    oQueE: 'É uma infecção causada por um parasita presente em carne crua ou mal passada, em água e alimentos contaminados e nas fezes de gato. Na maioria das pessoas é leve, mas na gravidez pode afetar o bebê.',
    sinais: [
      'Geralmente, nenhum',
      'Ínguas no pescoço',
      'Febre e cansaço'
    ],
    cuidados: [
      'Comer carne bem passada',
      'Lavar bem frutas e verduras',
      'Beber água tratada',
      'Usar luvas para mexer na terra e na caixa de areia do gato'
    ],
    ajuda: 'Gestantes fazem o exame no pré-natal. Siga as orientações da equipe de saúde.',
    fonte: MS + 't/toxoplasmose'
  },
  {
    id: 'trombose',
    nome: 'Trombose',
    tambem: ['Trombose venosa profunda'],
    chaves: ['coagulo', 'perna inchada', 'tvp', 'embolia'],
    oQueE: 'É a formação de um coágulo (trombo) dentro de uma veia, geralmente nas pernas. O perigo é o coágulo se soltar e ir para o pulmão.',
    sinais: [
      'Inchaço em uma perna só',
      'Dor ou sensação de peso na batata da perna',
      'Pele quente e avermelhada no local'
    ],
    cuidados: [
      'Movimentar as pernas em viagens longas e depois de cirurgias',
      'Beber água',
      'Não fumar'
    ],
    ajuda: 'Procure atendimento ao notar uma perna inchada e dolorida. Falta de ar de repente ou dor no peito: ligue 192.',
    fonte: MS + 't/trombose'
  },
  {
    id: 'tuberculose',
    nome: 'Tuberculose',
    tambem: [],
    chaves: ['tosse', 'pulmao', 'bcg'],
    oQueE: 'É uma doença causada por uma bactéria que ataca principalmente os pulmões. Passa pelo ar, quando a pessoa doente tosse ou fala. Tem cura, com tratamento gratuito no SUS, que precisa ser seguido até o fim.',
    sinais: [
      'Tosse por três semanas ou mais',
      'Febre no fim da tarde',
      'Suor à noite',
      'Emagrecimento',
      'Cansaço'
    ],
    cuidados: [
      'Vacina BCG ao nascer',
      'Manter os ambientes ventilados',
      'Seguir o tratamento até o fim, mesmo se sentindo melhor'
    ],
    ajuda: 'Tosse que dura três semanas ou mais: procure uma unidade de saúde para fazer o exame.',
    fonte: MS + 't/tuberculose'
  },
  {
    id: 'zika',
    nome: 'Zika',
    tambem: ['Zika vírus'],
    chaves: ['aedes', 'mosquito', 'microcefalia', 'gestante'],
    oQueE: 'É uma doença causada por um vírus transmitido pelo mosquito Aedes aegypti e também por relação sexual. Geralmente é leve, mas na gravidez pode causar microcefalia e outros problemas no bebê.',
    sinais: [
      'Manchas vermelhas com coceira',
      'Febre baixa',
      'Olhos vermelhos, sem secreção',
      'Dor nas juntas'
    ],
    cuidados: [
      'Acabar com a água parada',
      'Usar repelente',
      'Gestantes e parceiros devem usar camisinha'
    ],
    ajuda: 'Procure uma unidade de saúde se tiver esses sinais, principalmente se estiver grávida.',
    fonte: MS + 'z/zika-virus'
  }
];
