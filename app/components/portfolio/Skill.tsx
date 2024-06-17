import AnimatedItem from "../lib/AnimatedItem";

const Skill = () => {
  return (
    <section
      id="skill"
      className="bg-gray-50 py-4 sm:pt-10 pb-10 sm:pb-20 w-full"
    >
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10">
          エンジニアとしての技術
        </h2>
        <div className="flex flex-wrap items-center justify-center px-2">
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className=" mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[365px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              自己開発で使用した技術等
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">HTML5</li>
              <li className="mb-1">CSS3 (Tailwind CSS/Emotion)</li>
              <li className="mb-1">JavaScript</li>
              <li className="mb-1">TypeScript</li>
              <li className="mb-1">React</li>
              <li className="mb-1">Next.js</li>
              <li className="mb-1">Node.js (Express.js)</li>
            </ul>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[365px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              基礎を学習または現在学習中の技術(未開発)
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">PHP(学習中)</li>
              <li className="mb-1">Laravel(学習中)</li>
              <li className="mb-1">SCSS(基礎を学習)</li>
            </ul>
            <p className="mx-4 mb-4">
              「教材で学習した程度です。そのため、少し分かる程度で自身のない技術の一覧です。」
            </p>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[320px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              その他
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">DB(PostgreSQL/MongoDB)</li>
              <li className="mb-1">Firebase(認証)</li>
              <li className="mb-1">Supabase(DB/storage)</li>
              <li className="mb-1">Git/GitHub</li>
              <li className="mb-1">Docker(学習時に少し触れた程度)</li>
              <li className="mb-1">SEO</li>
            </ul>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[320px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              学習方法・備考
            </h3>
            <ol className="list-decimal mx-8 my-8">
              <li className="mb-1">Udemyで基本教材を学習</li>
              <li className="mb-1">アプリを開発開始</li>
              <li className="mb-1">日本語や英語(翻訳を利用)で検索</li>
              <li className="mb-1">公式ドキュメントの確認</li>
            </ol>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[750px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              学習教材
            </h3>
            <p className="mt-8 mb-2 font-semibold">フロントエンド</p>
            <ol className="list-decimal mx-8">
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/front-dev-tutorial/"
                  target="blank"
                  className="text-blue-500"
                >
                  【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/react-complete-guide/"
                  target="blank"
                  className="text-blue-500"
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
                  className="text-blue-500"
                >
                  Node.jsで学ぶWebシステムとソフトウェア開発基礎！
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/phpbeginnertolaravel/"
                  target="blank"
                  className="text-blue-500"
                >
                  PHPからLaravelまで サーバーサイドをとことんやってみよう
                </a>（学習中）
              </li>
            </ol>
            <p className="mt-8 mb-2 font-semibold">web開発全般</p>
            <ol className="list-decimal mx-8 mb-8">
              <li className="mb-1">
                <a
                  href="https://www.udemy.com/course/web-app-development/"
                  target="blank"
                  className="text-blue-500"
                >
                  【HTML,CSS,JS,PHP,Git,Docker】ゼロからわかるWebシステム開発
                </a>（Git/Docker/PHP/Laravelの項目のみ使用）
              </li>
            </ol>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default Skill;
