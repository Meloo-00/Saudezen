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
//   comoPega  { titulo, itens }: "Como se pega" (doenças que passam de um para outro)
//             ou "Por que acontece" (as que não passam)
//   emCasa    { titulo, itens } (opcional): "O que ajuda em casa", "No dia a dia" ou
//             "Sobre o tratamento". Sem nome de remédio nem dose.
//   alerta    (opcional) texto em destaque para quando NÃO dá para cuidar em casa
//             (ex.: infarto, AVC, meningite: ligue 192)
//   ajuda     quando procurar um profissional de saúde
//   fonte     página do Ministério da Saúde usada como base (conferidas em 20/10/2026)
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Relação sexual sem camisinha',
        'Compartilhar seringas, agulhas e outros objetos que furam ou cortam',
        'Da mãe para o bebê na gravidez, no parto ou na amamentação, quando não há tratamento',
        'Não pega por beijo, abraço, aperto de mão, suor, lágrima ou picada de inseto, nem por dividir copo, talher, toalha ou banheiro'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Tomar os remédios todos os dias, do jeito indicado. Eles são gratuitos no SUS',
        'Quem segue o tratamento corretamente e mantém o vírus controlado não transmite o HIV pelo sexo',
        'Ir às consultas e fazer os exames de acompanhamento'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa ainda não é conhecida. Acredita-se que a genética tenha um papel',
        'O risco aumenta com a idade e quando há casos na família',
        'Estudar e manter a mente ativa ao longo da vida pode atrasar os sinais'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Com o avanço da doença, a pessoa passa a precisar de cuidado o tempo todo',
        'Alguém deve acompanhar os remédios: o esquecimento pode fazer a pessoa tomar a mais ou a menos',
        'Atividades que estimulam a mente, atividade física e convívio com outras pessoas ajudam',
        'O SUS tem centros de referência com equipes de vários profissionais'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'É mais comum em quem tem casos de asma ou rinite na família',
        'As crises podem ser provocadas por poeira, ácaros, mofo, baratas, pelo de animais, fumaça e poluição',
        'Também por resfriados, mudanças de tempo, exercício muito forte, cheiros fortes e emoções fortes'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Seguir o plano para crises combinado por escrito com a equipe de saúde',
        'Manter a casa sem acúmulo de poeira e sem cheiros fortes',
        'Tomar a vacina da gripe todo ano',
        'Alguns remédios da asma são gratuitos pelo Farmácia Popular, com receita'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Entupimento de uma artéria do cérebro (o tipo mais comum) ou rompimento de um vaso',
        'Pressão alta sem controle é uma das principais causas',
        'Também aumentam o risco: diabetes, colesterol alto, cigarro, excesso de álcool, falta de atividade física e idade'
      ]
    },
    alerta: 'Ligue 192 (SAMU) ou 193 (Bombeiros), ou leve a pessoa a um hospital na hora. Quanto mais rápido o atendimento, maiores as chances de recuperação.',
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A idade é o principal fator: o risco aumenta a partir dos 40 anos',
        'Casos na família, principalmente mãe, irmã ou filha',
        'Primeira menstruação cedo, menopausa tarde, não ter tido filhos ou ter o primeiro depois dos 30 anos',
        'Obesidade e reposição hormonal'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O tratamento é escolhido para cada pessoa e pode incluir cirurgia, radioterapia, quimioterapia e remédios hormonais',
        'Ir a todas as consultas e exames combinados com a equipe'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo líquido das bolhas',
        'Pela tosse, pelo espirro e pela saliva',
        'Por objetos sujos com secreção das bolhas',
        'Passa de 1 a 2 dias antes das bolhas até todas virarem casquinha'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Compressas de água fria aliviam a coceira',
        'Lavar a pele só com água e sabão',
        'Não estourar as bolhas nem arrancar as casquinhas',
        'Remédio para febre, dor ou coceira, só o que o profissional de saúde indicar',
        'Não tomar AAS (aspirina): ele é contraindicado na catapora',
        'A criança fica fora da escola por 7 dias, contados desde o aparecimento das manchas'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo ar, com gotículas da tosse, do espirro e da fala',
        'Pelo contato com a saliva de quem está doente',
        'Mais raramente, por objetos sujos com saliva',
        'A pessoa transmite desde cerca de uma semana antes do inchaço até 9 dias depois'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso',
        'Comer e beber bem. Evitar alimentos ácidos, como limão e laranja, que podem causar dor e enjoo',
        'Cuidar bem da higiene da boca',
        'Remédio para dor e febre, só o que o profissional de saúde indicar'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada da fêmea do mosquito Aedes aegypti infectada',
        'Raramente, da gestante para o bebê, na hora do parto'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Beber bastante líquido',
        'Remédio para dor, só o que o médico indicar',
        'Se a dor nas juntas continuar, a equipe de saúde pode indicar fisioterapia'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por gotículas da tosse, do espirro ou da fala de quem está doente',
        'Mais raramente, por objetos sujos com secreções'
      ]
    },
    alerta: 'O tratamento é feito com antibiótico receitado pelo médico. Procure atendimento logo nos primeiros sinais. Bebês muitas vezes precisam ficar internados.',
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por gotículas da tosse, do espirro e da fala, a menos de 1 metro',
        'Por partículas que ficam no ar por horas, principalmente em lugares fechados e pouco ventilados',
        'Tocando em superfícies contaminadas e depois levando a mão ao rosto',
        'Até quem não tem sintomas pode transmitir'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Usar máscara e manter distância das outras pessoas da casa',
        'Deixar portas e janelas abertas para o ar circular',
        'Pessoas com 65 anos ou mais e com a defesa baixa devem procurar atendimento logo: existe um remédio que precisa começar em até 5 dias'
      ]
    },
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
      'Não tomar AAS nem anti-inflamatórios sem orientação',
      'O SUS oferece vacina para alguns grupos'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada da fêmea do mosquito Aedes aegypti infectada',
        'Raramente, da gestante para o bebê ou por transfusão de sangue',
        'O risco é maior entre outubro e maio'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso',
        'Beber bastante líquido, do jeito que a equipe de saúde orientar',
        'Não se automedicar: remédio para febre e dor, só o que o profissional indicar',
        'Voltar para ser reavaliado no dia combinado com a equipe'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Uma mistura de fatores: genética, mudanças na química do cérebro e acontecimentos difíceis da vida',
        'Aumentam o risco: estresse por muito tempo, casos na família, álcool e drogas, traumas, desemprego e outras doenças'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'O tratamento pode ter remédio e terapia. O médico escolhe o melhor para cada pessoa',
        'Não parar o tratamento por conta própria, mesmo se sentindo melhor',
        'Manter uma rotina de sono, comer bem e fazer atividade física',
        'Evitar álcool e drogas e diminuir o café',
        'Reservar tempo para atividades que dão prazer'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Tipo 1: o pâncreas deixa de produzir insulina. É herdado',
        'Tipo 2: o corpo não usa bem a insulina. Está ligado a excesso de peso, falta de atividade física e alimentação inadequada',
        'Casos na família, pressão alta e diabetes na gravidez aumentam o risco'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'No tipo 1, a insulina é usada todos os dias',
        'Fazer atividade física regularmente e manter uma alimentação saudável',
        'Evitar álcool e cigarro',
        'Fazer o acompanhamento na unidade de saúde, que também cuida de outras doenças ligadas, como a pressão alta'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelas fezes do barbeiro infectado, que entram pela ferida da picada ou pelos olhos e pela boca',
        'Comendo ou bebendo alimentos contaminados',
        'Da mãe para o bebê, na gravidez ou no parto',
        'Por transfusão de sangue ou transplante de órgão de doador infectado'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O remédio é gratuito no SUS e deve ser indicado pelo médico. No começo da doença, quanto antes começar, melhor',
        'Quem tem problema no coração ou no intestino por causa da doença precisa de acompanhamento contínuo',
        'Achou um barbeiro? Pegue com luva ou saco plástico, sem esmagar, e guarde num pote com tampa para levar ao posto de saúde'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'É herdada dos pais: uma mudança no gene que produz a hemoglobina',
        'Não pega de uma pessoa para outra',
        'Frio, desidratação, esforço físico intenso, estresse e infecções podem fazer as hemácias mudarem de formato'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Evitar o que pode provocar crises: frio, desidratação e esforço muito intenso',
        'Seguir o acompanhamento e o tratamento indicados pela equipe de saúde'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada de mosquitos infectados. Hoje, no Brasil, isso acontece em áreas de mata',
        'Não passa de uma pessoa para outra',
        'Macacos não transmitem: eles também adoecem e servem de alerta. Se achar um macaco morto, avise a vigilância em saúde'
      ]
    },
    alerta: 'O tratamento é feito com acompanhamento médico, muitas vezes no hospital. Ao ter sinais, procure atendimento na hora e conte onde esteve nos últimos 15 dias e se tomou a vacina. Não tome AAS (aspirina): ele pode favorecer sangramentos.',
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Passa facilmente de pessoa para pessoa, principalmente em lugares fechados e cheios',
        'Pelas mãos: tocar em algo contaminado e depois nos olhos, no nariz ou na boca'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Ficar em casa por até 7 dias depois do começo dos sintomas',
        'Voltar à escola ou ao trabalho só 24 horas depois que a febre passar sem remédio',
        'Manter a casa ventilada',
        'Pessoas dos grupos de risco devem procurar atendimento logo: o remédio contra o vírus funciona melhor nos 2 primeiros dias'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo ar, quando uma pessoa doente e sem tratamento tosse, espirra ou fala',
        'Só depois de convivência próxima e por muito tempo',
        'Não pega por abraço nem por dividir pratos, talheres, roupas de cama ou outros objetos'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Dura de 6 a 12 meses, é gratuito e feito na unidade de saúde, sem internação',
        'Uma dose é tomada na unidade, uma vez por mês, e as outras em casa',
        'Fazer os autocuidados que a equipe ensinar'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Hepatite A: água ou alimentos contaminados com fezes e contato próximo em casas e creches',
        'Hepatites B e C: sangue contaminado, como ao dividir seringas, lâminas, alicates de unha e escovas de dente, ou em tatuagem e piercing sem material esterilizado',
        'Hepatites B e C: relação sexual sem camisinha e da mãe para o bebê',
        'A hepatite C não passa por abraço, beijo, leite materno, comida ou água'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Na hepatite A, não tomar remédios por conta própria: alguns fazem mal ao fígado',
        'A hepatite B não tem cura, mas o tratamento gratuito do SUS evita complicações no fígado',
        'A hepatite C tem cura em mais de 95% dos casos, com tratamento gratuito no SUS'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato com as bolhas e feridas. Quando elas se rompem é que mais transmite',
        'Herpes labial: pelo beijo e pelo contato bem próximo',
        'Herpes genital: pela relação sexual'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Não furar as bolhas',
        'Lavar bem as mãos depois de tocar nas feridas, para o vírus não ir para os olhos e outras partes',
        'Durante a crise, evitar beijos (principalmente em crianças) e relações sexuais',
        'Começar o tratamento indicado pelo profissional logo nos primeiros sinais'
      ]
    },
    ajuda: 'Procure atendimento na primeira crise, se as feridas forem perto dos olhos ou se você estiver grávida.',
    fonte: 'https://bvsms.saude.gov.br/herpes-simples/'
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Na maioria das vezes, é herdada da família',
        'Excesso de sal, obesidade, cigarro, álcool, estresse e falta de atividade física aumentam a pressão',
        'É mais comum em pessoas negras, em quem tem diabetes e com o avanço da idade'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Usar outros temperos no lugar de parte do sal',
        'Manter o peso adequado e evitar alimentos gordurosos',
        'Os remédios são gratuitos na unidade de saúde e no Farmácia Popular, com documento com foto, CPF e receita'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato íntimo, na relação sexual',
        'A camisinha diminui o risco, mas não protege totalmente: o vírus pode estar em partes que ela não cobre',
        'Pode passar de uma pessoa que não tem nenhum sinal',
        'Raramente, da mãe para o bebê, no parto'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O tratamento das verrugas precisa da avaliação de um profissional de saúde',
        'Ele tira as verrugas, mas não elimina o vírus. Se aparecerem de novo, volte à unidade',
        'Parcerias também devem ser orientadas e examinadas'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Um coágulo entope uma artéria do coração e o sangue para de chegar ao músculo',
        'Cigarro, falta de atividade física, má alimentação, colesterol alto e estresse aumentam o risco',
        'Quem tem diabetes ou pressão alta tem de 2 a 4 vezes mais chance'
      ]
    },
    alerta: 'Ligue 192 (SAMU) ou vá à emergência mais próxima. Em idosos e pessoas com diabetes, qualquer mal-estar de repente merece atenção.',
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato com água, lama ou esgoto com urina de rato',
        'A bactéria entra por feridas na pele, pela pele que fica muito tempo na água ou pelos olhos e pela boca',
        'As enchentes espalham a bactéria'
      ]
    },
    emCasa: {
      titulo: 'Depois de uma enchente',
      itens: [
        'Tirar a lama usando luvas e botas de borracha, ou sacos plásticos duplos nas mãos e nos pés',
        'Lavar o local e desinfetar com água sanitária: 2 copos (400 ml) para um balde de 20 litros de água, deixando agir por 15 minutos',
        'Não deixar crianças nadarem ou brincarem na água ou na lama'
      ]
    },
    alerta: 'Não se automedique. O antibiótico deve começar logo, por isso procure atendimento ao primeiro sinal e conte que teve contato com enchente ou lama.',
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa exata não é conhecida: parece ser uma mistura de genética, hormônios, infecções e ambiente',
        'Sol em excesso, infecções e alguns remédios podem provocar ou piorar a doença',
        'É mais comum em mulheres de 15 a 40 anos e em mulheres negras'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Evitar o sol, principalmente nos horários mais fortes',
        'Contar ao médico qualquer sintoma estranho, inclusive depois de começar um remédio',
        'O tratamento é gratuito no SUS e precisa de acompanhamento frequente'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada da fêmea do mosquito Anopheles infectada, que pica mais ao entardecer, à noite e ao amanhecer',
        'Não passa de uma pessoa para outra nem pela água',
        'Raramente, por transfusão de sangue ou seringas contaminadas'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Os comprimidos são gratuitos no SUS e, tomados do jeito certo, curam a doença',
        'Tomar até o fim, nos horários indicados, mesmo se sentindo melhor',
        'Fazer o exame de controle depois do tratamento'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'As causadas por vírus ou bactérias passam por gotículas da fala, da tosse e do espirro, no contato próximo',
        'Algumas também passam por água ou alimentos contaminados',
        'Pessoas sem sintomas podem carregar a bactéria e transmitir',
        'As causadas por fungos e parasitas não passam de pessoa para pessoa'
      ]
    },
    alerta: 'Meningite é emergência: todo caso suspeito precisa ser internado. Ligue 192 (SAMU) ou vá a um pronto-socorro na hora.',
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato direto com as feridas, o pus, o sangue das feridas ou a saliva de quem está doente',
        'Por roupas, toalhas, lençóis e objetos usados pela pessoa',
        'Por contato próximo e demorado com secreções respiratórias',
        'Transmite desde os primeiros sintomas até as feridas cicatrizarem totalmente'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Não dividir objetos pessoais',
        'Lavar roupas, toalhas e lençóis com água e sabão',
        'Quem cuida da pessoa deve usar luvas e máscara',
        'A maioria das pessoas melhora em 2 a 4 semanas'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada do maruim (mosquito-pólvora) infectado',
        'Às vezes, pela picada do pernilongo comum (muriçoca)'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso',
        'Não existe remédio específico: o tratamento alivia os sintomas, com acompanhamento médico'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato com fezes ou com secreções da boca de pessoas infectadas',
        'A falta de saneamento e de higiene facilita a transmissão'
      ]
    },
    alerta: 'Os casos são internados. A vacina é a única forma de prevenir.',
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo ar, quando a pessoa tosse, espirra, fala ou respira',
        'É muito contagioso: passa para cerca de 9 em cada 10 pessoas próximas que não estão protegidas',
        'Transmite de 6 dias antes até 4 dias depois de aparecerem as manchas'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Beber bastante líquido e manter a alimentação',
        'Remédios, só com orientação médica: eles apenas aliviam o desconforto',
        'Crianças com suspeita devem receber vitamina A, indicada por um profissional de saúde'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por relação sexual (oral, vaginal ou anal) sem camisinha',
        'Da gestante para o bebê, na gravidez ou no parto'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com injeções de penicilina, na unidade de saúde perto de casa',
        'Avise a equipe se tiver alergia a penicilina',
        'Evite relações sem camisinha até você e suas parcerias serem avaliados',
        'Quem já teve sífilis pode pegar de novo: faça o teste pelo menos uma vez por ano'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'É herdada dos pais: o corpo tem um defeito na produção da hemoglobina',
        'Não pega de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Nas formas mais sérias, são feitas transfusões de sangue regulares',
        'Há remédio para tirar o excesso de ferro do corpo, fornecido pelo SUS',
        'O acompanhamento é feito nos serviços de hematologia (hemocentros)'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Comendo alimentos mal cozidos ou mal lavados, ou bebendo água contaminada',
        'Pelo contato com fezes de gato contaminadas. Ter gato, por si só, não causa a doença',
        'Da gestante para o bebê, pela placenta'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Em quem tem a defesa normal, geralmente não precisa de tratamento específico, só alívio dos sintomas',
        'Gestantes seguem o acompanhamento do pré-natal',
        'O tratamento e o acompanhamento são gratuitos no SUS'
      ]
    },
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
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'É mais comum depois de cirurgias, fraturas e longos períodos parado, sem se movimentar',
        'Anticoncepcional e gravidez aumentam o risco nas mulheres jovens'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Movimentar-se ao longo do dia, do jeito que a equipe de saúde liberar',
        'Meias elásticas, só com orientação médica',
        'O tratamento usa remédios que "afinam" o sangue e deve começar logo depois do diagnóstico'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo ar, quando a pessoa doente e sem tratamento tosse, fala ou espirra',
        'Quase não passa por roupas, lençóis, copos e talheres',
        'Depois de cerca de 15 dias de tratamento, o risco de transmitir cai bastante'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Deixar a casa arejada e com luz do sol',
        'Cobrir a boca com o braço ou um lenço ao tossir',
        'O tratamento dura pelo menos 6 meses. Parar antes pode deixar a bactéria resistente aos remédios'
      ]
    },
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
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada da fêmea do mosquito Aedes aegypti infectada',
        'Por relação sexual',
        'Da gestante para o bebê, em qualquer fase da gravidez, mesmo sem sintomas'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso enquanto durar a febre',
        'Beber bastante líquido',
        'Remédio para dor e febre, só o que o profissional indicar. Não tomar AAS (aspirina)',
        'Voltar logo ao serviço de saúde se sentir formigamento nos braços ou nas pernas'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver esses sinais, principalmente se estiver grávida.',
    fonte: MS + 'z/zika-virus'
  },
  {
    id: 'tpm',
    nome: 'TPM',
    tambem: ['Tensão pré-menstrual', 'Síndrome pré-menstrual'],
    chaves: ['menstruacao', 'colica', 'humor', 'mulher'],
    oQueE: 'É um conjunto de sinais no corpo e no humor que aparecem de uma a duas semanas antes da menstruação e melhoram quando ela chega. Não é frescura: é real e pode atrapalhar a vida.',
    sinais: [
      'Inchaço e seios sensíveis',
      'Dor de cabeça, cólica e dores no corpo',
      'Irritação, choro fácil e mudanças de humor',
      'Cansaço, dificuldade de concentração e vontade de comer certos alimentos'
    ],
    cuidados: [
      'Fazer atividade física com regularidade, como caminhada ou dança',
      'Dormir bem e buscar formas de relaxar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Mudanças normais dos hormônios ao longo do ciclo menstrual',
        'Queda de uma substância do cérebro ligada ao humor nos dias antes da menstruação',
        'É mais comum em quem tem mãe com TPM e em fases de estresse'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Usar menos sal, o que ajuda no inchaço',
        'Diminuir café e bebida alcoólica, que podem aumentar a irritação e a ansiedade',
        'Atividade física ajuda a aliviar cólicas e dores de cabeça',
        'Se não melhorar, o médico pode indicar um tratamento'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se os sinais forem tão fortes que atrapalham a escola, o trabalho ou a convivência.',
    fonte: 'https://bvsms.saude.gov.br/tensao-pre-menstrual-tpm/'
  },
  {
    id: 'cirrose',
    nome: 'Cirrose',
    tambem: ['Cirrose hepática'],
    chaves: ['figado', 'alcool', 'amarelao', 'barriga inchada'],
    oQueE: 'É quando o fígado, depois de anos de agressão, troca as células saudáveis por cicatrizes, fica duro e para de funcionar direito. No começo quase não dá sinais.',
    sinais: [
      'No começo, nenhum',
      'Cansaço, fraqueza, falta de apetite e emagrecimento',
      'Pele e olhos amarelados',
      'Barriga e pernas inchadas',
      'Urina escura'
    ],
    cuidados: [
      'Evitar o excesso de bebida alcoólica',
      'Tomar as doses da vacina contra a hepatite B',
      'Usar camisinha e não compartilhar seringas'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Uso pesado de bebida alcoólica por muitos anos',
        'Gordura no fígado, ligada a obesidade, diabetes e colesterol alto',
        'Hepatites B e C sem tratamento'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Parar de beber é o primeiro passo para a doença não avançar',
        'Não tomar remédios por conta própria: até remédios comuns em excesso podem lesar o fígado',
        'Fazer o acompanhamento e os exames combinados com a equipe de saúde'
      ]
    },
    ajuda: 'Procure atendimento ao notar pele ou olhos amarelados ou barriga inchada. Confusão mental em quem tem cirrose pede atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/cirrose-hepatica/'
  },
  {
    id: 'dor-ciatica',
    nome: 'Dor ciática',
    tambem: ['Ciatalgia', 'Nervo ciático'],
    chaves: ['ciatico', 'coluna', 'dor na perna', 'lombar'],
    oQueE: 'É a dor causada quando o nervo ciático, o maior do corpo, é apertado ou inflamado. Ele vai do fim da coluna até os pés, por isso a dor desce pela perna.',
    sinais: [
      'Dor na parte de trás da perna e no bumbum, geralmente de um lado só',
      'Dor em choque ou queimação',
      'Formigamento ou dormência na perna',
      'Piora sentado ou em pé e ao tossir ou espirrar'
    ],
    cuidados: [
      'Fazer exercícios que fortalecem costas, bumbum e pernas',
      'Ao pegar peso, dobrar os joelhos e manter a coluna reta'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Hérnia de disco é uma das causas mais comuns',
        'Músculos do bumbum muito contraídos, desvios na coluna e o avanço da idade',
        'Ficar muito tempo sentado e movimentos repetitivos podem piorar'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Levantar a cada 30 minutos quando estiver sentado por muito tempo',
        'Fazer alongamentos para a região lombar e as pernas',
        'Usar cadeira e colchão adequados, com os pés apoiados no chão ao sentar'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor não melhorar. Perda de força na perna pede avaliação rápida.',
    fonte: 'https://bvsms.saude.gov.br/dor-ciatica/'
  },
  {
    id: 'epilepsia',
    nome: 'Epilepsia',
    tambem: [],
    chaves: ['convulsao', 'crise', 'ataque', 'cerebro'],
    oQueE: 'É um problema no cérebro em que, por alguns segundos ou minutos, as células nervosas mandam sinais elétricos errados. Isso causa crises, que podem ser fortes, como a convulsão, ou bem discretas.',
    sinais: [
      'Convulsão: tremores no corpo todo, salivação, às vezes mordida na língua',
      'Olhar parado e "desligamento" por alguns segundos',
      'Em crianças, pausas rápidas no que estavam fazendo, que podem atrapalhar na escola'
    ],
    cuidados: [
      'Fazer o pré-natal e ter um parto bem acompanhado',
      'Controlar a pressão e o diabetes, que ajudam a evitar AVC'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Lesões no cérebro no nascimento, pancadas fortes na cabeça ou infecções como a meningite',
        'Excesso de álcool e uso de drogas',
        'Em idosos, AVC e tumores estão entre as causas mais comuns',
        'Muitas vezes, a causa não é descoberta',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com remédios indicados pelo médico, que controlam as crises de cerca de 2 em cada 3 pessoas',
        'Quando os remédios não bastam, há outras opções, como dieta especial e cirurgia'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se você ou alguém próximo tiver crises, mesmo as discretas. Uma crise que não para, ou crises seguidas sem a pessoa acordar entre elas, é emergência: ligue 192.',
    fonte: 'https://bvsms.saude.gov.br/epilepsia-6/'
  },
  {
    id: 'fascite-plantar',
    nome: 'Fascite plantar',
    tambem: [],
    chaves: ['calcanhar', 'pe', 'sola do pe', 'dor no pe'],
    oQueE: 'É a inflamação da fáscia plantar, uma camada que cobre a sola do pé, do calcanhar até os dedos, e ajuda a amortecer os passos.',
    sinais: [
      'Dor forte, como uma facada, embaixo do pé, perto do calcanhar',
      'Dor mais forte de manhã, que alivia ao longo do dia',
      'Às vezes, inchaço e vermelhidão'
    ],
    cuidados: [
      'Usar calçados com sola grossa e boa estrutura',
      'Evitar ganhar peso rápido',
      'Não andar descalço em chão muito duro'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa exata ainda não é conhecida',
        'Esticamento demais da fáscia ou pequenos traumas repetidos',
        'Exercício em excesso, excesso de peso e envelhecimento'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso, diminuindo a atividade física',
        'Gelo no local para diminuir a dor e a inflamação',
        'Alongar e fortalecer pés e pernas',
        'Usar calçados acolchoados que deem apoio ao pé'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor continuar. Sem tratamento, ela pode virar crônica e mudar o jeito de andar.',
    fonte: 'https://bvsms.saude.gov.br/fascite-plantar/'
  },
  {
    id: 'bursite',
    nome: 'Bursite',
    tambem: [],
    chaves: ['ombro', 'cotovelo', 'joelho', 'articulacao', 'inflamacao'],
    oQueE: 'É a inflamação da bursa, uma bolsinha com líquido que fica entre ossos, músculos e tendões e funciona como amortecedor. É comum no ombro, no cotovelo, no quadril e no joelho.',
    sinais: [
      'Dor no local',
      'Inchaço, vermelhidão e calor',
      'Dificuldade de mexer a região'
    ],
    cuidados: [
      'Descobrir quais atividades provocam a dor e evitá-las',
      'Fazer alongamento e fortalecimento com orientação'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Movimentos repetitivos, como levantar peso, digitar ou pedalar',
        'Pancadas, má postura e sobrecarga das articulações',
        'Doenças como artrite reumatoide e gota, e infecções'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Descansar a região e parar a atividade que causou a dor',
        'Compressas de gelo no local',
        'Não se automedicar: remédio, só com orientação'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor não melhorar com repouso ou se houver febre junto.',
    fonte: 'https://bvsms.saude.gov.br/bursite/'
  },
  {
    id: 'tunel-do-carpo',
    nome: 'Síndrome do túnel do carpo',
    tambem: [],
    chaves: ['punho', 'mao', 'formigamento', 'digitar', 'ler'],
    oQueE: 'É quando um nervo que passa por um canal estreito no punho fica apertado. Esse nervo cuida da sensibilidade dos dedos e de parte dos movimentos do polegar.',
    sinais: [
      'Formigamento na mão, principalmente à noite',
      'Dor que pode subir até o ombro',
      'Choques ao tocar no punho',
      'Com o tempo, dificuldade para pegar objetos e abotoar roupas'
    ],
    cuidados: [
      'Apoiar braços e punhos ao usar o computador',
      'Evitar ficar muito tempo com o punho dobrado'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Ficar muito tempo com o punho dobrado, como ao usar celular ou computador',
        'Movimentos repetitivos, como digitar ou tocar instrumentos',
        'Gravidez e menopausa, e doenças como diabetes, artrite e problemas de tireoide'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Evitar atividades que dobram e esticam o punho o tempo todo',
        'O tratamento é definido pelo médico e pode incluir imobilizar o punho'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se sentir formigamento nas mãos com frequência.',
    fonte: 'https://bvsms.saude.gov.br/sindrome-do-tunel-do-carpo/'
  },
  {
    id: 'joanete',
    nome: 'Joanete',
    tambem: ['Hallux valgus'],
    chaves: ['pe', 'dedao', 'sapato'],
    oQueE: 'É quando o dedão do pé se desvia para fora e forma uma saliência na lateral do pé, que dói com o atrito do sapato. É o problema mais comum nos pés de adultos.',
    sinais: [
      'Saliência parecida com um calo na base do dedão',
      'Dor, vermelhidão e calor no local',
      'Calos nos dedos e na sola do pé'
    ],
    cuidados: [
      'Preferir sapatos de bico arredondado ou quadrado',
      'Evitar salto alto e sapatos apertados no dia a dia'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Herança da família: mais da metade das pessoas com joanete tem parentes com o problema',
        'Sapatos de salto alto, bico fino ou apertados',
        'Pé chato e algumas doenças, como artrite reumatoide e gota'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Trocar os sapatos duros e apertados por outros macios e folgados',
        'Ao comprar sapatos, deixar espaço na ponta: o pé aumenta um pouco no fim do dia',
        'Protetores e separadores de dedos podem aliviar o atrito'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor atrapalhar o andar. Em casos mais sérios, pode ser indicada cirurgia.',
    fonte: 'https://bvsms.saude.gov.br/joanetes-nos-pes-hallux-valgus/'
  },
  {
    id: 'torcicolo',
    nome: 'Torcicolo',
    tambem: [],
    chaves: ['pescoco', 'dor no pescoco', 'mau jeito'],
    oQueE: 'É uma contração forte dos músculos do pescoço, que deixa o pescoço duro e dolorido. Na verdade é um sintoma, não uma doença.',
    sinais: [
      'Dor forte de um lado do pescoço, que pode ir para o ombro',
      'Dificuldade de virar a cabeça',
      'Músculos do pescoço duros'
    ],
    cuidados: [
      'Usar um travesseiro que apoie bem o pescoço',
      'Cuidar da postura e ajustar a cadeira do trabalho ou do estudo',
      'Evitar tensão e estresse'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Dormir "de mau jeito" ou fazer um movimento brusco',
        'Exercício feito de forma errada ou pancadas no pescoço',
        'Tensão emocional e problemas na coluna'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Repouso',
        'Bolsa de água quente no pescoço',
        'Massagem leve, sem exagero',
        'Se não melhorar, procure atendimento'
      ]
    },
    ajuda: 'Procure atendimento se não melhorar em alguns dias. Bebês com o pescoço torto precisam ser avaliados logo.',
    fonte: 'https://bvsms.saude.gov.br/torcicolo/'
  },
  {
    id: 'labirintite',
    nome: 'Labirintite',
    tambem: [],
    chaves: ['tontura', 'vertigem', 'ouvido', 'equilibrio', 'zumbido'],
    oQueE: 'É a inflamação do labirinto, a parte de dentro do ouvido que cuida da audição e do equilíbrio. Costuma aparecer depois dos 40 anos.',
    sinais: [
      'Tontura e sensação de que tudo está girando',
      'Enjoo e vômitos',
      'Zumbido ou diminuição da audição'
    ],
    cuidados: [
      'Não fumar e evitar bebida alcoólica',
      'Controlar o açúcar e o colesterol do sangue',
      'Não ficar muito tempo sem comer'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Infecções por vírus ou bactérias',
        'Açúcar muito baixo ou muito alto no sangue e pressão alta',
        'Álcool, cigarro, café, alguns remédios, estresse e ansiedade'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Beber bastante líquido',
        'Evitar água tônica',
        'Não dirigir durante as crises nem sob efeito dos remédios para labirintite'
      ]
    },
    ajuda: 'Procure uma unidade de saúde nas crises de tontura. Só o médico pode indicar o remédio certo, depois de descobrir a causa.',
    fonte: 'https://bvsms.saude.gov.br/labirintite/'
  },
  {
    id: 'amigdalite',
    nome: 'Amigdalite',
    tambem: ['Amidalite'],
    chaves: ['dor de garganta', 'garganta', 'amigdala', 'pus'],
    oQueE: 'É a infecção das amígdalas, que ficam no fundo da garganta e ajudam a defender o corpo. Pode ser causada por vírus ou por bactérias. Geralmente não é grave.',
    sinais: [
      'Dor de garganta e dificuldade para engolir',
      'Febre e falta de apetite',
      'Mau hálito',
      'Na causada por bactéria, pontos de pus nas amígdalas'
    ],
    cuidados: [
      'Lavar as mãos com frequência',
      'Ficar longe do cigarro'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por gotículas da tosse, do espirro e do beijo',
        'Dividindo copos, talheres, garrafas e escovas de dente'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Preferir bebidas mornas, sopas e alimentos macios',
        'Não beijar ninguém na boca enquanto estiver doente',
        'Se o médico receitar antibiótico, tomar até o fim, mesmo melhorando antes'
      ]
    },
    ajuda: 'Procure atendimento se os sinais durarem mais de 4 dias, se houver dificuldade para respirar ou se a dor impedir de comer ou beber.',
    fonte: 'https://bvsms.saude.gov.br/amidalite-ou-amigdalite/'
  },
  {
    id: 'rinite',
    nome: 'Rinite',
    tambem: ['Rinite alérgica'],
    chaves: ['nariz', 'espirro', 'coriza', 'alergia', 'acaro'],
    oQueE: 'É a inflamação da parte de dentro do nariz. Na maioria das vezes é alérgica: o corpo reage demais a coisas como poeira e mofo. Não tem cura, mas dá para controlar.',
    sinais: [
      'Nariz entupido ou escorrendo',
      'Espirros',
      'Coceira no nariz',
      'Diminuição do olfato'
    ],
    cuidados: [
      'Manter a casa ventilada, com sol e bem limpa',
      'Evitar fumaça de cigarro, perfumes e produtos com cheiro forte'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A alérgica pode vir da família',
        'É provocada por ácaros da poeira, mofo, pelos de animais, pólen e mudanças bruscas de temperatura',
        'A não alérgica pode vir de infecções, alguns remédios e refluxo'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Limpar com pano úmido: vassoura e espanador espalham a poeira',
        'Lavar a roupa de cama pelo menos uma vez por semana',
        'Evitar tapetes, cortinas e bichos de pelúcia que acumulam poeira',
        'Remédios e vacinas antialérgicas, só com receita médica'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se os sinais forem frequentes e atrapalharem o sono ou o dia a dia.',
    fonte: 'https://bvsms.saude.gov.br/rinite/'
  },
  {
    id: 'aterosclerose',
    nome: 'Aterosclerose',
    tambem: ['Arteriosclerose', 'Artérias entupidas'],
    chaves: ['colesterol', 'arteria', 'placa de gordura', 'coracao'],
    oQueE: 'É o acúmulo de gordura nas paredes das artérias, que vão ficando entupidas. Com menos sangue passando, os órgãos recebem menos oxigênio. Pode levar a infarto e AVC.',
    sinais: [
      'Muitas vezes, nenhum até a artéria estar bem entupida',
      'Dor no peito ao fazer esforço (artérias do coração)',
      'Dor nas pernas ao caminhar (artérias das pernas)',
      'Alterações na visão ou fraqueza de um lado do corpo (artérias do pescoço)'
    ],
    cuidados: [
      'Comer menos gordura de origem animal e menos ultraprocessados',
      'Não fumar',
      'Fazer atividade física regularmente'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Colesterol alto, principalmente o LDL, o "ruim"',
        'Cigarro, pressão alta, diabetes e falta de atividade física',
        'Idade entre 50 e 70 anos e casos na família',
        'É mais comum em homens, mas depois da menopausa o risco das mulheres fica igual'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Tratar a pressão alta e o diabetes direitinho',
        'Perder peso, se houver excesso',
        'Esses cuidados também fazem parte do tratamento de quem já tem a doença'
      ]
    },
    ajuda: 'Faça exames de colesterol quando a equipe de saúde indicar. Dor no peito ou sinais de AVC: ligue 192.',
    fonte: 'https://bvsms.saude.gov.br/aterosclerose-e-arteriosclerose/'
  },
  {
    id: 'candidiase',
    nome: 'Candidíase',
    tambem: ['Sapinho', 'Candidose', 'Monilíase'],
    chaves: ['fungo', 'boca', 'bebe', 'placas brancas', 'micose'],
    oQueE: 'É uma infecção causada por um fungo que vive normalmente no corpo. Quando a defesa do corpo fica mais fraca, ele cresce demais. Pode aparecer na boca (o "sapinho", comum em bebês), na vagina ou nas dobras da pele.',
    sinais: [
      'Na boca: placas brancas, como nata, na língua, nos lábios e nas bochechas',
      'Na pele: manchas parecidas com assadura nas dobras',
      'Na vagina: coceira e corrimento'
    ],
    cuidados: [
      'Ferver bicos de mamadeira e chupetas',
      'Manter fraldas e roupas íntimas limpas e secas',
      'Secar bem as dobras do corpo depois do banho'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O fungo já vive na boca, no intestino e na vagina; o problema é quando ele cresce demais',
        'Bebês têm a defesa do corpo mais fraca',
        'Fraldas úmidas por muito tempo e mamadeiras e chupetas mal lavadas facilitam',
        'Pode ser mais grave em pessoas com a defesa baixa'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Ferver por 1 minuto, depois de cada uso, os objetos que o bebê leva à boca',
        'Lavar as mãos antes de cuidar da criança',
        'Não dividir talheres, chupetas e mamadeiras',
        'O tratamento é indicado pelo médico e precisa ser seguido até o fim'
      ]
    },
    ajuda: 'Procure uma unidade de saúde ao notar placas brancas na boca do bebê ou se os sinais voltarem com frequência.',
    fonte: 'https://bvsms.saude.gov.br/sapinho-candidose-oral-candidiase-ou-moniliase/'
  },
  {
    id: 'dermatite-atopica',
    nome: 'Dermatite atópica',
    tambem: ['Eczema', 'Dermatite'],
    chaves: ['pele seca', 'coceira', 'alergia', 'pele'],
    oQueE: 'É uma inflamação da pele que dura a vida toda, com fases melhores e piores. A pele fica seca e coça muito. Não é contagiosa.',
    sinais: [
      'Pele seca com coceira constante',
      'Placas secas ou descascando, principalmente nas dobras',
      'Em bebês, costuma aparecer no rosto, nos cotovelos e nos joelhos',
      'Em crianças maiores e adultos, a pele das dobras fica mais grossa e escura'
    ],
    cuidados: [
      'Hidratar a pele todos os dias',
      'Usar roupas de algodão, macias e não apertadas'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Vem da família e costuma aparecer junto com asma e rinite',
        'A causa exata não é conhecida',
        'Pode piorar com pelos de animais, roupas que pinicam, suor, mudanças de temperatura e estresse',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Banho morno, com sabonete suave',
        'Secar a pele com toalha macia, sem esfregar',
        'Passar hidratante logo depois do banho, em até 3 minutos',
        'Pomadas e remédios, só os indicados pelo médico, sem parar por conta própria'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a coceira atrapalhar o sono ou se as feridas de coçar inflamarem.',
    fonte: 'https://bvsms.saude.gov.br/dermatite-atopica/'
  },
  {
    id: 'ovarios-policisticos',
    nome: 'Síndrome dos ovários policísticos',
    tambem: ['Ovários policísticos', 'SOP'],
    chaves: ['ovario', 'menstruacao irregular', 'hormonio', 'acne', 'pelos'],
    oQueE: 'É um problema hormonal comum em que aparecem várias pequenas bolsas de líquido (cistos) nos ovários. Pode causar desde menstruação irregular e espinhas até dificuldade para engravidar.',
    sinais: [
      'Menstruação irregular, que vem poucas vezes por ano ou some',
      'Aumento de pelos no rosto, nos seios e na barriga',
      'Espinhas',
      'Tendência a ganhar peso',
      'Dificuldade para engravidar'
    ],
    cuidados: [
      'Ir regularmente ao ginecologista',
      'Fazer atividade física pelo menos 30 minutos, 5 dias por semana'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa exata ainda não é conhecida',
        'Metade das mulheres com a síndrome produz insulina em excesso',
        'Nas outras, algumas glândulas produzem mais hormônios masculinos'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Controlar o peso: o ganho de peso piora a síndrome',
        'O tratamento é escolhido pelo médico para melhorar os sintomas',
        'Fazer os exames de acompanhamento, porque há mais risco de problemas no coração depois da menopausa'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a menstruação for muito irregular ou se houver aumento de pelos e espinhas.',
    fonte: 'https://bvsms.saude.gov.br/sindrome-dos-ovarios-policisticos/'
  },
  {
    id: 'alopecia',
    nome: 'Alopecia',
    tambem: ['Calvície', 'Queda de cabelo'],
    chaves: ['cabelo', 'careca', 'pelada'],
    oQueE: 'É a queda ou o afinamento dos cabelos ou pelos, que pode ser passageira ou permanente. Perder de 50 a 100 fios por dia é normal, porque o cabelo se renova o tempo todo.',
    sinais: [
      'Cabelos cada vez mais finos e ralos',
      'Nos homens, "entradas" e falhas no alto da cabeça',
      'Nas mulheres, afinamento no meio da cabeça',
      'Falhas redondas no cabelo, na barba ou nas sobrancelhas (a "pelada")'
    ],
    cuidados: [
      'Evitar excesso de produtos químicos no cabelo',
      'Manter uma alimentação equilibrada'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'As principais causas da queda permanente são a herança da família e os hormônios masculinos',
        'Também: problemas de tireoide, falta de vitaminas, alguns remédios, estresse e infecções no couro cabeludo',
        'Depois de cirurgias, partos e quimioterapia, a queda costuma ser passageira'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Se a queda tiver uma causa passageira, o cabelo volta a crescer quando ela acaba',
        'Os tratamentos dependem do tipo de alopecia e devem ser indicados por um profissional'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a queda for de repente, em grande quantidade ou em falhas redondas.',
    fonte: 'https://bvsms.saude.gov.br/alopecia-queda-de-cabelos/'
  },
  {
    id: 'pedra-nos-rins',
    nome: 'Pedra nos rins',
    tambem: ['Cálculo renal'],
    chaves: ['rim', 'colica renal', 'dor nas costas', 'urina'],
    oQueE: 'São pedrinhas que se formam nos rins ou no caminho da urina, a partir de cristais que existem na urina. A dor quando a pedra se move costuma ser muito forte.',
    sinais: [
      'Dor muito forte que começa nas costas e vai para a barriga e a virilha, em ondas',
      'Enjoo e vômitos',
      'Sangue na urina',
      'Vontade de urinar muitas vezes'
    ],
    cuidados: [
      'Beber bastante água e sucos naturais, principalmente de limão',
      'Usar menos sal e comer menos carne',
      'Fazer atividade física'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Beber pouco líquido, o que deixa a urina concentrada',
        'Calor, excesso de sal e de proteína animal, obesidade e falta de atividade física',
        'Tendência da família e algumas doenças'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Se achar que está eliminando uma pedra, recolha com um filtro de papel: o exame dela ajuda o médico',
        'Remédio para dor, só o receitado pelo médico'
      ]
    },
    ajuda: 'Procure atendimento se tiver dor forte nas costas ou na barriga, principalmente com sangue na urina.',
    fonte: 'https://bvsms.saude.gov.br/calculo-renal-pedra-no-rim/'
  },
  {
    id: 'hernia',
    nome: 'Hérnia',
    tambem: ['Hérnia abdominal', 'Hérnia umbilical', 'Hérnia inguinal'],
    chaves: ['umbigo', 'virilha', 'barriga', 'caroco'],
    oQueE: 'É quando parte de um órgão de dentro da barriga escapa por um ponto mais fraco dos músculos, formando um caroço. É comum no umbigo e na virilha.',
    sinais: [
      'Caroço ou inchaço no umbigo, na virilha ou no meio da barriga',
      'Dor que piora ao tossir, pegar peso, fazer força para evacuar ou ficar muito em pé',
      'O caroço pode aparecer e sumir'
    ],
    cuidados: [
      'Evitar pegar peso em excesso'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Uma abertura nos músculos da barriga, por má-formação ou enfraquecimento',
        'Em bebês, a hérnia do umbigo é mais comum e pode sumir sozinha'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'A cirurgia é o único tratamento que corrige a hérnia de vez',
        'Na maioria das vezes, ela é marcada com antecedência'
      ]
    },
    ajuda: 'Se o caroço ficar preso, doendo muito, com enjoo ou vômitos, procure atendimento de urgência na hora: a hérnia pode ter estrangulado.',
    fonte: 'https://bvsms.saude.gov.br/hernia/'
  },
  {
    id: 'miopia',
    nome: 'Miopia',
    tambem: [],
    chaves: ['visao', 'olho', 'oculos', 'enxergar de longe'],
    oQueE: 'É a dificuldade de enxergar de longe. O olho é um pouco mais "comprido" que o normal e a imagem se forma antes do lugar certo.',
    sinais: [
      'Dificuldade para ver de longe, como a lousa ou placas',
      'Apertar os olhos para enxergar'
    ],
    cuidados: [
      'Fazer consulta com o oftalmologista ao notar dificuldade para enxergar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O formato do olho faz a imagem se formar antes da retina',
        'Costuma aparecer e aumentar na adolescência e se estabilizar por volta dos 18 a 21 anos'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É corrigida com óculos ou lentes de contato receitados pelo oftalmologista',
        'Depois que o grau para de mudar, a cirurgia pode ser uma opção para algumas pessoas'
      ]
    },
    ajuda: 'Procure uma unidade de saúde para encaminhar a consulta com o oftalmologista se tiver dificuldade para enxergar de longe.',
    fonte: 'https://bvsms.saude.gov.br/miopia/'
  },
  {
    id: 'urticaria',
    nome: 'Urticária',
    tambem: [],
    chaves: ['coceira', 'vergoes', 'pele', 'alergia', 'manchas vermelhas'],
    oQueE: 'São manchas vermelhas e um pouco inchadas na pele, como vergões, que coçam muito e somem em horas, sem deixar marca. Na maioria das vezes não é alergia.',
    sinais: [
      'Placas vermelhas e inchadas que coçam muito',
      'Ardência na pele',
      'As placas aparecem e somem, em surtos'
    ],
    cuidados: [
      'Descobrir o que provoca as crises e evitar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Pode ser provocada por alguns remédios, alimentos, picadas de inseto, infecções, frio, calor, sol ou pressão na pele',
        'Muitas vezes não se descobre a causa',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Remédios antialérgicos aliviam a urticária que dura pouco, com orientação médica',
        'A que dura mais de 6 semanas não tem cura, mas as crises podem ser controladas'
      ]
    },
    alerta: 'Inchaço nos lábios, na língua ou na garganta, ou falta de ar, é emergência: ligue 192.',
    ajuda: 'Procure uma unidade de saúde se as crises se repetirem ou durarem semanas.',
    fonte: 'https://bvsms.saude.gov.br/urticaria/'
  },
  {
    id: 'tercol',
    nome: 'Terçol',
    tambem: ['Hordéolo', 'Calázio'],
    chaves: ['olho', 'palpebra', 'bolinha no olho'],
    oQueE: 'É uma infecção por bactéria em glândulas da pálpebra, que forma uma bolinha dolorida perto dos cílios. Geralmente ela se rompe e some sozinha. O calázio é parecido, mas não é causado por bactéria.',
    sinais: [
      'Bolinha na borda da pálpebra, perto dos cílios',
      'Dor, vermelhidão e calor no local'
    ],
    cuidados: [
      'Lavar as mãos várias vezes ao dia',
      'Evitar passar o dedo nos olhos'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Bactérias em glândulas da pálpebra',
        'Excesso de oleosidade pode entupir as glândulas',
        'Calázios frequentes podem indicar um problema de grau nos olhos'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Compressas mornas e úmidas no local',
        'Não espremer a bolinha',
        'Colírio ou pomada, só se o oftalmologista indicar'
      ]
    },
    ajuda: 'Procure atendimento se não melhorar, se piorar ou se voltar com frequência.',
    fonte: 'https://bvsms.saude.gov.br/tercol-e-calazio/'
  },
  {
    id: 'gastrite',
    nome: 'Gastrite',
    tambem: [],
    chaves: ['estomago', 'azia', 'queimacao', 'h. pylori', 'helicobacter', 'ma digestao'],
    oQueE: 'É a inflamação da parte de dentro do estômago. Pode aparecer de repente e passar logo, ou ficar por muito tempo.',
    sinais: [
      'Dor ou queimação no estômago',
      'Azia e má digestão',
      'Sensação de estômago estufado',
      'Enjoo e falta de apetite'
    ],
    cuidados: [
      'Fazer as refeições em horários certos',
      'Evitar álcool e cigarro'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Uso prolongado de alguns remédios para dor e anti-inflamatórios',
        'Bebida alcoólica e cigarro',
        'Infecção pela bactéria H. pylori',
        'O próprio corpo atacar o estômago (gastrite autoimune)'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Fazer refeições pequenas ao longo do dia, em vez de uma grande depois de muito tempo sem comer',
        'Mastigar bem',
        'Evitar café, refrigerante, frituras, embutidos e excesso de sal e de gordura',
        'Não tomar remédio para dor por conta própria'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver azia ou má digestão com frequência. Sangue no vômito ou fezes pretas pedem atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/gastrite/'
  },
  {
    id: 'pedra-na-vesicula',
    nome: 'Pedra na vesícula',
    tambem: ['Cálculo biliar'],
    chaves: ['vesicula', 'dor na barriga', 'colica', 'gordura'],
    oQueE: 'São pedrinhas que se formam na vesícula, uma bolsa embaixo do fígado que guarda a bile, um líquido que ajuda a digerir gordura. Podem entupir a saída e causar inflamação.',
    sinais: [
      'Às vezes, nenhum',
      'Dor forte do lado direito, em cima da barriga, que pode ir para as costelas',
      'A dor costuma vir meia hora depois de comer',
      'Pode ter febre, enjoo e vômitos'
    ],
    cuidados: [
      'Comer menos gordura e mais fibras',
      'Fazer atividade física e não fumar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Alimentação com muita gordura e pouca fibra',
        'Falta de atividade física, obesidade, diabetes e pressão alta',
        'É mais comum em mulheres e pode vir da família'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O tratamento é a cirurgia para retirar a vesícula, geralmente com recuperação rápida',
        'Sem cirurgia, há risco de complicações que exigem cirurgia de emergência'
      ]
    },
    ajuda: 'Procure uma unidade de saúde ao ter dor do lado direito da barriga depois de comer. Dor forte com febre ou pele amarelada pede atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/pedra-na-vesicula-calculo-biliar/'
  },
  {
    id: 'apendicite',
    nome: 'Apendicite',
    tambem: [],
    chaves: ['apendice', 'dor na barriga', 'lado direito', 'emergencia'],
    oQueE: 'É a inflamação do apêndice, um pedacinho do intestino grosso. Sem tratamento rápido, pode estourar e causar uma infecção grave na barriga.',
    sinais: [
      'Dor que começa perto do umbigo ou no alto da barriga e vai para a parte de baixo, do lado direito',
      'A dor começa fraca e vai ficando mais forte',
      'Enjoo, vômitos e falta de apetite',
      'Febre, geralmente depois de 1 ou 2 dias'
    ],
    cuidados: [
      'Não há como prevenir: o importante é procurar atendimento cedo'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Na maioria das vezes, restos de fezes entopem o apêndice e ele inflama',
        'Pode acontecer com qualquer pessoa'
      ]
    },
    alerta: 'O tratamento é cirurgia, o mais rápido possível, para o apêndice não estourar. Procure atendimento de urgência e, se o médico pedir, aceite ficar internado até o diagnóstico.',
    ajuda: 'Dor na parte de baixo da barriga, do lado direito: procure atendimento de urgência na hora.',
    fonte: 'https://bvsms.saude.gov.br/apendicite/'
  },
  {
    id: 'aneurisma',
    nome: 'Aneurisma',
    tambem: [],
    chaves: ['arteria', 'cerebro', 'dor de cabeca forte', 'aorta'],
    oQueE: 'É quando a parede de uma artéria fica fraca e se dilata, como um balão. Ele pode nunca causar problema ou se romper e provocar um sangramento grave. Pode acontecer no cérebro, na barriga e em outras partes.',
    sinais: [
      'Os pequenos geralmente não dão sinais',
      'Quando se rompe no cérebro: dor de cabeça forte e de repente, enjoo, vômitos e desmaio',
      'Na barriga: às vezes, uma sensação de pulsação; se romper, dor forte na barriga ou nas costas'
    ],
    cuidados: [
      'Controlar a pressão',
      'Não fumar',
      'Quem tem casos na família deve conversar com o médico sobre exames'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Enfraquecimento ou defeito na parede da artéria, que pode existir desde o nascimento',
        'Os principais fatores de risco são o cigarro e a pressão alta sem controle',
        'Também: casos na família, idade, colesterol alto e obesidade'
      ]
    },
    alerta: 'Dor de cabeça muito forte e de repente, com vômitos ou desmaio, é emergência: ligue 192.',
    ajuda: 'Se houver casos de aneurisma na família, converse com a equipe de saúde sobre o acompanhamento.',
    fonte: 'https://bvsms.saude.gov.br/aneurisma/'
  },
  {
    id: 'incontinencia-urinaria',
    nome: 'Incontinência urinária',
    tambem: ['Perda de urina'],
    chaves: ['xixi', 'bexiga', 'urina', 'escape'],
    oQueE: 'É a perda de urina sem querer, ao tossir, rir ou fazer força, ou uma vontade tão urgente que não dá tempo de chegar ao banheiro. É comum, mas pouco falada por vergonha. Tem tratamento e pode ter cura.',
    sinais: [
      'Escapes de urina ao tossir, espirrar, rir ou pegar peso',
      'Vontade urgente de urinar, com perda antes de chegar ao banheiro'
    ],
    cuidados: [
      'Manter o peso adequado',
      'Fazer atividade física',
      'Controlar o ganho de peso na gravidez'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Gravidez, parto, menopausa e envelhecimento',
        'Obesidade, prisão de ventre e tosse crônica de fumantes',
        'Diabetes sem controle, infecção urinária, AVC e problemas na bexiga ou na próstata'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Ir ao banheiro a cada 3 horas, sem deixar a bexiga muito cheia',
        'Beber menos líquido à noite',
        'Evitar bebida alcoólica e café',
        'Exercícios para fortalecer os músculos da parte de baixo da barriga (fisioterapia pélvica) ajudam muito'
      ]
    },
    ajuda: 'Procure uma unidade de saúde: não precisa ter vergonha, e o tratamento costuma começar sem cirurgia.',
    fonte: 'https://bvsms.saude.gov.br/incontinencia-urinaria/'
  },
  {
    id: 'refluxo',
    nome: 'Refluxo',
    tambem: ['Refluxo gastroesofágico', 'DRGE'],
    chaves: ['azia', 'queimacao', 'estomago', 'esofago'],
    oQueE: 'É quando o conteúdo do estômago, que é ácido, volta para o esôfago, o tubo que leva a comida até o estômago. Em bebês é comum e costuma passar sozinho.',
    sinais: [
      'Azia ou queimação que pode subir até a garganta',
      'Tosse seca',
      'Dor no peito, que pode ser confundida com dor do coração'
    ],
    cuidados: [
      'Evitar refeições grandes antes de deitar',
      'Manter o peso adequado'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A "válvula" entre o esôfago e o estômago não fecha direito',
        'Obesidade e refeições grandes antes de deitar',
        'Café, chá preto e mate, chocolate, molho de tomate, comidas ácidas, álcool e refrigerante podem piorar'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Fazer refeições menores, várias vezes ao dia',
        'Não deitar logo depois de comer',
        'Evitar os alimentos e bebidas que pioram a azia',
        'Não se automedicar se a azia for frequente'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver azia com frequência. Dor no peito forte: ligue 192, porque pode ser do coração.',
    fonte: 'https://bvsms.saude.gov.br/refluxo-gastroesofagico/'
  },
  {
    id: 'hemorroidas',
    nome: 'Hemorroidas',
    tambem: [],
    chaves: ['anus', 'sangue nas fezes', 'evacuar', 'coceira'],
    oQueE: 'São veias em volta do ânus que incham e inflamam. Podem ficar do lado de fora, como bolinhas, ou do lado de dentro. Geralmente não são graves.',
    sinais: [
      'Coceira no ânus',
      'Sangue vivo no papel higiênico ou na roupa íntima',
      'Dor ou ardor ao evacuar',
      'Bolinha no ânus'
    ],
    cuidados: [
      'Comer alimentos com fibras e frutas',
      'Beber bastante líquido',
      'Não segurar a vontade de evacuar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Fazer muita força para evacuar, por intestino preso',
        'Gravidez, obesidade e falta de atividade física',
        'Pouca fibra e pouco líquido na alimentação',
        'Pode vir da família'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Banho de assento morno',
        'Compressas de gelo para diminuir o inchaço',
        'Lavar a região e secar com toalha macia, em vez de usar papel higiênico',
        'Ficar no vaso só o tempo necessário, sem fazer muita força'
      ]
    },
    ajuda: 'Procure atendimento se o sangramento for grande ou não parar, ou se a dor for forte.',
    fonte: 'https://bvsms.saude.gov.br/hemorroidas/'
  },
  {
    id: 'enxaqueca',
    nome: 'Enxaqueca',
    tambem: ['Migrânea'],
    chaves: ['dor de cabeca', 'cabeca', 'aura', 'luz'],
    oQueE: 'É uma doença do cérebro, que vem da família e dura a vida toda, com crises de dor de cabeça latejante, de um ou dos dois lados.',
    sinais: [
      'Dor de cabeça latejante',
      'Incômodo com luz, barulho e cheiros',
      'Enjoo e vômitos',
      'Às vezes, antes da dor: pontos brilhantes, linhas em zigue-zague ou formigamento (a "aura")'
    ],
    cuidados: [
      'Não ficar muito tempo sem comer: comer algo a cada 3 ou 4 horas',
      'Dormir bem e em horários regulares',
      'Fazer atividade física'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Tendência que vem da família, somada a "gatilhos" do dia a dia',
        'Gatilhos comuns: estresse, ficar sem comer, dormir mal, excesso de café e mudanças hormonais, como na TPM',
        'Usar remédio para dor em excesso pode deixar as crises mais frequentes'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Anotar o que vinha antes das crises ajuda a descobrir os gatilhos',
        'Diminuir café, refrigerantes à base de cola e chocolate',
        'Não usar remédio para dor muitas vezes por conta própria: converse com o médico'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se as crises forem frequentes. Uma dor de cabeça diferente de todas, muito forte e de repente, pede atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/enxaqueca/'
  },
  {
    id: 'piolhos',
    nome: 'Piolhos',
    tambem: ['Pediculose'],
    chaves: ['piolho', 'lendea', 'cabelo', 'coceira na cabeca', 'escola'],
    oQueE: 'São pequenos insetos sem asas que vivem no cabelo e se alimentam de sangue. São muito comuns em crianças em idade escolar.',
    sinais: [
      'Coceira forte na cabeça, principalmente atrás',
      'Lêndeas: pontinhos brancos grudados nos fios',
      'Pontinhos vermelhos como picadas'
    ],
    cuidados: [
      'Não dividir bonés, pentes, escovas e acessórios de cabelo',
      'Prender os cabelos compridos para ir à escola',
      'Passar o pente fino com frequência'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato direto de cabeça com cabeça',
        'Usando bonés, chapéus, pentes, escovas ou roupas de quem tem piolho'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Usar o xampu ou a loção indicados para piolho',
        'Tirar todos os piolhos e lêndeas com pente fino: os produtos não matam os ovos',
        'Examinar todos que moram juntos e tratar quem precisar',
        'Avisar a escola, para tratar todo mundo ao mesmo tempo. Não é preciso cortar o cabelo'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se os piolhos não forem embora com o tratamento ou se a pele da cabeça ficar ferida.',
    fonte: 'https://bvsms.saude.gov.br/pediculose-da-cabeca-piolhos/'
  },
  {
    id: 'vitiligo',
    nome: 'Vitiligo',
    tambem: [],
    chaves: ['manchas brancas', 'pele', 'melanina'],
    oQueE: 'É a perda da cor da pele em algumas áreas, que formam manchas brancas. Não é contagioso e não faz mal à saúde física, mas pode mexer muito com a autoestima.',
    sinais: [
      'Manchas brancas na pele, de tamanhos variados',
      'Comum nas mãos, nos pés, no nariz, na boca e nos joelhos',
      'Pelos e cabelos da área podem ficar brancos'
    ],
    cuidados: [
      'Não há como prevenir',
      'Quem tem casos na família deve ficar atento a manchas novas'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Faltam as células que produzem a cor da pele nas áreas afetadas',
        'A causa ainda não é bem conhecida',
        'Problemas emocionais podem provocar ou piorar as manchas',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'O diagnóstico e o tratamento são feitos pelo dermatologista',
        'Acompanhamento psicológico pode ajudar e melhorar os resultados do tratamento'
      ]
    },
    ajuda: 'Procure uma unidade de saúde ao notar manchas brancas na pele, para confirmar o que é.',
    fonte: 'https://bvsms.saude.gov.br/vitiligo/'
  },
  {
    id: 'psoriase',
    nome: 'Psoríase',
    tambem: [],
    chaves: ['pele', 'escamas', 'placas', 'couro cabeludo'],
    oQueE: 'É uma doença da pele que dura a vida toda, com manchas avermelhadas cobertas por escamas brancas. Tem fases melhores e piores. Não é contagiosa.',
    sinais: [
      'Placas vermelhas com escamas secas, prateadas ou brancas',
      'Comum no couro cabeludo, nos cotovelos, nos joelhos e nas unhas',
      'Às vezes, dor nas juntas'
    ],
    cuidados: [
      'Não há como prevenir, mas dá para controlar as crises',
      'Evitar queimadura de sol e machucados na pele'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa ainda é desconhecida; pode haver tendência na família',
        'Pode piorar com machucados na pele, queimadura de sol, infecções, alguns remédios e estresse',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Manter a pele hidratada',
        'Tomar sol com moderação ajuda nos casos leves',
        'Seguir o tratamento indicado pelo médico, com persistência'
      ]
    },
    ajuda: 'Procure uma unidade de saúde ao notar placas com escamas na pele, ou se tiver psoríase e dor nas juntas.',
    fonte: 'https://bvsms.saude.gov.br/psoriase/'
  },
  {
    id: 'intolerancia-a-lactose',
    nome: 'Intolerância à lactose',
    tambem: [],
    chaves: ['leite', 'lactose', 'diarreia', 'gases', 'barriga'],
    oQueE: 'É a dificuldade de digerir a lactose, o açúcar do leite, porque falta uma substância do intestino chamada lactase. É diferente da alergia ao leite.',
    sinais: [
      'Dor e inchaço na barriga depois de leite e derivados',
      'Gases e diarreia',
      'Enjoo',
      'Os sinais podem levar minutos ou horas para aparecer'
    ],
    cuidados: [
      'Observar quais alimentos causam os sinais'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O corpo produz pouca ou nenhuma lactase',
        'Pode ser de nascença, vir depois de doenças do intestino ou aparecer com a idade',
        'É mais comum em pessoas negras',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Evitar ou diminuir leite, queijos, manteiga, requeijão e preparações com leite',
        'Ler os rótulos de bolachas e biscoitos, que podem ter leite',
        'A dieta não substitui o acompanhamento com a equipe de saúde'
      ]
    },
    ajuda: 'Procure uma unidade de saúde para confirmar se é intolerância e receber orientação sobre a alimentação.',
    fonte: 'https://bvsms.saude.gov.br/intolerancia-a-lactose/'
  },
  {
    id: 'hipotireoidismo',
    nome: 'Hipotireoidismo',
    tambem: ['Tireoide lenta'],
    chaves: ['tireoide', 'hormonio', 'cansaco', 'ganho de peso', 'teste do pezinho'],
    oQueE: 'É quando a tireoide, uma glândula do pescoço, produz menos hormônios do que o corpo precisa. É mais comum em mulheres, mas pode acontecer em qualquer pessoa, até em bebês.',
    sinais: [
      'Cansaço excessivo e falhas de memória',
      'Pele seca, queda de cabelo e ganho de peso',
      'Intestino preso e menstruação irregular',
      'Desânimo'
    ],
    cuidados: [
      'Fazer o teste do pezinho nos bebês, de preferência entre o 3º e o 7º dia de vida'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Em adultos, quase sempre é uma inflamação da tireoide causada pelo próprio corpo',
        'Também pode vir da falta ou do excesso de iodo na alimentação',
        'Em bebês, pode existir desde o nascimento'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com o hormônio que falta, tomado todos os dias, em jejum, do jeito que o médico indicar',
        'Com o tratamento certinho, dá para ter uma vida normal',
        'Em bebês, o tratamento começa logo e evita problemas no desenvolvimento'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver vários desses sinais juntos. Um exame de sangue mostra como está a tireoide.',
    fonte: 'https://bvsms.saude.gov.br/hipotireoidismo-2/'
  },
  {
    id: 'hipertireoidismo',
    nome: 'Hipertireoidismo',
    tambem: ['Tireoide acelerada', 'Doença de Graves'],
    chaves: ['tireoide', 'hormonio', 'olhos saltados', 'emagrecimento'],
    oQueE: 'É quando a tireoide, uma glândula do pescoço, produz hormônios demais, e o corpo funciona "acelerado".',
    sinais: [
      'Nervosismo, ansiedade e mãos trêmulas',
      'Perda de peso',
      'Calor e suor em excesso, intestino solto',
      'Insônia',
      'Olhos vermelhos e saltados',
      'Aumento do pescoço (bócio)'
    ],
    cuidados: [
      'Não tomar hormônio de tireoide sem receita'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa mais comum é a doença de Graves, em que o corpo ataca a própria tireoide',
        'Nódulos na tireoide',
        'Excesso de iodo em alguns remédios ou uso de hormônio de tireoide'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Começa assim que o problema é descoberto e depende da causa',
        'É acompanhado pelo endocrinologista, com exames de sangue periódicos'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver vários desses sinais juntos. Um exame de sangue mostra como está a tireoide.',
    fonte: 'https://bvsms.saude.gov.br/hipertireoidismo-2/'
  },
  {
    id: 'catarata',
    nome: 'Catarata',
    tambem: [],
    chaves: ['visao', 'olho', 'visao embacada', 'idoso'],
    oQueE: 'É quando a lente natural do olho fica opaca e a visão vai ficando embaçada, como se houvesse uma névoa. Acontece principalmente com o envelhecimento.',
    sinais: [
      'Visão nublada',
      'Incômodo com a luz e necessidade de mais luz para ler',
      'Visão à noite mais fraca',
      'Cores parecendo amareladas'
    ],
    cuidados: [
      'Usar óculos escuros adequados no sol forte',
      'Gestantes: fazer o pré-natal, já que rubéola e toxoplasmose na gravidez podem causar catarata no bebê'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Na maioria das vezes, o envelhecimento, geralmente depois dos 60 anos',
        'Pancadas no olho, diabetes e uso longo de alguns remédios',
        'Excesso de sol sem proteção',
        'Alguns bebês já nascem com catarata'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É uma cirurgia que troca a lente opaca por uma lente artificial',
        'A recuperação é rápida: em cerca de uma semana a pessoa volta às atividades'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a visão estiver ficando embaçada, para encaminhar a consulta com o oftalmologista.',
    fonte: 'https://bvsms.saude.gov.br/catarata/'
  },
  {
    id: 'pneumonia',
    nome: 'Pneumonia',
    tambem: [],
    chaves: ['pulmao', 'tosse', 'febre', 'falta de ar', 'catarro'],
    oQueE: 'É uma infecção nos pulmões, causada principalmente por bactérias, vírus ou fungos. Os pulmões se enchem de secreção e fica mais difícil respirar.',
    sinais: [
      'Febre alta',
      'Tosse com catarro amarelado ou esverdeado',
      'Dor no peito e falta de ar',
      'Fraqueza e mal-estar',
      'Em idosos, confusão mental'
    ],
    cuidados: [
      'Não fumar e evitar excesso de bebida alcoólica',
      'Evitar mudanças bruscas de temperatura',
      'Manter o ar-condicionado limpo'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Germes que chegam aos pulmões',
        'Diferente da gripe, ela não costuma passar facilmente de uma pessoa para outra',
        'Cigarro, álcool, ar muito seco e resfriados mal cuidados facilitam'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O tratamento é feito com antibiótico receitado pelo médico',
        'A melhora costuma vir em 3 ou 4 dias, mas o remédio deve ir até o fim',
        'Idosos e casos mais sérios podem precisar de internação'
      ]
    },
    ajuda: 'Procure atendimento ao ter febre com tosse e dor no peito. Falta de ar forte ou confusão mental pedem atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/pneumonia-5/'
  },
  {
    id: 'verrugas',
    nome: 'Verrugas',
    tambem: ['Verruga plantar'],
    chaves: ['pele', 'hpv', 'mao', 'pe'],
    oQueE: 'São pequenas lesões na pele causadas pelo vírus HPV. São mais comuns em crianças e adolescentes, principalmente nas mãos, nos cotovelos, nos joelhos e na sola dos pés.',
    sinais: [
      'Carocinhos ásperos e duros na pele, às vezes com pontinhos escuros',
      'Na sola do pé, parecem um calo e podem doer ao pisar',
      'Na região genital, são mais macias (procure a página do HPV)'
    ],
    cuidados: [
      'Evitar tocar nas verrugas de outras pessoas',
      'A vacina contra o HPV protege contra as verrugas genitais'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelo contato direto com a verruga de outra pessoa',
        'A própria pessoa pode espalhar para outras partes do corpo ao tocar nela'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'As verrugas são retiradas pelo profissional, com cauterização, congelamento ou outros métodos',
        'O tratamento certo para cada caso é indicado pelo dermatologista'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se as verrugas doerem, crescerem ou se espalharem.',
    fonte: 'https://bvsms.saude.gov.br/verrugas/'
  },
  {
    id: 'varizes',
    nome: 'Varizes',
    tambem: ['Veias dilatadas'],
    chaves: ['veia', 'pernas', 'circulacao', 'vasinhos'],
    oQueE: 'São veias das pernas que ficam dilatadas e tortas. As veias têm "valvulazinhas" que ajudam o sangue a subir até o coração; quando elas não fecham bem, o sangue fica parado e a veia se dilata.',
    sinais: [
      'Veias azuladas e bem visíveis embaixo da pele',
      'Vasinhos avermelhados',
      'Pernas pesadas, cansadas ou com queimação',
      'Inchaço nos tornozelos no fim do dia',
      'Coceira e câimbras'
    ],
    cuidados: [
      'Fazer atividade física, como caminhada',
      'Evitar ficar muito tempo parado em pé ou sentado'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Com a idade, as veias perdem a elasticidade',
        'Tendência que vem da família'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Deitar com as pernas elevadas facilita a volta do sangue',
        'Sem tratamento, as varizes podem piorar e causar feridas, manchas na pele e trombose'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se as pernas doerem, incharem ou se a pele perto das varizes mudar de cor. Perna inchada, quente e dolorida de repente pede atendimento rápido.',
    fonte: 'https://bvsms.saude.gov.br/varizes/'
  },
  {
    id: 'sinusite',
    nome: 'Sinusite',
    tambem: [],
    chaves: ['seios da face', 'nariz entupido', 'dor no rosto', 'catarro'],
    oQueE: 'É a inflamação dos seios da face, espaços ocos nos ossos em volta do nariz, das bochechas e dos olhos. Pode durar pouco (aguda) ou ficar por muito tempo (crônica).',
    sinais: [
      'Dor ou peso no rosto ou na cabeça',
      'Nariz entupido com catarro amarelo ou esverdeado',
      'Febre e cansaço',
      'Na crônica, tosse principalmente à noite e ao acordar'
    ],
    cuidados: [
      'Cuidar bem das gripes, resfriados e alergias',
      'Evitar ar-condicionado, que resseca o nariz'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Gripes, resfriados e alergias inflamam o nariz e facilitam a entrada de germes',
        'Alterações no formato do nariz que dificultam a saída do catarro'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Beber bastante água, pelo menos 2 litros por dia',
        'Pingar soro fisiológico no nariz várias vezes ao dia',
        'Inalação com soro fisiológico ou vapor de água quente ajuda a soltar o catarro'
      ]
    },
    ajuda: 'Procure atendimento se os sinais não melhorarem. Sinusite mal tratada pode virar crônica.',
    fonte: 'https://bvsms.saude.gov.br/sinusite/'
  },
  {
    id: 'osteoporose',
    nome: 'Osteoporose',
    tambem: ['Ossos fracos'],
    chaves: ['osso', 'fratura', 'calcio', 'menopausa', 'idoso'],
    oQueE: 'É a perda de massa dos ossos, que vão ficando fracos e quebram com mais facilidade.',
    sinais: [
      'Geralmente não dá sinais até acontecer uma fratura',
      'Fraturas depois de quedas pequenas'
    ],
    cuidados: [
      'Comer alimentos com cálcio, como leite, iogurte, queijo e verduras de folhas escuras',
      'Tomar sol com moderação, que ajuda o corpo a produzir vitamina D',
      'Fazer exercícios, como caminhada ou musculação',
      'Não fumar e evitar excesso de álcool'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Os ossos perdem massa com o tempo',
        'Mulheres depois da menopausa precisam de atenção especial'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Deixar a casa mais segura contra quedas: sem tapetes soltos e com boa iluminação',
        'Piso antiderrapante no banheiro e corrimão nas escadas',
        'Luz ou abajur perto da cama'
      ]
    },
    ajuda: 'Mulheres na menopausa devem conversar com a equipe de saúde sobre o exame dos ossos (densitometria).',
    fonte: 'https://bvsms.saude.gov.br/osteoporose-7/'
  },
  {
    id: 'obesidade',
    nome: 'Obesidade',
    tambem: ['Excesso de peso'],
    chaves: ['peso', 'imc', 'gordura', 'emagrecer'],
    oQueE: 'É o acúmulo de gordura no corpo, quase sempre porque se come mais energia do que se gasta. Aumenta o risco de pressão alta, diabetes, problemas nas juntas e outras doenças.',
    sinais: [
      'IMC (peso dividido pela altura vezes a altura) igual ou acima de 30',
      'IMC entre 25 e 29,9 indica sobrepeso'
    ],
    cuidados: [
      'Alimentação saudável',
      'Atividade física regular'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Comer mais calorias do que o corpo gasta',
        'Pouca atividade física'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Mudar a alimentação e se mexer mais é o principal tratamento',
        'Remédios ajudam pouco e só com acompanhamento médico',
        'Não comprar remédios para emagrecer pela internet ou em academias, nem acreditar em promessas de emagrecimento rápido'
      ]
    },
    ajuda: 'Procure uma unidade de saúde para receber orientação e acompanhamento.',
    fonte: 'https://bvsms.saude.gov.br/obesidade-18/'
  },
  {
    id: 'micoses',
    nome: 'Micoses',
    tambem: ['Frieira', 'Pé de atleta', 'Pano branco', 'Micose de unha'],
    chaves: ['fungo', 'pele', 'unha', 'coceira', 'tinha'],
    oQueE: 'São infecções causadas por fungos que crescem demais na pele, no couro cabeludo, nas unhas ou nas áreas úmidas do corpo.',
    sinais: [
      'Manchas vermelhas, com bordas bem marcadas, que coçam e descamam',
      'Frieira: entre os dedos dos pés',
      'Manchinhas claras ou escuras no tronco e nos braços (pano branco)',
      'Unhas com cor diferente, frágeis ou descolando'
    ],
    cuidados: [
      'Secar bem o corpo depois do banho, principalmente entre os dedos e nas dobras',
      'Não andar descalço em vestiários e pisos sempre molhados',
      'Usar roupas leves de algodão e calçados ventilados'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Fungos crescem demais com umidade e calor, ou quando a defesa do corpo está fraca',
        'Usando toalhas, calçados, pentes e bonés de outras pessoas',
        'Contato com animais com micose e com terra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É indicado pelo médico de acordo com o tipo de micose',
        'Dura de 30 a 60 dias: não pare quando a mancha sumir, porque o fungo pode continuar na pele'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a mancha crescer, não melhorar ou atingir as unhas ou o couro cabeludo.',
    fonte: 'https://bvsms.saude.gov.br/micoses/'
  },
  {
    id: 'leishmaniose',
    nome: 'Leishmaniose',
    tambem: ['Calazar', 'Ferida brava'],
    chaves: ['mosquito palha', 'birigui', 'ferida', 'cachorro'],
    oQueE: 'É uma doença causada por um parasita e transmitida pela picada de um mosquito bem pequeno, o mosquito-palha. Há dois tipos: a que causa feridas na pele e a que ataca órgãos como fígado e baço (calazar).',
    sinais: [
      'Na pele: uma bolinha vermelha que vira ferida com casca, semanas depois da picada',
      'Calazar: febre que vai e volta por muito tempo, palidez, perda de peso e barriga inchada'
    ],
    cuidados: [
      'O mosquito vive em lugares úmidos, escuros e com muitas plantas: atenção nessas áreas',
      'Ficar atento à saúde dos cães'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pela picada do mosquito-palha (também chamado birigui ou asa-branca)',
        'O mosquito é tão pequeno que passa pelas telas e mosquiteiros',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'O diagnóstico e o tratamento são feitos e acompanhados pela equipe de saúde',
        'Descobrir e tratar cedo é importante, porque a doença pode ser grave'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver uma ferida que não cicatriza ou febre por muitos dias, principalmente se mora perto de mata.',
    fonte: 'https://bvsms.saude.gov.br/leishmaniose-2/'
  },
  {
    id: 'insuficiencia-renal',
    nome: 'Insuficiência renal',
    tambem: ['Doença renal crônica'],
    chaves: ['rim', 'rins', 'dialise', 'hemodialise'],
    oQueE: 'É quando os rins perdem a capacidade de filtrar o sangue e tirar o excesso de líquido e as toxinas do corpo. Pode ser de repente (aguda) ou aos poucos e sem volta (crônica).',
    sinais: [
      'Geralmente não dá sinais até estar avançada',
      'Cansaço e falta de apetite',
      'Pés, tornozelos e olhos inchados',
      'Vontade de urinar à noite',
      'Câimbras e pele seca'
    ],
    cuidados: [
      'Controlar a pressão e o diabetes',
      'Não tomar remédios por conta própria'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Os rins vão perdendo a função aos poucos',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'No começo, remédios e dieta ajudam a conservar o que os rins ainda fazem',
        'Quando os rins param, é preciso diálise (uma máquina ou outro método faz o trabalho deles) ou transplante'
      ]
    },
    ajuda: 'Quem tem pressão alta ou diabetes deve fazer os exames dos rins que a equipe de saúde pedir.',
    fonte: 'https://bvsms.saude.gov.br/insuficiencia-renal-cronica/'
  },
  {
    id: 'glaucoma',
    nome: 'Glaucoma',
    tambem: [],
    chaves: ['olho', 'pressao no olho', 'cegueira', 'visao'],
    oQueE: 'É uma doença em que a pressão dentro do olho sobe e vai lesando a visão. Não tem cura e, sem tratamento, pode levar à cegueira. Mas dá para controlar.',
    sinais: [
      'Pode ficar meses ou anos sem nenhum sinal',
      'Na fase avançada, a pessoa começa a esbarrar nas coisas: perde a visão dos lados'
    ],
    cuidados: [
      'Ir ao oftalmologista pelo menos uma vez por ano, principalmente depois dos 40'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Aumento da pressão dentro do olho',
        'Mais risco: casos na família, mais de 40 anos, miopia alta e diabetes'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Colírios que baixam a pressão do olho, laser ou cirurgia',
        'Não parar o colírio por conta própria, mesmo sem sentir nada: a doença não dá aviso'
      ]
    },
    ajuda: 'Procure uma unidade de saúde para encaminhar a consulta com o oftalmologista, principalmente se você estiver em algum grupo de risco.',
    fonte: 'https://bvsms.saude.gov.br/glaucoma/'
  },
  {
    id: 'estrabismo',
    nome: 'Estrabismo',
    tambem: ['Vesgueira'],
    chaves: ['olho', 'olho torto', 'vesgo', 'visao dupla', 'crianca'],
    oQueE: 'É quando os olhos não ficam alinhados: enquanto um olha para a frente, o outro fica desviado. Nas crianças, é uma questão de urgência.',
    sinais: [
      'Um olho desviado para dentro, para fora, para cima ou para baixo',
      'Em adultos, visão dupla',
      'Depois dos 4 meses, qualquer desvio frequente no bebê é estrabismo'
    ],
    cuidados: [
      'Fazer um exame dos olhos da criança por volta de 1 ano de idade, mesmo sem queixas'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Os músculos que movem os olhos não trabalham em equilíbrio',
        'Pode existir desde cedo ou vir de prematuridade, doenças do cérebro e pancadas na cabeça',
        'Em adultos, pode vir de diabetes e doenças neurológicas'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Deve começar o quanto antes: antes dos 2 anos, a visão do olho desviado pode ser recuperada',
        'Estrabismo não se cura sozinho'
      ]
    },
    ajuda: 'Notou o olho da criança desviado depois dos 4 meses? Procure a unidade de saúde logo, para encaminhar ao oftalmologista.',
    fonte: 'https://bvsms.saude.gov.br/estrabismo/'
  },
  {
    id: 'doenca-celiaca',
    nome: 'Doença celíaca',
    tambem: ['Intolerância ao glúten'],
    chaves: ['gluten', 'trigo', 'celiaco', 'diarreia', 'pao'],
    oQueE: 'É uma doença em que o corpo reage ao glúten, uma proteína do trigo, da cevada, do centeio e da aveia. O intestino fica lesado e absorve mal os nutrientes. Não tem cura, mas a dieta controla.',
    sinais: [
      'Diarreia ou intestino preso por muito tempo',
      'Dor e inchaço na barriga',
      'Perda de peso e anemia',
      'Costuma aparecer entre os 6 meses e os 2 anos e meio, mas pode surgir em adultos'
    ],
    cuidados: [
      'Ler o rótulo: por lei, todo alimento industrializado informa se tem glúten'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O próprio sistema de defesa reage ao glúten e ataca o intestino',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Tirar todo o glúten da alimentação, para a vida toda: pães, massas, bolos, biscoitos e cerveja',
        'Cuidado com a contaminação: esponjas, panos, colher de pau e óleo de fritura usados com glúten',
        'Com a dieta certinha, os sinais desaparecem'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver diarreia, barriga inchada e perda de peso por muito tempo.',
    fonte: 'https://bvsms.saude.gov.br/doenca-celiaca/'
  },
  {
    id: 'parkinson',
    nome: 'Doença de Parkinson',
    tambem: ['Parkinson', 'Mal de Parkinson'],
    chaves: ['tremor', 'tremedeira', 'idoso', 'movimento'],
    oQueE: 'É uma doença do cérebro que afeta os movimentos. As células que produzem dopamina, uma substância que ajuda a controlar os movimentos, vão morrendo aos poucos.',
    sinais: [
      'Tremor nas mãos ou nos dedos, principalmente parado',
      'Lentidão para fazer tarefas simples, como se vestir ou tomar banho',
      'Músculos rígidos e andar arrastando os pés',
      'Letra ficando menor e mudanças na fala'
    ],
    cuidados: [
      'Não há um exame que preveja ou previna a doença'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Morte das células de uma parte do cérebro que produz dopamina',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Não tem cura, mas o tratamento alivia os sintomas e pode atrasar a doença',
        'Remédios, fisioterapia, terapia ocupacional e fonoaudiologia ajudam muito',
        'A doença costuma avançar devagar'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se notar tremores ou lentidão que não existiam antes.',
    fonte: 'https://bvsms.saude.gov.br/doenca-de-parkinson/'
  },
  {
    id: 'doenca-de-crohn',
    nome: 'Doença de Crohn',
    tambem: ['Crohn'],
    chaves: ['intestino', 'diarreia', 'inflamacao', 'colite'],
    oQueE: 'É uma inflamação que dura a vida toda e atinge principalmente o fim do intestino delgado e o intestino grosso. Tem fases de crise e fases em que a pessoa fica bem. Não tem cura, mas dá para levar uma vida normal.',
    sinais: [
      'Diarreia e cólica na barriga, muitas vezes depois de comer',
      'Febre, falta de apetite e perda de peso',
      'Às vezes, sangue nas fezes',
      'Dores nas juntas e feridas perto do ânus'
    ],
    cuidados: [
      'Não há como prevenir; o importante é descobrir cedo'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Provavelmente, um desequilíbrio no sistema de defesa do corpo',
        'A alimentação não causa a doença',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Nas crises, alimentos leves agridem menos que comidas apimentadas ou com muita fibra',
        'Os remédios controlam a inflamação e os sintomas',
        'Fazer o acompanhamento com a equipe de saúde, inclusive fora das crises'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver diarreia e dor na barriga por muitas semanas, principalmente com perda de peso ou sangue nas fezes.',
    fonte: 'https://bvsms.saude.gov.br/doenca-de-crohn/'
  },
  {
    id: 'insonia',
    nome: 'Insônia',
    tambem: ['Distúrbios do sono'],
    chaves: ['sono', 'dormir', 'nao consigo dormir', 'ronco', 'apneia'],
    oQueE: 'É a dificuldade de pegar no sono, de dormir a noite toda ou acordar antes da hora. Pode ser passageira, por causa de uma prova ou de uma preocupação, ou se tornar crônica.',
    sinais: [
      'Demorar muito para dormir ou acordar várias vezes',
      'Sono durante o dia',
      'Irritação e dificuldade de memória e concentração',
      'Dor de cabeça'
    ],
    cuidados: [
      'Ter horário regular para deitar e levantar, inclusive no fim de semana',
      'Evitar café, bebidas alcoólicas e comidas pesadas perto da hora de dormir'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Estresse, preocupações, problemas de saúde e mudanças de hábito',
        'Algumas pessoas têm mais tendência à insônia',
        'Ficar na cama pensando e se esforçando para dormir faz a insônia durar mais'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Encerrar as atividades do dia pelo menos duas horas antes de dormir: banho, leitura, relaxar',
        'Não ir para a cama sem sono e não usar a cama para ver TV ou planejar o dia',
        'Se não dormir em 15 a 30 minutos, levantar e ir ler em outro cômodo',
        'Não fazer exercício intenso perto da hora de dormir e deixar a luz do sol entrar ao acordar'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a insônia durar semanas. Ronco alto com paradas na respiração também deve ser avaliado.',
    fonte: 'https://bvsms.saude.gov.br/disturbios-do-sono/'
  },
  {
    id: 'infeccao-urinaria',
    nome: 'Infecção urinária',
    tambem: ['Cistite'],
    chaves: ['xixi', 'ardor ao urinar', 'bexiga', 'urina'],
    oQueE: 'É uma infecção no caminho da urina, quase sempre na bexiga (cistite), causada principalmente por uma bactéria do intestino. É mais comum em mulheres, porque o canal da urina é mais curto e fica perto do ânus.',
    sinais: [
      'Vontade de urinar toda hora, saindo pouca urina',
      'Ardor ao urinar',
      'Dor na parte de baixo da barriga ou nas costas',
      'Febre e, às vezes, sangue na urina'
    ],
    cuidados: [
      'Beber muita água',
      'Não segurar a urina por muito tempo e urinar depois das relações sexuais',
      'Limpar-se da frente para trás depois de evacuar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Bactérias do intestino que chegam ao canal da urina',
        'Segurar a urina por muito tempo',
        'Em homens depois dos 50 anos, o aumento da próstata facilita'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Beber bastante água ajuda a expulsar as bactérias',
        'Evitar roupas íntimas muito justas e trocar o absorvente com frequência',
        'Evitar álcool, cigarro, temperos fortes e café, que irritam a bexiga',
        'Se o médico receitar antibiótico, tomar até o fim, mesmo melhorando antes'
      ]
    },
    ajuda: 'Procure uma unidade de saúde ao ter ardor ao urinar. Febre com dor nas costas pede atendimento rápido, porque a infecção pode ter subido para os rins.',
    fonte: 'https://bvsms.saude.gov.br/cistite/'
  },
  {
    id: 'hernia-de-disco',
    nome: 'Hérnia de disco',
    tambem: [],
    chaves: ['coluna', 'dor nas costas', 'lombar', 'cervical', 'ciatico'],
    oQueE: 'Entre os ossos da coluna há discos que funcionam como amortecedores. Na hérnia de disco, parte de um deles sai do lugar e aperta os nervos. É mais comum na lombar e no pescoço.',
    sinais: [
      'Às vezes, nenhum',
      'Dor na coluna, que pode descer para a perna ou para o braço',
      'Formigamento',
      'A dor pode ser leve ou muito forte'
    ],
    cuidados: [
      'Fazer atividade física, alongamento e exercícios para a barriga e as costas',
      'Manter uma boa postura',
      'Não fumar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A tendência da família é a causa mais importante',
        'Envelhecimento, pouca atividade física e cigarro',
        'Carregar ou levantar muito peso'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Na lombar, geralmente melhora com repouso, fisioterapia e remédio indicado pelo médico',
        'Em cerca de um mês, 9 em cada 10 pessoas voltam às atividades',
        'A cirurgia fica para quando o tratamento não resolve'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor nas costas descer para a perna ou o braço. Perda de força pede avaliação rápida.',
    fonte: 'https://bvsms.saude.gov.br/hernia-de-disco/'
  },
  {
    id: 'prisao-de-ventre',
    nome: 'Prisão de ventre',
    tambem: ['Intestino preso', 'Constipação'],
    chaves: ['intestino', 'evacuar', 'fibras', 'coco'],
    oQueE: 'É quando o intestino funciona devagar e fica difícil evacuar. O bom funcionamento do intestino depende de três coisas juntas: água, fibras e atividade física.',
    sinais: [
      'Evacuar poucas vezes',
      'Fezes duras e dificuldade para evacuar',
      'Sensação de barriga estufada'
    ],
    cuidados: [
      'Comer frutas, verduras e legumes todos os dias',
      'Beber bastante água',
      'Fazer atividade física'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Principalmente, comer pouca fibra',
        'Beber pouca água e se mexer pouco',
        'Comer muitos alimentos industrializados, que perdem fibras no processamento'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Frutas como mamão, laranja, ameixa e manga ajudam',
        'Trocar por versões integrais: arroz integral, pão integral, aveia',
        'Aumentar a água junto com as fibras',
        'Ler o rótulo para ver a quantidade de fibras dos alimentos'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a prisão de ventre for nova e não melhorar, ou se vier com sangue nas fezes ou perda de peso.',
    fonte: 'https://bvsms.saude.gov.br/constipacao-intestinal/'
  },
  {
    id: 'conjuntivite',
    nome: 'Conjuntivite',
    tambem: [],
    chaves: ['olho vermelho', 'olho', 'remela', 'coceira no olho'],
    oQueE: 'É a inflamação da membrana fina que cobre o branco do olho e a parte de dentro das pálpebras. Costuma durar de uma semana a 15 dias e não deixa sequelas.',
    sinais: [
      'Olhos vermelhos e lacrimejando',
      'Pálpebras inchadas e grudadas ao acordar',
      'Sensação de areia nos olhos',
      'Secreção (remela) e coceira',
      'Incômodo com a luz'
    ],
    cuidados: [
      'Lavar as mãos e o rosto com frequência',
      'Não coçar os olhos',
      'Não dividir toalhas, maquiagem e produtos de beleza'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'A causada por vírus ou bactéria passa pelas mãos, pela secreção e por objetos contaminados',
        'A causada por alergia (pólen, fumaça, cloro de piscina, produtos de limpeza) não passa para os outros'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Lavar os olhos e fazer compressas com água gelada filtrada e fervida, ou com soro fisiológico',
        'Usar toalha de papel ou lavar a toalha de tecido todo dia',
        'Trocar a fronha todos os dias durante a crise',
        'Não usar colírio por conta própria: alguns podem piorar muito o quadro'
      ]
    },
    ajuda: 'Procure atendimento se a visão ficar embaçada, se a dor for forte ou se não melhorar em alguns dias.',
    fonte: 'https://bvsms.saude.gov.br/conjutivite/'
  },
  {
    id: 'anemia',
    nome: 'Anemia',
    tambem: ['Anemia ferropriva', 'Falta de ferro'],
    chaves: ['ferro', 'hemoglobina', 'sangue', 'palidez', 'hemograma'],
    oQueE: 'É quando a hemoglobina, a parte do sangue que leva o oxigênio, fica abaixo do normal. Na grande maioria das vezes é causada pela falta de ferro. Só o exame de sangue confirma.',
    sinais: [
      'Cansaço',
      'Pele e parte de dentro dos olhos pálidas',
      'Falta de apetite e desânimo',
      'Em crianças, dificuldade para aprender e jeito "parado"'
    ],
    cuidados: [
      'Comer alimentos com ferro: carnes, fígado, feijão, lentilha, grão-de-bico e folhas verde-escuras',
      'Gestantes e crianças precisam de atenção especial'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Na maioria dos casos (cerca de 9 em 10), falta de ferro',
        'Também falta de outros nutrientes, como vitamina B12',
        'Crianças, gestantes, mulheres que amamentam e adolescentes são os mais afetados'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'O ferro das carnes é mais bem aproveitado pelo corpo',
        'Leite e ovo não são boas fontes de ferro',
        'Não tomar ferro por conta própria: algumas anemias não são por falta de ferro'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se sentir cansaço e palidez. O exame de sangue (hemograma) mostra se há anemia, e você pode entendê-lo na nossa análise de exame.',
    fonte: 'https://bvsms.saude.gov.br/anemia/'
  },
  {
    id: 'artrite-reumatoide',
    nome: 'Artrite reumatoide',
    tambem: ['Artrite', 'Reumatismo'],
    chaves: ['juntas', 'articulacao', 'dor nas maos', 'inflamacao'],
    oQueE: 'É uma inflamação das juntas que dura a vida toda, causada por um problema no sistema de defesa do corpo. Sem tratamento, pode deformar as juntas.',
    sinais: [
      'Dor, inchaço, calor e vermelhidão nas juntas',
      'Mais comum nas mãos, pés, punhos, cotovelos, joelhos e tornozelos',
      'Juntas duras de manhã, por mais de uma hora',
      'Costuma atingir os dois lados do corpo ao mesmo tempo',
      'Cansaço'
    ],
    cuidados: [
      'Descobrir e tratar cedo evita deformações'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O sistema de defesa do corpo ataca as juntas',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'O tratamento com remédios depende da fase e da gravidade e é indicado pelo médico',
        'Fisioterapia e terapia ocupacional ajudam a manter as atividades do dia a dia',
        'Atividade física, alongamento e relaxamento, respeitando o limite de cada um'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se as juntas ficarem inchadas e doloridas por semanas, principalmente nas mãos e de manhã.',
    fonte: 'https://bvsms.saude.gov.br/artrite-reumatoide-e-artrose-oesteoartrite/'
  },
  {
    id: 'artrose',
    nome: 'Artrose',
    tambem: ['Osteoartrose', 'Osteoartrite'],
    chaves: ['juntas', 'joelho', 'desgaste', 'reumatismo', 'idoso'],
    oQueE: 'É o desgaste da cartilagem que reveste as juntas. Faz parte do envelhecimento do corpo. A cartilagem desgastada não volta, mas o tratamento alivia a dor e ajuda a manter os movimentos.',
    sinais: [
      'Dor nas juntas, principalmente ao se movimentar',
      'Juntas rígidas'
    ],
    cuidados: [
      'Manter o peso adequado',
      'Fortalecer os músculos'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Desgaste natural das juntas com a idade',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Perder peso, se houver excesso, alivia as juntas',
        'Fortalecer toda a musculatura',
        'Fisioterapia, principalmente na água, e acupuntura ajudam na dor',
        'Remédios são só uma parte do tratamento'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a dor nas juntas atrapalhar o dia a dia.',
    fonte: 'https://bvsms.saude.gov.br/artrite-reumatoide-e-artrose-oesteoartrite/'
  },
  {
    id: 'choque-anafilatico',
    nome: 'Choque anafilático',
    tambem: ['Anafilaxia', 'Alergia grave'],
    chaves: ['alergia', 'emergencia', 'picada de abelha', 'inchaco na garganta'],
    oQueE: 'É a forma mais grave de alergia. Começa segundos ou até uma hora depois do contato com o que causa a alergia e pode levar à morte se não for tratado rápido.',
    sinais: [
      'Inchaço nos lábios, na língua ou na garganta',
      'Falta de ar, chiado no peito e tosse',
      'Placas na pele que coçam',
      'Tontura, sensação de desmaio, pele pálida e fria',
      'Enjoo, vômito e dor na barriga'
    ],
    cuidados: [
      'Evitar o que já causou alergia: alimentos, remédios, picadas de insetos ou látex',
      'Quem já teve uma reação grave pode usar uma pulseira que informe a alergia'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Picadas de abelha, vespa e marimbondo',
        'Alguns remédios, como certos antibióticos e anti-inflamatórios',
        'Alimentos como camarão, frutos do mar e amendoim',
        'Látex, como em luvas de borracha'
      ]
    },
    alerta: 'É emergência: ligue 192 (SAMU) na hora. Com atendimento rápido, o quadro é controlável. Quem já teve uma reação grave deve conversar com o médico sobre um kit de emergência e aprender a usá-lo.',
    ajuda: 'Depois de qualquer reação alérgica forte, procure acompanhamento para descobrir a causa e se proteger.',
    fonte: 'https://bvsms.saude.gov.br/choque-anafilatico/'
  },
  {
    id: 'bronquite',
    nome: 'Bronquite',
    tambem: [],
    chaves: ['bronquios', 'tosse', 'catarro', 'pulmao', 'chiado'],
    oQueE: 'É a inflamação dos brônquios, os tubos que levam o ar para dentro e para fora dos pulmões. A aguda dura uma ou duas semanas; a crônica tem crises frequentes por mais de três meses no ano.',
    sinais: [
      'Tosse com catarro',
      'Sensação de peso no peito',
      'Febre e cansaço',
      'Falta de ar e irritação na garganta'
    ],
    cuidados: [
      'Não fumar e ficar longe da fumaça de cigarro',
      'Tomar a vacina da gripe todo ano',
      'Lavar as mãos com frequência'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Infecções por vírus ou bactérias',
        'Alergias',
        'Fumaça de cigarro, poluição e produtos químicos com cheiro forte'
      ]
    },
    emCasa: {
      titulo: 'O que ajuda em casa',
      itens: [
        'Beber bastante líquido, que deixa o catarro mais fino e fácil de sair',
        'Vapor ajuda a aliviar',
        'Evitar fumaça, tintas e produtos de limpeza com cheiro forte',
        'Antibiótico só se o médico indicar, quando a causa for bactéria'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se a tosse durar mais de duas semanas, se houver falta de ar ou febre alta.',
    fonte: MS + 'b/bronquite'
  },
  {
    id: 'endometriose',
    nome: 'Endometriose',
    tambem: [],
    chaves: ['colica', 'colica forte', 'menstruacao', 'utero', 'infertilidade'],
    oQueE: 'É quando um tecido parecido com o que reveste o útero por dentro cresce fora dele, causando inflamação. Afeta muitas mulheres em idade de ter filhos e costuma demorar anos para ser descoberta.',
    sinais: [
      'Cólica menstrual muito forte',
      'Dor na parte de baixo da barriga que não passa',
      'Dor na relação sexual',
      'Dificuldade para engravidar',
      'Problemas no intestino ou para urinar que pioram na menstruação'
    ],
    cuidados: [
      'Cólica que atrapalha a vida não é normal: vale procurar avaliação'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'As causas ainda não são totalmente conhecidas',
        'Envolve fatores genéticos, hormonais e do sistema de defesa',
        'Uma hipótese é parte do sangue da menstruação voltar para dentro da barriga',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Pode começar só pelos sintomas, mesmo antes dos exames confirmarem',
        'Pode ser com remédios, cirurgia ou os dois, dependendo da dor e do desejo de engravidar'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver cólica forte, dor na relação ou dificuldade para engravidar.',
    fonte: MS + 'e/endometriose'
  },
  {
    id: 'fimose',
    nome: 'Fimose',
    tambem: [],
    chaves: ['penis', 'prepucio', 'menino', 'cirurgia'],
    oQueE: 'É quando a pele que cobre a cabeça do pênis não deixa que ela apareça. É comum em bebês e costuma se resolver sozinha com o tempo.',
    sinais: [
      'Não conseguir puxar a pele e mostrar a cabeça do pênis',
      'Em crianças, dor e inflamação no local'
    ],
    cuidados: [
      'O pediatra examina o pênis em todas as consultas até os 5 anos',
      'Não forçar a pele do bebê'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Nos bebês, é natural: aos 3 anos, metade dos meninos já consegue puxar a pele; aos 17, quase todos',
        'Também pode aparecer depois de infecções ou machucados no local'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Pode ser com pomada ou exercícios de puxar a pele aos poucos, sem forçar nem causar dor (depois dos 5 anos)',
        'Se não resolver, a cirurgia é simples e gratuita no SUS',
        'Sem tratamento, a dificuldade de higiene pode levar a outras doenças, inclusive câncer de pênis'
      ]
    },
    ajuda: 'Leve o menino ao pediatra se houver dor, inflamação ou se a fimose continuar depois dos 5 anos. Adultos com dificuldade de puxar a pele devem procurar um urologista.',
    fonte: MS + 'f/fimose'
  },
  {
    id: 'rubeola',
    nome: 'Rubéola',
    tambem: ['Sarampo alemão'],
    chaves: ['manchas', 'vacina', 'triplice viral', 'gestante', 'ingua'],
    oQueE: 'É uma doença causada por um vírus, muito contagiosa. Costuma ser leve, mas na gravidez pode causar aborto e problemas graves no bebê, como surdez e problemas no coração. O Brasil não tem casos desde 2009, graças à vacina.',
    sinais: [
      'Febre baixa',
      'Ínguas atrás da orelha, na nuca e no pescoço',
      'Manchas avermelhadas na pele'
    ],
    cuidados: [
      'Tomar a vacina tríplice viral (sarampo, caxumba e rubéola), gratuita no SUS',
      'Mulheres devem estar vacinadas antes de engravidar'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Pelas gotículas do nariz e da boca, ao tossir, falar ou respirar',
        'Passa de 5 a 7 dias antes até 5 a 7 dias depois das manchas aparecerem',
        'Da gestante para o bebê'
      ]
    },
    alerta: 'Gestante com febre e manchas na pele, ou que teve contato com alguém com rubéola, deve procurar a unidade de saúde logo.',
    ajuda: 'Procure uma unidade de saúde ao ter febre com manchas vermelhas e evite contato com outras pessoas, principalmente gestantes.',
    fonte: MS + 'r/rubeola'
  },
  {
    id: 'vermes',
    nome: 'Vermes intestinais',
    tambem: ['Verminose', 'Lombriga', 'Ancilostomíase', 'Geo-helmintíase'],
    chaves: ['verme', 'ascaris', 'ancilostomo', 'barriga', 'crianca'],
    oQueE: 'São infecções por vermes que vivem no intestino, como a lombriga e o ancilóstomo. São mais comuns onde não há saneamento básico.',
    sinais: [
      'Muitas vezes, nenhum',
      'Dor e cólicas na barriga',
      'Falta de apetite e diarreia',
      'Palidez, fraqueza e anemia'
    ],
    cuidados: [
      'Lavar as mãos depois de usar o banheiro e antes de comer ou preparar alimentos',
      'Lavar bem frutas, verduras e legumes',
      'Beber água tratada ou filtrada',
      'Usar calçados, principalmente em terra'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Engolindo ovos dos vermes em mãos sujas, alimentos mal lavados ou água não tratada',
        'As larvas do ancilóstomo entram pela pele, no contato com terra contaminada'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É simples, com remédio indicado pela equipe de saúde',
        'O diagnóstico é feito com exame de fezes'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se houver dor na barriga, diarreia ou palidez frequentes, principalmente em crianças.',
    fonte: MS + 'g/geo-helmintiase'
  },
  {
    id: 'fibrose-cistica',
    nome: 'Fibrose cística',
    tambem: ['Mucoviscidose'],
    chaves: ['pulmao', 'teste do pezinho', 'suor salgado', 'genetica'],
    oQueE: 'É uma doença genética que deixa as secreções do corpo grossas demais. O muco se acumula nos pulmões e no pâncreas, causando infecções respiratórias e problemas na digestão. Não tem cura, mas o tratamento melhorou muito a vida das pessoas.',
    sinais: [
      'Suor ou pele com gosto muito salgado',
      'Tosse que não passa, com catarro grosso',
      'Pneumonias e bronquites frequentes',
      'Pouco ganho de peso, mesmo comendo bem',
      'Diarreia'
    ],
    cuidados: [
      'Fazer o teste do pezinho no bebê, que é gratuito no SUS'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'É herdada dos pais: uma mudança em um gene',
        'Atinge meninos e meninas igualmente',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Fisioterapia respiratória, com batidinhas nas costas para soltar o catarro',
        'Remédios para ajudar na digestão, conforme a idade',
        'Antibióticos e remédios para o catarro, quando o médico indicar'
      ]
    },
    ajuda: 'Se o teste do pezinho der alterado, siga a orientação da equipe para fazer o teste do suor, que confirma o diagnóstico.',
    fonte: MS + 'f/fibrose-cistica'
  },
  {
    id: 'gordura-no-figado',
    nome: 'Gordura no fígado',
    tambem: ['Esteatose hepática'],
    chaves: ['figado', 'gordura', 'esteatose', 'alcool'],
    oQueE: 'É o acúmulo de gordura nas células do fígado. Sem tratamento, pode inflamar o fígado e evoluir para cirrose e até câncer. A boa notícia: é reversível com mudanças nos hábitos.',
    sinais: [
      'Nos casos leves, nenhum',
      'Dor na barriga, cansaço e fraqueza',
      'Falta de apetite e barriga inchada'
    ],
    cuidados: [
      'Manter o peso adequado',
      'Fazer atividade física',
      'Evitar bebida alcoólica'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Excesso de bebida alcoólica',
        'Excesso de peso, que causa a maioria dos casos sem relação com álcool',
        'Falta de atividade física, diabetes, colesterol alto e pressão alta',
        'Perder ou ganhar peso muito rápido e alguns remédios'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Mudar a alimentação e se mexer mais faz a gordura diminuir',
        'Seguir as orientações da equipe de saúde',
        'Em crianças e adolescentes, o tratamento cedo evita danos na vida adulta'
      ]
    },
    ajuda: 'Se um exame mostrou gordura no fígado, procure a unidade de saúde para acompanhamento, mesmo sem sintomas.',
    fonte: MS + 'e/esteatose-hepatica'
  },
  {
    id: 'tetano',
    nome: 'Tétano',
    tambem: ['Tétano acidental'],
    chaves: ['ferimento', 'prego', 'vacina', 'ferrugem', 'machucado'],
    oQueE: 'É uma doença grave causada por uma bactéria que vive na terra, na poeira, em galhos e em água suja. Ela entra no corpo por machucados. Não passa de uma pessoa para outra. A vacina protege.',
    sinais: [
      'Músculos contraídos e rígidos, nos braços, nas pernas e na barriga',
      'Dificuldade para abrir a boca',
      'Dores nas costas',
      'Febre baixa'
    ],
    cuidados: [
      'Manter a vacina em dia: é gratuita no SUS',
      'Usar botas e luvas em trabalhos com terra e ferramentas'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A bactéria entra por ferimentos na pele, como cortes e furos',
        'Pode atingir qualquer pessoa, de qualquer idade',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Se você se machucar',
      itens: [
        'Lave o ferimento com água e sabão',
        'Procure a unidade de saúde para ver se precisa de vacina ou soro',
        'Conte como foi o machucado e com o quê'
      ]
    },
    alerta: 'Músculos duros e dificuldade de abrir a boca depois de um machucado: procure atendimento com urgência. O tratamento é feito no hospital.',
    ajuda: 'Confira sua carteira de vacinação na unidade de saúde.',
    fonte: MS + 't/tetano-acidental'
  },
  {
    id: 'cancer',
    nome: 'Câncer',
    tambem: ['Tumor maligno'],
    chaves: ['tumor', 'cancer', 'metastase', 'oncologia'],
    oQueE: 'É o nome de mais de 100 doenças que têm em comum o crescimento descontrolado de células. Essas células formam tumores que podem invadir outras partes do corpo. Cada tipo tem sinais e tratamentos próprios.',
    sinais: [
      'Variam conforme o tipo de câncer',
      'Veja também: câncer de mama, de pele, de próstata, de intestino, leucemia e linfoma'
    ],
    cuidados: [
      'Não fumar',
      'Ter alimentação saudável e fazer atividade física',
      'Evitar excesso de bebida alcoólica e de sol',
      'Usar camisinha e tomar a vacina contra o HPV'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Mudanças (mutações) nas instruções que as células seguem para crescer',
        'A maioria dos casos está ligada ao ambiente e aos hábitos: cigarro, má alimentação, álcool, sol em excesso, falta de atividade física',
        'Alguns vírus, como o HPV, podem causar câncer',
        'O risco aumenta com a idade; casos só por herança da família são raros',
        'Câncer não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Cada tipo de câncer tem tratamento próprio, escolhido para cada pessoa',
        'Quanto mais cedo é descoberto, maiores as chances de sucesso'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se notar qualquer mudança no corpo que não passa, como caroços, feridas que não cicatrizam ou perda de peso sem motivo. Na maioria das vezes não é câncer, mas precisa ser examinado.',
    fonte: MS + 'c/cancer'
  },
  {
    id: 'cancer-de-pele',
    nome: 'Câncer de pele',
    tambem: ['Melanoma'],
    chaves: ['pele', 'pinta', 'sol', 'mancha', 'ferida'],
    oQueE: 'É o câncer mais comum no Brasil, causado principalmente pelo excesso de sol. O tipo mais comum (não melanoma) tem alta chance de cura se tratado cedo. O melanoma é mais raro e mais grave.',
    sinais: [
      'Pintas ou sinais que mudam de tamanho, forma ou cor',
      'Manchas que coçam, descamam ou sangram',
      'Feridas que não cicatrizam em 4 semanas',
      'Mais comum no rosto, no pescoço e nas orelhas'
    ],
    cuidados: [
      'Evitar o sol entre 10h e 16h',
      'Usar chapéu, roupas e protetor solar',
      'Não usar câmaras de bronzeamento artificial'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Excesso de sol ao longo da vida, inclusive na infância',
        'É mais comum em pessoas de pele e olhos claros, albinos e pessoas com vitiligo',
        'Quem trabalha no sol e quem tem casos na família tem mais risco',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Geralmente é uma cirurgia para retirar a lesão, muitas vezes sem internação',
        'É feito de graça pelo SUS'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se notar uma pinta diferente ou uma ferida que não cicatriza.',
    fonte: MS + 'c/cancer-de-pele'
  },
  {
    id: 'cancer-de-prostata',
    nome: 'Câncer de próstata',
    tambem: [],
    chaves: ['prostata', 'homem', 'urina', 'psa', 'toque retal'],
    oQueE: 'É o tumor da próstata, uma glândula masculina que fica abaixo da bexiga. Na maioria dos casos cresce devagar e pode nem dar sinais. Em outros, cresce rápido. É o câncer mais comum nos homens, depois do de pele.',
    sinais: [
      'No início, geralmente nenhum',
      'Dificuldade para urinar ou jato fraco',
      'Vontade de urinar muitas vezes, inclusive à noite',
      'Sangue na urina',
      'Esses sinais também aparecem no aumento benigno da próstata, que é comum depois dos 50'
    ],
    cuidados: [
      'Manter o peso adequado',
      'Conversar com um profissional de saúde sobre os prós e contras dos exames de rotina'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O risco aumenta com a idade: 9 em cada 10 casos são em homens com mais de 55 anos',
        'Pai, avô ou irmão que teve antes dos 60 anos',
        'Excesso de peso'
      ]
    },
    emCasa: {
      titulo: 'Sobre os exames',
      itens: [
        'O Ministério da Saúde não recomenda exames de rotina para homens sem sinais',
        'Com sinais, os exames são o toque retal e o PSA (de sangue); a biópsia confirma',
        'Converse com a equipe de saúde para decidir junto'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver dificuldade para urinar ou sangue na urina.',
    fonte: MS + 'c/cancer-de-prostata'
  },
  {
    id: 'cancer-de-intestino',
    nome: 'Câncer de intestino',
    tambem: ['Câncer colorretal'],
    chaves: ['intestino', 'sangue nas fezes', 'colon', 'reto'],
    oQueE: 'É o câncer que atinge o intestino grosso e o reto. Hábitos como alimentação, peso e atividade física têm um papel importante na prevenção.',
    sinais: [
      'Sangue nas fezes',
      'Mudança no funcionamento do intestino (diarreia ou prisão de ventre)',
      'Dor ou desconforto na barriga',
      'Fraqueza, anemia e perda de peso sem motivo',
      'Fezes muito finas'
    ],
    cuidados: [
      'Comer frutas, verduras, legumes, feijão e cereais integrais',
      'Evitar embutidos (salsicha, presunto, linguiça, salame) e limitar a carne vermelha',
      'Manter o peso adequado e se movimentar todos os dias',
      'Não fumar e evitar álcool'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Idade a partir de 50 anos',
        'Falta de atividade física, excesso de peso e alimentação com pouca fibra',
        'Muitos embutidos e carne vermelha',
        'Casos na família e doenças inflamatórias do intestino, como a doença de Crohn'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Esses sinais também aparecem em doenças mais simples, como hemorroidas e verminoses',
        'Por isso, o importante é investigar, sem pânico'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se notar sangue nas fezes ou mudança no intestino que dura semanas.',
    fonte: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/intestino/versao-para-populacao'
  },
  {
    id: 'leucemia',
    nome: 'Leucemia',
    tambem: ['Câncer no sangue'],
    chaves: ['sangue', 'medula', 'globulos brancos', 'hemograma', 'cancer'],
    oQueE: 'É um câncer das células do sangue, que começa na medula óssea, onde o sangue é produzido. As células doentes atrapalham a produção das normais. Pode ser aguda (piora rápido) ou crônica (piora devagar).',
    sinais: [
      'Cansaço, palidez e falta de ar (anemia)',
      'Infecções frequentes',
      'Sangramento na gengiva ou no nariz e manchas roxas na pele',
      'Ínguas sem dor, febre e suor à noite',
      'Dores nos ossos e perda de peso sem motivo'
    ],
    cuidados: [
      'Não fumar',
      'No trabalho, usar proteção contra benzeno, agrotóxicos e radiação'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'As causas ainda não estão definidas',
        'Na maioria das vezes, não há um fator de risco que pudesse ser evitado',
        'Contato com benzeno (da gasolina), radiação e agrotóxicos aumenta o risco',
        'A forma aguda linfoide é mais comum em crianças; as outras, em idosos',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Precisa começar logo depois do diagnóstico',
        'O hemograma, exame de sangue comum, muitas vezes é o primeiro a mostrar alterações'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver manchas roxas sem motivo, sangramentos, infecções repetidas ou cansaço muito grande.',
    fonte: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/leucemia/versao-para-populacao'
  },
  {
    id: 'linfoma',
    nome: 'Linfoma',
    tambem: ['Linfoma não Hodgkin', 'Linfoma de Hodgkin'],
    chaves: ['ingua', 'ganglio', 'caroco no pescoco', 'cancer'],
    oQueE: 'É um câncer que começa nos linfonodos (as ínguas), que fazem parte do sistema de defesa do corpo. Existem dois grupos principais: Hodgkin e não Hodgkin.',
    sinais: [
      'Caroços (ínguas) sem dor no pescoço, nas axilas ou na virilha',
      'Suor excessivo à noite e febre',
      'Coceira na pele',
      'Cansaço e perda de peso sem motivo'
    ],
    cuidados: [
      'No trabalho, evitar contato com agrotóxicos, benzeno e solventes, usando proteção'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Defesa do corpo enfraquecida, como em quem vive com HIV ou usa remédios que baixam a imunidade',
        'Alguns vírus e a bactéria H. pylori',
        'Contato com agrotóxicos, solventes, benzeno e radiação',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Na maioria das vezes, ínguas e febre não são câncer',
        'Mas, se não melhorarem em poucos dias, precisam ser investigadas'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver ínguas que não somem, suor à noite ou perda de peso sem motivo.',
    fonte: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/linfoma-nao-hodgkin/versao-para-populacao'
  },
  {
    id: 'clamidia',
    nome: 'Clamídia',
    tambem: [],
    chaves: ['ist', 'dst', 'corrimento', 'ardencia ao urinar'],
    oQueE: 'É uma infecção sexualmente transmissível (IST) causada por uma bactéria. Atinge os órgãos genitais e pode afetar a garganta e os olhos. Na maioria das vezes não dá sinais, mas tem cura com antibiótico.',
    sinais: [
      'Na maioria das vezes (7 a 8 em cada 10), nenhum',
      'Em mulheres: corrimento amarelado ou claro, sangramento fora da menstruação e dor no pé da barriga',
      'Em homens: ardência ao urinar, pus saindo do pênis e dor nos testículos'
    ],
    cuidados: [
      'Usar camisinha em todas as relações sexuais',
      'Gestantes: fazer o pré-natal com os exames pedidos'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por relação sexual (anal, oral ou vaginal) sem camisinha',
        'Da mãe para o bebê'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com antibiótico receitado pelo médico, de graça no SUS',
        'As parcerias sexuais também precisam ser tratadas, mesmo sem sinais',
        'Evitar sexo sem camisinha até o fim do tratamento'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver corrimento, dor ao urinar ou dor no pé da barriga. Sem tratamento, pode causar dificuldade para ter filhos.',
    fonte: MS + 'c/clamidia'
  },
  {
    id: 'gonorreia',
    nome: 'Gonorreia',
    tambem: ['Uretrite'],
    chaves: ['ist', 'dst', 'pus', 'corrimento', 'esquentamento'],
    oQueE: 'É uma infecção sexualmente transmissível (IST) causada por uma bactéria. Muitas vezes aparece junto com a clamídia. Atinge os órgãos genitais, a garganta e os olhos.',
    sinais: [
      'Muitas vezes, nenhum, principalmente nas mulheres',
      'Em homens: ardor e "esquentamento" ao urinar, pus saindo do pênis e dor nos testículos',
      'Em mulheres: corrimento amarelado ou claro, dor ao urinar ou no pé da barriga, dor ou sangramento na relação'
    ],
    cuidados: [
      'Usar camisinha (masculina ou feminina) é a melhor forma de prevenção'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por relação sexual sem camisinha',
        'Da mãe para o bebê no parto, o que pode causar uma conjuntivite grave no recém-nascido'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com antibiótico indicado na unidade de saúde',
        'As parcerias sexuais também precisam ser tratadas, mesmo sem sinais'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver qualquer um desses sinais. Sem tratamento, pode causar DIP e dificuldade para ter filhos.',
    fonte: 'https://www.gov.br/aids/pt-br/assuntos/ist/gonorreia-e-clamidia'
  },
  {
    id: 'tricomoniase',
    nome: 'Tricomoníase',
    tambem: [],
    chaves: ['ist', 'dst', 'corrimento', 'mau cheiro'],
    oQueE: 'É uma infecção sexualmente transmissível (IST) causada por um parasita encontrado principalmente na vagina. Pode não dar sinais, mas facilita pegar outras ISTs.',
    sinais: [
      'Corrimento amarelado, esverdeado ou acinzentado, com cheiro forte, parecido com peixe',
      'Às vezes, coceira, dor ao urinar e dor ou sangramento na relação'
    ],
    cuidados: [
      'Usar camisinha (masculina ou feminina) é a melhor forma de prevenção'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por relação sexual sem camisinha'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com remédio indicado na unidade de saúde',
        'As parcerias sexuais também precisam ser tratadas, mesmo sem sinais',
        'Na gravidez, sem tratamento, pode fazer a bolsa romper antes da hora'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se notar corrimento diferente ou com cheiro forte.',
    fonte: 'https://www.gov.br/aids/pt-br/assuntos/ist/tricomoniase'
  },
  {
    id: 'doenca-inflamatoria-pelvica',
    nome: 'Doença inflamatória pélvica',
    tambem: ['DIP'],
    chaves: ['dor no pe da barriga', 'utero', 'trompas', 'ovarios', 'ist'],
    oQueE: 'É uma infecção que sobe pela vagina e atinge o útero, as trompas e os ovários. Acontece principalmente quando a gonorreia ou a clamídia não são tratadas.',
    sinais: [
      'Dor no pé da barriga ou durante a relação sexual',
      'Dor na barriga e nas costas',
      'Febre, cansaço e vômitos',
      'Corrimento, sangramento e dor ao urinar'
    ],
    cuidados: [
      'Usar camisinha',
      'Tratar logo qualquer IST, junto com as parcerias'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Bactérias que chegam pela relação sexual sem camisinha',
        'A maioria dos casos é em mulheres com outra IST sem tratamento',
        'Mais raramente, depois de procedimentos no útero, como a colocação de DIU'
      ]
    },
    alerta: 'Procure um profissional de saúde imediatamente ao ter esses sinais. Casos mais graves precisam de internação para receber antibiótico na veia.',
    ajuda: 'Sem tratamento, a DIP pode causar dor crônica e dificuldade para ter filhos.',
    fonte: 'https://www.gov.br/aids/pt-br/assuntos/ist/doenca-inflamatoria-pelvica-dip'
  },
  {
    id: 'cervicite',
    nome: 'Cervicite',
    tambem: ['Endocervicite'],
    chaves: ['colo do utero', 'ist', 'corrimento', 'sangramento'],
    oQueE: 'É a inflamação do colo do útero, causada principalmente pelas bactérias da clamídia e da gonorreia. É uma infecção sexualmente transmissível (IST) e quase sempre não dá sinais.',
    sinais: [
      'Na maioria das vezes (7 a 8 em cada 10), nenhum',
      'Corrimento amarelado ou claro',
      'Sangramento fora da menstruação ou na relação',
      'Dor ao urinar ou no pé da barriga'
    ],
    cuidados: [
      'Usar camisinha em todas as relações'
    ],
    comoPega: {
      titulo: 'Como se pega',
      itens: [
        'Por relação sexual sem camisinha',
        'É mais comum em pessoas com menos de 25 anos, com parcerias novas ou várias parcerias'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É feito com antibiótico indicado na unidade de saúde',
        'As parcerias sexuais também precisam ser tratadas, mesmo sem sinais'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver qualquer um desses sinais. Sem tratamento, pode causar DIP e dificuldade para ter filhos.',
    fonte: 'https://www.gov.br/aids/pt-br/assuntos/ist/corrimentos'
  },
  {
    id: 'corrimento-vaginal',
    nome: 'Corrimento vaginal',
    tambem: ['Vaginite', 'Vaginose', 'Candidíase vaginal'],
    chaves: ['corrimento', 'coceira', 'vagina', 'cheiro', 'candidiase'],
    oQueE: 'Corrimento diferente do normal, com coceira ou cheiro, costuma indicar uma infecção na vagina. As causas mais comuns são a candidíase (por fungo) e a vaginose (desequilíbrio das bactérias da vagina), que não são ISTs. A tricomoníase, que é IST, também causa.',
    sinais: [
      'Candidíase: coceira forte, ardência ao urinar e corrimento branco, em grumos, como leite coalhado',
      'Vaginose: corrimento branco-acinzentado com cheiro forte, parecido com peixe, que piora depois da relação e na menstruação',
      'Vermelhidão e inchaço na vulva'
    ],
    cuidados: [
      'Evitar roupas que deixam a região quente e úmida',
      'Evitar talcos, perfumes, sabonetes e desodorantes íntimos'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Candidíase: o fungo já vive no corpo e cresce demais com gravidez, diabetes sem controle, uso de antibióticos ou imunidade baixa',
        'Vaginose: desequilíbrio das bactérias normais da vagina',
        'Na candidíase e na vaginose, a relação sexual não é a principal causa'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Depende da causa, por isso precisa de avaliação na unidade de saúde',
        'A candidíase é tratada com creme vaginal ou comprimido indicado pelo profissional',
        'A candidíase pode voltar; se voltar sempre, converse com a equipe'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se o corrimento mudar de cor ou de cheiro, ou se houver coceira ou dor.',
    fonte: 'https://www.gov.br/aids/pt-br/assuntos/ist/corrimentos'
  },
  {
    id: 'dpoc',
    nome: 'DPOC',
    tambem: ['Doença pulmonar obstrutiva crônica', 'Enfisema', 'Bronquite crônica'],
    chaves: ['pulmao', 'falta de ar', 'cigarro', 'fumante', 'enfisema pulmonar'],
    oQueE: 'É um grupo de doenças dos pulmões que inclui a bronquite crônica e o enfisema. Está muito ligada ao cigarro. Começa devagar e vai piorando com os anos.',
    sinais: [
      'No começo, falta de ar leve ao subir escadas ou andar rápido',
      'Com o tempo, falta de ar com esforços cada vez menores, até parado',
      'Tosse com catarro'
    ],
    cuidados: [
      'Não fumar: o cigarro causa a imensa maioria dos casos',
      'Evitar poeira, poluição e vapores químicos'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Principalmente o cigarro',
        'Contato constante com poeira, poluição e vapores químicos',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Parar de fumar é a única forma de impedir que a doença avance. O SUS oferece tratamento para parar de fumar',
        'Tomar todo ano a vacina da gripe e a vacina contra pneumonia (pneumococo)',
        'Exercícios de reabilitação respiratória melhoram a disposição',
        'Nos casos graves, pode ser preciso oxigênio em casa'
      ]
    },
    ajuda: 'Fumantes ou ex-fumantes com falta de ar ou tosse com catarro devem procurar uma unidade de saúde. Falta de ar forte de repente: procure atendimento na hora.',
    fonte: 'https://bvsms.saude.gov.br/3a-quarta-feira-do-mes-17-11-dia-mundial-da-doenca-pulmonar-obstrutiva-cronica-dpoc-pulmoes-saudaveis-mais-importante-do-que-nunca/'
  },
  {
    id: 'fibromialgia',
    nome: 'Fibromialgia',
    tambem: [],
    chaves: ['dor no corpo', 'dor cronica', 'cansaco', 'sono'],
    oQueE: 'É uma dor que dura muito tempo e muda de lugar pelo corpo, em músculos, tendões e juntas. Está ligada ao jeito como o sistema nervoso controla a dor. Não causa inflamação nem deformação, mas a dor é real e pode ser forte.',
    sinais: [
      'Dor espalhada pelo corpo, que vai e volta',
      'Cansaço e falta de energia',
      'Sono leve, acordar cansado',
      'Problemas de memória e atenção, ansiedade e tristeza',
      'Dor de cabeça e dormência nas mãos e nos pés'
    ],
    cuidados: [
      'Fazer atividade física regular, que ajuda a prevenir crises de dor',
      'Evitar situações de estresse'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'A causa exata é desconhecida',
        'Pessoas com fibromialgia têm menos serotonina, uma substância ligada ao sono e ao humor',
        'Desequilíbrios hormonais, tensão e estresse podem estar envolvidos',
        'De cada 10 pessoas com a doença, 7 a 9 são mulheres'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Cuidar do sono: tirar luz, barulho e colchão ruim do caminho',
        'Evitar carregar peso e procurar posições confortáveis ao sentar',
        'Beber água, comer bem, evitar cigarro e limitar o álcool',
        'Apoio psicológico ajuda, inclusive porque muitas vezes a pessoa não é levada a sério'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver dor espalhada pelo corpo por muito tempo. O SUS atende a fibromialgia, com equipe, fisioterapia e acupuntura.',
    fonte: 'https://bvsms.saude.gov.br/12-5-dia-nacional-de-conscientizacao-e-enfrentamento-da-fibromialgia-2025/'
  },
  {
    id: 'colesterol-alto',
    nome: 'Colesterol alto',
    tambem: ['Hipercolesterolemia', 'Colesterol'],
    chaves: ['ldl', 'hdl', 'gordura no sangue', 'triglicerides'],
    oQueE: 'O colesterol é necessário ao corpo, mas em excesso, principalmente o LDL ("ruim"), se deposita nas artérias e aumenta o risco de infarto e AVC. O HDL é o "bom". Colesterol alto não dá sinais: só o exame de sangue mostra.',
    sinais: [
      'Não dá sinais',
      'Só o exame de sangue mostra os níveis de colesterol'
    ],
    cuidados: [
      'Fazer atividade física',
      'Ter uma alimentação saudável, com menos gordura',
      'Fazer o exame quando a equipe de saúde indicar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Pode vir da família: há pessoas cujo corpo produz colesterol demais',
        'Falta de atividade física',
        'Alimentação com muita gordura e pouca fibra',
        'A maior parte do colesterol é produzida pelo próprio fígado; só cerca de 15% vem da comida'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Exercícios ajudam a baixar o LDL e a subir o HDL',
        'Abacate, nozes, aveia, frutas e legumes ajudam a aumentar o HDL',
        'Perder peso, se houver excesso, principalmente de barriga',
        'Às vezes, só a mudança de hábitos não basta e o médico indica remédio'
      ]
    },
    ajuda: 'Pergunte na unidade de saúde quando fazer o exame de colesterol, principalmente se houver casos na família.',
    fonte: 'https://bvsms.saude.gov.br/08-8-dia-nacional-de-prevencao-e-controle-do-colesterol-2/'
  },
  {
    id: 'alergia',
    nome: 'Alergia',
    tambem: ['Alergias', 'Alergia alimentar'],
    chaves: ['alergico', 'coceira', 'espirro', 'rotulo', 'alimento'],
    oQueE: 'É quando o sistema de defesa do corpo reage demais a algo que normalmente é inofensivo, como um alimento ou a poeira da casa. Em alguns casos pode ser grave.',
    sinais: [
      'Alimentar: inchaço ou coceira nos lábios, diarreia, vômitos e pele irritada',
      'Respiratória: espirros, nariz escorrendo, coceira nos olhos, tosse e falta de ar',
      'A remédios: de enjoo até reações graves'
    ],
    cuidados: [
      'Descobrir o que causa a alergia e evitar',
      'Ler os rótulos: por regra da Anvisa, eles avisam se o alimento tem os principais causadores de alergia, como leite, ovo, trigo, amendoim, castanhas, soja, peixes e crustáceos'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O corpo trata como perigosa uma substância que costuma ser inofensiva',
        'Alimentos, poeira, remédios, picadas de insetos e pelos de animais são causas comuns',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Atenção aos "traços": alimentos feitos nas mesmas máquinas podem ter um pouco do que causa a alergia',
        'Veja também: rinite, urticária, dermatite atópica e choque anafilático'
      ]
    },
    alerta: 'Inchaço na garganta, nos lábios ou na língua, ou falta de ar, é emergência: ligue 192.',
    ajuda: 'Procure uma unidade de saúde para descobrir a causa se as reações se repetirem.',
    fonte: 'https://bvsms.saude.gov.br/dia-mundial-da-alergia-mais-seguranca-nos-rotulos-dos-alimentos/'
  },
  {
    id: 'esclerose-multipla',
    nome: 'Esclerose múltipla',
    tambem: [],
    chaves: ['neurologia', 'formigamento', 'visao dupla', 'surto', 'mielina'],
    oQueE: 'É uma doença em que o sistema de defesa ataca a capa que protege os nervos do cérebro e da medula. Isso atrapalha as mensagens do cérebro para o corpo. Não tem cura, mas o tratamento controla e as pessoas continuam estudando e trabalhando.',
    sinais: [
      'Formigamento',
      'Visão embaçada ou dupla',
      'Fraqueza nos músculos e falta de equilíbrio',
      'Alterações para urinar',
      'Sinais que duram mais de 24 horas, sem febre, merecem atenção'
    ],
    cuidados: [
      'Não pode ser evitada, mas alimentação saudável, atividade física e não fumar podem diminuir a chance'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'O próprio sistema de defesa ataca o sistema nervoso',
        'Tem várias causas juntas',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'Remédios para as crises (surtos) e remédios contínuos que mudam o curso da doença',
        'Fisioterapia e reabilitação ajudam na força, no equilíbrio, na dor e no cansaço',
        'Quanto mais cedo começar, melhor'
      ]
    },
    ajuda: 'Procure uma unidade de saúde se tiver formigamento, visão dupla ou fraqueza que duram mais de um dia, sem febre.',
    fonte: 'https://www.gov.br/hubrasil/pt-br/comunicacao/noticias/esclerose-multipla-nao-tem-cura-mas-tratamento-ajuda-a-controlar-sintomas-e-a-reduzir-risco-de-progressao'
  },
  {
    id: 'astigmatismo',
    nome: 'Astigmatismo',
    tambem: [],
    chaves: ['visao', 'olho', 'oculos', 'visao distorcida', 'cornea'],
    oQueE: 'É um problema de "grau" em que a córnea, a parte da frente do olho, tem uma curvatura irregular. Com isso, a imagem fica distorcida.',
    sinais: [
      'Visão distorcida ou embaçada'
    ],
    cuidados: [
      'Fazer consulta com o oftalmologista ao notar dificuldade para enxergar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Curvatura irregular da córnea, que forma a imagem em planos diferentes',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'Sobre o tratamento',
      itens: [
        'É corrigido com óculos ou lentes de contato'
      ]
    },
    ajuda: 'Procure uma unidade de saúde para encaminhar a consulta com o oftalmologista se a visão estiver distorcida ou embaçada.',
    fonte: MS + 'd/doencas-oculares/principais-doencas-oculares/principais-doencas-oculares'
  },
  {
    id: 'insuficiencia-cardiaca',
    nome: 'Insuficiência cardíaca',
    tambem: ['Coração fraco'],
    chaves: ['coracao', 'falta de ar', 'pernas inchadas', 'cansaco'],
    oQueE: 'É quando o coração fica fraco e não consegue bombear o sangue que o corpo precisa. É uma doença que dura a vida toda e precisa de cuidado contínuo. O tratamento melhora os sintomas e aumenta o tempo de vida.',
    sinais: [
      'Pés e pernas inchados',
      'Cansaço e falta de ar no dia a dia',
      'Falta de ar ao deitar ou durante a noite',
      'Tosse à noite',
      'Ganho rápido de peso: 2 a 3 kg em uma semana'
    ],
    cuidados: [
      'Controlar a pressão e o diabetes',
      'Ter alimentação saudável, com comida de verdade, como arroz e feijão, e menos ultraprocessados',
      'Não fumar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Infarto, pressão alta sem controle e doença de Chagas',
        'Problemas nas válvulas do coração, infecções e arritmias',
        'Doenças do coração herdadas da família ou de nascença',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Tomar os remédios todos os dias, nos mesmos horários',
        'Não parar nem mudar os remédios sem falar com a equipe',
        'Pesar-se com frequência: ganhar peso rápido pode ser sinal de piora'
      ]
    },
    alerta: 'Falta de ar muito forte, desmaio ou coração disparado em repouso: ligue 192 (SAMU).',
    ajuda: 'Procure uma unidade de saúde se tiver pernas inchadas e falta de ar com esforços que antes eram fáceis.',
    fonte: 'https://linhasdecuidado.saude.gov.br/portal/insuficiencia-cardiaca-(IC)-no-adulto/sou-paciente'
  },
  {
    id: 'demencia',
    nome: 'Demência',
    tambem: [],
    chaves: ['memoria', 'esquecimento', 'idoso', 'alzheimer', 'cuidador'],
    oQueE: 'É um nome geral para várias doenças que causam perda de memória, de linguagem e da capacidade de resolver problemas. O Alzheimer é a causa mais comum, mas não a única. Na maioria das vezes, piora com o tempo.',
    sinais: [
      'Esquecer fatos recentes, compromissos e contas',
      'Dificuldade para planejar tarefas, como preparar refeições',
      'Se perder no próprio bairro',
      'Dificuldade para achar palavras e entender conversas'
    ],
    cuidados: [
      'Manter corpo e mente ativos, com pelo menos 150 minutos de atividade física por semana',
      'Comer comida de verdade e evitar ultraprocessados',
      'Limitar a bebida alcoólica e não se isolar'
    ],
    comoPega: {
      titulo: 'Por que acontece',
      itens: [
        'Alterações no cérebro, na maioria das vezes permanentes',
        'Atenção: depressão, efeitos de remédios, excesso de álcool, problemas de tireoide e falta de vitaminas também causam esquecimento, e esses têm tratamento',
        'Não passa de uma pessoa para outra'
      ]
    },
    emCasa: {
      titulo: 'No dia a dia',
      itens: [
        'Ir ao médico regularmente e seguir o tratamento',
        'Não usar remédios indicados por outras pessoas',
        'Quem cuida deve aprender sobre a doença, pedir ajuda à equipe e reservar tempo para cuidar de si'
      ]
    },
    ajuda: 'Se você ou alguém próximo tiver dificuldade de memória ou mudanças no pensamento, procure a unidade de saúde: pode ser uma causa tratável.',
    fonte: 'https://linhasdecuidado.saude.gov.br/portal/demencia/sou-paciente-cuidador/'
  }
];
