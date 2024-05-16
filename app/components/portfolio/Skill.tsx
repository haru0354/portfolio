import AnimatedItem from "../lib/AnimatedItem";

const Skill = () => {
  return (
    <section id="skill" className="bg-gray-50 py-4 sm:pt-10 pb-10 sm:pb-20 w-full">
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10">
          エンジニアとしての技術
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className=" mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[365px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              自己開発で使用した技術
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">HTML 5</li>
              <li className="mb-1">CSS 3(tailwind)</li>
              <li className="mb-1">JavaScript</li>
              <li className="mb-1">TypeScript</li>
              <li className="mb-1">React</li>
              <li className="mb-1">Next.js</li>
              <li className="mb-1">Node.js</li>
            </ul>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[365px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              基礎を学習した技術(未開発)
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">PHP</li>
              <li className="mb-1">Laravel</li>
              <li className="mb-1">Express.js</li>
              <li className="mb-1">SCSS</li>
            </ul>
            <p className="mx-4 mb-4">
              「教材で学習した程度です。そのため、少し分かる程度で自身のない技術の一覧です。」
            </p>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[280px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              その他
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">Git</li>
              <li className="mb-1">Docker(Laravel学習時に少し触れた程度)</li>
              <li className="mb-1">SEO</li>
            </ul>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[280px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              学習方法・備考
            </h3>
            <ol className="list-decimal mx-8 my-8">
              <li className="mb-1">Udemyで基本を学習</li>
              <li className="mb-1">実際にアプリを開発開始</li>
              <li className="mb-1">随時、日本語や英語(翻訳を利用)で検索</li>
              <li className="mb-1">随時、公式ドキュメントの確認</li>
            </ol>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[650px] border border-gray-400 rounded bg-white shadow-lg"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              学習教材
            </h3>
            <ol className="list-decimal mx-8 my-8">
              <li className="mb-1"><a href="https://www.udemy.com/course/front-dev-tutorial/" target="blank" className="text-blue-500">【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門（フロントエンド編）</a></li>
              <li className="mb-1"><a href="https://www.udemy.com/course/react-complete-guide/" target="blank" className="text-blue-500">【2024年最新】React(v18)完全入門ガイド｜Hooks、Next14、Redux、TypeScript</a></li>
              <li className="mb-1"><a href="https://www.udemy.com/course/nodejs-comp-guide/" target="blank" className="text-blue-500">Node.jsで学ぶWebシステムとソフトウェア開発基礎！</a></li>
              <li className="mb-1"><a href="https://www.udemy.com/course/web-app-development/" target="blank" className="text-blue-500">【HTML,CSS,JS,PHP,Git,Docker】プログラミング初心者OK！ ゼロからわかるWebシステム開発</a></li>
            </ol>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default Skill;
