import Modal from "../Modal";
import WorkItinerary from "../portfolio/WorkItinerary";
import WorkBooksMemo from "../portfolio/WorkBooksMemo";

const Work = () => {
  const imageLists = [
    {
      id: 1,
      src: "/image_webp/isr_thumbnail_04.webp",
      slug: "/",
      alt: "ISRブログ",
      title: "ISRブログ",
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
      slug: "/skill",
      alt: "SSGブログwithMD",
      title: "SSGブログwithMD",
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
    {
      id: 3,
      src: "/image_webp/sg_thumbnail_04.webp",
      slug: "/work",
      alt: "SSGブログwithMDX",
      title: "SSGブログwithMDX",
      items: [
        {
          image: "/image_webp/sg_thumbnail_04.webp",
          text: "SEOを考慮して内部リンクの集まるカテゴリも作りこみ可能",
        },
        {
          image: "/image_webp/sg_thumbnail_03.webp",
          text: "MDXにコンテンツが無ければカテゴリの記事一覧を表示",
        },
        {
          image: "/image_webp/sg_thumbnail.webp",
          text: "MDXにすることでコンテンツ部分にコンポーネントの再利用が可能",
        },
      ],
      overview:
        "MDXを利用することでMDを利用しつつ、コンポーネントなどの利用もできる、Next.jsのSSGブログ。画像はsharpを使用し、jpegなどの形式をwebp形式にして表示。MDファイルで記事を管理しつつ、ブログのデザインパーツをコンポーネントで再利用し、簡単に本格的なブログ構築ができます。",
      technology: "HTML/CSS(TailwindCSS),TypeScript,React,Next.js14",
      partOfThePackage:
        "@mdx-js,gray-matter,next-mdx-remote,react-markdown,remark,sharp",
      reasonForCreation:
        "MD形式のブログは作成したが、不便な点がありMDXでのブログを作成しました。ブログを運営していくとオリジナルデザインのパーツを作ったりします。しかし、MDだとコンポーネントとして再利用ができません。そのため、MDXにしてコンテンツ内にコンポーネントを組み込めるようにしました。",
      commitment:
        "公式のドキュメントなどを参考にしましたが、なんだかんだ上手くいかない点などもあり、学びがありました。また、したいと思ったことがなんらかしらの方法で実現できるのは、素晴らしいなと思います。",
      githubURL: "https://github.com/haru0354/next-blog-ssg-mdx",
      appURL: "",
    },
    {
      id: 4,
      src: "/image_webp/portfolio_thumbnail.webp",
      slug: "/work",
      alt: "ポートフォリオ",
      title: "ポートフォリオ",
      items: [
        { image: "/image_webp/portfolio_thumbnail.webp", text: "PCデザイン" },
        {
          image: "/image_webp/portfolio_thumbnail_02.webp",
          text: "レスポンシブデザイン",
        },
        {
          image: "/image_webp/portfolio_thumbnail_03.webp",
          text: "画像のスライダー機能・画像は圧縮してwebpに変換して表示",
        },
      ],
      overview:
        "SSGで作成。Next.jsのImageコンポーネントの代わりに、sharpで画像を圧縮してwebp形式での画像を表示。",
      technology: "HTML/CSS(TailwindCSS) , TypeScript , React , Next.Js14",
      partOfThePackage: "FramerMotion , sharp , react-slic",
      reasonForCreation: "就職活動の為",
      commitment:
        "作成したMDXのブログを利用しようかと思いましたが、復習の意味を込めて、あえて一から作成をしました。やはりデザインを考えるのが苦手であり、そしてダサい・・・。",
      githubURL: "https://github.com/haru0354/portfolio",
      appURL: "",
    },
  ];

  return (
    <section id="works" className="bg-blue-50 py-4 sm:pt-10 sm:pb-20 w-full">
      <div className="max-w-[1050px] mx-auto p-2 overflow-hidden">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          Works
        </h2>
        <p className="px-2 md:text-center">オリジナルの自作アプリの一覧です。</p>
        <p className="px-2 md:text-center">
          「JavaScript/TypeScript」「React/Next.js」「Node.js/Express」「PostgreSQL/MongoDB」
        </p>
        <p className="px-2 md:text-center">
          目的を持って作成していますが、基本的に新たなアプリ作成時は「未使用の技術を使用」しており、学習としての意味もあります。
        </p>
        <p className="px-2 md:text-center">
          次は「PHP」「Laravel」を使用したアプリ開発をし、それ以降は使いこなせるように、Next.jsの簡単なアプリを複数作成予定。
        </p>
        <WorkItinerary />
        <WorkBooksMemo />
        <h3 className="block w-full text-3xl text-center font-bold my-10 leading-relaxed">
        Next.js製のブログ作成アプリ
        </h3>
        <p className="text-center">「作成したアプリの集客用」「個人での利用」</p>
        <p className="text-center">以上の2つの目的に作成されたブログアプリです。</p>
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
      </div>
    </section>
  );
};

export default Work;
