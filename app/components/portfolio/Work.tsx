import AnimatedItem from "../lib/AnimatedItem";
import Modal from "../Modal";

const Work = () => {
  const imageLists = [
    {
      id: 1,
      src: "/image_webp/merlion.webp",
      slug: "/",
      alt: "ISRブログ",
      title: "ISRブログ",
      overview:
        "Next.jsのISRブログ。記事はデータベースで管理を行い、ログイン機能にはNext.Auth.jsを利用。Next.jsのServer Actionとprismaを使用しています。",
      technology:
        "HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14,Node.js,認証:NextAuth.js,DB:Supabase",
      partOfThePackage:
        "zustand,zod,FramerMotion,react-hook-form,react-hot-toast,react-textarea-autosize,bcrypt,dompurify",
      reasonForCreation:
        "旅程表アプリの集客用ブログとして作成をしました。Vercelにデプロイするので、ISRは他のサーバーだと作成しづらい点から、どうせならとSSGやSSRではなくISRを採用。",
      commitment:
        "旅程表アプリと同時に作りはじめたので、同じく初作成のアプリとも言えると思います。(こちらの作成の方が時間がかかった)。ダッシュボードも含め、何度も変更を加えたりと、時間がかかりましたがその分、学びも多かったです。",
      githubURL: "https://github.com/haru0354/next-blog-isr",
      appURL: "",
    },
    {
      id: 2,
      src: "/image_webp/merlion.webp",
      slug: "/skill",
      alt: "SSGブログwithMD",
      title: "SSGブログwithMD",
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
      src: "/image_webp/merlion.webp",
      slug: "/work",
      alt: "SSGブログwithMDX",
      title: "SSGブログwithMDX",
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
      src: "/image_webp/merlion.webp",
      slug: "/work",
      alt: "ポートフォリオ",
      title: "ポートフォリオ",
      overview:
        "SSGで作成。Next.jsのImageコンポーネントの代わりに、sharpで画像を圧縮してwebp形式での画像を表示。",
      technology: "HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14",
      partOfThePackage: "FramerMotion,sharp",
      reasonForCreation: "就職活動の為",
      commitment:
        "作成したMDXのブログを利用しようかと思いましたが、復習の意味を込めて、あえて一から作成をしました。やはりデザインを考えるのが苦手であり、そしてダサい・・・。",
      githubURL: "https://github.com/haru0354/portfolio",
      appURL: "",
    },
  ];

  return (
    <section id="works" className="bg-blue-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto p-2">
        <h2 className="block w-full text-center text-3xl font-bold my-10 ">
          Works
        </h2>
        <AnimatedItem
          animation="fadeInScale"
          elementType="div"
          className="bg-blue-100 rounded-lg w-full mb-10 py-10 p-2 "
        >
          <div className="relative">
            <img
              src="/image_webp/merlion.webp"
              alt="a"
              width={550}
              height={550}
              className="m-auto block rounded-lg mb-8"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              旅程表作成アプリ
            </div>
          </div>
          <p className="text-center">
            英語が話せない人でも安心して海外旅行に行けるのを目的の旅程表作成アプリです。が作れる
          </p>
          <Modal
            modalType="button"
            src="/merlion.jpg"
            alt="src"
            title="旅程表作成アプリ"
            technology="HTML/CSS(TailwindCSS),TypeScript,React,Next.Js14,Node.js,認証:NextAuth.js,DB:Supabase"
            partOfThePackage="zustand,zod,FramerMotion,react-hook-form,react-hot-toast,react-textarea-autosize,bcrypt,dompurify"
            overview="英語が話せない人でも安心して海外旅行に行けるのを目的の旅程表作成アプリです。旅行中に撮影した写真をアップロードして、思い出のしおりとして残せるようになっています。Vercelを利用しているので、集客用のブログはSSGではなく、あえて試してみる為にもISRで作成しました。"
            reasonForCreation="英語を話せない友人や家族と海外旅行に何度か行きました。しかし、英語話者がいません。そのため、私から誘ったのもありトラブルがあろうと全て対処できるように、色々とメモをメモ帳やエクセルなどに作成し印刷をしておくなど、準備をしています。ただ、時間がかかったのと友人に共有するのも面倒だった経緯があります。そのため、自分で利用したいと思うアプリを作成しました。"
            commitment="調べては実装しての日々。途中で、Next.jsのServer Actionを使用してみたくて作り治したり、仕事に就いた時のことを考えて、この場面ならコンポ―ネントにするのではやpropsで渡せるように変更など、問題なく動くけどコードの変更したりを何度もしました。今、思えばまずは作ってからと思いますが、反面で色々と学びが多かったです。また、最初に実装の計画を立てるのが重要だと経験できました。ただ、初めてのアプリだったので、あの時には何の実装の方針も立てれなかったはずです。"
            githubURL="https://github.com/haru0354/trip-abroad-itinerary"
            appURL="https://www.travel-memory-life.com/memorybook"
          />
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
