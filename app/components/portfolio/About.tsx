import AnimatedItem from "../lib/AnimatedItem";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto py-4 mt-10">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          About This site
        </h2>
        <AnimatedItem
          elementType="div"
          animation="fadeInDown"
          className="px-4 sm:px-0 w-full flex flex-col sm:flex-row"
        >
          <div className="w-full sm:flex-1 order-2 sm:order-1">
            About This site,About This site,About This site
          </div>
          <div className="m-auto mb-8 order-1 sm:order-2">
            <img src="/engineer-image.png" alt="エンジニアの仕事道具" />
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default About;
