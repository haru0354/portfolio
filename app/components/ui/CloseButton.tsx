type CloseButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded ml-[79%] px-4 py-2 bg-blue-600 text-lg text-white font-semibold "
    >
      閉じる
    </button>
  );
};

export default CloseButton;
