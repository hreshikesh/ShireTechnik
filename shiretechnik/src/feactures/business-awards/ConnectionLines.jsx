import { motion } from "framer-motion";

const ConnectionLines = () => {
  // Using 0 to 100 percentages. 
  // Center is 50,50. Grid cell centers are roughly at 16.6% and 83.3%.
  const lines = [
    { x2: "16.6%", y2: "16.6%" }, // Top Left
    { x2: "83.3%", y2: "16.6%" }, // Top Right
    { x2: "16.6%", y2: "83.3%" }, // Bottom Left
    { x2: "83.3%", y2: "83.3%" }, // Bottom Right
  ];

  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" style={{ overflow: 'visible' }}>
      {/* Defs for glowing line effect */}
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
        </linearGradient>
      </defs>

      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1="50%"
          y1="50%"
          x2={line.x2}
          y2={line.y2}
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeInOut" }}
        />
      ))}
      
      {/* Traveling Energy Pulses along the lines */}
      {lines.map((line, i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3"
          fill="#22d3ee"
          className="blur-[1px]"
          initial={{ cx: "50%", cy: "50%", opacity: 0 }}
          animate={{ cx: [ "50%", line.x2 ], cy: [ "50%", line.y2 ], opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "linear" 
          }}
        />
      ))}
    </svg>
  );
};

export default ConnectionLines;