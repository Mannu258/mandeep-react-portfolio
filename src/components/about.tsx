import { motion } from "framer-motion";
import { GraduationCap, Code2, Database } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Bio Column */}
            <motion.div variants={itemVariants} className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">The Journey</h3>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
                <p>
                  I'm a passionate Full-Stack Developer with a deep-rooted love for backend architecture and clean frontend interfaces. I thrive on solving complex problems and turning ideas into robust, scalable digital products.
                </p>
                <p>
                  My expertise heavily leans into the Python ecosystem. With frameworks like Django and Flask, I architect secure APIs and manage intricate databases. On the frontend, I craft responsive, dynamic experiences using HTML5, CSS3, and React.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Education</h4>
                    <p className="text-zinc-400 mt-1">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-sm text-zinc-500">B.N. Mandal University</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats & Highlights Column */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-8">
              <div className="glass-card rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Backend Mastery</h3>
                </div>
                <p className="text-zinc-400 mb-6 font-light">Building the invisible engines that power the web. Scalable architectures, secure auth, and optimized databases.</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'Flask', 'DRF'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-zinc-300">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Code2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Frontend Finesse</h3>
                </div>
                <p className="text-zinc-400 mb-6 font-light">Crafting intuitive, responsive, and engaging user interfaces that users love to interact with.</p>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'React', 'Tailwind'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-zinc-300">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies", value: "10+" },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
