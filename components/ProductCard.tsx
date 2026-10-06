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
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Imagen & Badges */}
      <div className="relative w-full h-56 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
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
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 text-amber-700 dark:text-amber-400 p-4 text-center">
            <span className="text-5xl mb-2">🥪</span>
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              {product.name}
            </span>
          </div>
        )}

        {/* Badge superior */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {product.badge}
          </div>
        )}

        {/* Porción chip */}
        {product.portion && (
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
            🥩 {product.portion}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
            {product.name}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Aderezos destacados */}
          {product.dressings && product.dressings.length > 0 && (
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                Aderezos incluidos:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.dressings.map((dressing, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/50 px-2 py-0.5 rounded-md font-medium"
                  >
                    ✨ {dressing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer / Botón */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {product.ingredients.length} ingredientes
          </span>

          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Ver detalle y pedir →
          </span>
        </div>
      </div>
    </div>
  );
};
