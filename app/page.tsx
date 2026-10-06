import { catalogData } from "@/data/products";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥪</span>
            <div>
              <h1 className="text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                {catalogData.storeName}
              </h1>
            </div>
          </div>

          <a
            href={`https://wa.me/${catalogData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition"
          >
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400">
            Menú Digital Robin
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight max-w-2xl mx-auto leading-tight">
            {catalogData.tagline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Explora nuestro menú, elige tus favoritos y haz tu pedido directo por WhatsApp en un par de clics.
          </p>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <main className="flex-grow">
        <CatalogGrid catalog={catalogData} />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
          <p className="font-semibold text-zinc-700 dark:text-zinc-300">
            © 2026 {catalogData.storeName} — Todos los derechos reservados.
          </p>
          <p>Hecho con ingredientes de primera calidad para los amantes del buen comer.</p>
        </div>
      </footer>
    </div>
  );
}
