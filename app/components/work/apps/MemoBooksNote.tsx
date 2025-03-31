import AnimatedItem from "../../lib/AnimatedItem";
import AppDetail from "../AppDetail";
import Modal from "../../ui/Modal";

const MemoBooksNote = () => {
  return (
    <AnimatedItem
      elementType="div"
      animation="fadeInLeft"
      className="w-full max-w-[1050px] my-6 pb-14 border-b border-dashed border-gray-700"
    >
      <AppDetail
        title="「メモブックノート」本型メモアプリ"
        contents={[
          "「旅程表アプリと全て違った技術」で作られ、私自身の悩みを解決する為に作成始めたアプリで「エンジニアの学習」「働き始めた時を見据えて」「個人的な部分」の3つの目的の為に開発しています。",
          "他のメモアプリを利用していましたが、見たい位置をスクロールして探すのに時間がかかったり、見やすいように装飾したりと無駄な時間がかかっていました。",
          "個人的な悩みを解決できるアプリが見つからず。「時間の短縮」「見やすい」を目的に作成し、かつ、「働いた時も確認が出来るように」開発しています。",
        ]}
        src="/image_webp/memo_book_thumbnail_002.webp"
        alt="メモブック"
        featureList={[
          "複数の本の作成ができる",
          "チャプターごとに複数のメモを管理できる",
          "目次で何のメモがしてあるか即時に分かる",
          "目次で見たいメモにスクロールし即時確認",
          "基本モーダルで即時CRUDが可能",
        ]}
        techStack={[
          "JavaScript",
          "React",
          "Node.js (Express.js)",
          "DB: MongoDB",
          "スタイル: Emotion",
          "認証: Firebase",
          "状態管理: Redux/Toolkit",
        ]}
      />
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
        appURL="https://www.memo-book-note.com/"
      />
    </AnimatedItem>
  );
};

export default MemoBooksNote;
