type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "submit",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="block w-[180px] mx-auto my-4 py-3 px-4 font-semibold border rounded text-white hover:text-gray-800 border-gray-800 bg-gray-800 hover:bg-blue-100 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
