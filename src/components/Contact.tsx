import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">Let's work together</h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create 
            something great.
          </p>

          <motion.a
            href="mailto:koraizubair5@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </motion.a>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/zubairkorai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mhd-zubair-a3513219a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
