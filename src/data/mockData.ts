import { Plan, Neighborhood, Recipe } from '../types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBAkZqfWj2d8mJq899XUnUW35logAczKKExj0qXkusSDCp3OeGVBffhWWMc_Rx59V2u1JAOQucQi_2qygY0zkgitq7yGRpl1kRxjsYewdzDgT-ZqAvcpLBX5Iu_wiwDTlHs_fZ4cfcMnquLjvsj-gf-S3f0DU3rAKvZ4eG8_qd8KuNbgx5I6rx0HNgPhs5OyNKHZ1Hdnxqu0xYGXqUhqSmxTvCSS5FvyURbfI67V9XTsYP30rybSyKrWw';

export const BASKET_EGGS_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1VkKQPtl2n33k8ZqTQAhSg6OkEoCpDhjbVL8REMW1Wo1q0g_RJvNpw0ES4JADjqDDcR0nEEGT-K_WgjCuK8ouYQPlAEWyMfXHf6IAorIyf-I5a4iobMBAIm7HjLmRO47ybr75OJURNmgQB46Ot6YUthVGtjkne8Cv6hQjs-mpuVj3biJcaNV3JxC7kNcif6OfZDcv3armTu0e4E7wc4VxDspQMh9-Er21ZBqLPW8VmVIcuXDwkB7Ww_e5gv';

export const PLANS: Plan[] = [
  {
    id: 'quinzenal',
    name: 'QUINZENAL',
    tagline: 'Ideal para consumo moderado.',
    priceMonthly: 82,
    originalPrice: 91,
    deliveriesPerMonth: 2,
    eggsTotal: 60,
    eggsPerDelivery: 30,
    features: [
      '2 entregas no mês',
      '60 ovos total (30 por quinzena)',
      'Ovos colhidos na semana',
      'Reposição sem custo em caso de avaria',
      'Pausa e cancelamento sem burocracia',
    ],
  },
  {
    id: 'semanal',
    name: 'SEMANAL',
    tagline: 'Para quem não abre mão do ovo fresco.',
    priceMonthly: 164,
    originalPrice: 182,
    deliveriesPerMonth: 4,
    eggsTotal: 120,
    eggsPerDelivery: 30,
    highlighted: true,
    badge: 'Mais escolhido',
    features: [
      '4 entregas no mês',
      '120 ovos total (30 por semana)',
      'Frete Grátis incluso',
      'Frescor máximo garantido (máx. 7 dias)',
      'Brinde surpresa no 3º mês de assinatura',
      'Atendimento prioritário no WhatsApp',
    ],
  },
  {
    id: 'mensal',
    name: 'MENSAL',
    tagline: 'Para consumo individual.',
    priceMonthly: 41,
    originalPrice: 46,
    deliveriesPerMonth: 1,
    eggsTotal: 30,
    eggsPerDelivery: 30,
    features: [
      '1 entrega no mês',
      '30 ovos total',
      'Ovos caipiras selecionados à mão',
      'Embalagem protetora reforçada',
      'Flexibilidade de reagendamento',
    ],
  },
];

export const SERVED_NEIGHBORHOODS: Neighborhood[] = [
  { name: 'Dentro da Av. do Contorno', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Savassi', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Funcionários', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Lourdes', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Santo Antônio', region: 'Centro-Sul', deliveryDays: ['Quarta-feira', 'Sexta-feira'], isServed: true },
  { name: 'Anchieta', region: 'Centro-Sul', deliveryDays: ['Quarta-feira', 'Sexta-feira'], isServed: true },
  { name: 'Sion', region: 'Centro-Sul', deliveryDays: ['Quarta-feira', 'Sexta-feira'], isServed: true },
  { name: 'Serra', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'São Lucas', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Santa Efigênia', region: 'Leste/Centro-Sul', deliveryDays: ['Terça-feira', 'Sexta-feira'], isServed: true },
  { name: 'Cruzeiro', region: 'Centro-Sul', deliveryDays: ['Quarta-feira'], isServed: true },
  { name: 'Mangabeiras', region: 'Centro-Sul', deliveryDays: ['Quinta-feira'], isServed: true },
  { name: 'São Pedro', region: 'Centro-Sul', deliveryDays: ['Quarta-feira'], isServed: true },
  { name: 'Cidade Jardim', region: 'Centro-Sul', deliveryDays: ['Quarta-feira', 'Sexta-feira'], isServed: true },
  { name: 'Luxemburgo', region: 'Centro-Sul', deliveryDays: ['Quarta-feira', 'Sexta-feira'], isServed: true },
  { name: 'São Bento', region: 'Centro-Sul', deliveryDays: ['Quarta-feira'], isServed: true },
  { name: 'Santa Lúcia', region: 'Centro-Sul', deliveryDays: ['Quarta-feira'], isServed: true },
  { name: 'Belvedere', region: 'Centro-Sul', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Vila da Serra', region: 'Nova Lima / Limítrofe', deliveryDays: ['Terça-feira', 'Quinta-feira'], isServed: true },
  { name: 'Gutierrez', region: 'Oeste/Centro-Sul', deliveryDays: ['Terça-feira', 'Sexta-feira'], isServed: true },
  { name: 'Estoril', region: 'Oeste', deliveryDays: ['Sexta-feira'], isServed: true },
  { name: 'Buritis', region: 'Oeste', deliveryDays: ['Sexta-feira'], isServed: true },
];

export const COMPARISON_ROWS = [
  {
    criterio: 'Frescor',
    ovoDiOnca: 'Colhido há no máximo 7 dias direto da fazenda',
    supermercado: 'Pode ter semanas ou meses estocado em prateleira',
    icon: 'clock',
  },
  {
    criterio: 'Qualidade da Gema',
    ovoDiOnca: 'Gema alaranjada intensa, densa, rica em ômega-3 e betacaroteno',
    supermercado: 'Gema pálida, líquida e sem sabor marcante',
    icon: 'sun',
  },
  {
    criterio: 'Criação das Galinhas',
    ovoDiOnca: 'Criadas soltas, com pastagem verde e liberdade de movimento',
    supermercado: 'Criação intensiva confinada em gaiolas estreitas',
    icon: 'feather',
  },
  {
    criterio: 'Alimentação',
    ovoDiOnca: 'Ração 100% natural, grãos selecionados, livre de antibióticos e hormônios',
    supermercado: 'Aditivos químicos, corantes artificiais e promotores de crescimento',
    icon: 'leaf',
  },
  {
    criterio: 'Procedência',
    ovoDiOnca: 'Transparente e de criação familiar em Onça de Pitangui - MG',
    supermercado: 'Origem industrial genérica e de difícil rastreabilidade',
    icon: 'map-pin',
  },
  {
    criterio: 'Conveniência',
    ovoDiOnca: 'Entrega programada no dia certo direto na sua porta',
    supermercado: 'Necessidade de deslocamento, carregar peso e enfrentar filas',
    icon: 'truck',
  },
  {
    criterio: 'Atendimento',
    ovoDiOnca: 'Relação direta, acolhedora e humanizada com a família produtora',
    supermercado: 'Sem contato humano, restrito à etiqueta da caixa',
    icon: 'heart-handshake',
  },
];

export const RECIPES: Recipe[] = [
  {
    id: 'omelete-mineira',
    title: 'Omelete Caipira da Onça',
    subtitle: 'Textura cremosa e gema aveludada com queijo canastra',
    prepTime: '10 min',
    difficulty: 'Fácil',
    servings: '1 a 2 porções',
    description:
      'Uma omelete clássica de fazenda que valoriza a densidade e o sabor concentrado da gema caipira autêntica.',
    ingredients: [
      '3 ovos caipiras Ovo di Onça',
      '1 colher (sopa) de manteiga de primeira',
      '40g de queijo canastra curado ralado',
      'Cebolinha fresca colhida na hora',
      'Sal e pimenta-do-reino moída a gosto',
    ],
    instructions: [
      'Quebre os ovos em uma tigela e bata delicadamente com um garfo apenas até misturar a clara e a gema.',
      'Aqueça uma frigideira antiaderente em fogo baixo e derreta a manteiga sem deixar queimar.',
      'Despeje os ovos e, com uma espátula, mexa suavemente do centro para as bordas para criar dobras cremosas.',
      'Quando o centro estiver quase firme (mas ainda brilhante), adicione o queijo canastra e a cebolinha.',
      'Dobre a omelete ao meio e sirva imediatamente com uma fatia de pão rústico tostado.',
    ],
    eggTip:
      'Por serem colhidos há poucos dias, os ovos caipiras criam uma estrutura muito mais aveludada e não precisam de creme de leite.',
  },
  {
    id: 'pao-de-lo-ouro',
    title: 'Pão de Ló das Gerais',
    subtitle: 'Massa fofa e dourada tradicional de famílias mineiras',
    prepTime: '40 min',
    difficulty: 'Médio',
    servings: '8 porções',
    description:
      'O clássico pão de ló caipira que ganha coloração dourada natural devido ao teor de betacaroteno das gemas.',
    ingredients: [
      '6 ovos caipiras Ovo di Onça em temperatura ambiente',
      '1 xícara de açúcar cristal',
      '1 xícara de farinha de trigo peneirada',
      '1 colher (chá) de extrato de baunilha natural',
      '1 pitada de sal',
    ],
    instructions: [
      'Separe as claras das gemas com cuidado.',
      'Bata as claras em neve firme com a pitada de sal.',
      'Sem parar de bater, adicione as gemas uma a uma e depois o açúcar aos poucos.',
      'Bata por 8 a 10 minutos até formar um creme fofo, volumoso e bem clarinho.',
      'Desligue a batedeira e incorpore a farinha peneirada delicadamente com movimentos de baixo para cima.',
      'Asse em forma untada a 180°C por cerca de 25 a 30 minutos.',
    ],
    eggTip:
      'Ovo caipira fresco tem clara densa que retém mais ar ao bater, resultando em um bolo muito mais fofinho.',
  },
  {
    id: 'ovo-poche-perfeito',
    title: 'Ovo Poché Ouro com Torrada Rústica',
    subtitle: 'Gema líquida perfeita e clara uniforme sem vinagre em excesso',
    prepTime: '8 min',
    difficulty: 'Médio',
    servings: '1 porção',
    description:
      'O teste definitivo do frescor do ovo: a clara fresca envolve a gema naturalmente sem se dispersar na água.',
    ingredients: [
      '2 ovos caipiras Ovo di Onça fresquíssimos',
      'Água filtrada abundante',
      '1 colher (sopa) de vinagre de maçã',
      'Pão de fermentação natural grelhado',
      'Azeite extravirgem e flor de sal',
    ],
    instructions: [
      'Aqueça a água com o vinagre até atingir pequenas bolhinhas no fundo (cerca de 85°C - sem ferver forte).',
      'Quebre o ovo primeiro em uma pequena xícara.',
      'Faça um redemoinho suave na água com uma colher e despeje o ovo no centro.',
      'Cozinhe por exatamente 3 minutos para gema líquida e clara firme.',
      'Retire com escumadeira, seque sobre papel toalha e disponha sobre a torrada com azeite e flor de sal.',
    ],
    eggTip:
      'Ovos colhidos há menos de 7 dias têm a clara grossa ("thick albumen") que não se desfaz na panela!',
  },
];
