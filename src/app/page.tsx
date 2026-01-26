import { Nav } from "@/components/ui/Nav";
import {
  Hero,
  About,
  Services,
  Assignments,
  Experience,
  Process,
  Clients,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Assignments />
        <Experience />
        <Process />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
