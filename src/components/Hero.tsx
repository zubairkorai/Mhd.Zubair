import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-[1.05] mb-4">
          Mhd <span className="text-gradient">Zubair</span>
        </h1>
        <p className="text-muted-foreground font-body text-sm tracking-widest mb-6">
          Software Engineer | Full-stack developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
          Building modern, scalable web applications with a focus on clean code and smooth user experiences. 
          Curious about new technologies and always looking to improve my skills.        
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-20"
      >
        <a href="#about" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Scroll to explore
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
