"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  currency: string;
  whatsappNumber: string;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currency,
  whatsappNumber,
  onClose,
}) => {
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const total = product.price * quantity;
    let message = `¡Hola Robin Sandwiches! 👋 Quiero pedir:\n\n🥪 *${quantity}x ${product.name}* (${currency}${total.toLocaleString()})`;
    if (notes.trim()) {
      message += `\n📝 *Aclaraciones / Preferencias:* ${notes.trim()}`;
    }
    message += `\n\n¿Podrían confirmarme el tiempo de demora y opciones de entrega? ¡Muchas gracias!`;

    const encodedMsg = encodeURIComponent(message);
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-md transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
            <div className="absolute bottom-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              {product.badge}
            </div>
          )}
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
          <div className="flex justify-between items-start gap-4 mb-3">
            <div>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                {product.name}
              </h2>
            </div>
            <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 whitespace-nowrap">
              {currency}{product.price.toLocaleString()}
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Ingredientes */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Ingredientes incluidos:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium px-3 py-1.5 rounded-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Selector de cantidad y notas */}
          <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Cantidad:
              </span>
              <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 rounded-full p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 shadow hover:bg-zinc-200 font-bold transition"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-zinc-900 dark:text-zinc-100">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-white shadow hover:bg-amber-600 font-bold transition"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">
                Aclaraciones o ingredientes a quitar/agregar (opcional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Sin cebolla, pan bien tostado..."
                className="w-full text-sm px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Footer / Botón WhatsApp */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800/60 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform active:scale-98"
          >
            <span>Pedir por WhatsApp</span>
            <span className="bg-emerald-700/50 px-2 py-0.5 rounded-md text-sm font-semibold">
              {currency}{(product.price * quantity).toLocaleString()}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
