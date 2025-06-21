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
  const bgColor = bgBlue ? "bg-blue-100" : "bg-white";

  return (
    <section id={id} className={`w-full pt-10 sm:pb-10 ${bgColor}`}>
      <div className="max-w-[1050px] mx-auto  mt-10 py-4">
        {h1 ? (
          <h1 className="w-full text-3xl text-center font-bold my-10 px-2 leading-relaxed">
            {title}
          </h1>
        ) : (
          <h2 className="w-full text-center text-3xl font-bold my-10 px-2 leading-relaxed">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
