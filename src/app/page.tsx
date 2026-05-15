import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Global grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" aria-hidden />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <CurrentlyExploring />
      <Contact />
    </main>
  );
}
