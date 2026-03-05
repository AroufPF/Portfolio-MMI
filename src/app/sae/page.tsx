import Link from "next/link";

export default function GenericDataLog() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* HEADER DE NAVIGATION */}
      <header className="max-w-3xl mx-auto mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-600 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          RETOUR_DASHBOARD
        </Link>
        <div className="border-l-[2px] border-cyan-500 pl-4">
          <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">
            [DATA_LOG // MODULE_ACTIF]
          </h2>
          {/* 👇 CHANGE CE TITRE SELON LA PAGE */}
          <h1 className="text-3xl font-light tracking-tight text-slate-900">
            PROJET SCOLAIRE
          </h1>
          {/* 👇 CHANGE CE SOUS-TITRE */}
          <p className="text-slate-500 font-mono text-sm mt-2">Jeu vidéo</p>
        </div>
      </header>

      {/* CONTENU DU RAPPORT */}
      <main className="max-w-3xl mx-auto space-y-6">
        {/* BLOC 1 : CONTEXTE / QUI SUIS-JE */}
        <section className="border border-slate-200 bg-white p-6 relative group transition-colors hover:border-slate-300">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest">
            01 // Contexte_
          </h3>
          {/* 👇 CHANGE LE TEXTE ICI */}
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Dans le cadre d'un projet scolaire, mon équipe et moi devions créees
            un jeu vidéo entièrement sur UNITY. Mon rôle à consister à m'occuper
            de la création du site web et de crée les effets sonore du jeu.
          </p>
        </section>

        {/* BLOC 2 : MISSIONS & RÉALISATIONS */}
        <section className="border border-slate-200 bg-white p-6 relative group transition-colors hover:border-slate-300">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest">
            02 // Opérations_Effectuées_
          </h3>
          <ul className="list-none space-y-3 text-sm text-slate-700">
            {/* 👇 ADAPTE TES MISSIONS EN MODE LISTE */}
            <li className="flex gap-3">
              <span className="text-cyan-500">&gt;</span> Création du site web
              avec Vue.js.
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-500">&gt;</span> Création des effets
              sonore via REAPER.
            </li>
          </ul>
        </section>

        {/* BLOC 3 : STACK TECHNIQUE */}
        <section className="border border-slate-200 bg-white p-6 relative group transition-colors hover:border-slate-300">
          <h3 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest">
            03 // Core_Stack_
          </h3>
          <div className="flex flex-wrap gap-2">
            {/* 👇 CHANGE TES TAGS TECHNIQUES */}
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              React
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              TypeScript
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Vue.js
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
