import { motion } from "framer-motion";

const FloatingParticles = () => {

  return (
    <>
      {[...Array(25)].map((_, i) => (

        <motion.div

          key={i}

          animate={{
            y:[0,-25,0],
            opacity:[.3,.9,.3]
          }}

          transition={{
            duration:4+Math.random()*4,
            repeat:Infinity
          }}

          className="absolute h-1 w-1 rounded-full bg-cyan-400"

          style={{
            left:`${Math.random()*100}%`,
            top:`${Math.random()*100}%`
          }}

        />

      ))}
    </>
  );

};

export default FloatingParticles;