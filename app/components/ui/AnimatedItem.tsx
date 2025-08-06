"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedItemProps = {
  children: ReactNode;
  elementType: "div" | "h1" | "h2" | "h3" | "li" | "header" | "footer";
  animation:
    | "fadeInRight"
    | "fadeInLeft"
    | "fadeInDown"
    | "fadeInRotate"
    | "fadeInScale"
    | "fadeInOpacity";
  className?: string;
  delay?: number;
  onClick?: (e: React.MouseEvent) => void;
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className,
  delay,
  elementType,
  animation,
  onClick,
}) => {
  const MotionComponent = motion[elementType];

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay || 0,
        duration: 0.6,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay || 0,
        duration: 0.6,
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
        duration: 0.6,
      },
    },
  };

  const fadeInRotate = {
    hidden: { scale: 0, rotate: 180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: delay || 0,
        duration: 0.6,
      },
    },
  };

  const fadeInScale = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: 0.6,
      },
    },
  };

  const fadeInOpacity = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay || 0,
        duration: 1.2,
      },
    },
  };

  const Animations = {
    fadeInRight,
    fadeInLeft,
    fadeInDown,
    fadeInRotate,
    fadeInScale,
    fadeInOpacity,
  };

  return (
    <MotionComponent
      variants={Animations[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedItem;
