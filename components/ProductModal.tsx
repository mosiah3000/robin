"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  whatsappNumber: string;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  whatsappNumber,
  onClose,
}) => {
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    let message = `¡Hola Sanduchería Donde Robín! 👋 Quiero pedir:\n\n🥪 *${quantity}x ${product.name}*`;
    if (product.portion) {
      message += ` (${product.portion})`;
    }
    if (notes.trim()) {
      message += `\n📝 *Preferencias / Aderezos:* ${notes.trim()}`;
    }
    message += `\n\n¿Me confirman disponibilidad y tiempo de entrega? ¡Muchas gracias!`;

    const encodedMsg = encodeURIComponent(message);
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white rounded-full p-2.5 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen Cabecera */}
        <div className="relative w-full h-64 bg-zinc-100 dark:bg-zinc-800">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-zinc-800 dark:to-zinc-900 text-amber-700 dark:text-amber-400 p-4">
              <span className="text-6xl mb-2">🥪</span>
              <span className="text-sm font-semibold">{product.name}</span>
            </div>
          )}

          {product.badge && (
            <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
              {product.badge}
            </div>
          )}

          {product.portion && (
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
              🥩 {product.portion}
            </div>
          )}
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 max-h-[calc(85vh-16rem)] overflow-y-auto space-y-5">
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {product.name}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mt-2">
              {product.description}
            </p>
          </div>

          {/* Ingredientes detallados */}
          <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <span>🥗</span> Ingredientes incluidos:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700 shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Aderezos y Salsas */}
          {product.dressings && product.dressings.length > 0 && (
            <div className="bg-amber-50/60 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-200/60 dark:border-amber-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <span>🥫</span> Aderezos y salsas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.dressings.map((dressing, idx) => (
                  <span
                    key={idx}
                    className="bg-white dark:bg-zinc-800 text-amber-900 dark:text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800"
                  >
                    ✨ {dressing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Selector de cantidad y notas */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                Cantidad de sándwiches:
              </span>
              <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-full p-1 border border-zinc-200 dark:border-zinc-700">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 shadow font-bold hover:bg-zinc-200 dark:hover:bg-zinc-600 transition"
                >
                  -
                </button>
                <span className="w-6 text-center font-extrabold text-zinc-900 dark:text-zinc-100">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white shadow font-bold hover:bg-amber-600 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5">
                Aclaraciones / Quitar o cambiar aderezos (opcional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Sin pepinillos, aderezo extra de ajo..."
                className="w-full text-sm px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Footer / Botón WhatsApp */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/80 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/25 transition-all transform active:scale-98"
          >
            <span>Pedir por WhatsApp</span>
            <span className="text-xs bg-emerald-800/40 px-2.5 py-1 rounded-full">
              {quantity} {quantity === 1 ? "sándwich" : "sándwiches"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
