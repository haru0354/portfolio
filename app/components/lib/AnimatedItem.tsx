"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedItemProps = {
  children: ReactNode;
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2 }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
