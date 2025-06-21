import Section from "./Section";
import AnimatedItem from "../ui/AnimatedItem";
import BoxInList from "../ui/BoxInList";

const Skill = () => {
  return (
    <Section id="skill" title="エンジニアとしての技術" bgBlue={true}>
      <div className="flex flex-wrap items-center justify-center px-2">
        <BoxInList
          animation={true}
          title="フロントエンド"
          lists={[
            "HTML5",
            "CSS3 (Tailwind CSS/Emotion)",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
          ]}
          minHeight="min-h-[310px]"
        />
        <BoxInList
          animation={true}
          title="バックエンド"
          lists={[
            "PHP",
            "Laravel ",
            "Node.js",
            "Express.js",
            "Prisma (ORM)",
            "DB(PostgreSQL / MongoDB / MySQL)",
          ]}
          minHeight="min-h-[310px]"
        />
        <BoxInList
          animation={true}
          title="その他"
          lists={[
            "NextAuth",
            "Firebase (認証)",
            "Supabase (DB/storage)",
            "Git/GitHub",
            "Docker",
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                【2023年最新】【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://www.udemy.com/course/react-complete-guide/"
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Node.jsで学ぶWebシステムとソフトウェア開発基礎！
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://www.udemy.com/course/phpbeginnertolaravel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                PHPからLaravelまで サーバーサイドをとことんやってみよう
              </a>
            </li>
          </ol>
          <p className="mt-8 mb-2 font-semibold">web開発全般</p>
          <ol className="list-decimal mx-8 mb-8">
            <li className="mb-1">
              <a
                href="https://www.udemy.com/course/web-app-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                【HTML,CSS,JS,PHP,Git,Docker】ゼロからわかるWebシステム開発
              </a>
              （Git/Docker/PHP/Laravelの項目のみ）
            </li>
          </ol>
        </AnimatedItem>
      </div>
    </Section>
  );
};

export default Skill;
