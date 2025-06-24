import AppContainer from "../AppContainer";
import AnimatedItem from "../../ui/AnimatedItem";
import Modal from "../../ui/Modal";

const Blog = () => {
  const modalLists = [
    {
      id: 1,
      title: "ISRブログ",
      firstImage: {
        src: "/image_webp/isr_thumbnail_04.webp",
        alt: "ISRブログ",
      },
      sliderItems: [
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
      explanations: {
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
      },
      urls: {
        githubURL: "https://github.com/haru0354/next-blog-isr",
        appURL: "https://www.travel-memory-life.com/",
      },
    },
    {
      id: 2,
      title: "SSGブログwithMD",
      firstImage: {
        src: "/image_webp/sg_thumbnail.webp",
        alt: "SSGブログwithMD",
      },
      sliderItems: [
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
      explanations: {
        overview:
          "MDファイルを利用して記事を管理することができる、Next.jsのSSGブログ。コンポーネントを変更することで、デザインの変更ができるようになっています。jpegなどpublicフォルダに入れた画像はwebp形式に圧縮変換して生成し、表示することで軽量化されます。",
        technology: "HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14",
        partOfThePackage: "gray-matter,html-react-parser,remark,sharp",
        reasonForCreation:
          "SSGでのブログだとどれぐらいの表示速度なのかを知りたかった為。また、自作アプリやブログに利用をする為。",
        commitment:
          "Next.Jsのイメージコンポーネントが使えないので、代替え手段を探してsharpを利用したりと、良い学習の機会にもなったと思います。",
      },
      urls: {
        githubURL: "https://github.com/haru0354/next-blog-ssg-md",
      },
    },
    {
      id: 3,
      title: "SSGブログwithMDX",
      firstImage: {
        src: "/image_webp/sg_thumbnail_04.webp",
        alt: "SSGブログwithMDX",
      },
      sliderItems: [
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
      explanations: {
        overview:
          "MDXを利用することでMDを利用しつつ、コンポーネントなどの利用もできる、Next.jsのSSGブログ。画像はsharpを使用し、jpegなどの形式をwebp形式にして表示。MDファイルで記事を管理しつつ、ブログのデザインパーツをコンポーネントで再利用し、簡単に本格的なブログ構築ができます。",
        technology: "HTML/CSS(TailwindCSS),TypeScript,React,Next.js14",
        partOfThePackage:
          "@mdx-js,gray-matter,next-mdx-remote,react-markdown,remark,sharp",
        reasonForCreation:
          "MD形式のブログは作成したが、不便な点がありMDXでのブログを作成しました。ブログを運営していくとオリジナルデザインのパーツを作ったりします。しかし、MDだとコンポーネントとして再利用ができません。そのため、MDXにしてコンテンツ内にコンポーネントを組み込めるようにしました。",
        commitment:
          "公式のドキュメントなどを参考にしましたが、なんだかんだ上手くいかない点などもあり、学びがありました。また、したいと思ったことがなんらかしらの方法で実現できるのは、素晴らしいなと思います。",
      },
      urls: {
        githubURL: "https://github.com/haru0354/next-blog-ssg-mdx",
      },
    },
    {
      id: 4,
      title: "ポートフォリオ",
      firstImage: {
        src: "/image_webp/portfolio_thumbnail.webp",
        alt: "ポートフォリオ",
      },
      sliderItems: [
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

      explanations: {
        overview:
          "SSGで作成。Next.jsのImageコンポーネントの代わりに、sharpで画像を圧縮してwebp形式での画像を表示。",
        technology: "HTML/CSS(TailwindCSS) , TypeScript , React , Next.Js14",
        partOfThePackage: "FramerMotion , sharp , react-slic",
        reasonForCreation: "就職活動の為",
        commitment:
          "作成したMDXのブログを利用しようかと思いましたが、復習の意味を込めて、あえて一から作成をしました。やはりデザインを考えるのが苦手であり、そしてダサい・・・。",
      },
      urls: {
        githubURL: "https://github.com/haru0354/portfolio",
      },
    },
  ];

  return (
    <AppContainer>
      <AnimatedItem
        animation="fadeInOpacity"
        elementType="div"
        className="text-center"
      >
        <h3 className="w-full my-10 text-3xl font-bold leading-relaxed">
          Next.js製のブログ作成アプリ
        </h3>
        <p>「作成したアプリの集客用」「個人での利用」</p>
        <p>以上の2つの目的に作成されたブログアプリです。</p>
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

export default Blog;
