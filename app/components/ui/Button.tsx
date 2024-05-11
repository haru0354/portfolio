type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mx-auto block w-[180px] font-semibold my-4 py-3 px-4 bg-gray-800 text-white border border-gray-800 rounded hover:bg-blue-100 hover:text-gray-800"
    >
      {children}
    </button>
  );
};

export default Button;
