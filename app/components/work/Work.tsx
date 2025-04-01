import MemoryBook from "./apps/MemoryBook";
import MemoBooksNote from "./apps/MemoBooksNote";
import Blog from "./apps/Blog";
import AppIntroduction from "./apps/AppIntroduction";

const Work = () => {
  const contents = [
    "オリジナルの自作アプリの一覧です。",
    "JavaScript/TypeScript」「React/Next.js」「Node.js/Express」「PostgreSQL/MongoDB」",
    "目的を持って作成していますが、基本的に新たなアプリ作成時は「未使用の技術を使用」しており、学習としての意味もあります。",
    "次は「PHP」「Laravel」を使用したアプリ開発をし、それ以降は使いこなせるように、Next.jsの簡単なアプリを複数作成予定。",
  ];

  return (
    <section
      id="works"
      className="w-full px-2 py-4 sm:pt-10 sm:pb-10 bg-gray-100"
    >
      <div className="max-w-[1050px] mx-auto p-2 text-center">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          Works
        </h2>
        {contents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
      <MemoryBook />
      <MemoBooksNote />
      <AppIntroduction />
      <Blog />
    </section>
  );
};

export default Work;
