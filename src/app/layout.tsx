import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {/* L'effet de scan (Laser qui descend) */}
        <div className="cyber-scan"></div>

        {/* La grille de fond */}
        <div className="cyber-grid"></div>

        {/* L'effet d'ombre sur les bords */}
        <div className="cyber-vignette"></div>

        {/* Le contenu principal */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
