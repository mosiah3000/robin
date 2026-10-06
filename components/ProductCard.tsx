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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#18191e] border border-zinc-800/90 shadow-xl hover:border-emerald-600/60 transition-all duration-300 cursor-pointer"
    >
      {/* Barra superior estilo PDF */}
      <div className="relative bg-[#0d0e11] border-b border-zinc-800 flex items-center justify-between overflow-hidden">
        <div className="flex items-center">
          <div className="bg-[#d90429] text-white font-black text-sm px-3.5 py-1.5 flex items-center justify-center tracking-wider">
            {product.id}
          </div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 pl-3">
            SANDWICHERÍA DONDE ROBIN
          </span>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative w-full h-56 bg-zinc-950 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d90429] z-10" />

        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-amber-500 p-4 text-center">
            <span className="text-5xl mb-2">🥪</span>
            <span className="text-xs font-semibold text-zinc-300">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Cuerpo */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-extrabold text-xl text-white group-hover:text-emerald-400 transition-colors leading-tight mb-2">
            {product.name}
          </h3>
          <div className="w-12 h-1 bg-[#006837] rounded-full mb-3" />
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
            {product.ingredientsText}
          </p>
        </div>

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
