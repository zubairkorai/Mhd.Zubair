import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js / Express", level: 85 },
  { name: "SQL / MySQL", level: 75 },
  { name: "Git / DevOps", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">Skills</h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="grid gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
