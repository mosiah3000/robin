"use client";

import React, { useState, useEffect } from "react";
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
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  // Bloquear scroll de fondo en mobile cuando el modal esté abierto
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleWhatsAppOrder = () => {
    let message = `¡Hola Sandwichería Donde Robin! 👋 Quiero pedir:\n\n🥪 *${quantity}x ${product.name}*`;
    if (notes.trim()) {
      message += `\n📝 *Aclaraciones / Aderezos elegidos:* ${notes.trim()}`;
    }
    message += `\n\n¿Podrían confirmarme disponibilidad y tiempo de entrega? ¡Muchas gracias!`;

    const cleanNumber = whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#141519] rounded-3xl overflow-hidden shadow-2xl border border-zinc-700 flex flex-col max-h-[92dvh] sm:max-h-[85vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón X Flotante Fijo en la Esquina Superior Derecha */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/80 hover:bg-[#d90429] text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-transform active:scale-90 font-black text-sm"
        >
          ✕
        </button>

        {/* Barra superior estilo PDF */}
        <div className="bg-[#0d0e11] border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 pr-10">
            <span className="bg-[#d90429] text-white font-black text-xs px-2 py-0.5 rounded">
              {product.id}
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300 truncate">
              SANDWICHERÍA DONDE ROBIN
            </span>
          </div>
        </div>

        {/* Imagen Cabecera Compacta para Mobile */}
        <div className="relative w-full h-44 sm:h-52 bg-zinc-950 shrink-0">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#d90429] z-10" />

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />

          {product.badge && (
            <div className="absolute bottom-3 left-4 bg-[#006837] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md border border-emerald-400/30">
              {product.badge}
            </div>
          )}
        </div>

        {/* Contenido Scrollable */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-grow overscroll-contain">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {product.name}
            </h2>
            <div className="w-12 h-1 bg-[#006837] rounded-full mt-1.5 mb-2.5" />
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {product.ingredientsText}
            </p>
          </div>

          {/* Chips de Ingredientes */}
          <div className="bg-[#0d0e11] p-3 sm:p-3.5 rounded-2xl border border-zinc-800 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-0.5 bg-[#d90429]" />
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                INGREDIENTES INCLUIDOS
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredientsList.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#1a1c22] text-zinc-200 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-zinc-700/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Selector de Cantidad */}
          <div className="flex items-center justify-between bg-[#0d0e11] px-3.5 py-2 rounded-2xl border border-zinc-800">
            <span className="text-xs font-black uppercase tracking-wider text-zinc-300">
              CANTIDAD:
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-zinc-800 text-white font-black hover:bg-zinc-700 active:scale-95 transition"
              >
                -
              </button>
              <span className="w-5 text-center font-black text-white text-sm">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#d90429] text-white font-black hover:bg-red-700 active:scale-95 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Input de Aclaraciones */}
          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">
              Aderezos o aclaraciones (opcional):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Sin pepinillos, aderezo extra de ajo..."
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-[#0d0e11] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Footer / Botón Pedir por WhatsApp Sticky Abajo */}
        <div className="p-3 sm:p-4 bg-[#0d0e11] border-t border-zinc-800 shrink-0">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#006837] hover:bg-[#008f4c] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all transform active:scale-98"
          >
            <span>📱 PEDIR POR WHATSAPP</span>
            <span className="bg-emerald-900 text-emerald-200 text-[11px] px-2 py-0.5 rounded-full lowercase">
              ({quantity} {quantity === 1 ? "sándwich" : "sándwiches"})
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
