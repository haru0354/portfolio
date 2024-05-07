import AnimatedItem from "./lib/AnimatedItem";

const About = () => {
  return (
    <section className="bg-gray-50 pt-10 pb-20 w-full">
      <AnimatedItem elementType="div" animation="fadeInDown" className="w-[1050px] mx-auto">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          About This site 
        </h2>
        <div className="border mx-40 px-4 border-gray-700">
          About This site,About This site,About This site
        </div>
      </AnimatedItem>
    </section>
  );
};

export default About;
