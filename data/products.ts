export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  ingredientsText: string;
  ingredientsList: string[];
  dressings?: string[];
  image: string;
  badge?: string;
  weight?: string;
  portions?: string;
  consumption?: string;
  highlight?: string;
  category?: "sandwiches" | "salsamentaria";
}

export interface CatalogData {
  storeName: string;
  catalogTitle: string;
  catalogSubtitle?: string;
  tagline: string;
  slogan: string;
  address: string;
  whatsappNumber: string;
  topBannerText: string;
  accentColor?: string;
  ribbonColor?: string;
  products: Product[];
}

export const catalogData: CatalogData = {
  storeName: "Sandwichería Donde Robin",
  catalogTitle: "CATÁLOGO DE SÁNDWICHES",
  catalogSubtitle: "A LA PLANCHA",
  tagline: "Sándwiches a la plancha, preparados al momento",
  slogan: "Una Cosa es un sandwich, otra cosa es un Sandwich a la plancha Donde Robin",
  address: "Cl. 65j Sur #77K18, Bogotá",
  whatsappNumber: "573144402140",
  topBannerText: "🔥 UNA COSA ES UN SÁNDWICH, OTRA COSA ES UN SÁNDWICH A LA PLANCHA DONDE ROBIN 🔥",
  accentColor: "#006837",
  ribbonColor: "#d90429",
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
      category: "sandwiches",
    },
  ],
};

export const salsamentariaCatalogData: CatalogData = {
  storeName: "Salsamentaría Donde Robin",
  catalogTitle: "CATÁLOGO DE SALSAMENTARIA",
  catalogSubtitle: "JAMONES & CÁRNICOS CAVALT",
  tagline: "Jamones finos, pavos y perniles seleccionados de primera calidad",
  slogan: "Momentos únicos, cortes perfectos y sabor inigualable en cada celebración",
  address: "Cl. 65j Sur #77K18, Bogotá",
  whatsappNumber: "573144402140",
  topBannerText: "🥩 CALIDAD PREMIUM CAVALT · JAMONES, PAVOS Y PERNILES SELECCIONADOS 🥩",
  accentColor: "#800e13",
  ribbonColor: "#d4af37",
  products: [
    {
      id: "01",
      name: "Pavo Navideño",
      subtitle: "Cárnicos Cavalt S.A.S. · Momentos únicos, sabor inigualable",
      ingredientsText: "Pavo horneado entero al vacío, jugoso, dorado y sazonado con receta tradicional navideña. Corte gourmet para celebraciones familiares e institucionales.",
      ingredientsList: [
        "Pieza completa al vacío",
        "Peso neto: 2250 g",
        "Rinde 20 porciones aprox.",
        "Horneado tradicional",
        "Listo para servir y calentar",
      ],
      dressings: ["Salsa de ciruelas", "Salsa agridulce", "Aderezo de la casa"],
      image: "/images/salsamentaria/01_pavo_navideno.jpg",
      badge: "Edición Navideña",
      weight: "2250 g",
      portions: "20 porciones aprox.",
      consumption: "Listo para consumir / calentar",
      highlight: "Momentos únicos, sabor inigualable",
      category: "salsamentaria",
    },
    {
      id: "02",
      name: "Pavito",
      subtitle: "Cárnicos Cavalt S.A.S. · Celebra con el sabor que enamora",
      ingredientsText: "Pavo seleccionado horneado en empaque al vacío con sellado hermético. Carne suave, tierna y con excelente rendimiento para reuniones y cenas especiales.",
      ingredientsList: [
        "Presentación al vacío",
        "Peso neto: 1500 g",
        "Rinde 30 porciones aprox.",
        "Corte tierno y jugoso",
        "Listo para consumo directo",
      ],
      dressings: ["Salsa de ciruelas", "Salsa de piña", "Aderezo especial"],
      image: "/images/salsamentaria/02_pavito.jpg",
      badge: "Selección Especial",
      weight: "1500 g",
      portions: "30 porciones aprox.",
      consumption: "Listo para consumir / calentar",
      highlight: "Celebra con el sabor que enamora",
      category: "salsamentaria",
    },
    {
      id: "03",
      name: "Pierna de Cerdo (Pernil Fino)",
      subtitle: "Cárnicos Cavalt S.A.S. · Grande, jugosa e inolvidable",
      ingredientsText: "Pernil tradicional de pierna de cerdo con hueso, curado y horneado artesanal con piel dorada crujiente. El centro de mesa por excelencia para las fiestas navideñas.",
      ingredientsList: [
        "Pierna con hueso tradicional",
        "Curado artesanal y horneado lento",
        "Presentación de gala para eventos",
        "Listo para consumir / tajar",
        "Sabor ahumado y jugoso",
      ],
      dressings: ["Reducción de ciruela y vino", "Salsa BBQ artesanal", "Mostaza dulce"],
      image: "/images/salsamentaria/03_pierna_cerdo.jpg",
      badge: "Tradición Familiar",
      weight: "Pieza completa con hueso",
      portions: "Ideal para eventos y banquetes",
      consumption: "Listo para consumir / laminar",
      highlight: "Grande, jugosa e inolvidable",
      category: "salsamentaria",
    },
    {
      id: "04",
      name: "Pierna Deshuesada",
      subtitle: "Cárnicos Cavalt S.A.S. · Calidad premium inigualable",
      ingredientsText: "Jamón de pierna de cerdo 100% deshuesada, amarrada artesanalmente con cuerda y empacada al vacío. Cero desperdicio, tajadas uniformes y consistencia impecable.",
      ingredientsList: [
        "100% Pierna de cerdo deshuesada",
        "Rinde 60 porciones aprox.",
        "Corte magro de alto rendimiento",
        "Fácil laminado sin merma",
        "Consumo directo",
      ],
      dressings: ["Salsa de frutos rojos", "Mostaza dijon suave", "Salsa agridulce"],
      image: "/images/salsamentaria/04_pierna_deshuesada.jpg",
      badge: "Calidad Premium",
      weight: "Pieza cilíndrica compacta",
      portions: "60 porciones aprox.",
      consumption: "Consumo directo / fácil tajado",
      highlight: "Calidad premium inigualable",
      category: "salsamentaria",
    },
    {
      id: "05",
      name: "Pernil de Cerdo Especial",
      subtitle: "Cárnicos Cavalt S.A.S. · Cortes perfectos, sabor inigualable",
      ingredientsText: "Pernil de cerdo especial cilíndrico para rebanar. Textura sedosa y jugosa, exquisito tanto en frío para tablas y sándwiches como caliente bañado en salsas.",
      ingredientsList: [
        "Peso neto: 3000 g",
        "Rinde 60 porciones aprox.",
        "Cortes perfectos y uniformes",
        "Listo para tajear o servir caliente",
        "Alta jugosidad",
      ],
      dressings: ["Salsa agridulce con sésamo", "Salsa de ciruelas", "Aderezo de la casa"],
      image: "/images/salsamentaria/05_pernil_cerdo.jpg",
      badge: "Corte Gourmet",
      weight: "3000 g",
      portions: "60 porciones aprox.",
      consumption: "Listo para rebanar y servir",
      highlight: "Cortes perfectos, sabor inigualable",
      category: "salsamentaria",
    },
  ],
};
