type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button";
  color: "white" | "black";
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "submit",
  color,
  className,
  onClick,
}) => {
  const colors = {
    white: "text-gray-800 hover:text-white hover:bg-gray-700 ",
    black: "text-white hover:text-gray-800 bg-gray-700 hover:bg-white",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${colors[color]} px-8 py-3 border rounded border-gray-400 transition duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
