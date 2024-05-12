type CloseButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded px-4 bg-blue-600 text-lg text-white font-semibold "
    >
      ×
    </button>
  );
};

export default CloseButton;
