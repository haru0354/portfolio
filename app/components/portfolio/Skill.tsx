import AnimatedItem from "../lib/AnimatedItem";

const Skill = () => {
  return (
    <section id="skill" className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10">
          skill
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] border border-gray-400 rounded"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              自己開発で使用した技術
            </h3>
            <ul className="mx-4 my-8">
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
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px]  border border-gray-400 rounded"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              基礎を学習した技術(未開発)
            </h3>
            <ul className="mx-4 my-8">
              <li className="mb-1">PHP</li>
              <li className="mb-1">Laravel</li>
              <li className="mb-1">Express.js</li>
              <li className="mb-1">SCSS</li>
            </ul>
            <p className="mx-4 mb-4">
              「基礎を学習しても自己開発時に色々と調べたりすることも多かったです。そのため、あまり自身のない技術の一覧でもあります。」
            </p>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px]  border border-gray-400 rounded"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              その他
            </h3>
            <ul className="mx-4 my-8">
              <li className="mb-1">Git</li>
              <li className="mb-1">Docker</li>
              <li className="mb-1">seo</li>
            </ul>
          </AnimatedItem>
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] border border-gray-400 rounded"
          >
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              学習方法・備考
            </h3>
            <ol className="list-decimal mx-8 my-8">
              <li className="mb-1">Udemyで基本をインプット</li>
              <li className="mb-1">実際にアプリを開発</li>
              <li className="mb-1">日本語や英語で検索・ドキュメントの確認</li>
            </ol>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default Skill;
