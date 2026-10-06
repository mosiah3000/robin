export interface Product {
  id: string;
  name: string;
  portion?: string;
  description: string;
  ingredients: string[];
  dressings: string[];
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface CatalogData {
  storeName: string;
  tagline: string;
  whatsappNumber: string;
  products: Product[];
}

export const catalogData: CatalogData = {
  storeName: "Sanduchería Donde Robín",
  tagline: "Sándwiches artesanales con ingredientes frescos y salsas de la casa",
  whatsappNumber: "573144402740",
  products: [
    {
      id: "01",
      name: "Sándwich de Jamón de Pavo",
      portion: "100 gr de jamón de pavo",
      description: "Delicioso y balanceado sándwich preparado con 100 gr de jamón de pavo tierno, queso tipo mozzarella derretido, vegetales frescos, el toque crocante de papas chip y pepinillos agridulces.",
      ingredients: [
        "100 gr de jamón de pavo",
        "Queso tipo mozzarella fundido",
        "Lechuga fresca",
        "Tomate en rodajas",
        "Papas chip crocantes",
        "Pepinillos agridulces",
      ],
      dressings: ["Salsa de dulce maíz", "Salsa especial de la casa"],
      image: "/images/products/01.jpg",
      badge: "Recomendado",
      popular: true,
    },
    {
      id: "02",
      name: "Sándwich de Pavo Navideño",
      portion: "100 gr de pavo especial",
      description: "Especialidad gourmet con 100 gr de pavo horneado a las finas hierbas, queso tipo mozzarella fundido, champiñones seleccionados, vegetales frescos y papas chip.",
      ingredients: [
        "100 gr de pavo especial",
        "Queso tipo mozzarella",
        "Lechuga fresca",
        "Tomate maduro",
        "Papas chip crocantes",
        "Champiñones salteados",
      ],
      dressings: ["Salsa de dulce maíz", "Aderezo suave de ajo"],
      image: "/images/products/04.jpg",
      badge: "Especialidad",
      popular: true,
    },
    {
      id: "03",
      name: "Sándwich de Jamón de Pollo",
      portion: "100 gr de jamón de pollo",
      description: "Suave y apetitoso sándwich con 100 gr de jamón de pollo de primera calidad, queso tipo mozzarella derretido, pepinillos crujientes, vegetales de la huerta y papas chip.",
      ingredients: [
        "100 gr de jamón de pollo",
        "Queso tipo mozzarella",
        "Lechuga fresca",
        "Tomate fresco",
        "Papas chip crocantes",
        "Pepinillos",
      ],
      dressings: ["Salsa de dulce maíz", "Salsa especial de la casa"],
      image: "/images/products/02.jpg",
    },
    {
      id: "04",
      name: "Sándwich de Pernil de Cordero",
      portion: "100 gr de pernil de cordero",
      description: "Para los amantes del buen comer: 100 gr de tierno pernil de cordero cocinado lentamente con queso tipo mozzarella, rodajas de jalapeños con toque picante suave, tomate, lechuga y papas chip.",
      ingredients: [
        "100 gr de pernil de cordero",
        "Queso tipo mozzarella",
        "Lechuga fresca",
        "Tomate fresco",
        "Papas chip crocantes",
        "Jalapeños en rodajas",
      ],
      dressings: ["Salsa de dulce maíz", "Aderezo de ajo"],
      image: "/images/products/01.jpg",
      badge: "Gourmet",
      popular: true,
    },
    {
      id: "05",
      name: "Sándwich de Pechuga de Pollo",
      portion: "100 gr de pechuga de pollo",
      description: "Abundante porción de 100 gr de jugosa pechuga de pollo desmechada artesanalmente, queso tipo mozzarella, champiñones salteados, lechuga fresca, tomate y papas chip.",
      ingredients: [
        "100 gr de pechuga de pollo desmechada",
        "Queso tipo mozzarella fundido",
        "Lechuga fresca",
        "Tomate en rodajas",
        "Papas chip crocantes",
        "Champiñones",
      ],
      dressings: ["Salsa de dulce maíz", "Salsa de la casa"],
      image: "/images/products/02.jpg",
      badge: "Más Pedido",
      popular: true,
    },
    {
      id: "06",
      name: "Sándwich de Pierna de Hueso",
      portion: "100 gr de pierna de cerdo",
      description: "Auténtico sabor tradicional con 100 gr de pierna de cerdo horneada con sus jugos naturales, queso tipo mozzarella derretido, vegetales frescos, papas chip crocantes y aderezo de la casa.",
      ingredients: [
        "100 gr de pierna de cerdo al horno",
        "Queso tipo mozzarella",
        "Lechuga fresca",
        "Tomate fresco",
        "Papas chip crocantes",
      ],
      dressings: ["Aderezo especial de la casa"],
      image: "/images/products/04.jpg",
      badge: "Tradicional",
      popular: true,
    },
    {
      id: "07",
      name: "Sándwich de Atún Especial",
      portion: "Abundante atún premium",
      description: "Frescura marina inigualable: lomos de atún sazonados con finas hierbas, queso tipo mozzarella, rodajas de tomate jugoso, lechuga crocante y papas chip.",
      ingredients: [
        "Atún desmenuzado premium",
        "Queso tipo mozzarella",
        "Lechuga fresca",
        "Tomate maduro",
        "Papas chip crocantes",
      ],
      dressings: ["Salsa de dulce maíz", "Aderezo suave de la casa"],
      image: "/images/products/03.jpg",
      badge: "Fresco & Ligero",
    },
    {
      id: "08",
      name: "Sándwich de Pernil Premium",
      portion: "60 gr de pernil seleccionado",
      description: "Finas láminas de pernil horneado con queso fundido, lechuga crujiente, tomate fresco, papas chip artesanales y aderezo a elección.",
      ingredients: [
        "60 gr de pernil seleccionado",
        "Queso fundido",
        "Lechuga fresca",
        "Tomate fresco",
        "Papas chip",
      ],
      dressings: ["1 aderezo a elección"],
      image: "/images/products/01.jpg",
    },
    {
      id: "09",
      name: "Sándwich de Cerdo Premium",
      portion: "50 gr de jamón de cerdo",
      description: "Porción ideal de jamón de cerdo seleccionado con queso fundido, vegetales frescos, papas chip crocantes y la combinación de dos aderezos a tu gusto.",
      ingredients: [
        "50 gr de jamón de cerdo",
        "Queso fundido",
        "Lechuga fresca",
        "Tomate maduro",
        "Papas chip crocantes",
      ],
      dressings: ["2 aderezos a elección"],
      image: "/images/products/04.jpg",
    },
  ],
};
