import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="h-48 mb-8" /> {/* Spacer for floating profile */}

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aarsh Mishra
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer at Nagarro
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-red-500 to-red-600">
            Get in touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}