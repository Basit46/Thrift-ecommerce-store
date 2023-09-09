"use client";

import { motion } from "framer-motion";

const AnimatePage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }} // Customize the animation duration and easing
  >
    {children}
  </motion.div>
);

export default AnimatePage;
