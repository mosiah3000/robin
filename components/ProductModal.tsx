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
    let message = `¡Hola Sandwichería Donde Robin! 👋 Quiero pedir:\n\n🥪 *${quantity}x ${product.name}*`;
    if (product.portion) {
      message += ` (${product.portion})`;
    }
    if (notes.trim()) {
      message += `\n📝 *Aclaraciones / Aderezos elegidos:* ${notes.trim()}`;
    }
    message += `\n\n¿Podrían confirmarme disponibilidad y tiempo de entrega? ¡Muchas gracias!`;

    const encodedMsg = encodeURIComponent(message);
    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#18191e] rounded-3xl overflow-hidden shadow-2xl border border-zinc-700/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior estilo PDF */}
        <div className="relative bg-[#0d0e11] border-b border-zinc-800 flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="bg-[#d90429] text-white font-black text-xs px-2.5 py-1 rounded">
              {product.id}
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-zinc-300">
              SANDWICHERÍA DONDE ROBIN
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#d90429] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Imagen Cabecera con línea roja lateral */}
        <div className="relative w-full h-64 bg-zinc-950">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#d90429] z-10" />

          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-amber-500 p-4">
              <span className="text-6xl mb-2">🥪</span>
              <span className="text-sm font-semibold text-zinc-200">{product.name}</span>
            </div>
          )}

          {product.badge && (
            <div className="absolute top-4 right-4 bg-[#006837] text-white text-xs font-black uppercase px-3 py-1.5 rounded-lg shadow-lg border border-emerald-400/30">
              {product.badge}
            </div>
          )}
        </div>

        {/* Contenido del Modal */}
        <div className="p-6 max-h-[calc(85vh-16rem)] overflow-y-auto space-y-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {product.name}
            </h2>
            <div className="w-16 h-1 bg-[#006837] rounded-full mt-2 mb-3" />
            <p className="text-zinc-300 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Sección INGREDIENTES */}
          <div className="bg-[#111216] p-4 rounded-2xl border border-zinc-800">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-3 h-0.5 bg-[#d90429]" />
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                INGREDIENTES
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-800 text-zinc-100 text-xs font-semibold px-3 py-1.5 rounded-xl border border-zinc-700 shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Aderezos */}
          {product.dressings && product.dressings.length > 0 && (
            <div className="bg-[#006837]/10 p-4 rounded-2xl border border-[#006837]/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                  ✨ ADEREZOS INCLUIDOS:
                </span>
                <span className="text-[11px] text-zinc-400 italic">
                  Personaliza tus aderezos
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.dressings.map((dressing, idx) => (
                  <span
                    key={idx}
                    className="bg-[#006837] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-xs"
                  >
                    {dressing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cantidad y Notas */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-300">
                CANTIDAD:
              </span>
              <div className="flex items-center gap-3 bg-[#111216] rounded-xl p-1 border border-zinc-700">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 text-white font-black hover:bg-zinc-700 transition"
                >
                  -
                </button>
                <span className="w-6 text-center font-black text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#d90429] text-white font-black hover:bg-red-700 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Personalización o aclaraciones (opcional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej: Con aderezo extra de ajo, sin jalapeños..."
                className="w-full text-sm px-4 py-3 rounded-xl bg-[#111216] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Footer / Botón Pedir por WhatsApp */}
        <div className="p-4 bg-[#111216] border-t border-zinc-800 flex items-center gap-3">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#006837] hover:bg-[#008f4c] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all transform active:scale-98"
          >
            <span>📱 PEDIR POR WHATSAPP</span>
            <span className="bg-emerald-900 text-emerald-200 text-xs px-2.5 py-0.5 rounded-full lowercase">
              ({quantity} {quantity === 1 ? "sándwich" : "sándwiches"})
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
