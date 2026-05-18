"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LaunchButton() {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 15,
      }}
      className="inline-block"
    >
      <Link
        href="/mining"
        className="
          relative
          block
          overflow-hidden
          rounded-2xl
          bg-green-500
          px-10
          py-5
          text-xl
          font-bold
          text-black
          shadow-[0_0_35px_rgba(34,197,94,0.75)]
          transition-all
          duration-300
          hover:bg-green-400
          hover:shadow-[0_0_70px_rgba(34,197,94,1)]
        "
      >
        <span className="relative z-10">Launch App</span>

        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
            transition-transform
            duration-700
            hover:translate-x-full
          "
        />
      </Link>
    </motion.div>
  );
}