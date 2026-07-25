import Aurora from "../../component/Aurora";
import NoiseOverlay from "./components/NoiseOverlay";
const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-[#07121F]" />

      {/* Aurora */}
      <div className="absolute inset-0 opacity-70">
        <Aurora
          colorStops={["#00d9ff", "#0066ff", "#0a84ff"]}
          amplitude={1.2}
          blend={0.45}
        />
      </div>

      {/* Blueprint Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:96px_96px]
        "
      />

      {/* Radial Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />
<NoiseOverlay/>
    </div>
  );
};

export default HeroBackground;