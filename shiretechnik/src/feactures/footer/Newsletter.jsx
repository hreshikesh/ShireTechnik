import { motion } from "framer-motion";
import { Send, Link2, Link } from "lucide-react";

const Newsletter = () => {
  return (
    <div>

      <h3 className="mb-8 text-3xl font-bold text-white">

        Newsletter

      </h3>

      <div className="flex overflow-hidden rounded-xl">

        <input
          type="email"
          placeholder="Your email address"
          className="w-full bg-zinc-800 px-5 py-4 outline-none"
        />

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="bg-cyan-500 px-6"
        >

          <Send size={22} />

        </motion.button>

      </div>

      <div className="mt-8 flex gap-4">

        <motion.a
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          href="#"
          className="rounded-full bg-zinc-800 p-3"
        >
          <Link2 />
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          href="#"
          className="rounded-full bg-zinc-800 p-3"
        >
          <Link />
        </motion.a>

      </div>

    </div>
  );
};

export default Newsletter;