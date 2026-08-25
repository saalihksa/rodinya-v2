"use client";

import { motion, type Transition } from "framer-motion";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

const presets = {
  fadeUp: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  fromTop: {
    hidden: { opacity: 0, y: -56, clipPath: "inset(0 0 100% 0)" },
    show: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
  },
  fromLeft: { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } },
  fromRight: { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.86 }, show: { opacity: 1, scale: 1 } },
};

type Variant = keyof typeof presets;

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 1.05,
  className,
  once = true,
  amount = 0.28,
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={presets[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
