import { FaqItem, ShowcaseItem, ProcessStep, PricingTier } from './types';

export const CONTACT_EMAIL = "SynapseCreativeIA@gmail.com";

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Pack Inicial",
    price: "$49",
    description: "5 imágenes generadas por IA. Ideal para probar el servicio."
  },
  {
    name: "Pack Crecimiento",
    price: "$129",
    description: "15 imágenes. Variedad de fondos y estilos. Entrega prioritaria."
  },
  {
    name: "Pack Escala",
    price: "$299",
    description: "50 imágenes. Modelos virtuales personalizados. Soporte dedicado."
  }
];

export const HERO_COPY = {
  h1: "Visuales de Gran Marca. Presupuesto de Pequeño Negocio.",
  h2: "Transformamos tus fotos de producto básicas en editoriales de lujo hiperrealistas utilizando Inteligencia Artificial Generativa. Sin estudios, sin modelos, sin límites.",
  cta: "Transforma tu Marca",
};

export const COMPARISON_COPY = {
  title: "El Problema vs. La Solución",
  oldWay: {
    title: "La Antigua Forma",
    points: [
      "Costos elevados (Estudio + Fotógrafo + Modelos)",
      "Logística compleja y coordinación de fechas",
      "Semanas de espera para la edición",
      "Limitado a una sola ubicación física"
    ]
  },
  newWay: {
    title: "Synapses Creative",
    points: [
      "Una fracción del costo tradicional",
      "100% digital: Envíanos fotos desde tu celular",
      "Resultados listos en 48 horas",
      "Cualquier modelo, cualquier lugar del mundo (o fuera de él)"
    ]
  }
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 1,
    title: "De Percha a París",
    description: "Una foto básica de una camisa en una percha transformada en un editorial de moda callejera en París.",
    beforeUrl: "https://picsum.photos/id/1/600/600", // Placeholder representing raw
    afterUrl: "https://picsum.photos/id/338/600/600" // Placeholder representing lifestyle
  },
  {
    id: 2,
    title: "Cosmética en la Naturaleza",
    description: "Botella de producto con fondo blanco llevada a un entorno de bosque lluvioso hiperrealista.",
    beforeUrl: "https://picsum.photos/id/21/600/600",
    afterUrl: "https://picsum.photos/id/28/600/600"
  },
  {
    id: 3,
    title: "Joyería de Lujo",
    description: "Pieza sobre mesa de trabajo convertida en una toma macro con iluminación de estudio de alta gama.",
    beforeUrl: "https://picsum.photos/id/119/600/600",
    afterUrl: "https://picsum.photos/id/146/600/600"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Envía tu Material",
    description: "Sube tus fotos de producto actuales. No necesitan ser profesionales, solo bien iluminadas y claras.",
    iconName: "Upload"
  },
  {
    id: 2,
    title: "Generación Synapses",
    description: "Nuestra IA, guiada por directores de arte, genera entornos, modelos e iluminación perfectos para tu marca.",
    iconName: "Wand2"
  },
  {
    id: 3,
    title: "Entrega y Impacto",
    description: "Recibe imágenes de alta resolución listas para tu web, Instagram y campañas de Ads en 48 horas.",
    iconName: "Download"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Las imágenes se ven falsas o 'robóticas'?",
    answer: "No. Utilizamos pipelines de IA propietarios combinados con post-producción humana experta. Nuestros directores de arte corrigen manos, texturas e iluminación para garantizar un fotorrealismo indetectable."
  },
  {
    question: "¿Cómo funcionan los derechos de autor?",
    answer: "Tú mantienes la propiedad de tus fotos de producto originales. Synapses te transfiere los derechos de uso comercial de las imágenes generadas una vez completado el pago."
  },
  {
    question: "¿Qué necesito enviar para empezar?",
    answer: "Solo necesitamos fotos de tu producto en alta resolución, idealmente con fondo simple o transparente, y una breve descripción del 'vibe' o estilo que buscas."
  },
  {
    question: "¿Pueden replicar a mi modelo actual?",
    answer: "Podemos crear un 'gemelo digital' consistente para tu marca, o utilizar modelos generados que se ajusten a la demografía de tu público objetivo."
  }
];