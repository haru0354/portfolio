import Image from "next/image";
import AnimatedItem from "../lib/AnimatedItem";
import Modal from "../Modal";

const WorkItinerary = () => {
  return (
    <>
      <AnimatedItem
        elementType="div"
        animation="fadeInRight"
        className="w-full max-w-[1050px] my-6 pb-14 border-b border-dashed border-gray-700"
      >
        <div className="mx-auto py-4 my-10">
          <h3 className="block w-full text-3xl text-center font-bold my-10 px-2 leading-relaxed">
          「旅のメモリーブック」旅程表作成アプリ
          </h3>
          <div className="w-full flex flex-col sm:flex-row">
            <div className="w-full px-2 md:px-10 sm:flex-1 order-2 sm:order-1">
              <p>
                「英語が話せない人でも安心して海外旅行に行ける」
                をコンセプトに、かつ「旅の記録として残し」見て楽しむことも出来るアプリとして開発しています。
              </p>
              <p>
                今まで一緒に海外旅行をした友人は
                <span className="font-semibold">
                  「興味はあるけど英語が話せない」
                </span>
                を理由に、行ったことが無い人しかいませんでした。また、<span className="border-b border-dashed border-gray-500">検索市場でも同じように「行きたいけど英語が話せない」と悩んでいる人の一定の需要</span>もありました。
              </p>
              <p>
                私の経験を元に作成したアプリで、「私自身が利用する」かつ「海外旅行に興味はあるけど英語が話せない人」の悩みを解決するアプリとして開発しています。
              </p>
              <p></p>
            </div>
            <div className="m-auto pb-5 sm:pb-0 order-1 sm:order-2">
              <Image
                src="/image_webp/itinerary_thumbnail.webp"
                width={360}
                height={260}
                alt="エンジニアの仕事道具"
                className="border border-gray-300 rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className=" mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[300px] border border-gray-400 rounded bg-white shadow-lg">
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              アプリの機能の一部
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">複数の旅行のしおりを作成</li>
              <li className="mb-1">旅程表の作成</li>
              <li className="mb-1">メモの作成</li>
              <li className="mb-1">
                共有が可能(同行者やSNSに共有し認証なしで見れるページの自動作成)
              </li>
              <li className="mb-1">撮影した写真をアップロードし旅の記録へ</li>
            </ul>
          </div>
          <div className="mx-1 sm:mx-4 my-4 p-4 w-full max-w-[450px] min-h-[300px] border border-gray-400 rounded bg-white shadow-lg">
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              使用技術の一部
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">TypeScript</li>
              <li className="mb-1">Next.js(ServerAction)</li>
              <li className="mb-1">DB: PostgreSQL(Prisma)</li>
              <li className="mb-1">スタイル: TailwindCSS</li>
              <li className="mb-1">認証: NextAuth.js</li>
              <li className="mb-1">Supabase: (DB/storage)</li>
            </ul>
          </div>
        </div>
        <Modal
          modalType="button"
          src="/image_webp/itinerary_thumbnail.webp"
          alt="src"
          title="旅程表作成アプリ"
          items={[
            {
              image: "/image_webp/itinerary_thumbnail.webp",
              text: "旅程表作成アプリ",
            },
            {
              image: "/image_webp/itinerary_thumbnail_02.webp",
              text: "旅程が簡単に作成可能",
            },
            {
              image: "/image_webp/itinerary_thumbnail_03.webp",
              text: "行き方や海外旅行保険などメモが可能",
            },
            {
              image: "/image_webp/itinerary_thumbnail_01.webp",
              text: "複数の旅のしおりが作成可能",
            },
            {
              image: "/image_webp/itinerary_thumbnail_04.webp",
              text: "同行者やSNSで旅程表の共有が可能",
            },
          ]}
          technology="HTML/CSS(TailwindCSS), TypeScript, React, Next.Js14, Node.js, 認証:NextAuth.js, DB:Supabase"
          partOfThePackage="zod,FramerMotion,react-hot-toast,react-textarea-autosize,bcrypt,dompurify"
          overview="英語が話せない人でも安心して海外旅行に行けるのを目的の旅程表作成アプリです。旅行中に撮影した写真をアップロードして、思い出のしおりとして残せるようになっています。Vercelを利用しているので、集客用のブログはSSGではなく、あえて試してみる為にもISRで作成しました。"
          reasonForCreation="英語を話せない友人や家族と海外旅行に何度か行きました。しかし、英語話者がいません。そのため、私から誘ったのもありトラブルがあろうと全て対処できるように、色々とメモをメモ帳やエクセルなどに作成し印刷をしておくなど、準備をしています。ただ、時間がかかったのと友人に共有するのも面倒だった経緯があります。そのため、自分で利用したいと思うアプリを作成しました。"
          commitment="調べては実装しての日々。Udemyで学んだのがNext.js12までだったので、公式のドキュメントのデモで学んだり、途中でServer Actionを使用してみたくて作り治したり右方作法していました。仕事に就いた時のことを考えて、この場面ならコンポ―ネントにするのではやpropsで渡せるように変更など、問題なく動くけどコードの変更したりを何度もしました。今、思えばまずはある程度完成させてからと思いますが、反面で色々と学びが多かったです。また、最初に実装の計画を立てるのが重要だと経験できました。ただ、初めてのアプリだったので、あの時には何の実装の方針も立てれなかったはずです。"
          githubURL="https://github.com/haru0354/trip-abroad-itinerary"
          appURL="https://www.travel-memory-life.com/memorybook"
        />
      </AnimatedItem>
    </>
  );
};

export default WorkItinerary;
