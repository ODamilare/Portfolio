import PipelineStrip from "@/components/PipelineStrip";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <PipelineStrip />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
