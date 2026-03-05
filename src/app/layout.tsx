import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 ON IMPORTE LE CERVEAU DE L'AUDIO
import { AudioProvider } from "../context/AudioContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Système // Benhaddane Anas",
  description: "Dossier Biométrique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-slate-950 text-slate-300 antialiased`}
      >
        {/* ⚙️ ON ENVELOPPE TOUT LE CONTENU POUR FIXER L'ERREUR VERCEL */}
        <AudioProvider>
          {/* Tes effets visuels Cyberlife */}
          <div className="cyber-scan"></div>
          <div className="cyber-grid"></div>
          <div className="cyber-vignette"></div>

          {/* Le contenu principal */}
          <div className="relative z-10">{children}</div>
        </AudioProvider>
      </body>
    </html>
  );
}
