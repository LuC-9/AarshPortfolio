import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "REST APIs",
  "Java",
  "Spring Boot",
  "AWS",
  "HTML/CSS"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <Badge
                className="text-lg py-2 px-4"
                variant="secondary"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
