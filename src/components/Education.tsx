import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "MS/Mphil, Information Technology",
    institution: "Quaid-e-Awam University of Engineering, Sciences & Technology",
    period: "2025 - currently enrolled",
    // gpa: "3.5/4.0",
    location: "Nawabshah, Pakistan",
  },
  {
    degree: "BS, Information Technology",
    institution: "Shaheed Benazir Bhutto University",
    period: "2020 – 2023",
    gpa: "3.24/4.0",
    location: "Nawabshah, Pakistan",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="grid gap-10">
            {educationList.map((edu, i) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block" />

                <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-lg font-heading text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution} · {edu.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {edu.period}
                        {edu.gpa && ` · GPA: ${edu.gpa}`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
