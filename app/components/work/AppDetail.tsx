import Image from "next/image";

import BoxInList from "../ui/BoxInList";

type AppDetailProps = {
  title: string;
  contents: string[];
  src?: string;
  alt?: string;
  featureList: string[];
  techStack: string[];
  imageRight?: boolean;
};

const AppDetail: React.FC<AppDetailProps> = ({
  title,
  contents,
  src = "/image_webp/no_image.webp",
  alt = "画像準備中",
  featureList,
  techStack,
  imageRight = false,
}) => {
  const imagePosition = imageRight ? "sm:order-2" : "sm:order-1";

  return (
    <>
      <div className="mx-auto py-4 my-10">
        <h3 className="block w-full text-3xl text-center font-bold my-10 px-2 leading-relaxed">
          {title}
        </h3>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full px-2 sm:px-10 sm:flex-1 order-2 sm:order-2">
            {contents.map((content) => (
              <p>{content}</p>
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
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <BoxInList
          title="アプリの機能の一部"
          lists={featureList}
          minHeight="min-h-[342px]"
        />
        <BoxInList
          title="使用技術の一部"
          lists={techStack}
          minHeight="min-h-[342px]"
        />
      </div>
    </>
  );
};

export default AppDetail;
