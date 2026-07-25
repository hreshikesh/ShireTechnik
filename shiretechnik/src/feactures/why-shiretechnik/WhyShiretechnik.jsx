import { useState, useEffect } from "react";
import SplitText from "../../component/SplitText";
import TabNavigation from "./TabNavigation";
import ContentPanel from "./ContentPanel";
import { whyData } from "./whyData";

const WhyShiretechnik = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Fixed: Properly loops from 0 -> 1 -> 2 -> 0 using modulo
      setActive((prev) => (prev + 1) % whyData.length);
    }, 6000); // 6 seconds is ideal for reading panel content

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-transparent">
      {/* Ambient background accent glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <p className="uppercase tracking-[.25em] text-xs sm:text-sm font-semibold text-cyan-400">
          Why Choose Us
        </p>

        <SplitText
          text="Why Engineering Solutions with Shiretechnik?"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 max-w-4xl"
          delay={30}
          duration={0.7}
        />

        <p className="mt-4 sm:mt-6 max-w-3xl text-slate-400 text-base sm:text-lg leading-relaxed">
          We bring more than 20 years of senior experience forging collaborations
          across government, private sector, and international engineering forums.
        </p>

        <div className="mt-10 sm:mt-12">
          <TabNavigation
            tabs={whyData}
            active={active}
            setActive={setActive}
          />
        </div>

        <ContentPanel data={whyData[active] || whyData[0]} />
      </div>
    </section>
  );
};

export default WhyShiretechnik;