import Image from "next/image";
import AnimatedItem from "../lib/AnimatedItem";
import Modal from "../Modal";

const WorkBooksMemo = () => {
  return (
    <>
      <AnimatedItem
        elementType="div"
        animation="fadeInLeft"
        className="w-full max-w-[1050px] my-6 pb-14 border-b border-dashed border-gray-700"
      >
        <div className="mx-auto py-4 my-10">
          <h3 className="block w-full text-3xl text-center font-bold my-10 px-2 leading-relaxed">
          「メモブックノート」本型メモアプリ
          </h3>
          <div className="w-full flex flex-col sm:flex-row">
            <div className="w-full px-2 sm:px-10 sm:flex-1 order-2 sm:order-2">
              <p>
              「旅程表アプリと全て違った技術」で作られ、私自身の悩みを解決する為に作成始めたアプリで「エンジニアの学習」「働き始めた時を見据えて」「個人的な部分」の3つの目的の為に開発しています。
              </p>
              <p>
                他のメモアプリを利用していましたが、見たい位置をスクロールして探すのに時間がかかったり、見やすいように装飾したりと無駄な時間がかかっていました。
              </p>
              <p>
                個人的な悩みを解決できるアプリが見つからず。「時間の短縮」「見やすい」を目的に作成し、かつ、「働いた時も確認が出来るように」開発しています。
              </p>
            </div>
            <div className="m-auto pb-5 sm:pb-0 order-1 sm:order-1">
              <Image
                src="/image_webp/memo_book_thumbnail_002.webp"
                width={360}
                height={220}
                alt="メモブック"
                className="border border-gray-300 rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full max-w-[450px] min-h-[365px] mx-1 sm:mx-4 my-4 p-4 border border-gray-400 rounded bg-white shadow-lg">
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              アプリの機能の一部
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">複数の本の作成ができる</li>
              <li className="mb-1">チャプターごとに複数のメモを管理できる</li>
              <li className="mb-1">目次で何のメモがしてあるか即時に分かる</li>
              <li className="mb-1">目次で見たいメモにスクロールし即時確認</li>
              <li className="mb-1">基本モーダルで即時CRUDが可能</li>
            </ul>
          </div>
          <div className="w-full max-w-[450px] min-h-[365px] mx-1 sm:mx-4 my-4 p-4 border border-gray-400 rounded bg-white shadow-lg">
            <h3 className="text-center border-b border-dashed pb-2 border-gray-500">
              使用技術の一部
            </h3>
            <ul className="list-disc mx-8 my-8">
              <li className="mb-1">JavaScript</li>
              <li className="mb-1">React</li>
              <li className="mb-1">Node.Js(Express.js)</li>
              <li className="mb-1">DB: MongoDB</li>
              <li className="mb-1">スタイル: Emotion</li>
              <li className="mb-1">認証: Firebase</li>
              <li className="mb-1">状態管理： Redux/Toolkit</li>
            </ul>
          </div>
        </div>
        <Modal
          modalType="button"
          src="/image_webp/itinerary_thumbnail.webp"
          alt="src"
          title="本型メモアプリ"
          items={[
            {
              image: "/image_webp/memo_book_thumbnail_01.webp",
              text: "本型メモアプリ",
            },
            {
              image: "/image_webp/memo-book-note-chapter.webp",
              text: "チャプター事にメモの管理が可能",
            },
            {
              image: "/image_webp/memo-book-view.webp",
              text: "見たいメモを即時閲覧",
            },
            {
              image: "/image_webp/itinerary_thumbnail_05.webp",
              text: "複数の本が登録可能",
            },
          ]}
          technology="HTML/CSS(Emotion), JavaScript, React, Node.js(Express,js), 認証:Firebase, DB:MongoDB, 状態管理:Redux/Toolkit"
          partOfThePackage="react-slick, zod, react-hook-form, axios, express-validator, mongoose, "
          overview="旅程表アプリと全て違った技術で作成したアプリ。「私自身のエンジニア学習」「働き始めた時を見据えて」の為に作成し始めたアプリで、かつ自己学習の為でもあるのでバックエンドも実装したアプリ。"
          reasonForCreation="他のメモアプリを使用し、エンジニアの学習をしている時にメモを取っていたが、個人的に使いづらかった部分がありました。「メモの記述位置を探してスクロール」「見やすいように装飾」など無駄だと感じる手間がかかりました。また、エンジニアとして働き始めた時に、メモを見たいのもあったので、自分のPCで作成し、仕事用のPCで閲覧する為にも作成しました。"
          commitment="使ったことがない技術でのアプリ作成をすることで色々な学びがありました。また、プログラミングへの理解度が上がってるのを実感することができました。状態管理のReduxは学習時には難しいなと思ったものの、改めて学んでみるとすんなりと理解ができる。また、バックエンドのExpressも学んでみても、すんなりと理解がしやすく、フロントとバックの仕組みもより分かりました。「リレーショナルDB」でなく「ドキュメント型DB」、「TypeScript」でなく「JavaScript」、「Next.js」でなく「React」、「Firebase」「Emotion」...。自分でこれらの技術で作成してみて、より便利な点や面倒な点など、これらの違いが分かることができたと思います。"
          githubURL="https://github.com/haru0354/memo-books-mern"
          appURL="https://"
        />
      </AnimatedItem>
    </>
  );
};

export default WorkBooksMemo;
