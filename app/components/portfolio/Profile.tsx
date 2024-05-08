import AnimatedItem from "../lib/AnimatedItem";

const Profile = () => {
  return (
    <section id="profile" className="bg-blue-50 pt-10 pb-20 w-full">
      <div className="w-[1050px] mx-auto">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          プロフィール
        </h2>
        <div className="border-l ml-10 border-gray-700">
          <ul className="mx-6">
            <AnimatedItem
              animation="fadeInRight"
              elementType="li"
              className="my-40"
            >
              <h3 className="text-lg font-semibold">flamer motionで右から左にスライドする</h3>
              <p>例、例</p>
            </AnimatedItem>
            <AnimatedItem
              animation="fadeInRight"
              elementType="li"
              delay={0.2}
              className="mb-40"
            >
              例2
            </AnimatedItem>
            <AnimatedItem
              animation="fadeInRight"
              elementType="li"
              delay={0.4}
              className="mb-40"
            >
              例3
            </AnimatedItem>
            <AnimatedItem
              animation="fadeInRight"
              elementType="li"
              delay={0.6}
              className="mb-40"
            >
              例4
            </AnimatedItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
