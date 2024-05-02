"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;

};

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, className, delay }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: 60 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 2, delay: delay, }} 
      className={className}
      >
      {children}
    </motion.li>
  );
};

export default AnimatedItem;
