import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Study Drip",
    description: "Next-gen academic blog for grad study abroad. Dev-built site with global uni guides research flex.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Shadcn-ui"],
    github: "https://github.com/zubairkorai/studydrip",
  },
  {
    title: "Job Portal",
    description: "A comprehensive job portal application with user authentication, job listings, applications, and admin management.",
    tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    github: "https://github.com/zubairkorai/job_portal-Laravel",
  },
  {
    title: "Job Portal (Classic)",
    description: "Job listing and recruitment platform built with core PHP and MySQL, featuring CRUD operations and search functionality.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/zubairkorai/job_portal-PHP",
  },
  {
    title: "Weather App",
    description: "Real-time weather application fetching live data from a weather API with a clean, responsive interface.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/zubairkorai/weather-app",
  },
  {
    title: "Text Utility App",
    description: "A handy text manipulation tool for converting case, counting words/characters, and formatting text.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/zubairkorai/TextiQ",
  },
  {
    title: "Tip Calculator",
    description: "Simple and intuitive tip calculator for splitting bills and calculating tips per person.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/zubairkorai/tip-calculator",
  },
  {
    title: "Rock Paper Scissors",
    description: "Classic RPS game with score tracking and animated UI transitions.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/zubairkorai/rps-game",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-accent rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-heading text-foreground group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 md:mt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
