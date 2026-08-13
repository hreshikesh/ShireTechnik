import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const BottomBar = () => {
    return (
        <>
            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom Copyright Section */}
            <div className="relative">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 py-6 sm:py-8 text-center sm:text-left md:flex-row">
                    <p className="text-xs sm:text-sm text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-cyan-400">Shiretechnik</span>.
                        All Rights Reserved.
                    </p>

                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        High-Performance CAE & Engineering Solutions
                    </p>
                </div>

                {/* Back To Top Floating Button */}
                {/* <motion.a
                    href="https://wa.me/918023415100"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="
                                fixed
                                bottom-6
                                right-6
                                sm:bottom-8
                                sm:right-8
                                z-50
                                flex
                                h-12
                                w-12
                                sm:h-14
                                sm:w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-[#25D366]
                                text-white
                                shadow-lg
                                shadow-[#25D366]/30
                                transition-colors
                                hover:bg-[#1ebc59]
                            "
                                            >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 sm:h-7 sm:w-7"
                    >
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.38c.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.13-.28.28-.12.55.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
                    </svg>
                </motion.a> */}

            </div >
        </>
    );
};

export default BottomBar;