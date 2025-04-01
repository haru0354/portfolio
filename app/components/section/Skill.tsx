import AnimatedItem from "../lib/AnimatedItem";
import BoxInList from "../ui/BoxInList";

const Skill = () => {
  return (
    <section
      id="skill"
      className="w-full py-4 sm:pt-10 pb-20 bg-blue-100"
    >
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10">
          エンジニアとしての技術
        </h2>
        <div className="flex flex-wrap items-center justify-center px-2">
          <BoxInList
            animation={true}
            title="自己開発で使用した技術等"
            lists={[
              "HTML5",
              "CSS3 (Tailwind CSS/Emotion)",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js (Express.js)",
            ]}
            minHeight="min-h-[342px]"
          />
          <BoxInList
            animation={true}
            title="基礎を学習または現在学習中の技術(未開発)"
            lists={["PHP (学習中)", "Laravel (学習中)", "SCSS (基礎を学習)"]}
            contents={[
              "「教材で学習した程度です。そのため、少し分かる程度で自身のない技術の一覧です。」",
            ]}
            minHeight="min-h-[342px]"
          />
          <BoxInList
            animation={true}
            title="その他"
            lists={[
              "DB (PostgreSQL/MongoDB)",
              "Firebase (認証)",
              "Supabase (DB/storage)",
              "Git/GitHub",
              "Docker (学習時に少し触れた程度)",
              "SEO",
            ]}
          />
          <BoxInList
            animation={true}
            title="学習方法・備考"
            lists={[
              "Udemyで基本教材を学習",
              "本で学習",
              "アプリを開発開始",
              "日本語や英語（翻訳を利用）で検索",
              "公式ドキュメントの確認",
            ]}
          />
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[750px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              Udemyで学習した教材
            </h3>
            <p className="mt-8 mb-2 font-semibold">フロントエンド</p>
            <ol className="list-decimal mx-8">
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/front-dev-tutorial/"
                  target="blank"
                  className="text-blue-600"
                >
                  【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/react-complete-guide/"
                  target="blank"
                  className="text-blue-600"
                >
                  【2024年最新】React(v18)完全入門ガイド｜Hooks、Next14、Redux、TypeScript
                </a>
              </li>
            </ol>
            <p className="mt-8 mb-2 font-semibold">バックエンド</p>
            <ol className="list-decimal mx-8">
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/nodejs-comp-guide/"
                  target="blank"
                  className="text-blue-600"
                >
                  Node.jsで学ぶWebシステムとソフトウェア開発基礎！
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/phpbeginnertolaravel/"
                  target="blank"
                  className="text-blue-600"
                >
                  PHPからLaravelまで サーバーサイドをとことんやってみよう
                </a>
                （学習中）
              </li>
            </ol>
            <p className="mt-8 mb-2 font-semibold">web開発全般</p>
            <ol className="list-decimal mx-8 mb-8">
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/web-app-development/"
                  target="blank"
                  className="text-blue-600"
                >
                  【HTML,CSS,JS,PHP,Git,Docker】ゼロからわかるWebシステム開発
                </a>
                （Git/Docker/PHP/Laravelの項目のみ使用）
              </li>
            </ol>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default Skill;
