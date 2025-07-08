import Section from "./Section";
import AnimatedItem from "../ui/AnimatedItem";
import BoxInList from "../ui/BoxInList";

const Skill = () => {
  const items = [
    {
      title: "フロントエンド",
      lists: [
        "HTML5",
        "CSS3 (Tailwind CSS/Emotion)",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "バックエンド",
      lists: [
        "PHP",
        "Laravel ",
        "Node.js",
        "Express.js",
        "Prisma (ORM)",
        "DB(PostgreSQL / MongoDB / MySQL)",
      ],
    },
    {
      title: "その他",
      lists: [
        "NextAuth",
        "Firebase (認証)",
        "Supabase (DB/storage)",
        "Git/GitHub",
        "Docker",
        "SEO",
      ],
    },
    {
      title: "学習方法・備考",
      lists: [
        "Udemyで基本教材を学習",
        "補完で本で学習",
        "アプリを開発開始",
        "日本語や英語（翻訳を利用）で検索",
        "公式ドキュメントの確認",
      ],
    },
  ];

  const frontendItems = [
    {
      title: "【JavaScript＆CSS】ガチで学びたい人のためのWEB開発実践入門",
      href: "https://www.udemy.com/course/front-dev-tutorial/",
    },
    {
      title: "React(v18)完全入門ガイド｜Hooks、Next14、Redux、TypeScript",
      href: "https://www.udemy.com/course/react-complete-guide/",
    },
  ];

  const backendItems = [
    {
      title: "Node.jsで学ぶWebシステムとソフトウェア開発基礎！",
      href: "https://www.udemy.com/course/nodejs-comp-guide/",
    },
    {
      title: "PHPからLaravelまで サーバーサイドをとことんやってみよう",
      href: "https://www.udemy.com/course/phpbeginnertolaravel/",
    },
    {
      title: "【PHP, MYSQL, Apache】ガチで学びたい人のためのWEB開発の基礎",
      href: "https://www.udemy.com/course/backend-tutorial/",
    },
    {
      title: "【HTML,CSS,JS,PHP,Git,Docker】ゼロからわかるWebシステム開発",
      href: "https://www.udemy.com/course/web-app-development/",
    },
  ];

  return (
    <Section id="skill" title="エンジニアとしての技術" bgBlue={true}>
      <div className="flex flex-wrap items-center justify-center px-2">
        {items.map((item, index) => (
          <BoxInList key={index} animation={true} title={item.title} lists={item.lists} />
        ))}
        <AnimatedItem
          animation="fadeInDown"
          elementType="div"
          className="w-full max-w-[750px] mx-1 sm:mx-4 my-4 pt-4 pb-8 px-4 border rounded shadow-lg border-gray-400 bg-gradient-to-br from-white to-blue-100"
        >
          <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
            Udemyで学習した教材
          </h3>
          <p className="mt-8 mb-2 font-semibold">フロントエンド</p>
          <ol className="list-decimal mx-8">
            {frontendItems.map((frontendItem, index) => (
              <li key={index} className="mb-1">
                <a
                  href={frontendItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {frontendItem.title}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-8 mb-2 font-semibold">バックエンド</p>
          <ol className="list-decimal mx-8">
            {backendItems.map((backendItem, index) => (
              <li key={index} className="mb-1">
                <a
                  href={backendItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {backendItem.title}
                </a>
              </li>
            ))}
          </ol>
        </AnimatedItem>
      </div>
    </Section>
  );
};

export default Skill;
