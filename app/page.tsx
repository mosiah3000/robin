import Image from "next/image";
import { catalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600 shadow-sm shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Sandwichería Donde Robin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                {catalogData.storeName}
              </h1>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block">
                📍 {catalogData.address}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${catalogData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition transform active:scale-95"
          >
            <span>📱 Pedir por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent py-10 sm:py-14 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Logo Central */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-4 drop-shadow-xl animate-fade-in">
            <Image
              src="/images/logo.png"
              alt="Logo Sandwichería Donde Robin"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="inline-block px-3.5 py-1 mb-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            🔥 HECHO AL MOMENTO EN LA PLANCHA
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight max-w-3xl leading-snug">
            &ldquo;{catalogData.slogan}&rdquo;
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
            {catalogData.tagline} • Personaliza tus aderezos favoritos y haz tu pedido directo a nuestra sandwichería.
          </p>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <main className="flex-grow">
        <CatalogGrid catalog={catalogData} />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Donde Robin"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100">
              {catalogData.storeName}
            </span>
          </div>

          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            📍 {catalogData.address} • 📱 Pedidos: +57 314 440 2740
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
