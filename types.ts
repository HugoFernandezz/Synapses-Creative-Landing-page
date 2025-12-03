export interface FaqItem {
  question: string;
  answer: string;
}

export interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconName: 'Upload' | 'Wand2' | 'Download';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
}