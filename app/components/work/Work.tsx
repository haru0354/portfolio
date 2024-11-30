import MemoryBook from "./apps/MemoryBook";
import MemoBooksNote from "./apps/MemoBooksNote";
import Blog from "./apps/Blog";

const Work = () => {
  return (
    <section id="works" className="bg-blue-50 py-4 sm:pt-10 sm:pb-20 w-full">
      <div className="max-w-[1050px] mx-auto p-2 overflow-hidden">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          Works
        </h2>
        <p className="px-2 md:text-center">オリジナルの自作アプリの一覧です。</p>
        <p className="px-2 md:text-center">
          「JavaScript/TypeScript」「React/Next.js」「Node.js/Express」「PostgreSQL/MongoDB」
        </p>
        <p className="px-2 md:text-center">
          目的を持って作成していますが、基本的に新たなアプリ作成時は「未使用の技術を使用」しており、学習としての意味もあります。
        </p>
        <p className="px-2 md:text-center">
          次は「PHP」「Laravel」を使用したアプリ開発をし、それ以降は使いこなせるように、Next.jsの簡単なアプリを複数作成予定。
        </p>
        <MemoryBook />
        <MemoBooksNote />
        <Blog />
      </div>
    </section>
  );
};

export default Work;
