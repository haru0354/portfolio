import AnimatedItem from "../lib/AnimatedItem";

const Skill = () => {
  return (
    <section  className="bg-gray-50 pt-10 pb-20 w-full">
      <div className="w-[1050px] mx-auto">
        <h2 className="block w-full text-center text-3xl font-bold my-10">
          skill
        </h2>
        <AnimatedItem
          animation="fadeInDown"
          elementType="div"
          className="flex flex-wrap"
        >
          <div className="mr-2 mb-2 w-[500px] border border-gray-700">
            <h3 className="text-center">自己開発で使用したスキル</h3>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3(tailwind)</li>
              <li>JavaScript(React・Next.js)</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li></li>
            </ul>
            gi
          </div>
          <div className="ml-2 mb-2 w-[500px] border border-gray-700">
            <h3 className="text-center">学習したスキル(未開発)</h3>
            <ul>
              <li>php</li>
              <li>Laravel</li>
              <li>express</li>
              <li>scss</li>
            </ul>
          </div>
          <div className="mr-2 mt-2 w-[500px] border border-gray-700">
            <h3 className="text-center">その他</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>seo</li>
            </ul>
          </div>
          <div className="ml-2 mt-2 w-[500px] border border-gray-700">
            <h3 className="text-center">学習方法・備考</h3>
            <ol>
              <li>Udemyで基本をインプット</li>
              <li>実際にアプリを開発</li>
              <li>
                随時必要になる部分を日本語や英語で検索・ドキュメントの確認
              </li>
            </ol>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default Skill;
