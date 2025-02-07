import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Wrench } from "lucide-react";

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
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.div
            initial={{ rotate: 180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            <Wrench className="w-8 h-8 text-primary" />
          </motion.div>
          
        </div>

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