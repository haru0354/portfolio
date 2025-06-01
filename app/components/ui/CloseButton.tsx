type CloseButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="モーダルを閉じる"
      className="flex items-center justify-center w-14 h-14 rounded-full border-gray-800 bg-gray-200 hover:bg-gray-400 transition-colors duration-300"
    >
      ✖️
    </button>
  );
};

export default CloseButton;
