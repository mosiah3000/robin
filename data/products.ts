export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  ingredientsText: string;
  ingredientsList: string[];
  dressings?: string[];
  image: string;
  badge?: string;
}

export interface CatalogData {
  storeName: string;
  tagline: string;
  slogan: string;
  address: string;
  whatsappNumber: string;
  products: Product[];
}

export const catalogData: CatalogData = {
  storeName: "Sandwichería Donde Robin",
  tagline: "Sándwiches a la plancha, preparados al momento",
  slogan: "Una Cosa es un sandwich, otra cosa es un Sandwich a la plancha Donde Robin",
  address: "Cl. 65j Sur #77K18, Bogotá",
  whatsappNumber: "573144402740",
  products: [
    {
      id: "01",
      name: "Sándwich de Jamón de Cerdo",
      ingredientsText: "Jamón de cerdo, queso, lechuga, tomate, papa chip y aderezo.",
      ingredientsList: ["Jamón de cerdo", "Queso", "Lechuga", "Tomate", "Papa chip", "Aderezo"],
      dressings: ["Personaliza tus aderezos"],
      image: "/images/products/01_jamon_cerdo.jpg",
    },
    {
      id: "02",
      name: "Sándwich de Cordero Premium",
      subtitle: "Gourmet Selección",
      ingredientsText: "Jamón, queso, lechuga, tomate, papa chip y dos aderezos.",
      ingredientsList: ["Jamón de cordero", "Queso", "Lechuga", "Tomate", "Papa chip", "2 Aderezos"],
      dressings: ["Dos aderezos a elección"],
      image: "/images/products/02_cordero_premium.jpg",
      badge: "Premium",
    },
    {
      id: "03",
      name: "Sándwich de Cerdo Premium",
      subtitle: "Selección Especial",
      ingredientsText: "Jamón, queso, lechuga, tomate, papa chip y dos aderezos.",
      ingredientsList: ["Jamón de cerdo premium", "Queso", "Lechuga", "Tomate", "Papa chip", "2 Aderezos"],
      dressings: ["Dos aderezos a elección"],
      image: "/images/products/03_cerdo_premium.jpg",
      badge: "Premium",
    },
    {
      id: "04",
      name: "Sándwich de Pernil Premium",
      subtitle: "Corte Tradicional",
      ingredientsText: "Pernil, queso, lechuga, tomate, papa chip y aderezo.",
      ingredientsList: ["Pernil horneado", "Queso", "Lechuga", "Tomate", "Papa chip", "Aderezo"],
      dressings: ["Personaliza tus aderezos"],
      image: "/images/products/04_pernil_premium.jpg",
      badge: "Favorito",
    },
    {
      id: "05",
      name: "Sándwich de Jamón de Pavo",
      ingredientsText: "Jamón de pavo, queso tipo mozzarella, lechuga, tomate, papa chip, pepinillos y aderezos de dulce maíz y de la casa.",
      ingredientsList: ["Jamón de pavo", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Pepinillos"],
      dressings: ["Dulce maíz", "De la casa"],
      image: "/images/products/05_jamon_pavo.jpg",
      badge: "Recomendado",
    },
    {
      id: "06",
      name: "Sándwich de Pavo Navideño",
      ingredientsText: "Pavo, queso tipo mozzarella, lechuga, tomate, papa chip, champiñones y aderezos de dulce maíz y ajo.",
      ingredientsList: ["Pavo", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Champiñones"],
      dressings: ["Dulce maíz", "Ajo"],
      image: "/images/products/06_pavo_navideno.jpg",
      badge: "Especialidad",
    },
    {
      id: "07",
      name: "Sándwich de Jamón de Pollo",
      ingredientsText: "Jamón de pollo, queso tipo mozzarella, lechuga, tomate, papa chip, pepinillos y aderezos de dulce maíz y de la casa.",
      ingredientsList: ["Jamón de pollo", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Pepinillos"],
      dressings: ["Dulce maíz", "De la casa"],
      image: "/images/products/07_jamon_pollo.jpg",
    },
    {
      id: "08",
      name: "Sándwich de Pernil de Cordero",
      ingredientsText: "Pernil de cordero, queso tipo mozzarella, lechuga, tomate, papa chip, jalapeños y aderezos de dulce maíz y ajo.",
      ingredientsList: ["Pernil de cordero", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Jalapeños"],
      dressings: ["Dulce maíz", "Ajo"],
      image: "/images/products/08_pernil_cordero.jpg",
      badge: "Gourmet",
    },
    {
      id: "09",
      name: "Sándwich de Jamón de Pechuga de Pollo",
      ingredientsText: "Jamón de pechuga de pollo, queso tipo mozzarella, lechuga, tomate, papa chip, champiñones y aderezos de dulce maíz y de la casa.",
      ingredientsList: ["Jamón de pechuga de pollo", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Champiñones"],
      dressings: ["Dulce maíz", "De la casa"],
      image: "/images/products/09_pechuga_pollo.jpg",
      badge: "Más Pedido",
    },
    {
      id: "10",
      name: "Sándwich de Pierna de Cerdo",
      ingredientsText: "Pierna de cerdo, queso tipo mozzarella, lechuga, tomate, papa chip y aderezo de la casa.",
      ingredientsList: ["Pierna de cerdo", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip", "Aderezo de la casa"],
      dressings: ["De la casa"],
      image: "/images/products/10_pierna_cerdo.jpg",
      badge: "Tradicional",
    },
    {
      id: "11",
      name: "Sándwich de Salchichón La Fazenda",
      ingredientsText: "Salchichón La Fazenda, queso, lechuga, tomate y aderezos.",
      ingredientsList: ["Salchichón La Fazenda", "Queso", "Lechuga", "Tomate", "Aderezos"],
      dressings: ["Personaliza tus aderezos"],
      image: "/images/products/11_salchichon_fazenda.jpg",
    },
    {
      id: "12",
      name: "Sándwich de Atún",
      ingredientsText: "Atún, lechuga, tomate y aderezo.",
      ingredientsList: ["Atún", "Lechuga", "Tomate", "Aderezo"],
      dressings: ["Personaliza tus aderezos"],
      image: "/images/products/12_atun.jpg",
      badge: "Fresco & Ligero",
    },
    {
      id: "13",
      name: "Sándwich de Pollo",
      ingredientsText: "Pollo desmechado, lechuga, tomate y aderezo.",
      ingredientsList: ["Pollo desmechado", "Lechuga", "Tomate", "Aderezo"],
      dressings: ["Personaliza tus aderezos"],
      image: "/images/products/13_pollo_desmechado.jpg",
      badge: "Favorito",
    },
    {
      id: "14",
      name: "Sándwich Navideño Temático · Verde",
      subtitle: "Una propuesta festiva, fresca y llena de sabor.",
      ingredientsText: "Jamón de pavo navideño, queso tipo mozzarella, lechuga, tomate, papa chip y salsas especiales de la casa.",
      ingredientsList: ["Pan artesanal verde con sésamo", "Jamón de pavo navideño", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip"],
      dressings: ["Salsas especiales de la casa"],
      image: "/images/products/14_navideno_verde.png",
      badge: "Edición Especial",
    },
    {
      id: "15",
      name: "Sándwich Navideño Temático · Rojo",
      subtitle: "Una propuesta festiva, fresca y llena de sabor.",
      ingredientsText: "Jamón de pavo navideño, queso tipo mozzarella, lechuga, tomate, papa chip y salsas especiales de la casa.",
      ingredientsList: ["Pan artesanal rojo con sésamo", "Jamón de pavo navideño", "Queso tipo mozzarella", "Lechuga", "Tomate", "Papa chip"],
      dressings: ["Salsas especiales de la casa"],
      image: "/images/products/15_navideno_rojo.png",
      badge: "Edición Especial",
    },
    {
      id: "16",
      name: "Así entregamos nuestros productos",
      subtitle: "Presentación cuidada, lista para llevar y disfrutar.",
      ingredientsText: "Cada sándwich se prepara al momento y se entrega cuidadosamente envuelto, para proteger su presentación y llevarlo hasta ti con el sabor y la calidad de Donde Robin.",
      ingredientsList: ["Preparado al momento a la plancha", "Empaque 100% biodegradable", "Protección térmica y de crocancia"],
      dressings: ["¡LISTO PARA DISFRUTAR!"],
      image: "/images/products/16_presentacion_empaque.png",
      badge: "Delivery / Para Llevar",
    },
  ],
};
