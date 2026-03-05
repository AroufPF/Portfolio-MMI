import Link from "next/link";

export default function SaeLog() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      <header className="max-w-4xl mx-auto mb-12 relative p-6 md:p-8 border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          RETOUR_DASHBOARD
        </Link>
        <div className="border-l-[2px] border-cyan-500 pl-4">
          <h2 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 animate-pulse" /> [DATA_LOG //
            MODULE_ACTIF]
          </h2>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            PROJET SCOLAIRE
          </h1>
          <p className="text-slate-400 font-mono text-sm mt-2">
            Jeu vidéo & Site Web Promotionnel
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="border border-slate-800 bg-slate-900 p-6 md:p-10 relative group hover:border-cyan-500/50 transition-colors shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] opacity-80 group-hover:opacity-100" />

          <div className="space-y-8 mb-10">
            <div className="bg-slate-800/50 p-6 border border-slate-700">
              <h3 className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                01 // Contexte_
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dans le cadre d'un projet scolaire, mon équipe et moi devions
                créer un jeu vidéo entièrement sur UNITY. Mon rôle a consisté à
                m'occuper de la création du site web et de créer les effets
                sonores du jeu.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest border-b border-slate-800 pb-2">
                02 // Opérations_Effectuées_
              </h3>
              <ul className="list-none space-y-3 text-sm text-slate-300">
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500"></span> Création du
                  site web avec Vue.js.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500"></span> Création des
                  effets sonores via REAPER.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                React
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                TypeScript
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Vue.js
              </span>
            </div>
          </div>

          <a
            href="https://dive-game.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-cyan-950/30 text-cyan-400 font-mono text-sm tracking-widest hover:bg-cyan-900/60 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all mb-12 border border-cyan-800 hover:border-cyan-400 group/btn"
          >
            VISITER LE SITE WEB{" "}
            <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">
              &nearr;
            </span>
          </a>

          {/* 📺 LE MONITEUR YOUTUBE (SAE TEASER) */}
          <div className="relative mt-12">
            {/* Voyant d'enregistrement clignotant */}
            <div className="absolute -top-3 left-4 bg-slate-900 border border-slate-700 px-3 py-1 text-[0.7rem] font-mono text-cyan-400 z-10 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 animate-pulse rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
              FEED_LIVE : DÉMONSTRATION_SAE
            </div>

            <div className="w-full aspect-video border border-slate-800 p-1 bg-slate-950 shadow-2xl relative group/vid">
              {/* Angles de visée Cyberlife */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 z-20 pointer-events-none opacity-50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 z-20 pointer-events-none opacity-50" />

              <div className="w-full h-full relative overflow-hidden bg-black">
                {/* Overlay de scan au survol */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/vid:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />

                <iframe
                  className="w-full h-full relative z-0 grayscale group-hover/vid:grayscale-0 transition-all duration-700"
                  /* 👇 METS TON ID YOUTUBE ICI 👇 */
                  src="https://www.youtube.com/embed/hbRmWnpxcZc?si=ruy_YTdDF0stE3Gq"
                  title="Teaser SAE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
