export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface CatalogData {
  storeName: string;
  tagline: string;
  whatsappNumber: string;
  currency: string;
  categories: string[];
  products: Product[];
}

export const catalogData: CatalogData = {
  storeName: "Sanduchería Donde Robín",
  tagline: "Sándwiches artesanales preparados con los mejores ingredientes",
  whatsappNumber: "573144402740",
  currency: "$",
  categories: [
    "Todos",
    "Especiales de la Casa",
    "Clásicos",
    "Del Mar",
    "Combos y Delivery",
  ],
  products: [
    {
      id: "01",
      name: "Sándwich Gourmet Pan Artesanal",
      category: "Especiales de la Casa",
      price: 18000,
      description: "Exclusivo sándwich en pan artesanal rojo con semillas de sésamo, abundante jamón/lomo horneado en finas fetas, queso derretido, tomate fresco y hojas de lechuga crujiente.",
      ingredients: [
        "Pan artesanal rojo con sésamo",
        "Lomo / Jamón especial horneado",
        "Queso seleccionado",
        "Tomate fresco",
        "Lechuga crespa",
        "Salsa de la casa",
      ],
      image: "/images/products/01.jpg",
      badge: "Especial Robin",
      popular: true,
    },
    {
      id: "02",
      name: "Sándwich de Pollo Desmechado",
      category: "Clásicos",
      price: 16000,
      description: "Generosa porción de pechuga de pollo desmechada y jugosa, servida sobre una cama de lechuga fresca, rodajas de tomate maduro y el toque secreto de la casa.",
      ingredients: [
        "Pechuga de pollo desmechada",
        "Pan baguette artesanal",
        "Tomate fresco",
        "Lechuga fresca",
        "Aderezo suave Donde Robín",
      ],
      image: "/images/products/02.jpg",
      badge: "Más Vendido",
      popular: true,
    },
    {
      id: "03",
      name: "Sándwich de Atún Especial",
      category: "Del Mar",
      price: 17000,
      description: "Abundante atún premium sazonado al punto exacto con finas hierbas, acompañado de rodajas de tomate jugoso, queso y lechuga fresca en suave pan horneado.",
      ingredients: [
        "Atún en trozos premium",
        "Queso semimaduro",
        "Tomate en rodajas",
        "Lechuga fresca",
        "Mayonesa especial",
      ],
      image: "/images/products/03.jpg",
      badge: "Fresco & Ligero",
      popular: true,
    },
    {
      id: "04",
      name: "Combo Donde Robín Delivery",
      category: "Combos y Delivery",
      price: 22000,
      description: "Tu sándwich favorito recién preparado y empacado en papel ecológico biodegradable que preserva la frescura, el calor y el crujiente original. Incluye bebida o acompañamiento.",
      ingredients: [
        "Sándwich a elección",
        "Empaque 100% biodegradable",
        "Bebida fría",
        "Salsas adicionales",
      ],
      image: "/images/products/04.jpg",
      badge: "Eco Friendly",
      popular: true,
    },
  ],
};
