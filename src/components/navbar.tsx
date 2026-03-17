import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold font-display tracking-tighter">
          <span className="text-white">M</span>
          <span className="text-primary">M.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
               <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
             <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center w-full px-5 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
