"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedItemProps = {
  children: ReactNode;
  elementType: "div" | "h2" | "h3" | "li";
  animation: "fadeInRight" | "fadeInDown" | "fadeInRotate" | "fadeInScale";
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

  const fadeInDown = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay || 0,
        duration: 2.5,
      },
    },
  };

  const fadeInRotate = {
    hidden: { scale: 0, rotate:180, },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: delay || 0,
      },
    },
  };

  const fadeInScale = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: delay || 0,
        duration: 1,
      },
    },
  };

  const Animations = {
    fadeInRight,
    fadeInDown,
    fadeInRotate,
    fadeInScale,
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
