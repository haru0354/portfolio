import AnimatedItem from "../ui/AnimatedItem";

type WorkSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const WorkSection: React.FC<WorkSectionProps> = ({
  id,
  title,
  children,
}) => {

  return (
    <section
      id={id}
      className="w-full pt-10 overflow-x-hidden bg-white"
    >
      <AnimatedItem
        animation="fadeInOpacity"
        elementType="h2"
        className="w-full text-3xl text-center font-bold mb-10 leading-relaxed"
      >
        {title}
      </AnimatedItem>
      {children}
    </section>
  );
};

export default WorkSection;
