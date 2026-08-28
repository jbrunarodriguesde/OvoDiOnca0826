import { Plan, Neighborhood } from '../types';

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

export const FAQ_ITEMS = [
  {
    question: 'Como funciona a assinatura e as entregas?',
    answer:
      'Você escolhe o ritmo ideal (Semanal, Quinzenal ou Mensal) de acordo com o consumo da sua casa. Os ovos são colhidos frescos na fazenda em Onça de Pitangui e entregues na sua porta em dias fixos e programados para o seu bairro em BH e região.',
  },
  {
    question: 'Existe fidelidade ou multa de cancelamento?',
    answer:
      'Não! Nenhuma fidelidade ou taxa oculta. Você tem total liberdade para pausar temporariamente durante viagens ou cancelar quando quiser com apenas uma mensagem no WhatsApp.',
  },
  {
    question: 'E se algum ovo quebrar durante o transporte?',
    answer:
      'Nossa embalagem é reforçada e pensada para o trajeto rural. Caso ocorra qualquer avaria durante o caminho, basta nos mandar uma foto no WhatsApp e fazemos a reposição imediata e sem nenhum custo adicional na próxima entrega.',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Trabalhamos com cobrança mensal simplificada via PIX (com envio de comprovante e aviso automático) ou Cartão de Crédito recorrente que não compromete o limite total do seu cartão.',
  },
  {
    question: 'Qual é a real diferença do ovo caipira Ovo di Onça?',
    answer:
      'Nossas galinhas vivem soltas com acesso diário a pastagem verde, sol e água fresca. A alimentação é 100% natural, livre de hormônios e antibióticos. O resultado é uma gema densa, de cor ouro alaranjada intensa, com sabor autêntico de fazenda e colheita máxima de até 7 dias.',
  },
  {
    question: 'Como faço para alterar meu endereço ou pausar entregas?',
    answer:
      'Pelo nosso Portal do Assinante na página inicial ou diretamente com nosso atendimento familiar no WhatsApp (31) 2516-7561.',
  },
];

