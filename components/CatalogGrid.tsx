"use client";

import React, { useState, useMemo } from "react";
import { CatalogData, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

interface CatalogGridProps {
  catalog: CatalogData;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ catalog }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return catalog.products.filter((p) => {
      const matchesCategory =
        selectedCategory === "Todos" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.ingredients.some((i) =>
          i.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [catalog.products, selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Barra de Búsqueda y Filtros */}
      <div className="mb-10 space-y-6">
        {/* Input de Búsqueda */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por sándwich, ingredientes o salsas..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md"
            >
              Borrar
            </button>
          )}
        </div>

        {/* Categorías */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {catalog.categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 scale-105"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={catalog.currency}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-zinc-900/40 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 max-w-md mx-auto">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            No encontramos resultados
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Intenta con otro término de búsqueda o selecciona otra categoría.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Todos");
            }}
            className="text-xs font-semibold bg-amber-500 text-white px-4 py-2 rounded-xl hover:bg-amber-600 transition"
          >
            Ver todo el menú
          </button>
        </div>
      )}

      {/* Modal de Detalle */}
      <ProductModal
        product={selectedProduct}
        currency={catalog.currency}
        whatsappNumber={catalog.whatsappNumber}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
