import { SysButton } from "../components/ui/SysButton";
import { Terminal, Database, Cpu } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 p-4 md:p-6 lg:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Header Système (Fil d'ariane & Horloge) */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b border-slate-200 pb-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
        <div>ROOT // SYSTEM_DASHBOARD</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            SYS.ONLINE
          </span>
          {/* Le bouton pour activer le contexte audio ira ici */}
        </div>
      </header>

      {/* 🎛️ GRILLE PRINCIPALE DU SYSTÈME */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
        {/* MODULE 1 : Identification (Hero) - Prend 8 colonnes sur 12 */}
        <section className="md:col-span-8 border border-slate-200 bg-white p-6 relative group flex flex-col justify-between transition-colors hover:border-slate-300">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div>
            <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">
              [ID_PROFIL]
            </h2>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-2">
              Développeur Web &<br />
              <span className="font-medium">Sound Designer</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm">
              Spécialiste Front-End React/Vue // Étudiant BUT MMI 3
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <SysButton href="/profil" variant="primary">
              Initier_Contact
            </SysButton>
            <SysButton href="/cv.pdf" variant="outline">
              Télécharger_Data
            </SysButton>
          </div>
        </section>

        {/* MODULE 2 : Stack Technique - Prend 4 colonnes sur 12 */}
        <section className="md:col-span-4 border border-slate-200 bg-white p-6 relative group flex flex-col">
          <h2 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
            <Cpu size={14} /> [CORE_STACK]
          </h2>
          <ul className="space-y-3 font-mono text-sm text-slate-700 mt-auto">
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span>Frameworks</span>{" "}
              <span className="text-slate-400">Next.js, Vue 3</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span>Langages</span>{" "}
              <span className="text-slate-400">TS, JS, PHP</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Audio</span>{" "}
              <span className="text-cyan-600">Web Audio API</span>
            </li>
          </ul>
        </section>

        {/* MODULE 3 : Alternance & Stage - Prend 7 colonnes sur 12 */}
        <section className="md:col-span-7 border border-slate-200 bg-white p-6 relative group">
          <h2 className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Terminal size={14} /> [EXPÉRIENCE_CORPORATE]
          </h2>
          {/* Ici, tu feras un .map() sur tes données d'alternance */}
          <div className="border-l border-slate-200 pl-4 mb-6 hover:border-cyan-500 transition-colors">
            <p className="text-xs font-mono text-cyan-600 mb-1">
              En cours // Alternance
            </p>
            <h3 className="text-lg font-medium text-slate-800">
              Développeur Front-End Vue.js
            </h3>
            <p className="text-sm text-slate-500">
              Nom_Entreprise — Refonte Dashboard B2B
            </p>
          </div>
          <SysButton href="/projects/alternance" variant="ghost">
            Accéder_Rapport &rarr;
          </SysButton>
        </section>

        {/* MODULE 4 : Projets Académiques (SAE) - Prend 5 colonnes sur 12 */}
        <section className="md:col-span-5 border border-slate-200 bg-white p-6 relative group flex flex-col justify-between">
          <h2 className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Database size={14} /> [DATA_LOGS]
          </h2>
          <div className="space-y-4 font-mono text-sm"></div>
        </section>
      </main>
    </div>
  );
}
