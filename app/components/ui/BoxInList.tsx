import AnimatedItem from "../lib/AnimatedItem";

type BoxInListProps = {
  title: string;
  lists: string[];
  className?: string;
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
  className,
  animation,
  animationStyle = "fadeInDown",
}) => {
  const changeStyle = className || "max-w-[450px] min-h-[200px]";
  const defaultClasses =
    "w-full h-full mx-1 sm:mx-4 my-4 p-3 border border-gray-400 rounded bg-white shadow-lg";

  const Contents = () => (
    <>
      <h3 className="text-center border-b border-dashed pb-3 border-gray-500">
        {title}
      </h3>
      <ul className="list-disc mx-8 my-6">
        {lists.map((list, index) => (
          <li key={`${list}-${index}`} className="mb-1">
            {list}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      {animation ? (
        <AnimatedItem
          animation={animationStyle}
          elementType="div"
          className={`${defaultClasses} ${changeStyle}`}
        >
          <Contents />
        </AnimatedItem>
      ) : (
        <div className={`${defaultClasses} ${changeStyle}`}>
          <Contents />
        </div>
      )}
    </>
  );
};

export default BoxInList;
