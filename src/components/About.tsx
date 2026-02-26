import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">About</h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer who loves turning ideas into polished, high-performance 
            web applications. With expertise across the modern JavaScript ecosystem, I build products 
            that are both technically sound and delightful to use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My approach combines clean architecture on the backend with pixel-perfect, responsive 
            interfaces on the frontend. I'm always exploring new technologies and best practices 
            to deliver the best possible solutions.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Location", value: "Available Worldwide" },
              { label: "Experience", value: "3 YOE" },
              { label: "Focus", value: "Web Applications" },
              { label: "Status", value: "Open to Work" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
