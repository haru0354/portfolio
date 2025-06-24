import AppContainer from "../AppContainer";
import AppDetail from "../AppDetail";
import Modal from "../../ui/Modal";

const LaravelAcademy = () => {
  return (
    <AppContainer>
      <AppDetail
        title="「●●アカデミー」- 4択/フラッシュカード 学習アプリ -"
        contents={[
          "「4択クイズ」と「フラッシュカード」機能を備えた学習用 Web アプリケーションです。",
          "複数の4択クイズをまとめた、レッスンを作成することができます。また、作成したレッスンデータを元にフラッシュカードモードが生成されます。",
          "「電車での移動中」「待ち合わせ時間」「すき間時間の利用」",
          "私自信が利用するプログラミングの学習手段として、作成をしはじめました。",
          "",
        ]}
        alt="自作アプリ公開WEB"
        featureList={[
          "レッスンのCRUD",
          "4 択の学習ができる（レッスン）",
          "フラッシュカードモードの自動生成",
          "Livewireでページ遷移なしで学習に集中",
        ]}
        techStack={[
          "PHP",
          "Laravel 10",
          "Laravel Livewire（フロントエンド動作)",
          "Alpine.js（簡易的なフロントエンド動作）",
          "DB: MySQL",
          "スタイル: Tailwind CSS",
        ]}
        imageRight={true}
      />
      <Modal
        modalType="button"
        title="自作アプリ公開WEB"
        firstImage={{
          src: "/image_webp/itinerary_thumbnail.webp",
          alt: "src",
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

export default LaravelAcademy;
