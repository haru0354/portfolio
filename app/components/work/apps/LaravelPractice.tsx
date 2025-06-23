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
      commitment:
        "",
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
        "MDファイルを利用して記事を管理することができる、Next.jsのSSGブログ。コンポーネントを変更することで、デザインの変更ができるようになっています。jpegなどpublicフォルダに入れた画像はwebp形式に圧縮変換して生成し、表示することで軽量化されます。",
      technology: "HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14",
      partOfThePackage: "gray-matter,html-react-parser,remark,sharp",
      reasonForCreation:
        "SSGでのブログだとどれぐらいの表示速度なのかを知りたかった為。また、自作アプリやブログに利用をする為。",
      commitment:
        "Next.Jsのイメージコンポーネントが使えないので、代替え手段を探してsharpを利用したりと、良い学習の機会にもなったと思います。",
      githubURL: "https://github.com/haru0354/next-blog-ssg-md",
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
