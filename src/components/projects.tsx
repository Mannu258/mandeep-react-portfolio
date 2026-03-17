import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const projects = [
    {
      title: "OG Movers",
      description: "Professional moving services platform facilitating easy booking, management, and tracking of moving jobs.",
      tags: ["Django", "Python", "HTML/CSS"],
      featured: true,
    },
    {
      title: "My Awesomecart",
      description: "A comprehensive e-commerce marketplace with cart management, secure checkout, and user profiles.",
      tags: ["Django", "DRF", "React"],
      featured: true,
    },
    {
      title: "Database Management System",
      description: "Custom data organization tool for managing complex records and running optimized queries.",
      tags: ["Python", "MySQL", "SQLite"],
      featured: false,
    },
    {
      title: "Chairman Muzaffarnagar",
      description: "Digital governance platform aimed at bridging the gap between local administration and citizens.",
      tags: ["Django", "Python", "Bootstrap"],
      featured: false,
    },
    {
      title: "Speech Care",
      description: "Specialized health service platform connecting patients with speech therapy professionals.",
      tags: ["Django", "Python", "HTML/CSS"],
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`group glass-card rounded-3xl p-8 relative flex flex-col h-full overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-2 bg-card/60' : 'col-span-1'
                }`}
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/30 transition-colors">
                      <FolderGit2 className="text-primary" size={28} />
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                      <a href="#" className="text-zinc-500 hover:text-primary transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
