"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedItemProps = {
  children: ReactNode;
  elementType: "div" | "h2" | "h3" | "li";
  animation: "fadeInRight";
  className?: string;
  delay?: number;
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className,
  delay,
  elementType,
  animation,
}) => {
  const MotionComponent = motion[elementType];

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay || 0,
        duration: 2.5,
      },
    },
  };

  const Animations = {
    fadeInRight,
  };

  return (
    <MotionComponent
      variants={Animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedItem;
