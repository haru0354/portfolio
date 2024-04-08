import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const Work = () => {
  const imageLists = [
    {
      id: 1,
      src: "/merlion.jpg",
      slug: "/",
      alt: "ISRブログ",
    },
    {
      id: 2,
      src: "/merlion.jpg",
      slug: "/skill",
      alt: "SSGブログwithMD",
    },
    { id: 3, src: "/merlion.jpg", slug: "/work", alt: "SSGブログwithMDX" },
    { id: 4, src: "/merlion.jpg", slug: "/work", alt: "ポートフォリオ" },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[920px] flex  flex-wrap items-center justify-center">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          work
        </h2>
        <div className="bg-blue-100 rounded-lg w-[890px] mb-4 py-10">
          <p className="w-full text-2xl text-center font-semibold mb-8">
            旅程表アプリ
          </p>
          <Image
            src="/merlion.jpg"
            width={500}
            height={500}
            alt="a"
            className="m-auto block rounded-lg mb-8"
          />
          <p className="text-center">
            ああああああああああああああああああああああ
          </p>
          <p className="text-center mb-10">
            ああああああああああああああああああああああ
          </p>
          <Button>詳細はコチラ</Button>
        </div>
        {imageLists.map((imageList) => {
          return (
            <Link href={imageList.slug} key={imageList.id}>
              <div className="text-center p-1 max-w-[450px]">
                <Image
                  src={imageList.src}
                  width={450}
                  height={450}
                  alt={imageList.alt}
                  className="m-auto block rounded-lg border-2 hover:border-blue-700"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
