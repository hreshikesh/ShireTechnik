import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BlueprintBackground = () => {
  const [particles, setParticles] = useState([]);

  // Generate random particles on mount to avoid hydration mismatch
  useEffect(() => {
    const dots = Array.from({ length: 40 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(dots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#02040a]">
      
      {/* 1. Ambient Aurora Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-600 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-10%", "10%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600 blur-[130px]"
      />

      {/* 2. Seamless Radial Grid */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          // This mask makes the grid fade smoothly towards the edges
          maskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
        }}
      />

      {/* 3. Floating Data Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [-20, 20] 
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default BlueprintBackground;