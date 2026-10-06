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
      const matchName = p.name.toLowerCase().includes(q);
      const matchSubtitle = p.subtitle ? p.subtitle.toLowerCase().includes(q) : false;
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchPortion = p.portion ? p.portion.toLowerCase().includes(q) : false;
      const matchIngredients = p.ingredients.some((i) => i.toLowerCase().includes(q));
      const matchDressings = p.dressings ? p.dressings.some((d) => d.toLowerCase().includes(q)) : false;

      return (
        matchName ||
        matchSubtitle ||
        matchDesc ||
        matchPortion ||
        matchIngredients ||
        matchDressings
      );
    });
  }, [catalog.products, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Barra de Búsqueda Estilizada */}
      <div className="mb-10 max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por sándwich, ingredientes (pavo, cordero, pernil, jalapeños)..."
            className="w-full pl-12 pr-20 py-4 rounded-2xl bg-[#18191e] border border-zinc-700/80 text-white placeholder:text-zinc-500 shadow-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition text-sm sm:text-base"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg transition"
            >
              Borrar
            </button>
          )}
        </div>
      </div>

      {/* Grid de Productos con estilo idéntico al PDF */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#18191e] rounded-3xl border border-zinc-800 p-8 max-w-md mx-auto">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-black text-white uppercase mb-1">
            No encontramos resultados para &ldquo;{searchQuery}&rdquo;
          </h3>
          <p className="text-sm text-zinc-400 mb-5">
            Prueba buscando por pollo, pavo, cordero, pernil, champiñones, o aderezos.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs font-black uppercase tracking-wider bg-[#006837] text-white px-5 py-3 rounded-xl hover:bg-[#008f4c] transition shadow-lg shadow-emerald-950/40"
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
