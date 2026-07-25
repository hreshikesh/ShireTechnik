import { motion } from "framer-motion";
import Container from "../../shared/Container";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

import { challengeData } from "./challengeData";
import ChallengeCard from "./ChallengeCard";
import { staggerContainer } from "../hero/animations/heroVariants";

const EngineeringChallenges = () => {
  return (
    <Section className="relative z-10 bg-transparent">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-900/15 blur-[150px]" />

      <Container className="relative z-20">
        <SectionHeading
          subtitle="Industry Challenges"
          title="Engineering constraints shouldn't throttle innovation."
          description="Modern engineering teams face relentless pressure to deliver faster, reduce manufacturing overhead, and improve product reliability. We dissolve these bottlenecks through high-fidelity CAE solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
        >
          {challengeData.map((item) => (
            <ChallengeCard key={item.id} {...item} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default EngineeringChallenges;