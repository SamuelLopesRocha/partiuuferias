import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partiuuferias - Consultor de Viagens",
  description: "Especialista em viagens personalizadas — passagens, hotéis, cruzeiros e muito mais. Atendimento exclusivo do início ao fim para você viajar com tranquilidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        <Whatsapp />
      </body>
    </html>
  );
}