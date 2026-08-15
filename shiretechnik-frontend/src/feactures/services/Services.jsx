import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../../shared/Container";
import Section from "../../shared/Section";
import SectionHeading from "../../shared/SectionHeading";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

// Route mapping — one place to control where each service card links
const SERVICE_LINKS = {
  1: "/solutions/cae-software",
  2: "/solutions/cae-services",
};

// Reusing our staggering variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const Services = () => {
  return (
    <Section className="relative z-10 bg-transparent">
      {/* Background Tech Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00d9ff05_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      <Container className="relative z-20">
        <SectionHeading
          center
          subtitle="Core Capabilities"
          title="Engineering Solutions Built For Modern Industries."
          description="Deploying high-fidelity analytics and software architectures to solve the most complex industrial constraints."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => {
            // Resolve link — prefer service.link, fall back to lookup, then fallback route
            const linkTo =
              service.link || SERVICE_LINKS[service.id] || "/solutions";

            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                // 2 per row on mobile, 3 per row from lg up
                className="w-[calc(20%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1.4rem)]"
              >
                <Link
                  to={linkTo}
                  className="block h-full rounded-2xl outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                  aria-label={`Explore ${service.title || "service"}`}
                >
                  <ServiceCard service={service} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;