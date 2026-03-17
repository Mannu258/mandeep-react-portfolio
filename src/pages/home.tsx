import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="border-t border-white/5 py-8 mt-12 text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Mandeep Mishra. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}
