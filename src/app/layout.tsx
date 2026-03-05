import { AudioProvider } from "../context/AudioContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#FAFAFA] text-slate-800 antialiased">
        <AudioProvider>
          {/* Navbar ici */}
          {children}
          {/* Footer ici */}
        </AudioProvider>
      </body>
    </html>
  );
}
