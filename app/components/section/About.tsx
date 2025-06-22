import Image from "next/image";

import Section from "./Section";
import AnimatedItem from "../ui/AnimatedItem";

const About = () => {
  const texts = [
    "このサイトは36歳エンジニア未経験のポートフォリオサイトです。",
    "高校3年生の時に「ホームページビルダー」や「無料ブログサービス」を利用しつつ、約1年間の間、htmlとcssを少し勉強しながら収益を得ていました。その後、関係ない職種に就職。",
    "28歳の時に「wordPress」などを利用しwebメディアを作成し、web広告業として個人事業主として開業をし、生計を立てて今に至ります。36歳の時にエンジニアの職種に就きたいと決意し、勉強を開始しています。",
  ];

  return (
    <Section
      id="about"
      title="30代エンジニアのポートフォリオサイト"
      bgBlue={true}
      h1={true}
    >
      <AnimatedItem
        elementType="div"
        animation="fadeInDown"
        className="w-full flex flex-col sm:flex-row"
      >
        <div className="w-full px-4 sm:flex-1 order-2 sm:order-1">
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <p>
            GitHub:
            <a
              href="https://github.com/haru0354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 my-4"
            >
              https://github.com/haru0354
            </a>
          </p>
        </div>
        <div className="m-auto pb-5 sm:pb-0 order-1 sm:order-2">
          <Image
            src="/image_webp/engineer-image.webp"
            width={360}
            height={220}
            alt="エンジニアの仕事道具"
            priority
          />
        </div>
      </AnimatedItem>
    </Section>
  );
};

export default About;
