import useTextReveal from "../../hooks/useTextReveal";
import FeatureChip from "./FeatureChip";
import { coldstreamFeatures } from "./coldstreamData";

const ColdStreamContent = () => {
  useTextReveal(".reveal-cs");

  return (
    <div className="relative z-10 flex flex-col justify-center">
      {/* Top Tagline */}
      <div className="mb-4 flex items-center gap-3 sm:mb-6">
        <div className="h-[1px] w-6 bg-cyan-500" />
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-cyan-400">
          ColdStream_OS
        </p>
      </div>

      {/*
        Single flowing heading instead of two separate stacked <h2>s
        with a forced <br>. Text wraps naturally based on width,
        giving 2-3 lines instead of 4 on most screens.
      */}
      <h2 className="reveal-cs max-w-xl text-3xl font-extrabold leading-[1.15] text-white opacity-0 sm:text-4xl lg:text-5xl">
        Simplify Thermal Design{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          with ColdStream.
        </span>
      </h2>

      <p className="reveal-cs mt-4 max-w-lg text-sm leading-relaxed text-slate-400 opacity-0 sm:mt-5 sm:text-base">
        ColdStream enables engineers to perform advanced thermal simulations
        directly within their existing CAD workflow, drastically reducing
        development time while optimizing product performance.
      </p>

      {/* Features Grid — 2 per row, leftover centers itself */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
        {coldstreamFeatures.map((item, index) => (
          <div
            key={item.sysId}
            className="reveal-cs w-[calc(50%-0.375rem)] opacity-0 sm:w-[calc(50%-0.5rem)]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <FeatureChip {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColdStreamContent;