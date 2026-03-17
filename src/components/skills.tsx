import { motion } from "framer-motion";
import { Terminal, Layout, Wrench } from "lucide-react";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Technical Arsenal</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Programming */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                <Terminal size={120} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Terminal className="text-primary" />
                Programming
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-300">Python</span>
                    <span className="text-sm font-medium text-primary">80%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-300">Linux</span>
                    <span className="text-sm font-medium text-primary">90%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-300">OOP Concepts</span>
                    <span className="text-sm font-medium text-primary">Strong</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div 
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Web Technologies */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                <Layout size={120} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Layout className="text-secondary" />
                Web Tech
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Django", color: "border-green-500/30 text-green-400" },
                  { name: "DRF", color: "border-emerald-500/30 text-emerald-400" },
                  { name: "Flask", color: "border-zinc-500/30 text-zinc-300" },
                  { name: "React", color: "border-cyan-500/30 text-cyan-400" },
                  { name: "HTML5", color: "border-orange-500/30 text-orange-400" },
                  { name: "CSS3", color: "border-blue-500/30 text-blue-400" },
                ].map((tech) => (
                  <div key={tech.name} className={`px-4 py-3 rounded-xl bg-white/5 border ${tech.color} flex items-center justify-center font-medium backdrop-blur-sm`}>
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & DevOps */}
            <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 relative overflow-hidden group md:col-span-2 lg:col-span-1">
               <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                <Wrench size={120} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Wrench className="text-primary" />
                Tools & DB
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Docker", "Git", "GitHub", "MySQL", "SQLite", "PostgreSQL", "VS Code", "Postman"
                ].map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm hover:border-primary/50 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <p className="text-sm text-zinc-400 italic">
                  "Always learning and adapting to new tools in the modern development ecosystem."
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
