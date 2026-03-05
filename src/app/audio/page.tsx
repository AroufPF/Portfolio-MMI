import Link from "next/link";

export default function AudioMatrix() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Arrière-plan type "grille de logiciel" */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <header className="max-w-3xl mx-auto mb-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>{" "}
          FERMER_MODULE
        </Link>
        <div className="border-l-[2px] border-cyan-500 pl-4">
          <h2 className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
            [SYSTÈME_MEDIA // ACTIF]
          </h2>
          <h1 className="text-3xl font-light tracking-tight text-white">
            Media Matrix
          </h1>
          <p className="text-slate-400 font-mono text-sm mt-2">
            Démonstrations de Sound Design (Format Audio & Vidéo)
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-8 relative z-10">
        {/* 🔊 LECTEUR AUDIO SEUL (POUR TES .WAV) */}
        <section className="border border-slate-800 bg-slate-900/50 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-cyan-900 transition-colors">
          <div>
            <h3 className="text-sm font-medium text-slate-200">
              Sound Design - Effet click
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-1">
              Format: .WAV // Audio
            </p>
          </div>
          <audio
            controls
            className="h-8 w-full md:max-w-[250px] outline-none grayscale opacity-80 group-hover:opacity-100 transition-opacity"
          >
            {/* 👇 METS LE BON NOM DE TON FICHIER WAV ICI */}
            <source src="/sounds/ui-click-mech.wav" type="audio/wav" />
          </audio>
        </section>

        {/* 📺 LECTEUR VIDÉO (POUR TES .MP4) */}
        <section className="border border-slate-800 bg-slate-900/50 p-4 flex flex-col gap-4 group hover:border-cyan-900 transition-colors">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-sm font-medium text-slate-200">
              Gameplay & Intégration Sonore
            </h3>
            <p className="text-xs font-mono text-slate-500 mt-1">
              Format: .MP4 // Démonstration Visuelle
            </p>
          </div>

          {/* Le moniteur vidéo */}
          <video
            controls
            className="w-full aspect-video bg-black border border-slate-800 rounded-sm outline-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            {/* 👇 METS LE BON NOM DE TON FICHIER MP4 ICI */}
            <source src="/sounds/frieren.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </section>
      </main>
    </div>
  );
}
