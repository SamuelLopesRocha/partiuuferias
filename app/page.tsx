import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Servicos from "./components/Servicos";
import Viagens from "./components/Viagens";

export default function Page() {
  return (
    <>
      <Hero />
      <Viagens />
      <Servicos />
      <Footer />
    </>
  );
}
