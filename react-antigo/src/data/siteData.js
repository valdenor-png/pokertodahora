export const navigationItems = [
  { label: 'Início', path: '/' },
  { label: 'Notícias', path: '/noticias' },
  { label: 'Estratégia', path: '/estrategia' },
  { label: 'Histórias', path: '/historias' },
  { label: 'Agenda', path: '/agenda' },
];

export const categories = ['Todos', 'Torneios', 'Online', 'Estratégia', 'Comunidade', 'Cultura'];

export const articles = [
  {
    id: 'quando-o-stack-encurta',
    number: '01',
    icon: 'spade',
    category: 'Estratégia',
    label: 'Análise de jogo',
    title: 'Quando o stack encurta, a mesa inteira muda de idioma',
    description: 'Pressão, posição e tempo: um olhar prático para as decisões que aparecem quando cada blind começa a pesar.',
    readTime: '7 min de leitura',
    tone: 'lime',
    featured: true,
    body: [
      'Quando os stacks diminuem, a pergunta deixa de ser apenas “qual é a minha mão?” e passa a ser “qual é a história que esta mesa está contando agora?”. O ritmo dos blinds comprime as opções e aumenta o valor da posição.',
      'Antes de pensar em uma jogada isolada, observe quem está protegendo fichas, quem precisa agir e quem acabou de mostrar agressividade. Esses detalhes tornam as decisões mais nítidas do que qualquer fórmula decorada.',
      'A boa revisão começa depois da mão: anote o contexto, o tamanho efetivo dos stacks e o que você enxergaria diferente com alguns minutos de distância.',
    ],
  },
  {
    id: 'mapa-de-uma-serie',
    number: '02',
    icon: 'chip',
    category: 'Torneios',
    label: 'Radar da semana',
    title: 'O que observar em uma série antes de escolher a primeira mesa',
    description: 'Estrutura, duração e campo fazem parte da leitura — muito antes da primeira carta ser distribuída.',
    readTime: '4 min de leitura',
    tone: 'orange',
    body: [
      'Escolher uma série não precisa ser um exercício de impulso. Comece pelo formato que combina com o seu tempo, pela estrutura de blinds e pelo nível de experiência que você procura na mesa.',
      'Um calendário bem lido ajuda a reservar energia para as etapas que importam e evita que o volume vire apenas uma sucessão de registros sem intenção.',
    ],
  },
  {
    id: 'revisar-e-aprender',
    number: '03',
    icon: 'book',
    category: 'Estratégia',
    label: 'Caderno de estudo',
    title: 'Revisar mãos é como voltar à mesa sem o relógio correndo',
    description: 'Um método curto para transformar dúvidas recorrentes em material de estudo realmente útil.',
    readTime: '5 min de leitura',
    tone: 'blue',
    body: [
      'Na revisão, o resultado final é só uma parte da mão. Recriar as alternativas, observar os tamanhos escolhidos e explicar a própria lógica é o que revela os pontos de melhoria.',
      'Comece por três mãos da sessão. Poucas, mas descritas com honestidade. A constância de uma revisão pequena costuma ensinar mais do que uma maratona sem foco.',
    ],
  },
  {
    id: 'domingo-na-comunidade',
    number: '04',
    icon: 'heart',
    category: 'Comunidade',
    label: 'Histórias de mesa',
    title: 'O domingo em que uma mesa virou ponto de encontro',
    description: 'Uma história sobre amizade, escuta e o ritual de reunir pessoas para jogar e aprender juntas.',
    readTime: '8 min de leitura',
    tone: 'pink',
    body: [
      'Toda comunidade de poker nasce de uma mesa e de alguém disposto a explicar uma regra a mais. Aos poucos, a partida ganha outras camadas: conversa, troca de repertório e memórias que ficam fora do baralho.',
      'Esta é uma história fictícia, inspirada nos encontros que mantêm o jogo vivo muito depois de as fichas voltarem para a caixa.',
    ],
  },
  {
    id: 'o-que-a-mesa-mostra',
    number: '05',
    icon: 'diamond',
    category: 'Cultura',
    label: 'Olhar de fora',
    title: 'O que uma boa transmissão revela sobre a cultura do poker',
    description: 'Narrativa, leitura e silêncio: por que acompanhar uma mesa pode ser tão envolvente quanto jogar.',
    readTime: '6 min de leitura',
    tone: 'cream',
    body: [
      'Uma transmissão bem construída não mostra apenas cartas. Ela dá contexto ao risco, cria personagens e convida quem assiste a formar uma opinião sobre cada decisão.',
      'É nesse espaço entre a ação e o comentário que o poker se torna uma conversa coletiva.',
    ],
  },
  {
    id: 'ritual-de-preparacao',
    number: '06',
    icon: 'clock',
    category: 'Online',
    label: 'Rotina de jogo',
    title: 'Antes de abrir o lobby: um ritual de cinco minutos',
    description: 'Pequenos checagens que ajudam a entrar em uma sessão com atenção, limites e intenção.',
    readTime: '3 min de leitura',
    tone: 'lilac',
    body: [
      'Uma sessão começa antes do primeiro registro. Checar o tempo disponível, o foco e os próprios limites cria um intervalo importante entre o cotidiano e o jogo.',
      'O objetivo não é controlar cada resultado, mas criar condições para tomar decisões mais conscientes.',
    ],
  },
];

export const strategyNotes = [
  { number: '01', title: 'Leia o contexto', text: 'Posição, stacks e dinâmica contam uma história antes da sua decisão.' },
  { number: '02', title: 'Nomeie a dúvida', text: 'Uma pergunta clara transforma uma mão confusa em material de estudo.' },
  { number: '03', title: 'Volte sem pressa', text: 'A revisão é onde o resultado dá lugar ao processo e ao aprendizado.' },
];

export const storyNotes = [
  { quote: 'A melhor mesa não é a que tem mais fichas. É a que faz todo mundo querer voltar na semana seguinte.', name: 'Caderno de uma mesa caseira', role: 'história ilustrativa' },
  { quote: 'Quando alguém explica uma mão sem tentar parecer maior do que ela, todo o grupo aprende.', name: 'Anotações de um estudo coletivo', role: 'história ilustrativa' },
  { quote: 'Há uma diferença entre disputar uma mão e dividir uma mesa. Uma boa comunidade conhece as duas.', name: 'Diário de torneio', role: 'história ilustrativa' },
];

export const agendaItems = [
  { date: 'Toda segunda', type: 'Mesa de estudo', title: 'Revisão coletiva: decisões em torneios', place: 'Online · 20h' },
  { date: 'Quarta, 19h', type: 'Ao vivo', title: 'Conversa aberta: como montar uma rotina de jogo', place: 'Canal pokertodahora' },
  { date: 'Próxima edição', type: 'Especial', title: 'Caderno de histórias: as mesas que formam comunidades', place: 'Publicação digital' },
];

export const editorialPrinciples = [
  ['Ler antes de opinar', 'Contexto, estrutura e linguagem acessível em cada assunto que colocamos na mesa.'],
  ['Estudo sem promessa fácil', 'Estratégia é processo. Não vendemos resultados, atalhos ou garantias de ganho.'],
  ['Jogo responsável sempre', 'Poker deve caber em uma rotina consciente, com limites de tempo e orçamento.'],
];
