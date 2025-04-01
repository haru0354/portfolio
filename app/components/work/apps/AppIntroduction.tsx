import AnimatedItem from "../../lib/AnimatedItem";
import AppDetail from "../AppDetail";

const AppIntroduction = () => {
  return (
    <AnimatedItem
      elementType="div"
      animation="fadeInLeft"
      className="w-full max-w-[1050px] mx-auto my-6 pb-14 border-b border-dashed border-gray-700"
    >
      <AppDetail
        title="「自作アプリ公開WEB」- 自作したアプリを無料掲載 -"
        contents={[
          "自作アプリ制作者や私自信が、時間をかけずに手軽にできるマーケティング手法として利用するのを目的に、作成したアプリです。",
          "「サイト利用者からの認知」「関連性が高く運営歴があるサイトからの被リンク」",
          "初アプリを作成したものの、無料で作成したアプリを認知させる為の場所が、まだまだ少ないなと感じました。そのため、私自信で今度様々なアプリを作成した上で、利用したいと思ったので制作をしました。",
          "「自作アプリの作成を完成した！しかし、どうやってユーザーを増やそう・・・」。数分で出来る一つ目の手段の選択肢としていかがでしょうか？",
        ]}
        src="/image_webp/web-app-introduction_thumbnail_001.webp"
        alt="自作アプリ公開WEB"
        imageRight={true}
        featureList={[
          "自作したアプリの掲載ができる",
          "プロフィールの登録ができる",
          "ランダムの登録したアプリがTOPに表示",
        ]}
        techStack={[
          "TypeScript",
          "Next.js",
          "DB: MongoDB",
          "スタイル: Tailwind CSS",
          "認証: NextAuth",
          "状態管理: Redux/Toolkit",
        ]}
      />
    </AnimatedItem>
  );
};

export default AppIntroduction;
