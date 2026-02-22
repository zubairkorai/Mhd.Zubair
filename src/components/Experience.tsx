import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "EKOFIB",
    type: "Full-time",
    period: "Jun 2024 – Present",
    skills: ["React", "Node.js", "Express", "MySQL", "JavaScript", "AWS", "Git/Github"],
  },
  {
    role: "Application Developer",
    company: "Blackstone Foods",
    type: "Contract",
    period: "Jan 2026 – Feb 2026",
    skills: ["React", "Node.js", "Express", "MySQL", "JavaScript", "AWS", "Git/Github"],
  },
  {
    role: "Jr. PHP Developer",
    company: "Code Creatives",
    type: "Full-time",
    period: "Jan 2024 – May 2024",
    location: "Karachi",
    skills: ["Laravel", "CodeIgniter", "PHP", "MySQL", "JavaScript", "Git/Github"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">Experience</h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="grid gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block" />

                <div className="p-6 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-lg font-heading text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} · {exp.type}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {exp.period}
                        {exp.location && ` · ${exp.location}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience;
