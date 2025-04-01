import Image from "next/image";
import AnimatedItem from "../lib/AnimatedItem";

const About = () => {
  return (
    <section id="about" className="bg-blue-100 pt-10 sm:pb-10 w-full">
      <div className="max-w-[1050px] mx-auto py-4 mt-10">
        <h1 className="block w-full text-3xl text-center font-bold my-10 px-2 leading-relaxed">
          30代エンジニアのポートフォリオサイト
        </h1>
        <AnimatedItem
          elementType="div"
          animation="fadeInDown"
          className="w-full flex flex-col sm:flex-row"
        >
          <div className="w-full px-4 sm:flex-1 order-2 sm:order-1">
            <p>このサイトは36歳エンジニア未経験のポートフォリオサイトです。</p>
            <p>
              高校3年生の時に「ホームページビルダー」や「無料ブログ
              サービス」を利用しつつ、約1年間の間、htmlとcssを少し勉強しながら収益を得ていました。その後、関係ない職種に就職。
            </p>
            <p>
              28歳の時に「wordPress」などを利用しwebメディアを作成し、web広告業として個人事業主として開業をし、生計を立てて今に至ります。
              36歳の時にエンジニアの職種に就きたいと決意し、勉強を開始しています。
            </p>
            <p>
              GitHub:
              <a
                href="https://github.com/haru0354"
                target="blank"
                className="text-blue-600 my-4"
              >
                https://github.com/haru0354
              </a>
            </p>
          </div>
          <div className="m-auto pb-5 sm:pb-0 order-1 sm:order-2">
            <Image src="/image_webp/engineer-image.webp" width={360} height={220} alt="エンジニアの仕事道具" priority />
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default About;
