import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import AnimatedItem from "../lib/AnimatedItem";

const Work = () => {
  const imageLists = [
    {
      id: 1,
      src: "/merlion.jpg",
      slug: "/",
      alt: "ISRブログ",
      title: "ISRブログ",
    },
    {
      id: 2,
      src: "/merlion.jpg",
      slug: "/skill",
      alt: "SSGブログwithMD",
      title: "SSGブログwithMD",
    },
    {
      id: 3,
      src: "/merlion.jpg",
      slug: "/work",
      alt: "SSGブログwithMDX",
      title: "SSGブログwithMDX",
    },
    {
      id: 4,
      src: "/merlion.jpg",
      slug: "/work",
      alt: "ポートフォリオ",
      title: "ポートフォリオ",
    },
  ];

  return (
    <section id="works" className="bg-blue-50 pt-10 pb-20 w-full">
      <div className="w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          Works
        </h2>
        <AnimatedItem
          animation="fadeInScale"
          elementType="div"
          className="bg-blue-100 rounded-lg w-full mb-4 py-10 "
        >
          <h3 className="w-full text-2xl text-center font-semibold mb-8">
            旅程表アプリ
          </h3>
          <div className="relative">
            <Image
              src="/merlion.jpg"
              width={500}
              height={500}
              alt="a"
              className="m-auto block rounded-lg mb-8 "
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              旅程表作成アプリ
            </div>
          </div>
          <p className="text-center">
            ああああああああああああああああああああああ
          </p>
          <p className="text-center mb-10">
            ああああああああああああああああああああああ
          </p>
          <Button>詳細はコチラ</Button>
        </AnimatedItem>
        <div className="flex flex-wrap w-full justify-center">
          {imageLists.map((imageList) => {
            return (
              <Link href={imageList.slug} key={imageList.id}>
                <AnimatedItem
                  elementType="div"
                  animation="fadeInRotate"
                  className="text-center p-1 max-w-[520px] relative"
                >
                  <Image
                    src={imageList.src}
                    width={450}
                    height={450}
                    alt={imageList.alt}
                    className="m-auto block rounded-lg border-2 hover:border-blue-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    {imageList.title}
                  </div>
                </AnimatedItem>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
