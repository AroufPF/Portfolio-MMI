import Link from "next/link";
import Image from "next/image";

export default function GenericDataLog() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* HEADER DE NAVIGATION & PROFIL */}
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

        <div className="flex items-center gap-6">
          {/* 📸 LA PHOTO DE PROFIL */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border border-slate-200 p-1 bg-slate-50">
            <Image
              src="/moi.jpg"
              alt="Photo de Anas Benhaddane"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div className="border-l-[2px] border-cyan-500 pl-4">
            <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">
              [DATA_LOG // ID_BIOMETRIQUE]
            </h2>
            <h1 className="text-3xl font-light tracking-tight text-slate-900">
              Qui suis-je ?
            </h1>
            <p className="text-slate-500 font-mono text-sm mt-2">
              Benhaddane Anas.
            </p>
          </div>
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
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
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

        {/* BLOC 3 : STACK TECHNIQUE */}
        <section className="border border-slate-200 bg-white p-6 relative group transition-colors hover:border-slate-300">
          <h3 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest">
            03 // Core_Stack_
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Calme
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Pragmatique
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Rigoureux
            </span>
            <span className="px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 bg-slate-50">
              Attentif
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
