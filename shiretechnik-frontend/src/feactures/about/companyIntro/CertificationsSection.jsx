import { motion } from "framer-motion";
import {
    ShieldCheck,
    BadgeCheck,
    Building2,
    FileCheck2,
    Landmark,
    Award,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

import msmeLogo from "../../../assets/images/about/msme.webp";
import gemLogo from "../../../assets/images/about/gem.webp";

/* ═══════════════ DATA ═══════════════ */
const certifications = [
    {
        id: "msme",
        logo: msmeLogo,
        logoAlt: "MSME Udyam Certification",
        badge: "GOVERNMENT OF INDIA",
        title: "Udyam Registered Enterprise",
        subtitle: "Ministry of Micro, Small & Medium Enterprises",
        description:
            "Registered under the Ministry of Micro, Small & Medium Enterprises (Government of India). Recognized for structured operations, quality service delivery, and industrial compliance.",
        features: [
            {
                icon: BadgeCheck,
                title: "Udyam Registered Enterprise",
                text: "Officially recognized MSME with valid Udyam certification.",
            },
            {
                icon: Landmark,
                title: "Eligible for Public Sector Tenders",
                text: "Qualified to participate in government and PSU tenders.",
            },
            {
                icon: ShieldCheck,
                title: "Compliant with Statutory Standards",
                text: "Adheres to all Indian regulatory and industrial norms.",
            },
        ],
        accent: "cyan",
    },
    {
        id: "gem",
        logo: gemLogo,
        logoAlt: "GeM Portal Verified Seller",
        badge: "VERIFIED VENDOR",
        title: "GeM Portal Seller",
        subtitle: "Government e-Marketplace — Verified Vendor",
        description:
            "Verified vendor on the Government e-Marketplace (GeM) portal, enabling seamless procurement for central/state government departments, PSUs, and autonomous bodies.",
        features: [
            {
                icon: Building2,
                title: "Direct Public Procurement Authorization",
                text: "Direct sales to central and state government bodies.",
            },
            {
                icon: FileCheck2,
                title: "Verified Credentials & Commercial Standing",
                text: "Full documentation vetted and cleared by GeM authorities.",
            },
            {
                icon: Award,
                title: "Transparent & Compliant Operations",
                text: "Operating under GeM's strict transparency guidelines.",
            },
        ],
        accent: "cyan",
    },
];

/* ═══════════════ COMPONENT ═══════════════ */
const CertificationsSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#05080d] py-18 text-white md:py-18 lg:py-18">
            {/* Background grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(34,211,238,.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.6) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Ambient glows */}
            <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-400/[0.05] blur-[160px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] animate-pulse rounded-full bg-blue-500/[0.04] blur-[140px] [animation-delay:2s]" />

            <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
                {/* ═══════════════ HEADER ═══════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center md:mb-16"
                >
                    <div className="mb-5 flex items-center justify-center gap-3 text-[10px] tracking-[0.35em] text-cyan-400">
                        <span className="h-px w-10 bg-cyan-400" />
                        RECOGNITIONS & CERTIFICATIONS
                        <span className="h-px w-10 bg-cyan-400" />
                    </div>

                    <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-5xl">
                        Officially recognized.
                        <br />
                        <span className="text-slate-500">Institutionally trusted.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                        Shiretechnik holds government certifications that validate our
                        operational compliance, commercial credibility, and readiness to
                        serve public and private sector clients across India.
                    </p>
                </motion.div>

                {/* ═══════════════ CERTIFICATION CARDS ═══════════════ */}
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                    {certifications.map((cert, index) => (
                        <motion.article
                            key={cert.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-[#071019]/70 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/25 hover:bg-[#0a1420]/80"
                        >
                            {/* Top accent line */}
                            <span className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent transition-all duration-700 group-hover:w-full" />

                            {/* Corner brackets */}
                            <span className="pointer-events-none absolute left-5 top-5 h-5 w-5 border-l border-t border-cyan-400/20 transition-colors duration-500 group-hover:border-cyan-400/50" />
                            <span className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 border-b border-r border-cyan-400/20 transition-colors duration-500 group-hover:border-cyan-400/50" />

                            {/* ═══ CARD HEADER — Logo + Badge ═══ */}
                            <div className="flex flex-col items-start gap-5 border-b border-white/[0.06] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
                                {/* Logo container with glow */}
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/[0.06] blur-xl transition-all duration-500 group-hover:bg-cyan-400/[0.15]" />
                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:h-28 sm:w-28 sm:p-4">
                                        <img
                                            src={cert.logo}
                                            alt={cert.logoAlt}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Title + badge */}
                                <div className="flex-1 min-w-0">
                                    <div className="mb-3 flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[9px] font-semibold tracking-[0.2em] text-cyan-400">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                                            {cert.badge}
                                        </span>
                                        <span className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                                            / {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                                        {cert.title}
                                    </h3>

                                    <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">
                                        {cert.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* ═══ CARD BODY — Description ═══ */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <p className="text-sm leading-7 text-slate-400 sm:text-[15px] sm:leading-8">
                                    {cert.description}
                                </p>

                                {/* Features list */}
                                <ul className="mt-6 space-y-3">
                                    {cert.features.map((feature, idx) => {
                                        const Icon = feature.icon;
                                        return (
                                            <li
                                                key={idx}
                                                className="group/item flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03] sm:p-4"
                                            >
                                                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 transition-all duration-300 group-hover/item:border-cyan-400/40 group-hover/item:bg-cyan-400/[0.12]">
                                                    <Icon size={16} strokeWidth={1.8} />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-semibold text-white">
                                                        {feature.title}
                                                    </p>
                                                    <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:text-[13px]">
                                                        {feature.text}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* ═══ CARD FOOTER — Status bar ═══ */}
                            <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/20 px-6 py-4 sm:px-8">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-cyan-400" />
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                                        ACTIVELY CERTIFIED
                                    </span>
                                </div>
                                <span className="font-mono text-[9px] tracking-[0.25em] text-slate-700">
                                    VERIFIED
                                </span>
                            </div>

                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-[0.06]" />
                        </motion.article>
                    ))}
                </div>

        

            </div>
        </section>
    );
};

export default CertificationsSection;