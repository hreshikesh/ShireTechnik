import { MapPin, Phone, Clock, Cpu, Globe } from "lucide-react";
import FooterColumn from "./FooterColumn";
import BottomBar from "./BottomBar";
import { quickLinks, socialLinks } from "./footerData";
import { motion } from "framer-motion";
import { LinkedinIcon, YoutubeIcon } from "../../shared/SocialIcons";
import logo from "../../assets/images/logo/logofull.webp"
const Footer = () => {
  return (
    <footer className="relative mt-2  sm:mt-2 overflow-hidden border-t border-white/10 bg-[#05070d]">
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 sm:gap-16 px-4 sm:px-6 py-16 sm:py-24 lg:grid-cols-3">
        {/* Company Info & Address */}
        <div>
          <img
            src={logo}
            alt="Shiretechnik"
            className="mb-8 h-14 sm:h-16 w-auto object-contain"
          />

          <div className="space-y-5 text-sm sm:text-base text-gray-300">
            <div className="flex items-start gap-3.5">
              <MapPin className="mt-1 shrink-0 text-cyan-400" size={18} />
              <p className="leading-relaxed">
                166, 5th Main, K.E.B Layout,
                <br />
                Sanjaynagar,
                <br />
                Bangalore 560094, Karnataka
              </p>
            </div>

            <div className="flex items-center gap-3.5">
              <Phone className="shrink-0 text-cyan-400" size={18} />
              <a href="tel:+918023415100" className="hover:text-cyan-400 transition-colors">
                +91-80-23415100
              </a>
            </div>

            <div className="flex items-start gap-3.5 pt-2">
              <Clock className="mt-1 shrink-0 text-cyan-400" size={18} />
              <div>
                <h4 className="font-semibold text-cyan-400">Open Hours</h4>
                <p className="mt-1 text-gray-400">Mon – Fri : 9:00 AM – 6:00 PM</p>
         
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <FooterColumn title="Quick Links" links={quickLinks} />

        {/* Company Solutions & Socials */}
        <div>
          <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white tracking-tight">
            Core Solutions
          </h3>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
            Empowering global engineering teams with advanced CFD simulation, structural analysis, thermal optimization, and industry training.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {["CFD", "FEA", "Thermal", "Optimization", "Consulting"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium"
              >
                <Cpu size={12} />
                {tag}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/shiretechnik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@shiretechniksolutionspvt.l715"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <YoutubeIcon className="h-[18px] w-[18px]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.shiretechnik.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Global Website"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Globe size={18} />
            </motion.a>
          </div>
        </div>
      </div>

      <BottomBar />
    </footer>
  );
};

export default Footer;