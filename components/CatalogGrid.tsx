"use client";

import React, { useState, useMemo } from "react";
import { CatalogData, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

interface CatalogGridProps {
  catalog: CatalogData;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ catalog }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return catalog.products;

    const q = searchQuery.toLowerCase();
    return catalog.products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.portion && p.portion.toLowerCase().includes(q)) ||
        p.ingredients.some((i) => i.toLowerCase().includes(q)) ||
        p.dressings.some((d) => d.toLowerCase().includes(q))
      );
    });
  }, [catalog.products, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Barra de Búsqueda */}
      <div className="mb-10 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por sándwich, ingredientes (pavo, cordero, champiñones, jalapeños)..."
            className="w-full pl-12 pr-20 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition text-sm sm:text-base"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md transition"
            >
              Borrar
            </button>
          )}
        </div>
      </div>

      {/* Grid de Productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 max-w-md mx-auto">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            No encontramos resultados para &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Prueba buscando por ingredientes como pollo, pavo, cordero, pernil, champiñones, etc.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs font-bold bg-amber-500 text-white px-4 py-2.5 rounded-xl hover:bg-amber-600 transition shadow-sm"
          >
            Ver todo el menú
          </button>
        </div>
      )}

      {/* Modal de Detalle */}
      <ProductModal
        product={selectedProduct}
        whatsappNumber={catalog.whatsappNumber}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
