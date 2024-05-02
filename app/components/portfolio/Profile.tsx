import AnimatedItem from "../lib/AnimatedItem";

const Profile = () => {
  return (
    <>
      <h2 className="block w-full text-center text-3xl font-bold my-10 ">
        プロフィール
      </h2>
      <div className="border-l border-gray-700 ">
        <ul className="mx-6">
          <AnimatedItem className="my-40">
            flamer motionで右から左にスライドする
          </AnimatedItem>
          <AnimatedItem delay={0.2} className="mb-40">例2</AnimatedItem>
          <AnimatedItem delay={0.4} className="mb-40">例3</AnimatedItem>
          <AnimatedItem delay={0.6} className="mb-40">例4</AnimatedItem>
        </ul>
      </div>
    </>
  );
};

export default Profile;
