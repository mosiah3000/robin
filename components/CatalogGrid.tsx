"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CatalogData, Product } from "@/data/products";
import { ProductModal } from "./ProductModal";

interface CatalogGridProps {
  catalog: CatalogData;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ catalog }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const isSalsamentaria = catalog.products[0]?.category === "salsamentaria";

  const handleDirectWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    let message = "";
    if (isSalsamentaria) {
      message = `¡Hola Donde Robin! 👋 Me interesa pedir de su catálogo de *Salsamentaría (Cárnicos Cavalt)*:\n\n🍖 *1x ${product.name}*`;
      if (product.weight) message += ` (${product.weight})`;
      if (product.portions) message += ` - ${product.portions}`;
      message += `\n\n¿Me confirman precio y disponibilidad? ¡Muchas gracias!`;
    } else {
      message = `¡Hola Sandwichería Donde Robin! 👋 Quiero pedir:\n\n🥪 *1x ${product.name}*\n\n¿Me confirman disponibilidad? ¡Muchas gracias!`;
    }
    const cleanNumber = catalog.whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const ribbonColor = isSalsamentaria ? "bg-[#800e13]" : "bg-[#d90429]";
  const accentBorderHover = isSalsamentaria ? "hover:border-amber-500/80" : "hover:border-emerald-600";
  const btnBg = isSalsamentaria ? "bg-[#800e13] hover:bg-[#a5131a]" : "bg-[#006837] hover:bg-[#008f4c]";
  const sectionTag = isSalsamentaria ? "SALSAMENTARÍA · CÁRNICOS CAVALT" : "SANDWICHERÍA DONDE ROBIN";

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 space-y-12 sm:space-y-16">
      {catalog.products.map((product) => {
        return (
          <article
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className={`group relative flex flex-col bg-[#141519] border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl ${accentBorderHover} transition-all duration-300 cursor-pointer`}
          >
            {/* Header de Página Estilo PDF */}
            <div className="relative bg-[#0d0e11] border-b border-zinc-800 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Bloque de Color con Número */}
                <span className={`${ribbonColor} text-white font-black text-sm sm:text-base px-3.5 py-1 rounded tracking-wider shadow-sm`}>
                  {product.id}
                </span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-300">
                  {sectionTag}
                </span>
              </div>

              {/* Watermark Número Gigante en el fondo */}
              <div className="absolute right-4 -top-4 text-6xl sm:text-7xl font-black text-zinc-800/30 select-none pointer-events-none tracking-tighter">
                {product.id}
              </div>
            </div>

            {/* Título Principal */}
            <div className="px-5 sm:px-8 pt-6 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className={`text-2xl sm:text-4xl font-black text-white ${isSalsamentaria ? "group-hover:text-amber-400" : "group-hover:text-emerald-400"} transition-colors tracking-tight`}>
                  {product.name}
                </h3>
                {product.badge && (
                  <span className={`${isSalsamentaria ? "bg-[#d4af37] text-zinc-950 border-amber-300" : "bg-[#006837] text-white border-emerald-400/30"} text-xs font-black uppercase px-3 py-1 rounded-full border shadow-md`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Subtítulo si aplica */}
              {product.subtitle && (
                <p className={`text-sm ${isSalsamentaria ? "text-amber-300/90 font-semibold" : "text-zinc-400 font-medium"} italic mt-1`}>
                  {product.subtitle}
                </p>
              )}

              {/* Línea separadora decorativa estilo PDF */}
              <div className={`w-16 h-1.5 ${isSalsamentaria ? "bg-[#d4af37]" : "bg-[#006837]"} rounded-full mt-3 group-hover:w-28 transition-all duration-300`} />
            </div>

            {/* Imagen Principal con franja lateral */}
            <div className="relative w-full h-72 sm:h-[420px] bg-zinc-950 overflow-hidden">
              {/* Franja lateral izquierda característica */}
              <div className={`absolute left-0 top-0 bottom-0 w-2.5 ${ribbonColor} z-10`} />

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
                priority={parseInt(product.id) <= 2}
              />
            </div>

            {/* Bloque INGREDIENTES / FICHA TÉCNICA */}
            <div className="p-5 sm:p-8 space-y-4">
              {/* Ficha técnica rápida si tiene peso o porciones */}
              {(product.weight || product.portions || product.consumption) && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-[#0d0e11] p-4 rounded-2xl border border-zinc-800">
                  {product.weight && (
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Peso Neto / Tamaño</span>
                      <span className="text-xs sm:text-sm font-black text-white">{product.weight}</span>
                    </div>
                  )}
                  {product.portions && (
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Rendimiento Estimado</span>
                      <span className="text-xs sm:text-sm font-black text-white">{product.portions}</span>
                    </div>
                  )}
                  {product.consumption && (
                    <div className="col-span-2 sm:col-span-1 flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Preparación / Consumo</span>
                      <span className="text-xs sm:text-sm font-bold text-zinc-200">{product.consumption}</span>
                    </div>
                  )}
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-3.5 h-1 ${ribbonColor} rounded-full`} />
                  <h4 className={`text-sm font-black uppercase tracking-wider ${isSalsamentaria ? "text-amber-400" : "text-emerald-400"}`}>
                    {isSalsamentaria ? "DESCRIPCIÓN Y PRESENTACIÓN" : "INGREDIENTES"}
                  </h4>
                </div>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed pl-5 font-medium">
                  {product.ingredientsText}
                </p>
              </div>

              {/* Chips de Ingredientes / Atributos */}
              <div className="pl-5 flex flex-wrap gap-2 pt-1">
                {product.ingredientsList.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#1a1c22] text-zinc-300 px-3 py-1.5 rounded-xl border border-zinc-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Pie de Página de la Hoja del Catálogo */}
              <div className="pt-6 mt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  {isSalsamentaria ? (
                    <>
                      <span className="font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        CALIDAD PREMIUM CAVALT
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400 italic">
                        {product.highlight || "Sabor inigualable"}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        HECHO AL MOMENTO
                      </span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-zinc-400 italic">
                        Personaliza tus aderezos
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={(e) => handleDirectWhatsApp(e, product)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl ${btnBg} text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg transition-all transform active:scale-95`}
                >
                  <span>📱 Pedir por WhatsApp</span>
                </button>
              </div>
            </div>
          </article>
        );
      })}

      {/* Modal de Detalle */}
      <ProductModal
        product={selectedProduct}
        whatsappNumber={catalog.whatsappNumber}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
