import Image from "next/image";
import { catalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0e11] text-zinc-100 selection:bg-[#d90429] selection:text-white">
      {/* Barra superior de marca estilo Donde Robin */}
      <div className="bg-[#d90429] text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-4 text-center">
        🔥 UNA COSA ES UN SÁNDWICH, OTRA COSA ES UN SÁNDWICH A LA PLANCHA DONDE ROBIN 🔥
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#111216]/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#006837] shadow-lg shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Sandwichería Donde Robin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-white uppercase leading-tight">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#006837] hover:bg-[#008f4c] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition transform active:scale-95"
          >
            <span>📱 PEDIR POR WHATSAPP</span>
          </a>
        </div>
      </header>

      {/* Hero Section inspirado en la portada del PDF */}
      <section className="relative overflow-hidden bg-[#0d0e11] border-b border-zinc-800 py-12 sm:py-16">
        {/* Franja verde lateral decorativa idéntica a la portada del PDF */}
        <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-5 bg-[#006837]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Texto y Titular */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-[#d90429] animate-pulse" />
                HECHO AL MOMENTO • A LA PLANCHA
              </div>

              <div>
                <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none">
                  CATÁLOGO <br />
                  <span className="text-white">DE SÁNDWICHES</span>
                </h2>
                {/* Línea roja característica del PDF */}
                <div className="w-24 h-1.5 bg-[#d90429] mt-3 mx-auto lg:mx-0 rounded-full" />
              </div>

              <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-medium pt-2">
                &ldquo;{catalogData.slogan}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg">
                📍 {catalogData.address} • Elige tu sándwich favorito, personaliza tus aderezos y pídelo directo a nuestra plancha.
              </p>
            </div>

            {/* Logo de Robin Gigante */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 drop-shadow-[0_20px_50px_rgba(0,104,55,0.3)] animate-fade-in transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Sandwichería Donde Robin"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <main className="flex-grow py-8">
        <CatalogGrid catalog={catalogData} />
      </main>

      {/* Footer inspirado en la contraportada del PDF */}
      <footer className="mt-auto border-t border-zinc-800 bg-[#111216] py-12 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d90429] via-[#006837] to-[#d90429]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#006837] shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Donde Robin"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-black text-lg text-white uppercase tracking-wider">
              {catalogData.storeName}
            </span>
          </div>

          <p className="text-sm font-bold text-emerald-400">
            ¡TE ESPERAMOS! Haz tu pedido directamente en nuestra sandwichería
          </p>

          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            📍 {catalogData.address} • 📱 Pedidos WhatsApp: +57 314 440 2740
          </p>

          <div className="pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
