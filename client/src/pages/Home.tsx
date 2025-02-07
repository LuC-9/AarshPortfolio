import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import FloatingProfile from "@/components/FloatingProfile";

export default function Home() {
  return (
    <div>
      <Cursor />
      <FloatingProfile />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}