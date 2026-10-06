import Image from "next/image";
import { catalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-[#d90429] selection:text-white">
      {/* Barra superior de marca */}
      <div className="bg-[#d90429] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1.5 px-2 text-center shadow-md">
        🔥 UNA COSA ES UN SÁNDWICH, OTRA COSA ES UN SÁNDWICH A LA PLANCHA DONDE ROBIN 🔥
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0d0e11]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#006837] shadow-lg shrink-0 bg-white">
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
                {catalogData.storeName}
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:flex items-center gap-1">
                📍 {catalogData.address}
              </p>
            </div>
          </div>

          {/* Botón WhatsApp compacto y sin salto de línea en mobile */}
          <a
            href={`https://wa.me/${catalogData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#006837] hover:bg-[#008f4c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md shadow-emerald-950/50 transition transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>📱 Pedir</span>
            <span className="hidden sm:inline">por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Portada Principal del Catálogo (Estilo Portada PDF) */}
      <section className="relative overflow-hidden bg-[#0d0e11] border-b-2 border-zinc-800 py-10 sm:py-20">
        {/* Franja verde lateral decorativa idéntica a la portada del PDF */}
        <div className="absolute right-0 top-0 bottom-0 w-2.5 sm:w-6 bg-[#006837]" />

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
                CATÁLOGO <br />
                <span className="text-white">DE SÁNDWICHES</span>
              </h2>
              {/* Línea roja característica del PDF */}
              <div className="w-24 sm:w-28 h-1.5 sm:h-2 bg-[#d90429] mx-auto rounded-full mt-3" />
            </div>

            {/* Slogan */}
            <p className="text-sm sm:text-xl font-bold text-zinc-200 max-w-2xl leading-snug px-2">
              &ldquo;{catalogData.slogan}&rdquo;
            </p>

            {/* Ubicación y detalles */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-[11px] sm:text-xs font-bold text-emerald-400">
              <span className="bg-[#141519] border border-zinc-800 px-3 py-1.5 rounded-full">
                📍 {catalogData.address}
              </span>
              <span className="bg-[#141519] border border-zinc-800 px-3 py-1.5 rounded-full">
                🔥 Hecho al momento en la plancha
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor Vertical de Hojas del Catálogo (Exacto orden del PDF) */}
      <main className="flex-grow py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 mb-6 text-center">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#d90429]">
            MENÚ COMPLETO • DESLIZA HACIA ABAJO
          </span>
        </div>

        <CatalogGrid catalog={catalogData} />
      </main>

      {/* Contraportada / Footer estilo PDF */}
      <footer className="mt-auto border-t-2 border-zinc-800 bg-[#0d0e11] py-12 sm:py-14 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d90429] via-[#006837] to-[#d90429]" />

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
            <p className="text-sm sm:text-base font-bold text-emerald-400">
              Haz tu pedido directamente en nuestra sandwichería
            </p>
          </div>

          <div className="bg-[#141519] border border-zinc-800 p-5 sm:p-6 rounded-3xl max-w-md mx-auto space-y-2.5">
            <p className="font-extrabold text-white text-sm sm:text-base">
              {catalogData.storeName}
            </p>
            <p className="text-xs sm:text-sm text-zinc-300">
              📍 {catalogData.address}
            </p>
            <p className="text-xs sm:text-sm text-emerald-400 font-bold">
              📱 Pedidos WhatsApp: +57 314 440 2140
            </p>
          </div>

          <p className="text-[11px] text-zinc-500 pt-3">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
