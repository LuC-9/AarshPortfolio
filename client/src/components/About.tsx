import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { User2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            <User2 className="w-8 h-8 text-primary" />
          </motion.div>
          
        </div>

        <Card>
          <CardContent className="p-6">
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I am a passionate Software Engineer currently working at Nagarro, where I
              specialize in building robust and scalable applications. With experience
              at both Nagarro and Infosys, I have developed a strong foundation in
              software development and a keen eye for creating efficient solutions.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My technical journey has equipped me with expertise in various
              technologies and frameworks, allowing me to tackle complex challenges
              and deliver high-quality results. I am constantly learning and staying
              updated with the latest industry trends.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}