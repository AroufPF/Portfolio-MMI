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
    <div className="min-h-screen bg-slate-950 text-slate-300 p-4 md:p-6 lg:p-8 font-sans selection:bg-cyan-500 selection:text-white">
      {/* HEADER SYSTÈME */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b border-slate-800 pb-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
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
        {/* MODULE 1 : Profil (DA Cyberlife Sombre) */}
        <section className="md:col-span-8 border border-slate-800 bg-slate-900 p-8 relative group flex flex-col justify-between overflow-hidden shadow-2xl hover:border-cyan-500/50 transition-colors">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-slate-800 group-hover:border-cyan-500/50 transition-colors" />

          <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start justify-between relative z-10">
            <div className="flex-1">
              <h2 className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 animate-pulse" />{" "}
                [MODÈLE_RK800 // DÉVELOPPEUR]
              </h2>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-3 leading-tight">
                Développeur Web <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  & Sound Designer
                </span>
              </h1>
              <p className="text-slate-400 font-mono text-sm border-l border-slate-700 pl-3">
                Spécialiste Front-End React/Vue <br /> Étudiant BUT MMI 3
              </p>

              <div className="mt-8 flex gap-4">
                <SysButton
                  href="/profil"
                  variant="primary"
                  className="shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  Initier_Contact
                </SysButton>
                <SysButton
                  href="/cv.pdf"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
                >
                  Télécharger_Data
                </SysButton>
              </div>
            </div>

            {/* 📸 LA PHOTO GÉANTE */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 border border-slate-700 p-2 bg-slate-950 shadow-2xl group-hover:border-cyan-500/50 transition-colors duration-500 cursor-crosshair">
              <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
              <Image
                src="/moi.jpg"
                alt="Photo de profil"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
              />
            </div>
          </div>
        </section>

        {/* MODULE 2 : Stack */}
        <section className="md:col-span-4 border border-slate-800 bg-slate-900 p-6 relative group flex flex-col hover:border-cyan-500/50 transition-colors">
          <h2 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest flex items-center gap-2">
            <Cpu size={14} /> [CORE_STACK]
          </h2>
          <ul className="space-y-4 font-mono text-sm text-slate-300 mt-auto">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Frameworks</span>{" "}
              <span className="text-slate-500">Next.js, Vue 3</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span>Langages</span>{" "}
              <span className="text-slate-500">TS, JS, PHP</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Audio</span>{" "}
              <span className="text-cyan-400">Web Audio API</span>
            </li>
          </ul>
        </section>

        {/* MODULE 3 : Expérience */}
        <section className="md:col-span-7 border border-slate-800 bg-slate-900 p-6 relative group hover:border-cyan-500/50 transition-colors">
          <h2 className="text-xs font-mono text-cyan-500 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Terminal size={14} /> [EXPÉRIENCE_CORPORATE]
          </h2>
          <div className="border-l border-slate-700 pl-4 mb-6 group-hover:border-cyan-500 transition-colors">
            <p className="text-xs font-mono text-cyan-400 mb-1">
              En cours // Alternance
            </p>
            <h3 className="text-xl font-medium text-white">
              Développeur & Agent IA
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Kimind Consulting — Création d'agents IA (Dust)
            </p>
          </div>
          <SysButton
            href="/experience"
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Accéder_Rapport &rarr;
          </SysButton>
        </section>

        {/* MODULE 4 : SAE */}
        <section className="md:col-span-5 border border-slate-800 bg-slate-900 p-6 relative group flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
          <h2 className="text-xs font-mono text-cyan-500 mb-6 uppercase tracking-widest flex items-center gap-2">
            <Database size={14} /> [DATA_LOGS]
          </h2>
          <div className="space-y-4 font-mono text-sm flex flex-col">
            <Link
              href="/sae"
              className="group/item flex justify-between items-center cursor-pointer hover:text-cyan-400 border-b border-slate-800 pb-3 transition-colors"
            >
              <span className="text-white group-hover/item:text-cyan-400">
                Projets Scolaire (SAE)
              </span>
              <span className="text-slate-600 group-hover/item:text-cyan-500">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* MODULE 5 : Audio */}
        <section className="md:col-span-6 bg-slate-950 text-slate-50 border border-slate-800 p-6 relative group overflow-hidden hover:border-cyan-500/50 transition-colors">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <h2 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest flex items-center gap-2 relative z-10">
            <Headphones size={14} /> [AUDIO_MATRIX]
          </h2>
          <p className="text-sm text-slate-400 mb-6 relative z-10">
            Interface de lecture sécurisée pour le sound design et les ambiances
            sonores.
          </p>
          <SysButton
            href="/audio"
            variant="outline"
            className="border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 bg-slate-900"
          >
            Initier_Lecteur
          </SysButton>
        </section>

        {/* MODULE 6 : Hub Liens */}
        <section className="md:col-span-6 border border-slate-800 bg-slate-900 p-6 relative group flex flex-col justify-between hover:border-cyan-500/50 transition-colors">
          <h2 className="text-xs font-mono text-cyan-500 mb-6 uppercase tracking-widest flex items-center gap-2">
            <ExternalLink size={14} /> [COMM_LINK]
          </h2>
          <div className="flex flex-col gap-4 font-mono text-sm">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-800 bg-slate-950 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 transition-colors flex items-center justify-between"
              >
                GitHub <span>&nearr;</span>
              </a>
              <a
                href="https://linkedin.com/in/tonprofil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-800 bg-slate-950 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 transition-colors flex items-center justify-between"
              >
                LinkedIn <span>&nearr;</span>
              </a>
            </div>
            <a
              href="/cv.pdf"
              target="_blank"
              className="p-3 border border-slate-800 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-900/40 hover:border-cyan-400 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              Télécharger_CV.pdf <span>&darr;</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
