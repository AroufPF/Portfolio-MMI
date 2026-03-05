import Link from "next/link";
import Image from "next/image";
import { SysButton } from "../components/ui/SysButton";
import { AudioToggle } from "../components/ui/AudioToggle";
import {
  Terminal,
  Database,
  Cpu,
  Headphones,
  ExternalLink,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 p-4 md:p-6 lg:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* HEADER SYSTÈME */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b border-slate-200 pb-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
        <div>ROOT // SYSTEM_DASHBOARD</div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            SYS.ONLINE
          </span>
          <AudioToggle />
        </div>
      </header>

      {/* 🎛️ GRILLE PRINCIPALE */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
        {/* MODULE 1 : Profil */}
        <section className="md:col-span-8 border border-slate-200 bg-white p-6 relative group flex flex-col justify-between transition-colors hover:border-slate-300">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div>
            <h2 className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-widest">
              [ID_PROFIL]
            </h2>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-2">
              Benhaddane
              <br />
              <span className="font-medium">Anas</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm">
              Développeur Web & Sound Designer
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

        {/* MODULE 2 : Stack */}
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

        {/* MODULE 3 : Expérience (Alternance) */}
        <section className="md:col-span-7 border border-slate-200 bg-white p-6 relative group">
          <h2 className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Terminal size={14} /> [EXPÉRIENCE_CORPORATE]
          </h2>
          <div className="border-l border-slate-200 pl-4 mb-6 hover:border-cyan-500 transition-colors">
            <p className="text-xs font-mono text-cyan-600 mb-1">
              En cours // Alternance
            </p>
            <h3 className="text-lg font-medium text-slate-800">
              Mes Experiences
            </h3>
          </div>
          <SysButton href="/experience" variant="ghost">
            Accéder_Rapport &rarr;
          </SysButton>
        </section>

        {/* MODULE 4 : SAE */}
        <section className="md:col-span-5 border border-slate-200 bg-white p-6 relative group flex flex-col justify-between">
          <h2 className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Database size={14} /> [DATA_LOGS]
          </h2>
          <div className="space-y-4 font-mono text-sm flex flex-col">
            <Link
              href="/sae"
              className="group/item flex justify-between items-center cursor-pointer hover:text-cyan-600 border-b border-slate-100 pb-2 transition-colors"
            >
              <span>Projets Scolaire (SAE)</span>
              <span className="text-slate-600 group-hover/item:text-cyan-500">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* MODULE 5 : Audio */}
        <section className="md:col-span-6 bg-slate-900 text-slate-50 border border-slate-800 p-6 relative group overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <h2 className="text-xs font-mono text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2 relative z-10">
            <Headphones size={14} /> [AUDIO_MATRIX]
          </h2>
          <p className="text-sm text-slate-400 mb-6 relative z-10">
            Interface de lecture sécurisée pour le sound design et les ambiances
            sonores.
          </p>
          <SysButton
            href="/audio"
            variant="outline"
            className="border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
          >
            Initier_Lecteur
          </SysButton>
        </section>

        {/* MODULE 6 : Hub Liens */}
        <section className="md:col-span-6 border border-slate-200 bg-white p-6 relative group flex flex-col justify-between">
          <h2 className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-widest flex items-center gap-2">
            <ExternalLink size={14} /> [COMM_LINK]
          </h2>
          <div className="flex flex-col gap-4 font-mono text-sm">
            <div className="grid grid-cols-2 gap-4">
              {/* CHANGE TES LIENS ICI */}
              <a
                href="https://github.com/AroufPF"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-100 hover:border-cyan-500 hover:text-cyan-600 transition-colors flex items-center justify-between"
              >
                GitHub <span></span>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-benhaddane-b9632a304?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-100 hover:border-cyan-500 hover:text-cyan-600 transition-colors flex items-center justify-between"
              >
                LinkedIn <span></span>
              </a>
            </div>
            <a
              href="/cv.pdf"
              target="_blank"
              className="p-3 border border-slate-100 bg-slate-50 hover:border-cyan-500 hover:text-cyan-600 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              Télécharger_CV.pdf <span></span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
