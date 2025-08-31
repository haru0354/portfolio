"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LaserBeam from "./LaserBeam";

type ErrorTextProps = {
  animationType?: "blink" | "bounce";
  direction?: "right" | "bottom";
  position?: "top" | "left";
};

const getRandomDirection = () => {
  const x = (Math.random() - 0.5) * 1000;
  const y = (Math.random() - 0.5) * 1000;
  return { x, y };
};

const ErrorText: React.FC<ErrorTextProps> = ({
  animationType = "blink",
  direction = "right",
  position = "top",
}) => {
  const [clicked, setClicked] = useState(false);
  const [beamVisible, setBeamVisible] = useState(false);
  const [moveDirection, setMoveDirection] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setBeamVisible(true);
    setTimeout(() => {
      setMoveDirection(getRandomDirection());
      setClicked(true);
    }, 300);
    setTimeout(() => setBeamVisible(false), 600);
  };

  const getIdleAnimation = () =>
    animationType === "bounce" ? { y: [0, -10, 0] } : { opacity: [1, 0.4, 1] };

  const positionClass =
    position === "top"
      ? "absolute top-10 right-28"
      : position === "left"
      ? "absolute top-40 left-40"
      : "";

  return (
    <div className={`${positionClass} [perspective:1000px]`}>
      <motion.div
        onClick={handleClick}
        initial={{ opacity: 1 }}
        animate={
          clicked
            ? {
                x: moveDirection.x,
                y: moveDirection.y,
                opacity: 0,
                rotate: 720,
                transition: { duration: 1 },
              }
            : getIdleAnimation()
        }
        transition={
          clicked
            ? undefined
            : {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="text-2xl cursor-pointer [text-shadow:2px_0_red,-2px_0_cyan,0_2px_magenta,0_-2px_lime] "
      >
        ERROR
      </motion.div>
      <LaserBeam show={beamVisible} direction={direction} />
    </div>
  );
};

export default ErrorText;
