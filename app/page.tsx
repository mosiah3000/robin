"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { catalogData, salsamentariaCatalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

type CatalogCategory = "sandwiches" | "salsamentaria";

export default function Home() {
  const [activeTab, setActiveTab] = useState<CatalogCategory>("sandwiches");

  // Sincronizar hash en la URL (#sandwiches o #salsamentaria)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "salsamentaria" || hash === "sandwiches") {
        setActiveTab(hash as CatalogCategory);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const switchTab = (tab: CatalogCategory) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  const currentCatalog = activeTab === "sandwiches" ? catalogData : salsamentariaCatalogData;
  const isSalsamentaria = activeTab === "salsamentaria";

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-[#d90429] selection:text-white">
      {/* Barra superior de marca dinámica */}
      <div
        className={`${
          isSalsamentaria ? "bg-[#800e13]" : "bg-[#d90429]"
        } text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1.5 px-2 text-center shadow-md transition-colors duration-300`}
      >
        {isSalsamentaria
          ? "🥩 SALSAMENTARÍA CAVALT · MOMENTOS ÚNICOS, SABOR INIGUALABLE EN CADA CORTE 🥩"
          : "🔥 UNA COSA ES UN SÁNDWICH, OTRA COSA ES UN SÁNDWICH A LA PLANCHA DONDE ROBIN 🔥"}
      </div>

      {/* Header / Navbar Principal */}
      <header className="sticky top-0 z-40 bg-[#0d0e11]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className={`relative w-9 h-9 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 ${isSalsamentaria ? "border-amber-400" : "border-[#006837]"} shadow-lg shrink-0 bg-white transition-colors duration-300`}>
              <Image
                src="/images/logo.png"
                alt="Logo Sandwichería Donde Robin"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-base md:text-lg font-black tracking-tight text-white uppercase leading-tight truncate">
                {isSalsamentaria ? "Salsamentaría Donde Robin" : catalogData.storeName}
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:flex items-center gap-1">
                📍 {catalogData.address}
              </p>
            </div>
          </div>

          {/* Menú de Botones Superior en Header (Desktop) */}
          <nav className="hidden md:flex items-center gap-2 bg-[#141519] p-1.5 rounded-2xl border border-zinc-800 shadow-inner">
            <button
              type="button"
              onClick={() => switchTab("sandwiches")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                !isSalsamentaria
                  ? "bg-[#006837] text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/40"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <span>🥪</span>
              <span>Sándwiches</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${!isSalsamentaria ? "bg-emerald-900 text-emerald-200" : "bg-zinc-800 text-zinc-400"}`}>
                16
              </span>
            </button>

            <button
              type="button"
              onClick={() => switchTab("salsamentaria")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${
                isSalsamentaria
                  ? "bg-[#800e13] text-white shadow-lg shadow-red-950/60 ring-1 ring-amber-400/50"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              <span>🍖</span>
              <span>Salsamentaria</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isSalsamentaria ? "bg-amber-400 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
                Cavalt
              </span>
            </button>
          </nav>

          {/* Botón WhatsApp */}
          <a
            href={`https://wa.me/${catalogData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-2xl ${
              isSalsamentaria ? "bg-[#800e13] hover:bg-[#a5131a]" : "bg-[#006837] hover:bg-[#008f4c]"
            } text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md transition transform active:scale-95 whitespace-nowrap shrink-0`}
          >
            <span>📱 Pedir</span>
            <span className="hidden sm:inline">por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Menú Superior Sticky con 2 Botones (Visible en móvil y tablet como control rápido) */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#0d0e11]/95 backdrop-blur-md border-b border-zinc-800 py-2.5 px-3 sm:px-6 shadow-xl">
        <div className="max-w-md mx-auto flex items-center p-1 bg-[#141519] rounded-2xl border border-zinc-800 shadow-inner">
          <button
            type="button"
            onClick={() => switchTab("sandwiches")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
              !isSalsamentaria
                ? "bg-[#006837] text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/40 scale-[1.02]"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
            }`}
          >
            <span className="text-base">🥪</span>
            <span>Sándwiches</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${!isSalsamentaria ? "bg-emerald-950/80 text-emerald-300" : "bg-zinc-800 text-zinc-400"}`}>
              16
            </span>
          </button>

          <button
            type="button"
            onClick={() => switchTab("salsamentaria")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
              isSalsamentaria
                ? "bg-[#800e13] text-white shadow-lg shadow-red-950/60 ring-1 ring-amber-400/50 scale-[1.02]"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
            }`}
          >
            <span className="text-base">🍖</span>
            <span>Salsamentaria</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isSalsamentaria ? "bg-amber-400 text-zinc-950" : "bg-zinc-800 text-zinc-400"}`}>
              Cavalt
            </span>
          </button>
        </div>
      </div>

      {/* Portada Principal del Catálogo (Estilo Portada PDF) */}
      <section className="relative overflow-hidden bg-[#0d0e11] border-b-2 border-zinc-800 py-10 sm:py-20 transition-all duration-300">
        {/* Franja decorativa lateral característica del PDF */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-2.5 sm:w-6 ${
            isSalsamentaria ? "bg-[#800e13]" : "bg-[#006837]"
          } transition-colors duration-300`}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
            {/* Logo Oficial Donde Robin Central */}
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 drop-shadow-[0_20px_60px_rgba(0,104,55,0.4)] animate-fade-in hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="Logo Oficial Sandwichería Donde Robin"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            {/* Titular Oficial del Catálogo */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
                {isSalsamentaria ? (
                  <>
                    CATÁLOGO <br />
                    <span className="text-amber-400">DE SALSAMENTARIA</span>
                  </>
                ) : (
                  <>
                    CATÁLOGO <br />
                    <span className="text-white">DE SÁNDWICHES</span>
                  </>
                )}
              </h2>

              {/* Subtítulo de categoría */}
              <p className="text-xs sm:text-base font-black uppercase tracking-widest text-zinc-300 pt-1">
                {isSalsamentaria ? "JAMONES, PAVOS Y PERNILES · CÁRNICOS CAVALT S.A.S." : "A LA PLANCHA · PREPARADOS AL MOMENTO"}
              </p>

              {/* Línea característica estilo PDF */}
              <div
                className={`w-24 sm:w-28 h-1.5 sm:h-2 ${
                  isSalsamentaria ? "bg-[#d4af37]" : "bg-[#d90429]"
                } mx-auto rounded-full mt-3 transition-colors duration-300`}
              />
            </div>

            {/* Slogan */}
            <p className="text-sm sm:text-xl font-bold text-zinc-200 max-w-2xl leading-snug px-2">
              &ldquo;{currentCatalog.slogan}&rdquo;
            </p>

            {/* Ubicación y detalles de la línea */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-[11px] sm:text-xs font-bold">
              <span className="bg-[#141519] border border-zinc-800 px-3 py-1.5 rounded-full text-zinc-200">
                📍 {currentCatalog.address}
              </span>
              {isSalsamentaria ? (
                <>
                  <span className="bg-[#141519] border border-amber-900/50 px-3 py-1.5 rounded-full text-amber-400">
                    🥩 Cárnicos Cavalt S.A.S.
                  </span>
                  <span className="bg-[#141519] border border-amber-900/50 px-3 py-1.5 rounded-full text-amber-300">
                    ✨ Empaque al vacío y horneado artesanal
                  </span>
                  <span className="bg-[#141519] border border-amber-900/50 px-3 py-1.5 rounded-full text-emerald-400">
                    🎉 Ideal para cenas familiares y eventos
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-[#141519] border border-zinc-800 px-3 py-1.5 rounded-full text-emerald-400">
                    🔥 Hecho al momento en la plancha
                  </span>
                  <span className="bg-[#141519] border border-zinc-800 px-3 py-1.5 rounded-full text-emerald-300">
                    🥖 Pan artesanal y salsas de la casa
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor Vertical de Hojas del Catálogo */}
      <main className="flex-grow py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 mb-6 text-center">
          <span
            className={`text-[11px] sm:text-xs font-black uppercase tracking-widest ${
              isSalsamentaria ? "text-amber-400" : "text-[#d90429]"
            }`}
          >
            {isSalsamentaria
              ? "SELECCIÓN DE JAMONES Y PERNILES CAVALT • DESLIZA HACIA ABAJO"
              : "MENÚ COMPLETO • DESLIZA HACIA ABAJO"}
          </span>
        </div>

        <CatalogGrid catalog={currentCatalog} />
      </main>

      {/* Contraportada / Footer estilo PDF */}
      <footer className="mt-auto border-t-2 border-zinc-800 bg-[#0d0e11] py-12 sm:py-14 relative">
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 ${
            isSalsamentaria
              ? "bg-gradient-to-r from-[#800e13] via-[#d4af37] to-[#800e13]"
              : "bg-gradient-to-r from-[#d90429] via-[#006837] to-[#d90429]"
          }`}
        />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Logo Donde Robin"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
              ¡TE ESPERAMOS!
            </h3>
            <p className={`text-sm sm:text-base font-bold ${isSalsamentaria ? "text-amber-400" : "text-emerald-400"}`}>
              {isSalsamentaria
                ? "Haz tu pedido o cotización de jamones y perniles directamente por WhatsApp"
                : "Haz tu pedido directamente en nuestra sandwichería"}
            </p>
          </div>

          <div className="bg-[#141519] border border-zinc-800 p-5 sm:p-6 rounded-3xl max-w-md mx-auto space-y-2.5">
            <p className="font-extrabold text-white text-sm sm:text-base">
              {currentCatalog.storeName}
            </p>
            {isSalsamentaria && (
              <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Distribuidor Autorizado Cárnicos Cavalt S.A.S.
              </p>
            )}
            <p className="text-xs sm:text-sm text-zinc-300">
              📍 {currentCatalog.address}
            </p>
            <p className={`text-xs sm:text-sm ${isSalsamentaria ? "text-amber-400" : "text-emerald-400"} font-bold`}>
              📱 Pedidos WhatsApp: +57 314 440 2140
            </p>
          </div>

          {/* Selector rápido inferior para cambiar de catálogo */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                switchTab("sandwiches");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition ${
                !isSalsamentaria
                  ? "bg-[#006837] text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              🥪 Ver Catálogo de Sándwiches
            </button>
            <button
              onClick={() => {
                switchTab("salsamentaria");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition ${
                isSalsamentaria
                  ? "bg-[#800e13] text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              🍖 Ver Catálogo de Salsamentaria
            </button>
          </div>

          <p className="text-[11px] text-zinc-500 pt-3">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
