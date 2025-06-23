import AppContainer from "../AppContainer";
import AnimatedItem from "../../ui/AnimatedItem";
import Modal from "../../ui/Modal";

const LaravelPractice = () => {
  const imageLists = [
    {
      id: 1,
      src: "/",
      alt: "Laravel RESTful",
      title: "Laravel RESTful",
      items: [
        {
          image: "/",
          text: "",
        },
        {
          image: "/",
          text: "",
        },
        {
          image: "/",
          text: "",
        },
      ],
      overview:
        "RESTful設計でのLaravelフルスタックの旅程表アプリ。基礎学習した内容を元にアウトプットとして簡易的に短時間で制作した学習目的のアプリ。",
      technology:
        "HTML/CSS(TailwindCSS),PHP,Laravel 12, ,認証:Laravel Breeze ,DB:mysql",
      partOfThePackage: "",
      reasonForCreation:
        "PHP、Laravelの基礎学習後、アウトプットとしてアプリを制作を検討。自身の初作成アプリの旅程表をLaravelバージョンとして学習目的に作成",
      commitment: "",
      githubURL: "https://github.com/haru0354/laravel-restful-itinerary",
      appURL: "",
    },
    {
      id: 2,
      src: "/",
      alt: "Laravel Livewire",
      title: "Laravel Livewire",
      items: [
        {
          image: "",
          text: "",
        },
        {
          image: "",
          text: "",
        },
        {
          image: "",
          text: "",
        },
      ],
      overview:
        "「Laravel Livewire」を使用して作られた「Laravel」フルスタックの旅程表アプリ。「Laravel」と「Livewire」学習目的として制作したアプリ。",
      technology:
        "HTML/CSS(TailwindCSS), PHP, Laravel 12, Laravel Livewire, 認証:Laravel Breeze , DB:mysql",
      partOfThePackage: "",
      reasonForCreation:
        "Livewireの存在を知って、これは使ってみたいと思って、学習目的としてすぐに作成開始。",
      commitment:
        "先に「React」「Next.js」でアプリを複数制作している経験があり、同じような感覚で作成をすることができました。フロントにReactなどを選択せずに、Laravelのフルスタックアプリを作成するなら、Livewireは凄く便利だと思います。",
      githubURL: "https://github.com/haru0354/laravel-livewire-itinerary",
      appURL: "",
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
        {imageLists.map((imageList) => {
          return (
            <div key={imageList.id}>
              <Modal
                modalType="image"
                src={imageList.src}
                alt={imageList.alt}
                title={imageList.title}
                items={imageList.items}
                technology={imageList.technology}
                partOfThePackage={imageList.partOfThePackage}
                overview={imageList.overview}
                reasonForCreation={imageList.reasonForCreation}
                commitment={imageList.commitment}
                githubURL={imageList.githubURL}
                appURL={imageList.appURL}
              />
            </div>
          );
        })}
      </div>
    </AppContainer>
  );
};

export default LaravelPractice;
