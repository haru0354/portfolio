import AnimatedItem from "./AnimatedItem";

type BoxInListProps = {
  title: string;
  lists: string[];
  contents?: string[];
  maxWidth?: string;
  minHeight?: string;
  animation?: boolean;
  animationStyle?:
    | "fadeInDown"
    | "fadeInRight"
    | "fadeInLeft"
    | "fadeInRotate"
    | "fadeInScale"
    | "fadeInOpacity";
};

const BoxInList: React.FC<BoxInListProps> = ({
  title,
  lists,
  contents,
  maxWidth = "max-w-[450px]",
  minHeight = "min-h-[310px]",
  animation,
  animationStyle = "fadeInDown",
}) => {
  const defaultClasses =
    "w-full h-full mx-1 sm:mx-4 my-4 p-3 border border-gray-400 rounded bg-white shadow-lg bg-gradient-to-br from-white to-gray-200";

  const Contents = () => (
    <>
      <h3 className="text-center border-b border-dashed pb-3 border-gray-500">
        {title}
      </h3>
      <div className="w-full max-w-screen-md mx-auto px-4">
        <ul className="list-disc w-full mx-2 md:mx-8 my-6">
          {lists.map((list, index) => (
            <li key={`${list}-${index}`} className="mb-1 break-words">
              {list}
            </li>
          ))}
        </ul>
        {contents &&
          contents.map((content, index) => (
            <p key={index} className="mx-8 break-words">
              {content}
            </p>
          ))}
      </div>
    </>
  );

  return (
    <>
      {animation ? (
        <AnimatedItem
          animation={animationStyle}
          elementType="div"
          className={`${defaultClasses} ${maxWidth} ${minHeight}`}
        >
          <Contents />
        </AnimatedItem>
      ) : (
        <div className={`${defaultClasses} ${maxWidth} ${minHeight}`}>
          <Contents />
        </div>
      )}
    </>
  );
};

export default BoxInList;
