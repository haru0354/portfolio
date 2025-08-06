import AppContainer from "../AppContainer";
import AppDetail from "../AppDetail";
import Modal from "../../ui/Modal";

const MemoryBook = () => {
  return (
    <AppContainer bg="bg-zinc-50">
      <AppDetail
        title="「旅のメモリーブック」旅程表作成アプリ"
        contents={[
          "「英語が話せない人でも安心して海外旅行に行ける」をコンセプトに、かつ「旅の記録として残し」見て楽しむことも出来るアプリとして開発しています。",
          "今まで一緒に海外旅行をした友人は「興味はあるけど英語が話せない」を理由に、行ったことが無い人しかいませんでした。また、検索市場でも同じように「行きたいけど英語が話せない」と悩んでいる人の一定の需要もありました。",
          "私の経験を元に作成したアプリで、「私自身が利用する」かつ「海外旅行に興味はあるけど英語が話せない人」の悩みを解決するアプリとして開発しています。",
        ]}
        src="/image_webp/itinerary_thumbnail_02.webp"
        alt="旅のメモリーブック"
        featureList={[
          "複数の旅行のしおりを作成",
          "旅程表の作成",
          "メモの作成",
          "共有が可能(同行者やSNSに共有し認証なしで見れるページの自動作成)",
          "撮影した写真をアップロードし旅の記録へ",
        ]}
        techStack={[
          "TypeScript",
          "Next.js (ServerAction)",
          "DB: PostgreSQL (Prisma)",
          "スタイル: TailwindCSS",
          "認証: NextAuth.js",
          "Supabase (DB/storage)",
        ]}
      />
      <Modal
        modalType="button"
        title="旅程表作成アプリ"
        firstImage={{
          src: "/image_webp/itinerary_thumbnail.webp",
          alt: "旅程表アプリのサムネイル",
        }}
        sliderItems={[
          {
            image: "/image_webp/itinerary-shiori01.webp",
            text: "複数の旅のしおりが作成可能",
          },
          {
            image: "/image_webp/itinerary_thumbnail_02.webp",
            text: "簡単に旅程が作成可能・帰国後は撮影した写真で思い出に！",
          },
          {
            image: "/image_webp/itinerary-memo.webp",
            text: "海外旅行保険など旅先で確認したいメモが作成可能",
          },
          {
            image: "/image_webp/itinerary-auto-date01.webp",
            text: "自動で「同じ日付は1度表示」と「日時で並び変え」",
          },
          {
            image: "/image_webp/itinerary-manual.webp",
            text: "初回はマニュアル表示",
          },
          {
            image: "/image_webp/itinerary-share.webp",
            text: "「同行者」や「SNS」で旅程表の共有が可能",
          },
          {
            image: "/image_webp/itinerary_thumbnail.webp",
            text: "様々な箇所でアニメーション",
          },
        ]}
        explanations={{
          technology:
            "HTML/CSS(TailwindCSS), TypeScript, React, Next.Js14, Node.js, 認証:NextAuth.js, DB:Supabase",
          partOfThePackage:
            "zod,FramerMotion,react-hot-toast,react-textarea-autosize,bcrypt,dompurify",
          overview:
            "英語が話せない人でも安心して海外旅行に行けるのを目的の旅程表作成アプリです。旅行中に撮影した写真をアップロードして、思い出のしおりとして残せるようになっています。Vercelを利用しているので、集客用のブログはSSGではなく、あえて試してみる為にもISRで作成しました。",
          reasonForCreation:
            "英語を話せない友人や家族と海外旅行に何度か行きました。しかし、英語話者がいません。そのため、私から誘ったのもありトラブルがあろうと全て対処できるように、色々とメモをメモ帳やエクセルなどに作成し印刷をしておくなど、準備をしています。ただ、時間がかかったのと友人に共有するのも面倒だった経緯があります。そのため、自分で利用したいと思うアプリを作成しました。",
          commitment:
            "調べては実装しての日々。Udemyで学んだのがNext.js12までだったので、公式のドキュメントのデモで学んだり、途中でServer Actionを使用してみたくて作り治したり右方作法していました。仕事に就いた時のことを考えて、この場面ならコンポ―ネントにするのではやpropsで渡せるように変更など、問題なく動くけどコードの変更したりを何度もしました。今、思えばまずはある程度完成させてからと思いますが、反面で色々と学びが多かったです。また、最初に実装の計画を立てるのが重要だと経験できました。ただ、初めてのアプリだったので、あの時には何の実装の方針も立てれなかったはずです。",
        }}
        urls={{
          githubURL: "https://github.com/haru0354/trip-abroad-itinerary",
          appURL: "https://www.my-travel-memory.com/memorybook",
        }}
      />
    </AppContainer>
  );
};

export default MemoryBook;
