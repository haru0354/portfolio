import Image from "next/image";

import Section from "./Section";
import AnimatedItem from "../ui/AnimatedItem";

const Profile = () => {
  const ProfileLists = [
    {
      id: 1,
      title: "高校生の時にWEBサイト・blog運営により収入を得る",
      content:
        "高校卒業後の就職先も決まり、卒業までの間に収入を得たいと思い「HPビルダー」や「ブログサービス」にてホームページの運営を行う。最大で月30万円ほどの収入となる。その後、就職後は作業はほとんど行わなかったため、1年後ぐらいにはほぼWEBサービスよりの収入は無くなる。",
    },
    {
      id: 2,
      title: "いくつかの仕事に就く",
      content:
        "高校卒業後は食品関係の貿易会社の内勤として就職し、その後に、不動産営業・イベント設営・警備会社とフリータ期間あり。",
    },
    {
      id: 3,
      title: "WEB運営業として個人事業主として開業",
      content:
        "28歳の時に2年という期限を決め、WEBサイトの運営を始める。約1年半後、収入が大きくなり、個人事業主として開業届けを出し、WEB運営業としての生計を立てていくこととなる。（wordPressを使ったWEBサイトを運営し広告収入による生計「アフィリエイト・クリック型広告」）",
    },
    {
      id: 4,
      title: "廃業",
      content:
        "収入もなくなり2024年に個人事業主としてWEB運営業の廃業を行う。もともと、wordPressを使用してweb運営中に知識無しながらPHPのテンプレートやCSSを編集していて興味がありました。そのため、年齢的に厳しいとは思うものの、エンジニアに興味が強くあったため、学習を開始。",
    },
    {
      id: 5,
      title: "エンジニアの勉強開始（2024年初め）",
      content:
        "JavaScript,React,TypeScript,Next.jsとフロントエンドの学習をしていき、小さいアプリをアウトプットとして作成しつつ、自身初となる「旅程表アプリ」を完成させる。その後、いくつかアプリを作成した後、バックエンドの学習としてNode.js、Expressのアプリ作成後に、PHP・Laravelの学習を行い「レッスンアカデミー」の作成を行う。",
    },
    {
      id: 6,
      title: "WEBエンジニアとして就職活動中",
      content:
        "1年学習して2024年12月より就職活動予定でしたが、諸事情があり2025年7月より活動開始。フロントエンドの学習時間が長いため、まずはフロントエンドでの求人を探し始めてます。ただ、バックエンドも学習してみて、データの送受信が反映されたり、ロジックを考えたりと、楽しく学習・アプリ作成は出来たので、後々はバックエンドも含めて求人を探して行く予定です。",
    },
  ];

  return (
    <Section id="profile" title="プロフィール">
      <div className="border-l-8 ml-10 border-gray-700">
        <ul className="mx-6">
          {ProfileLists.map((ProfileList) => (
            <AnimatedItem
              animation="fadeInRight"
              elementType="li"
              className="relative my-20 p-4 border border-gray-300 bg-gradient-to-br from-indigo-50 to-sky-100"
              key={ProfileList.id}
            >
              <Image
                src="/image_webp/down-arrow.webp"
                width={40}
                height={40}
                alt="下矢印"
                className="absolute inset-0 my-auto ml-[-48px]"
              />
              <h3 className="mb-4 pb-2 text-xl font-semibold border-b border-dashed text-gray-800 border-gray-700">
                {ProfileList.title}
              </h3>
              <p>{ProfileList.content}</p>
            </AnimatedItem>
          ))}
        </ul>
      </div>
      <AnimatedItem animation="fadeInDown" elementType="div">
        <Image
          src="/image_webp/footer-image-portfolio01.webp"
          width={801}
          height={320}
          alt="エンジニアの仕事中の画像"
          className="mx-auto"
        />
      </AnimatedItem>
    </Section>
  );
};

export default Profile;
