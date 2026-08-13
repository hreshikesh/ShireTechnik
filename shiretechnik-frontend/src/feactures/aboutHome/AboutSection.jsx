import SplitText from "../../component/SplitText";
import TeamCarousel from "./TeamCarousel";

const AboutSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
      {/* Engineering-themed technical background glows */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[.25em] text-xs sm:text-sm font-semibold text-cyan-400">
            About Us
          </p>

          <SplitText
            text="Many organizations realize the benefits of forming work teams."
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            delay={30}
            duration={0.7}
          />

          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-slate-400">
            We believe passion, continuous learning, and engineering excellence
            create high-performing teams capable of delivering innovative
            simulation and CAE solutions for industries worldwide.
          </p>
        </div>

        <TeamCarousel />
      </div>
    </section>
  );
};

export default AboutSection;