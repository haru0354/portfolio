import AnimatedItem from "../ui/AnimatedItem";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  bgBlue?: boolean;
  h1?: boolean;
};

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  bgBlue = false,
  h1 = false,
}) => {
  const bgColor = bgBlue ? "bg-gradient-to-br from-white to-blue-200" : "bg-white";
  const elementType = h1 ? "h1" : "h2";

  return (
    <section id={id} className={`w-full pt-10 sm:pb-10 ${bgColor}`}>
      <div className="max-w-[1050px] mx-auto mt-10 px-2 py-4">
        <AnimatedItem
          animation="fadeInOpacity"
          elementType={elementType}
          className="w-full text-3xl text-center font-bold mb-10 leading-relaxed"
        >
          {title}
        </AnimatedItem>
        {children}
      </div>
    </section>
  );
};

export default Section;
