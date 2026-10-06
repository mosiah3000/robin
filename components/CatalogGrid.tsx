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

  const handleDirectWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const message = `¡Hola Sandwichería Donde Robin! 👋 Quiero pedir:\n\n🥪 *1x ${product.name}*\n\n¿Me confirman disponibilidad? ¡Muchas gracias!`;
    const cleanNumber = catalog.whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-6 space-y-12 sm:space-y-16">
      {catalog.products.map((product) => {
        return (
          <article
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="group relative flex flex-col bg-[#141519] border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-emerald-600 transition-all duration-300 cursor-pointer"
          >
            {/* Header de Página Estilo PDF */}
            <div className="relative bg-[#0d0e11] border-b border-zinc-800 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Bloque Rojo con Número */}
                <span className="bg-[#d90429] text-white font-black text-sm sm:text-base px-3.5 py-1 rounded tracking-wider shadow-sm">
                  {product.id}
                </span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-zinc-300">
                  SANDWICHERÍA DONDE ROBIN
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
                <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  {product.name}
                </h3>
                {product.badge && (
                  <span className="bg-[#006837] text-white text-xs font-black uppercase px-3 py-1 rounded-full border border-emerald-400/30 shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Subtítulo si aplica */}
              {product.subtitle && (
                <p className="text-sm text-zinc-400 font-medium italic mt-1">
                  {product.subtitle}
                </p>
              )}

              {/* Línea verde separadora característica del PDF */}
              <div className="w-16 h-1.5 bg-[#006837] rounded-full mt-3 group-hover:w-28 transition-all duration-300" />
            </div>

            {/* Imagen Principal del Sándwich con franja roja lateral */}
            <div className="relative w-full h-72 sm:h-[420px] bg-zinc-950 overflow-hidden">
              {/* Franja roja lateral izquierda característica del PDF */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#d90429] z-10" />

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
                priority={parseInt(product.id) <= 3}
              />
            </div>

            {/* Bloque INGREDIENTES */}
            <div className="p-5 sm:p-8 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3.5 h-1 bg-[#d90429] rounded-full" />
                  <h4 className="text-sm font-black uppercase tracking-wider text-emerald-400">
                    INGREDIENTES
                  </h4>
                </div>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed pl-5 font-medium">
                  {product.ingredientsText}
                </p>
              </div>

              {/* Chips de Ingredientes */}
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
                  <span className="font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    HECHO AL MOMENTO
                  </span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400 italic">
                    Personaliza tus aderezos
                  </span>
                </div>

                <button
                  onClick={(e) => handleDirectWhatsApp(e, product)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#006837] hover:bg-[#008f4c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all transform active:scale-95"
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
