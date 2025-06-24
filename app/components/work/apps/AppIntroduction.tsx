import AppContainer from "../AppContainer";
import AppDetail from "../AppDetail";
import Modal from "../../ui/Modal";

const AppIntroduction = () => {
  return (
    <AppContainer>
      <AppDetail
        title="「自作アプリ公開WEB」- 自作したアプリを無料掲載 -"
        contents={[
          "自作アプリ制作者や私自信が、時間をかけずに手軽にできるマーケティング手法として利用するのを目的に、作成したアプリです。",
          "「サイト利用者からの認知」「関連性が高く運営歴があるサイトからの被リンク」",
          "初アプリを作成したものの、無料で作成したアプリを認知させる為の場所が、まだまだ少ないなと感じました。そのため、私自信で今度様々なアプリを作成した上で、利用したいと思ったので制作をしました。",
          "「自作アプリの作成を完成した！しかし、どうやってユーザーを増やそう・・・」。数分で出来る一つ目の手段の選択肢としていかがでしょうか？",
        ]}
        alt="自作アプリ公開WEB"
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
      <Modal
        modalType="button"
        title="自作アプリ公開WEB"
        firstImage={{
          src: "/image_webp/isr_thumbnail_04.webp",
          alt: "ISRブログ",
        }}
        sliderItems={[
          {
            image: "/image_webp/web-app-introduction_thumbnail_002.webp",
            text: "自作アプリ公開WEBのTOPサムネイル",
          },
          {
            image: "/image_webp/web-app-introduction_thumbnail_003.webp",
            text: "自作アプリの登録画面",
          },
          {
            image: "/image_webp/web-app-introduction_thumbnail_004.webp",
            text: "登録した自作アプリの掲載画面",
          },
          {
            image: "/image_webp/web-app-introduction_thumbnail_005.webp",
            text: "ユーザー登録後の管理画面",
          },
        ]}
        explanations={{
          technology:
            "HTML/CSS(Emotion), JavaScript, Next.js, DB:MongoDB, 認証:NextAuth,  状態管理:Redux/Toolkit",
          partOfThePackage:
            "Prisma, bcrypt, react-slick, react-textarea-autosize, zod,",
          overview:
            "自分で作成したアプリの公開をする場として作成をしたアプリ。",
          reasonForCreation:
            "初アプリを作成した際にアプリのマーケティング部分は難しいなと思いました。「ブログを作成し検索からの流入」「Qiita・ｘ・noteなどなど記事作成などによる流入」「有料広告を使った認知」・・・。作成したアプリを登録して掲載するなら「手間がかからない」「関連性のあるサイトからの被リンク」と無料で始める一つ目のマーケティング手段として最も適していると思い作成しました。また、意外に同様のアプリが少なかったのもあり自作しようとした経緯があります。",
          commitment:
            "とにかくデザインのセンスがひどい。色々とWEBサーフィンして参考にしたりするものの、古臭い感じになってしまう。デザインに関しての知識ともっと様々なサイトを見ることも必要だと思いました。",
        }}
        urls={{
          githubURL: "https://github.com/haru0354/web-app-introduction",
        }}
      />
    </AppContainer>
  );
};

export default AppIntroduction;
