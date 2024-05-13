import AnimatedItem from "../lib/AnimatedItem";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto p-4 mt-10">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          About This site
        </h2>
        <AnimatedItem
          elementType="div"
          animation="fadeInDown"
          className="px-4 sm:px-20"
        >
          About This site,About This site,About This site
        </AnimatedItem>
      </div>
    </section>
  );
};

export default About;
