import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mandeepkumarmishra56@gmail.com");
    setIsCopied(true);
    toast({
      title: "Email copied!",
      description: "Address copied to clipboard.",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="mt-6 text-zinc-400 max-w-2xl text-lg font-light">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that needs some creative engineering, I'd love to hear about it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              <div className="glass-card rounded-3xl p-8 md:p-10 flex-1">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div 
                    onClick={copyEmail}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {isCopied ? <CheckCircle2 size={24} /> : <Mail size={24} />}
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-medium">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base break-all">mandeepkumarmishra56@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <p className="text-sm text-zinc-500 font-medium mb-4 uppercase tracking-wider">Social Profiles</p>
                    <div className="flex gap-4">
                      <a href="#" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <Linkedin size={24} />
                      </a>
                      <a href="#" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <Github size={24} />
                      </a>
                      <a href="#" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                        <Twitter size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                    <input
                      id="name"
                      {...register("name")}
                      className={`w-full bg-black/50 border ${errors.name ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-4 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                    <input
                      id="email"
                      {...register("email")}
                      className={`w-full bg-black/50 border ${errors.email ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-4 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={5}
                      className={`w-full bg-black/50 border ${errors.message ? 'border-destructive focus:ring-destructive/20' : 'border-white/10 focus:border-primary focus:ring-primary/20'} rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-4 transition-all resize-none`}
                      placeholder="How can I help you?"
                    ></textarea>
                    {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
