import Link from "next/link";
import Image from "next/image";

export default function ExperienceLog() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      <header className="max-w-4xl mx-auto mb-12 relative p-6 md:p-8 border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          RETOUR_DASHBOARD
        </Link>
        <div className="border-l-[2px] border-cyan-500 pl-4">
          <h2 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 animate-pulse" />{" "}
            [EXPÉRIENCE_CORPORATE]
          </h2>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white">
            Parcours Professionnel
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        {/* KIMIND */}
        <section className="border border-slate-800 bg-slate-900 p-6 md:p-10 relative group hover:border-cyan-500/50 transition-colors shadow-xl">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] opacity-80 group-hover:opacity-100" />
          <h3 className="text-xs font-mono text-cyan-400 mb-1 uppercase tracking-widest">
            2025 - Présent // Alternance
          </h3>
          <h2 className="text-3xl font-light text-white mb-1">
            Kimind Consulting
          </h2>
          <p className="text-sm font-mono text-slate-400 mb-8">
            Architecte Agent IA, Dev et Communication
          </p>

          <div className="space-y-8 mb-10">
            <div className="bg-slate-800/50 p-6 border border-slate-700">
              <h4 className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                01 // Contexte_
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dans le cadre de mon alternance en 3e année de BUT MMI, j'ai
                intégré l'équipe Kimind pour créer et modifier des agents IA sur
                la plateforme Dust. Mon rôle nécessite pragmatisme, rigueur et
                une forte sensibilité à la GenAI.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest border-b border-slate-800 pb-2">
                02 // Opérations_Effectuées_
              </h4>
              <ul className="list-none space-y-3 text-sm text-slate-300">
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500"></span> Création
                  d'agents IA.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500"></span> Miniature
                  vidéo pour Linguosphère.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500"></span> Page
                  wordpress pour Kimind.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Dust
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Canva
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Wordpress
              </span>
            </div>
          </div>

          <h4 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest border-t border-slate-800 pt-6">
            Preuves_Visuelles
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-video border border-slate-700 bg-slate-950 overflow-hidden group/img">
              <Image
                src="/kimind1.png"
                alt="Projet Alternance 1"
                fill
                className="object-cover grayscale group-hover/img:grayscale-0 opacity-80 group-hover/img:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="relative aspect-video border border-slate-700 bg-slate-950 overflow-hidden group/img">
              <Image
                src="/kimind2.png"
                alt="Projet Alternance 2"
                fill
                className="object-cover grayscale group-hover/img:grayscale-0 opacity-80 group-hover/img:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* REVES PARTY */}
        <section className="border border-slate-800 bg-slate-900 p-6 md:p-10 relative group hover:border-cyan-500/50 transition-colors shadow-xl mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-700 group-hover:bg-cyan-500 transition-colors" />
          <h3 className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors mb-2 uppercase tracking-widest">
            2023 // Stage de BUT 2
          </h3>
          <h2 className="text-2xl font-light text-white mb-1">
            Développeur / Intégrateur Web
          </h2>
          <p className="text-sm font-mono text-slate-400 mb-6">[Rèves Party]</p>

          <div className="space-y-8">
            <div className="bg-slate-800/50 p-6 border border-slate-700">
              <h4 className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest">
                01 // Contexte_
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Lors de mon stage de deuxième année de BUT MMI, j'ai eu
                l'opportunité de travailler sur la communication pour Rèves
                Party. Cette première véritable immersion professionnelle m'a
                permis d'appliquer mes connaissances techniques MMI sur des
                projets concrets.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest border-b border-slate-800 pb-2">
                02 // Opérations_Effectuées_
              </h4>
              <ul className="list-none space-y-3 text-sm text-slate-300">
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-cyan-500 transition-colors"></span>{" "}
                  Vidéographie.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-cyan-500 transition-colors"></span>{" "}
                  Montage Vidéo.
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-cyan-500 transition-colors"></span>{" "}
                  Travail en équipe avec l'équipe de communication.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Premiere Pro
              </span>
              <span className="px-3 py-1 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800">
                Adobe After Effect
              </span>
            </div>

            <div className="relative mt-8">
              <div className="absolute -top-3 left-4 bg-slate-900 border border-slate-700 px-2 text-xs font-mono text-cyan-400 z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 animate-pulse rounded-full" />{" "}
                DÉMONSTRATION VIDÉO : RÊVES PARTY
              </div>
              <div className="w-full aspect-video border border-slate-700 p-1 bg-slate-950 shadow-lg group/vid relative">
                <div className="w-full h-full relative overflow-hidden bg-black">
                  <iframe
                    className="w-full h-full relative z-0 grayscale group-hover/vid:grayscale-0 transition-all duration-700"
                    src="https://www.youtube.com/embed/CIPR0YXQWXM"
                    title="Teaser Rêves Party"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
