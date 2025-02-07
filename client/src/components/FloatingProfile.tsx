import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingProfile() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageSize = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["10rem", "2.5rem"] : ["10rem", "2.5rem"]
  );

  const imageY = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["6rem", "0.75rem"] : ["6rem", "0.75rem"]
  );

  return (
    <motion.div
      className="fixed left-1/2 top-0 z-50"
      style={{
        y: imageY,
        x: "-50%",
      }}
    >
      <motion.img
        src="/profile.jpg"
        alt="Aarsh Mishra"
        className="rounded-full object-cover border-2 border-white/10"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </motion.div>
  );
}