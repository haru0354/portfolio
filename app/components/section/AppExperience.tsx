import AnimatedItem from "../ui/AnimatedItem";
import Section from "./Section";

const AppExperience = () => {
  const experiences = [
    {
      title: "フロントエンド・UI開発",
      lists: [
        "Next.js による SSG / SSR / ISR 実装",
        "React + Redux Toolkit による状態管理",
        "Laravel + Livewire によるリアルタイム UI",
        "Tailwind / Emotionと複数のスタイル",
      ],
    },
    {
      title: "サーバーサイド・API開発",
      lists: [
        "Next.jsのServer Actionsを用いたサーバー処理/フォーム制御",
        "ExpressによるREST API設計とフロント分離構成の開発",
        "LaravelによるREST API設計でのバックエンド構築",
        "Zodを活用したフォームバリデーション",
      ],
    },
    {
      title: " データベース・ストレージ",
      lists: [
        "MongoDB / Mongooseを用いたNoSQLデータ管理",
        "PostgreSQL / MySQL リレーショナルDBとPrisma ORMを用いたデータ操作",
        "Supabaseストレージによる画像アップロード機能（MIMEタイプ、拡張子、容量制限の制御含む）",
      ],
    },
    {
      title: "認証・その他",
      lists: [
        "NextAuth.jsによるユーザー認証機能の実装",
        "Firebase Authenticationによるユーザー認証機能の実装",
        "Vercel / XSERVER へデプロイ",
        "Git / GitHub を活用したバージョン管理",
      ],
    },
  ];

  return (
    <Section id="experience" title="アプリ開発経験" bgBlue={true}>
      <AnimatedItem
        animation="fadeInOpacity"
        elementType="p"
        className="text-center"
      >
        複数の技術スタックを活用し、フロントエンドからバックエンド、データベース、認証・ストレージ機能まで一貫したフルスタック開発に取り組んできました。
      </AnimatedItem>
      <div className="grid gap-6 sm:grid-cols-2">
        {experiences.map((experience, index) => (
          <AnimatedItem
            animation="fadeInDown"
            elementType="div"
            key={index}
            className="p-5 rounded-lg shadow border border-gray-400 bg-white"
          >
            <h3 className="mb-2 text-lg font-semibold text-indigo-700">
              {experience.title}
            </h3>
            <ul className="list-disc list-inside">
              {experience.lists.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </AnimatedItem>
        ))}
      </div>
    </Section>
  );
};

export default AppExperience;
