import AnimatedItem from "../lib/AnimatedItem";

const About = () => {
  return (
    <section className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="w-[1050px] mx-auto">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          About This site
        </h2>
        <AnimatedItem
          elementType="div"
          animation="fadeInDown"
          className="mx-40 px-4 "
        >
          About This site,About This site,About This site
        </AnimatedItem>
      </div>
    </section>
  );
};

export default About;
