import AppContainer from "../AppContainer";
import AnimatedItem from "../../ui/AnimatedItem";
import Modal from "../../ui/Modal";

const LaravelPractice = () => {
  const modalLists = [
    {
      id: 1,
      title: "Laravel RESTful",
      firstImage: {
        src: "/image_webp/laravel-restful-ryoteihyou.webp",
        alt: "Laravel RESTfulのサムネイル",
      },
      sliderItems: [
        {
          image: "/image_webp/laravel-restful-shiori.webp",
          text: "複数の旅のしおりを作成が可能",
        },
        {
          image: "/image_webp/laravel-restful-ryoteihyou.webp",
          text: "各しおりには「旅程表」の作成が可能",
        },
        {
          image: "/image_webp/laravel-restful-memo.webp",
          text: "各しおりには「メモ」の作成が可能",
        },
        {
          image: "/image_webp/laravel-restful-form.webp",
          text: "フォームバリデーション",
        },
        {
          image: "/image_webp/laravel-restful-sumaho.webp",
          text: "スマホ表示。フッターメニュー。",
        },
      ],
      explanations: {
        overview:
          "RESTful設計でのLaravelフルスタックの旅程表アプリ。基礎学習した内容を元にアウトプットとして簡易的に短時間で制作した学習目的のアプリ。",
        technology:
          "HTML/CSS(TailwindCSS),PHP,Laravel 12, ,認証:Laravel Breeze ,DB:mysql",
        reasonForCreation:
          "PHP、Laravelの基礎学習後、アウトプットとしてアプリを制作を検討。自身の初作成アプリの旅程表をLaravelバージョンとして学習目的に作成",
      },
      urls: {
        githubURL: "https://github.com/haru0354/laravel-restful-itinerary",
      },
    },
    {
      id: 2,
      title: "Laravel Livewire",
      firstImage: {
        src: "/image_webp/laravel-livewire-tabinoshiori01.webp",
        alt: "Laravel Livewireのサムネイル",
      },
      sliderItems: [
        {
          image: "/image_webp/laravel-livewire-tabinoshiori01.webp",
          text: "複数の旅のしおりを作成が可能",
        },
        {
          image: "/image_webp/laravel-livewire-tabinoshiori.webp",
          text: "モーダルとlivewireでページ遷移なく追加/編集/削除",
        },
        {
          image: "/image_webp/laravel-livewire-ryoteihyou.webp",
          text: "各しおりには「旅程表」「メモ」の作成が可能",
        },
        {
          image: "/image_webp/laravel-livewire-ryoteihyou-add.webp",
          text: "「旅程表」「メモ」の追加/編集/削除も同様にモーダルとlivewireでページ遷移なし",
        },
        {
          image: "/image_webp/laravel-livewire-form.webp",
          text: "フォームバリデーション",
        }
      ],
      explanations: {
        overview:
          "「Laravel Livewire」を使用して作られた「Laravel」フルスタックの旅程表アプリ。「Laravel」と「Livewire」学習目的として制作したアプリ。",
        technology:
          "HTML/CSS(TailwindCSS),PHP, Laravel 12, Laravel Livewire, 認証:Laravel Breeze , DB:mysql",
        reasonForCreation:
          "Livewireの存在を知って、これは使ってみたいと思って、学習目的としてすぐに作成開始。",
        commitment:
          "先に「React」「Next.js」でアプリを複数制作している経験があり、同じような感覚で作成をすることができました。フロントにReactなどを選択せずに、Laravelのフルスタックアプリを作成するなら、Livewireは凄く便利だと思います。",
      },
      urls: {
        githubURL: "https://github.com/haru0354/laravel-livewire-itinerary",
      },
    },
  ];

  return (
    <AppContainer border={false}>
      <AnimatedItem
        animation="fadeInOpacity"
        elementType="div"
        className="text-center"
      >
        <h3 className="w-full my-10 text-3xl font-bold leading-relaxed">
          Laravelの学習目的に旅程表アプリ
        </h3>
        <p>Laravelを学習して知識の定着の為に、学習目的に制作したアプリです。</p>
        <ul className="mb-4">
          <li> 「Livewireを使用したLaravelのフルスタック」</li>
          <li> 「RESTful設計のLaravelのフルスタック」</li>
        </ul>
        <p>
          初作成のアプリ「Next.jsの旅程表アプリ」のLaravel版として練習目的で作成しました。
        </p>
      </AnimatedItem>
      <div className="flex flex-wrap w-full justify-center">
        {modalLists.map((modalList) => {
          return (
            <div key={modalList.id}>
              <Modal
                modalType="image"
                title={modalList.title}
                firstImage={modalList.firstImage}
                sliderItems={modalList.sliderItems}
                explanations={modalList.explanations}
                urls={modalList.urls}
              />
            </div>
          );
        })}
      </div>
    </AppContainer>
  );
};

export default LaravelPractice;
