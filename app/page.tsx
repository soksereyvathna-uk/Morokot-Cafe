import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import { InfoStrip, About, Specials, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoStrip />
      <About />
      <MenuSection />
      <Specials />
      <Contact />
      <Footer />
    </>
  );
}
