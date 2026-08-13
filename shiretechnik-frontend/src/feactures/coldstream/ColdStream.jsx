import ColdStreamContent from "./ColdStreamContent";
import ColdStreamPreview from "./ColdStreamPreview";

const ColdStream = () => {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#00d9ff03_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <ColdStreamContent />
          </div>
          <div className="lg:col-span-7">
            <ColdStreamPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdStream;