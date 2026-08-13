import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white tracking-tight">
        {title}
      </h3>

      <ul className="space-y-3.5 sm:space-y-4">
        {links.map((link) => (
          <motion.li key={link.title} whileHover={{ x: 6 }}>
            <Link
              to={link.path}
              className="group flex items-center gap-2.5 text-sm sm:text-base text-gray-400 transition-colors hover:text-cyan-400"
            >
              <ChevronRight
                size={16}
                className="text-cyan-500/60 transition group-hover:translate-x-1 group-hover:text-cyan-400"
              />
              <span>{link.title}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;