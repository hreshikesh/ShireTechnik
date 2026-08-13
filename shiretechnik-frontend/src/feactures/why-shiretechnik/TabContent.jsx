import { motion, AnimatePresence } from "framer-motion";
import FeatureList from "./FeatureList";

const TabContent = ({ data }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={data.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="mt-16 grid items-center gap-16 lg:grid-cols-2"
            >
                <img
                    src={data.image}
                    className="w-full h-auto rounded-3xl object-cover"
                    alt={data.heading}
                />

                <div>
                    <h3 className="text-4xl font-bold">
                        {data.heading}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        {data.description}
                    </p>

                    <FeatureList
                        features={data.features}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TabContent;