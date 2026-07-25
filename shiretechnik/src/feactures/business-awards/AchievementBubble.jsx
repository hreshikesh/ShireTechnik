import { motion } from "framer-motion";
import CountUp from "../../component/CountUp";
import SpotlightCard from "../../component/SpotlightCard";

const AchievementBubble = ({ item, index }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: .6
            }}
            whileInView={{
                opacity: 1,
                scale: 1
            }}
            viewport={{
                once: true
            }}
            transition={{
                delay: index * .2
            }}
            animate={{
                y: [0, -10, 0]
            }}
            whileHover={{
                scale: 1.08,
                rotate: 2,
            }}

            className="absolute z-10 cursor-pointer"
            style={{
                left: item.x,
                top: item.y
            }}
        >
            <SpotlightCard
                className="
        h-48
        w-48
        rounded-full
        border
        border-cyan-500/30
        "
            >
                <div
                    className="
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-cyan-400/20
                        animate-pulse
                        "
                />
                <div className="flex h-full flex-col items-center justify-center">

                    <h2 className="text-5xl font-bold text-cyan-400">

                    
                         <CountUp end={item.value} duration={2} />+

                    </h2>

                    <p className="mt-3 text-center">

                        {item.title}

                    </p>

                </div>

            </SpotlightCard>
        </motion.div>
    );
};

export default AchievementBubble;