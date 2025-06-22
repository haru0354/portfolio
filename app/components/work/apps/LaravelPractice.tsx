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
          image: "/image_webp/isr_thumbnail.webp",
          text: "旅程表アプリの集客用として作成",
        },
        {
          image: "/image_webp/isr_thumbnail_02.webp",
          text: "envに記載の「ID」と「パスワード」で管理画面にログイン",
        },
        {
          image: "/image_webp/isr_thumbnail_03.webp",
          text: "ダッシュボードで今後のブログの制作予定がメモ可能",
        },
        {
          image: "/image_webp/isr_thumbnail_04.webp",
          text: "画像の追加・公開設定が可能。記事の公開でページが作成される。",
        },
      ],
      overview:
        "Next.jsのISRブログ。記事はデータベースで管理を行い、ログイン機能にはNext.Auth.jsを利用。Next.jsのServer Actionとprismaを使用しています。",
      technology:
        "HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14,Node.js,認証:NextAuth.js,DB:Supabase",
      partOfThePackage:
        "zod,FramerMotion,react-hook-form,react-textarea-autosize,bcrypt,dompurify",
      reasonForCreation:
        "旅程表アプリの集客用ブログとして作成をしました。Vercelにデプロイするので、ISRは他のサーバーだと作成しづらい点から、どうせならとSSGやSSRではなくISRを採用。",
      commitment:
        "旅程表アプリと同時に作りはじめたので、同じく初作成のアプリとも言えると思います。(こちらの作成の方が時間がかかった)。ダッシュボードも含め、何度も変更を加えたりと、時間がかかりましたがその分、学びも多かったです。",
      githubURL: "https://github.com/haru0354/next-blog-isr",
      appURL: "https://www.travel-memory-life.com/",
    },
    {
      id: 2,
      src: "/image_webp/sg_thumbnail.webp",
      alt: "Laravel Livewire",
      title: "Laravel Livewire",
      items: [
        {
          image: "/image_webp/sg_thumbnail_02.webp",
          text: "記事だけでなく様々なパーツをMDファイルに記載で簡単に設置",
        },
        {
          image: "/image_webp/sg_thumbnail_04.webp",
          text: "SEOを考慮して内部リンクの集まるカテゴリも作りこみ可能",
        },
        {
          image: "/image_webp/sg_thumbnail_03.webp",
          text: "MDXのコンテンツエリアに記載なしで記事一覧のみを表示",
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
      <AnimatedItem animation="fadeInOpacity" elementType="div" className="text-center" >
        <h3 className="block w-full text-3xl font-bold my-10 leading-relaxed">
          Laravelの学習目的に旅程表アプリ
        </h3>
        <p>
          Laravelを学習して知識の定着の為に、学習目的に制作したアプリです。
        </p>
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
