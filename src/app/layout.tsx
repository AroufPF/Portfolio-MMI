import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Système // Benhaddane Anas",
  description: "Dossier Biométrique et Portfolio interactif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-slate-950 text-slate-300 relative overflow-x-hidden selection:bg-cyan-500 selection:text-white`}
      >
        {/* ⚙️ INJECTION DES EFFETS CYBERLIFE (CSS SUR MESURE) */}
        <style>{`
          /* Animation du laser de scan */
          @keyframes scanline {
            0% { transform: translateY(-100vh); opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          .cyber-scan { animation: scanline 8s linear infinite; }
          
          /* Animation de scintillement (glitch/néon) */
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 22%, 24%, 55% { opacity: 0.4; }
          }
          .cyber-flicker { animation: flicker 4s infinite; }
        `}</style>

        {/* 1. GRILLE HOLOGRAPHIQUE DE FOND */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-[-2] pointer-events-none"></div>

        {/* 2. EFFET VIGNETTE (Assombrit les coins de l'écran) */}
        <div className="fixed inset-0 pointer-events-none z-[-1] shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>

        {/* 3. LASER DE SCAN BIOMÉTRIQUE */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,1)] z-50 pointer-events-none cyber-scan"></div>

        {/* CONTENU DE TES PAGES */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
