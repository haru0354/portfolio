type SectionBlockProps = {
  title: string;
  contents: string;
};

const ModalSectionBlock: React.FC<SectionBlockProps> = ({
  title,
  contents,
}) => {
  return (
    <>
      <h4 className="pl-4 mt-8 mb-4 text-lg border-b-2 border-dashed border-gray-700">
        {title}
      </h4>
      <p className="break-words whitespace-pre-wrap">{contents}</p>
    </>
  );
};

export default ModalSectionBlock;
