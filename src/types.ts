export interface Plan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  originalPrice?: number;
  deliveriesPerMonth: number;
  eggsTotal: number;
  eggsPerDelivery: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
}

export interface Neighborhood {
  name: string;
  region: string;
  deliveryDays: string[];
  isServed: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  prepTime: string;
  difficulty: 'Fácil' | 'Médio' | 'Gourmet';
  servings: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  eggTip: string;
}

export interface SubscriberAccount {
  id: string;
  name: string;
  phone: string;
  planId: string;
  neighborhood: string;
  deliveryDay: string;
  status: 'active' | 'paused';
  nextDeliveryDate: string;
  totalDeliveriesReceived: number;
}
