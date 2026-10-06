"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  currency: string;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onSelect,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Imagen & Badges */}
      <div className="relative w-full h-52 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
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
            <span className="text-4xl mb-2">🥪</span>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {product.name}
            </span>
          </div>
        )}

        {/* Badge superior */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            {product.badge}
          </div>
        )}

        {/* Categoría chip */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
            <span className="font-extrabold text-lg text-amber-600 dark:text-amber-400 whitespace-nowrap">
              {currency}{product.price.toLocaleString()}
            </span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Ingredientes / Footer */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-[70%]">
            {product.ingredients.slice(0, 3).join(" • ")}
            {product.ingredients.length > 3 && " ..."}
          </div>

          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
            Ver más →
          </span>
        </div>
      </div>
    </div>
  );
};
