import Link from "next/link";
import Image from "next/image";

export default function GenericDataLog() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      <header className="max-w-4xl mx-auto mb-12 relative p-6 md:p-8 border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          RETOUR_DASHBOARD
        </Link>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 border border-slate-700 p-2 bg-slate-950 shadow-xl group cursor-crosshair">
            <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
            <Image
              src="/moi.jpg"
              alt="Photo de Anas Benhaddane"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
            />
          </div>

          <div className="border-l-[2px] border-cyan-500 pl-6 mt-4 md:mt-0">
            <h2 className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 animate-pulse" /> [DATA_LOG
              // ID_BIOMETRIQUE]
            </h2>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-2">
              Qui suis-je ?
            </h1>
            <p className="text-slate-400 font-mono text-sm mt-2 font-medium">
              Benhaddane Anas.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        <section className="border border-slate-800 bg-slate-900 p-8 relative group hover:border-cyan-500/50 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] opacity-80 group-hover:opacity-100" />
          <h3 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest">
            01 // Contexte_
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Actuellement en troisième année de Bachelor Universitaire
            Technologique en Métiers du Multimédia et de l'Internet, avec une
            spécialisation dans le Developpement Web. Je me distingue par ma
            curiosité intellectuelle, ma rigueur et mon orientation vers
            l'innovaton. Passioné par l'intelligence artificielle, le sound
            design et les technologies numériques, je suis en quète d'une
            alternance pour l'année 2026-2027, suivant un rythme
            bi-hebdomadaire. Mon objectif est d'affiner mes compétences
            techniques et de participer activelement à des projets innovants.
          </p>
        </section>

        <section className="border border-slate-800 bg-slate-900 p-8 relative group hover:border-cyan-500/50 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] opacity-80 group-hover:opacity-100" />
          <h3 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest">
            03 // Core_Stack_
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
              Calme
            </span>
            <span className="px-4 py-2 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
              Pragmatique
            </span>
            <span className="px-4 py-2 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
              Rigoureux
            </span>
            <span className="px-4 py-2 border border-slate-700 text-xs font-mono text-slate-300 bg-slate-800 hover:border-cyan-400 hover:text-cyan-300 transition-colors">
              Attentif
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
