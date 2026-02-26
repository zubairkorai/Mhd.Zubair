import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Build Reliable Agentic AI Applications",
    issuer: "Simplilearn",
    date: "Feb 2026",
  },
  {
    name: "AI Essentials",
    issuer: "Google",
    date: "Jul 2025",
  },
  {
    name: "Critical Thinking & Problem Solving",
    issuer: "LinkedIn",
    date: "Feb 2024",
  },
  {
    name: "Web Engineering",
    issuer: "NAVTTC",
    date: "Jan 2023",
  },
  {
    name: "IoT Systems Development & Applications",
    issuer: "NAVTTC",
    date: "Dec 2021",
  },
  {
    name: "Front End Libraries",
    issuer: "freeCodeCamp",
    date: "Jan 2020",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Dec 2019",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2019",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">Certifications</h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
