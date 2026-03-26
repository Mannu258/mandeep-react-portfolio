import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/3 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Available for Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            <span className="block text-white">Mandeep Mishra</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500 text-3xl md:text-5xl lg:text-6xl font-semibold">
              Full-Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Building powerful, scalable web experiences with precision. Specializing in Python, Django, and modern React frontends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold text-base overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="/Mandeep_Kumar_Mishra_FullStack_Developer_Resume.html"
              className="px-8 py-4 rounded-xl font-semibold text-base text-white border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
