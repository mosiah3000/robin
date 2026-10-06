"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#18191e] border border-zinc-800/90 shadow-xl hover:border-emerald-600/60 hover:shadow-2xl hover:shadow-emerald-950/30 transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Barra superior estilo PDF */}
      <div className="relative bg-[#0d0e11] border-b border-zinc-800 flex items-center justify-between overflow-hidden">
        <div className="flex items-center">
          {/* Bloque Rojo con Número */}
          <div className="bg-[#d90429] text-white font-black text-sm px-3.5 py-1.5 flex items-center justify-center tracking-wider">
            {product.id}
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 pl-3">
            SANDWICHERÍA DONDE ROBIN
          </span>
        </div>

        {/* Watermark de Número en la esquina */}
        <div className="absolute right-2 -top-3 text-5xl font-black text-zinc-800/40 select-none pointer-events-none tracking-tighter">
          {product.id}
        </div>
      </div>

      {/* Imagen con franja roja lateral estilo PDF */}
      <div className="relative w-full h-56 bg-zinc-950 overflow-hidden">
        {/* Línea roja lateral característica del catálogo PDF */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d90429] z-10" />

        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-amber-500 p-4 text-center">
            <span className="text-5xl mb-2">🥪</span>
            <span className="text-xs font-semibold text-zinc-300">
              {product.name}
            </span>
          </div>
        )}

        {/* Badge Especial */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#006837] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md border border-emerald-400/30">
            {product.badge}
          </div>
        )}
      </div>

      {/* Cuerpo del Contenido */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Título del Sándwich */}
          <h3 className="font-extrabold text-xl text-white group-hover:text-emerald-400 transition-colors leading-tight mb-2">
            {product.name}
          </h3>

          {/* Línea verde separadora como en el PDF */}
          <div className="w-12 h-1 bg-[#006837] rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

          {/* Sección INGREDIENTES */}
          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-2.5 h-0.5 bg-[#d90429]" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                INGREDIENTES
              </span>
            </div>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
              {product.ingredients.join(", ")}.
            </p>
          </div>

          {/* Aderezos */}
          {product.dressings && product.dressings.length > 0 && (
            <div className="mt-3 pt-3 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1.5">
                {product.dressings.map((dressing, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-[#006837]/20 text-emerald-300 border border-emerald-800/50 px-2 py-0.5 rounded-md"
                  >
                    ✨ {dressing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pie de la tarjeta estilo PDF */}
        <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-[11px]">
          <span className="font-extrabold text-emerald-400 uppercase tracking-wider">
            HECHO AL MOMENTO
          </span>
          <span className="text-zinc-400 italic">
            Personaliza tus aderezos
          </span>
        </div>
      </div>
    </article>
  );
};
