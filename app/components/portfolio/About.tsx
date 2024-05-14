import AnimatedItem from "../lib/AnimatedItem";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto py-4 mt-10">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          30代エンジニアのポートフォリオサイト
        </h2>
        <AnimatedItem
          elementType="div"
          animation="fadeInDown"
          className="px-4 sm:px-3 w-full flex flex-col sm:flex-row"
        >
          <div className="w-full sm:flex-1 order-2 sm:order-1">
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
                className="text-blue-500 my-4"
              >
                https://github.com/haru0354
              </a>
            </p>
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
