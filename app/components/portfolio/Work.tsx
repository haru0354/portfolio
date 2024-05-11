import Image from "next/image";
import Button from "../ui/Button";
import AnimatedItem from "../lib/AnimatedItem";
import Modal from "../Modal";

const Work = () => {
  const imageLists = [
    {
      id: 1,
      src: "/merlion.jpg",
      slug: "/",
      alt: "ISRブログ",
      title: "ISRブログ",
      overview: "概要",
      technology: "next.js14",
      reasonForCreation: "作成理由",
      commitment: "こだわりの点",
    },
    {
      id: 2,
      src: "/merlion.jpg",
      slug: "/skill",
      alt: "SSGブログwithMD",
      title: "SSGブログwithMD",
      overview: "overview",
      technology: "next.js14",
      reasonForCreation: "ReasonForCreation",
      commitment: "commitment",
    },
    {
      id: 3,
      src: "/merlion.jpg",
      slug: "/work",
      alt: "SSGブログwithMDX",
      title: "SSGブログwithMDX",
      overview: "overview",
      technology: "next.js14",
      reasonForCreation: "ReasonForCreation",
      commitment: "commitment",
    },
    {
      id: 4,
      src: "/merlion.jpg",
      slug: "/work",
      alt: "ポートフォリオ",
      title: "ポートフォリオ",
      overview: "overview",
      technology: "next.js14",
      reasonForCreation: "ReasonForCreation",
      commitment: "commitment",
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
          className="bg-blue-100 rounded-lg w-full mb-10 py-10 "
        >
          <div className="relative">
            <Image
              src="/merlion.jpg"
              width={550}
              height={550}
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
          <Modal
            modalType="button"
            src="/merlion.jpg"
            alt="src"
            title="旅程表作成アプリ"
            technology="src"
            overview="src"
            reasonForCreation="src"
            commitment="src"
          />
        </AnimatedItem>
        <div className="flex flex-wrap w-full justify-center">
          {imageLists.map((imageList) => {
            return (
              <div key={imageList.id}>
                <Modal
                  modalType="image"
                  src={imageList.src}
                  alt={imageList.alt}
                  title={imageList.title}
                  technology={imageList.technology}
                  overview={imageList.overview}
                  reasonForCreation={imageList.reasonForCreation}
                  commitment={imageList.commitment}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
