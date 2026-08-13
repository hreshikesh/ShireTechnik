function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-[#071019] py-16 text-white md:py-24">
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-[10px] font-medium tracking-[0.35em] text-cyan-400">
              OUR LOCATION
            </span>
          </div>
          <h2 className="max-w-xl text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            Visit Our <span className="text-slate-500">Office</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:mt-5">
            We welcome opportunities to discuss engineering challenges,
            simulation solutions, and collaborative projects. Reach out or
            visit our office during working hours.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] sm:rounded-3xl">
          <iframe
            title="Shiretechnik Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3139608390406!2d77.5791447!3d13.030085799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c3dff56c7d%3A0x99f149d66b06c9c0!2s166%2C%205th%20Cross%20Rd%2C%20KEB%20Layout%2C%20Sanjayanagara%2C%20Bengaluru%2C%20Karnataka%20560094!5e1!3m2!1sen!2sin!4v1785503262234!5m2!1sen!2sin"
            className="h-[320px] w-full sm:h-[400px] md:h-[480px] lg:h-[520px]"
            loading="lazy"
            allowFullScreen
            style={{ border: 0, display: "block" }}
          />
        </div>

        {/* Address strip below map */}
        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.07] bg-[#05080d] px-5 py-4 sm:flex-row sm:items-center sm:px-7">
          <div className="flex items-start gap-3 sm:items-center">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] text-slate-600">OFFICE ADDRESS</p>
              <p className="mt-0.5 text-sm text-white">
                166, 5th Cross Rd, KEB Layout, Sanjayanagara, Bengaluru – 560094, India
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=166,5th+Cross+Rd,KEB+Layout,Sanjayanagara,Bengaluru,Karnataka+560094"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-xl border border-white/10 px-5 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;