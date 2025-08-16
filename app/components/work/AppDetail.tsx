import Image from "next/image";

import BoxInList from "../ui/BoxInList";
import AnimatedItem from "../ui/AnimatedItem";

type AppDetailProps = {
  title: string;
  contents: string[];
  src?: string;
  alt?: string;
  imageRight?: boolean;
  featureList: string[];
  techStack: string[];
  subTitle: string[];
};

const AppDetail: React.FC<AppDetailProps> = ({
  title,
  contents,
  src = "/image_webp/no_image.webp",
  alt = "画像準備中",
  imageRight = false,
  featureList,
  techStack,
  subTitle = [],
}) => {
  const imagePosition = imageRight ? "sm:order-2" : "sm:order-1";
  const animation = imageRight ? "fadeInLeft" : "fadeInRight";

  return (
    <>
      <AnimatedItem
        elementType="div"
        animation={animation}
        className="mx-auto py-4 my-10"
      >
        <h3 className="block w-full text-3xl text-center font-bold mb-4 leading-relaxed text-indigo-600">
          {title}
        </h3>
        <div className="flex justify-center mb-8">
          <span className="bg-indigo-100 text-sm font-semibold px-4 py-2 rounded-full">
            {subTitle.join(" | ")}
          </span>
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full px-0 sm:px-10 sm:flex-1 order-2 sm:order-2">
            {contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
          <div className={`m-auto pb-5 sm:pb-0 order-1 ${imagePosition}`}>
            <Image
              src={src}
              width={360}
              height={220}
              alt={alt}
              className="border border-gray-300 rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </AnimatedItem>
      <div className="flex flex-wrap items-center justify-center">
        <BoxInList
          title="アプリの機能の一部"
          lists={featureList}
          minHeight="min-h-[342px]"
          animation={true}
        />
        <BoxInList
          title="使用技術の一部"
          lists={techStack}
          minHeight="min-h-[342px]"
          animation={true}
        />
      </div>
    </>
  );
};

export default AppDetail;
