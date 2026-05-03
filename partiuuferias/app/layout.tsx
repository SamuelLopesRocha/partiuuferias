import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";

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