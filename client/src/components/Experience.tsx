import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Building2 } from "lucide-react";
import { SiInfosys } from "react-icons/si";

const experiences = [
  {
    title: "Engineer",
    company: "Nagarro",
    period: "2023 - Present",
    icon: Building2
  },
  {
    title: "Associate Engineer",
    company: "Nagarro",
    period: "2022 - 2023",
    icon: Building2
  },
  {
    title: "Systems Engineer Intern",
    company: "Infosys",
    period: "2021 - 2022",
    icon: SiInfosys
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6 flex items-center gap-4">
                  <exp.icon className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}