import Image from "next/image";
import { catalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-[#d90429] selection:text-white">
      {/* Barra superior de marca */}
      <div className="bg-[#d90429] text-white text-xs sm:text-sm font-black uppercase tracking-widest py-2 px-4 text-center shadow-md">
        🔥 UNA COSA ES UN SÁNDWICH, OTRA COSA ES UN SÁNDWICH A LA PLANCHA DONDE ROBIN 🔥
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0d0e11]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#006837] shadow-lg shrink-0 bg-white">
              <Image
                src="/images/logo.png"
                alt="Logo Sandwichería Donde Robin"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-black tracking-tight text-white uppercase leading-tight">
                {catalogData.storeName}
              </h1>
              <p className="text-[11px] text-zinc-400 hidden sm:flex items-center gap-1">
                📍 {catalogData.address}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${catalogData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#006837] hover:bg-[#008f4c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition transform active:scale-95"
          >
            <span>📱 Pedir por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Portada Principal del Catálogo (Estilo Portada PDF) */}
      <section className="relative overflow-hidden bg-[#0d0e11] border-b-2 border-zinc-800 py-12 sm:py-20">
        {/* Franja verde lateral decorativa idéntica a la portada del PDF */}
        <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-6 bg-[#006837]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo Oficial Donde Robin Central */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 drop-shadow-[0_20px_60px_rgba(0,104,55,0.4)] animate-fade-in hover:scale-105 transition-transform duration-300">
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
              <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-none">
                CATÁLOGO <br />
                <span className="text-white">DE SÁNDWICHES</span>
              </h2>
              {/* Línea roja característica del PDF */}
              <div className="w-28 h-2 bg-[#d90429] mx-auto rounded-full mt-3" />
            </div>

            {/* Slogan */}
            <p className="text-base sm:text-2xl font-bold text-zinc-200 max-w-2xl leading-snug">
              &ldquo;{catalogData.slogan}&rdquo;
            </p>

            {/* Ubicación y detalles */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-bold text-emerald-400">
              <span className="bg-[#141519] border border-zinc-800 px-4 py-2 rounded-full">
                📍 {catalogData.address}
              </span>
              <span className="bg-[#141519] border border-zinc-800 px-4 py-2 rounded-full">
                🔥 Sándwiches a la plancha preparados al momento
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor Vertical de Hojas del Catálogo (Exacto orden del PDF) */}
      <main className="flex-grow py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 mb-6 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#d90429]">
            MENÚ COMPLETO • DESLIZA HACIA ABAJO
          </span>
        </div>

        <CatalogGrid catalog={catalogData} />
      </main>

      {/* Contraportada / Footer estilo PDF */}
      <footer className="mt-auto border-t-2 border-zinc-800 bg-[#0d0e11] py-14 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d90429] via-[#006837] to-[#d90429]" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Logo Donde Robin"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              ¡TE ESPERAMOS!
            </h3>
            <p className="text-base font-bold text-emerald-400">
              Haz tu pedido directamente en nuestra sandwichería
            </p>
          </div>

          <div className="bg-[#141519] border border-zinc-800 p-6 rounded-3xl max-w-md mx-auto space-y-3">
            <p className="font-extrabold text-white text-base">
              {catalogData.storeName}
            </p>
            <p className="text-sm text-zinc-300">
              📍 {catalogData.address}
            </p>
            <p className="text-sm text-emerald-400 font-bold">
              📱 Pedidos WhatsApp: +57 314 440 2140
            </p>
          </div>

          <p className="text-xs text-zinc-500 pt-4">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
