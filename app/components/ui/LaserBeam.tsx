type LaserBeamProps = {
  show: boolean;
  direction?: "right" | "bottom";
};

const LaserBeam: React.FC<LaserBeamProps> = ({ show, direction = "right" }) => {
  if (!show) return null;

  const animationClass =
    direction === "bottom"
      ? "animate-slide-out-elliptic-bottom-bck"
      : "animate-slide-out-elliptic-right-bck";

  return (
    <div className="absolute top-[-80%] left-[10%] w-16 h-16 rounded-full z-[100]">
      <div
        className={`w-full h-full rounded-full bg-gray-700 ${animationClass}`}
      ></div>
    </div>
  );
};

export default LaserBeam;
