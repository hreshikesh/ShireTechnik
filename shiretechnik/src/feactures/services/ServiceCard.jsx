import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  // Manual active state so the hover treatment fires on tap/touch too,
  // not just mouse hover (group-hover / whileHover alone are unreliable on mobile).
  const [isActive, setIsActive] = useState(false);

  const activate = () => setIsActive(true);
  const deactivate = () => setIsActive(false);

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      whileTap={{ y: -8 }}
      onHoverStart={activate}
      onHoverEnd={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      onTouchCancel={deactivate}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative h-[280px] w-full cursor-pointer overflow-hidden border border-white/10 bg-[#071324]/80 backdrop-blur-xl xs:h-[320px] sm:h-[460px] lg:h-[520px]"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          className={`h-full w-full object-cover mix-blend-luminosity transition-all duration-700 ${
            isActive ? "scale-110 opacity-50" : "opacity-15"
          }`}
        />
        {/* Cyan Tech Overlay */}
        <div
          className={`absolute inset-0 bg-cyan-900/30 mix-blend-color transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Deepened bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#071324]/85 to-[#071324]/30" />
      </div>

      {/* Animated Scanner Line */}
      <div
        className={`absolute left-0 top-0 z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-1000 ease-in-out ${
          isActive
            ? "translate-y-[280px] opacity-100 xs:translate-y-[320px] sm:translate-y-[460px] lg:translate-y-[520px]"
            : "-translate-y-full opacity-0"
        }`}
      />

      {/* Targeting Brackets */}
      <div
        className={`absolute right-4 top-4 z-20 flex h-5 w-5 flex-col items-end justify-between transition-opacity duration-300 sm:right-6 sm:top-6 sm:h-8 sm:w-8 ${
          isActive ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="h-[1px] w-full bg-cyan-500" />
        <div className="absolute right-0 top-0 h-full w-[1px] bg-cyan-500" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-end p-4 sm:p-8 lg:p-10">
        {/* Top Meta Data */}
        <div
          className={`absolute left-4 top-4 font-mono text-[9px] font-bold tracking-[0.15em] transition-colors duration-300 sm:left-8 sm:top-6 sm:text-[10px] sm:tracking-[0.2em] lg:left-10 lg:top-8 ${
            isActive ? "text-cyan-400" : "text-slate-500"
          }`}
        >
          SYS.{service.sysId}
        </div>

        {/* Icon & Title Group */}
        <div
          className={`transition-transform duration-500 ease-out ${
            isActive ? "-translate-y-2 sm:-translate-y-4" : ""
          }`}
        >
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center border transition-colors duration-300 sm:mb-6 sm:h-14 sm:w-14 ${
              isActive
                ? "border-cyan-400/50 bg-cyan-400/20"
                : "border-cyan-500/20 bg-cyan-500/10"
            }`}
          >
            <Icon className="h-4 w-4 text-cyan-400 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </div>

          <h2 className="text-base font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
            {service.title}
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:mt-4 sm:text-base lg:leading-7">
            {service.description}
          </p>
        </div>

        {/* Hidden Interactive CTA */}
        {/* <div
          className={`absolute bottom-4 left-4 flex items-center gap-2 transition-all duration-500 ease-out sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 ${
            isActive
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-900 sm:h-8 sm:w-8">
            <Plus size={12} className="sm:h-4 sm:w-4" strokeWidth={2.5} />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
            Initialize Module
          </span>
          <ArrowRight size={12} className="ml-1 text-cyan-400 sm:h-4 sm:w-4" />
        </div> */}
      </div>
    </motion.div>
  );
};

export default ServiceCard;