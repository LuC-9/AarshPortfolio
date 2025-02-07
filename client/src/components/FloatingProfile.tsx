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
    isMobile ? ["0rem", "2.5rem"] : ["12rem", "2.5rem"]
  );

  const imageX = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["50%", "2rem"] : ["50%", "2rem"]
  );

  const imageY = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["8rem", "1.25rem"] : ["12rem", "1.25rem"]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 z-50"
      style={{
        translateX: imageX,
        translateY: imageY,
      }}
    >
      <motion.img
        src="/profile.jpg"
        alt="Aarsh Mishra"
        className="rounded-full object-cover"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </motion.div>
  );
}
