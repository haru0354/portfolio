import Image from "next/image";
import AnimatedItem from "../ui/AnimatedItem";

const Profile = () => {
  const ProfileLists = [
    {
      id: 1,
      title: "大学受験予定も家庭の事情で就職の道へ",
      content:
        "予備校へ通っていたものの、高校最後の夏に家族の病気の関係で受験でなく就職をすることを決意。その後、食品関係の貿易会社の内定を獲得",
    },
    {
      id: 2,
      title:
        "高校最後の秋ぐらいに「HPビルダー」や「ブログサービス」を利用しアフィリエイトを開始",
      content:
        "就職先も決まり、就労日までの間に収入を得たいと思い、ブログやHPを作成しはじめる。htmlやcssはHPビルダーでの作成やデザインを少しいじるのに学びつつ収益を得ていく。数千円でもと始めたものの、毎月数十万円も収入があり、もっと早く初めていれば受験の道もあったのにと後悔。",
    },
    {
      id: 3,
      title: "1年半ほど働いた会社を退職",
      content:
        "内勤の仕事を分かるようになってから、営業へとのことで就職。途中で「PCにちょっと詳しい=何でもできるの周りの認識」により、「excelでの見積書やチラシの作成」・「外部の人と協力し通販サイトの立ち上げに関するコンテンツ制作」など、他の人の内勤業務にプラスして自分専用の仕事がどんどん作られる。営業部長から営業にとの話はあるものの、現状移動は難しくこのままだなと考え始める。だんだんと、働いていく内に営業への興味が大きくなり退職をする。",
    },
    {
      id: 4,
      title: "賃貸の不動産会社へ就職",
      content: "個人相手の営業に興味があったので賃貸の不動産会社へ転職。",
    },
    {
      id: 5,
      title:
        "長期労働時間(深夜1時30分自宅到着の6時起き)・低収入(手取り15万)を理由に退職",
      content:
        "仕事は楽しかったので職場近くへ引っ越すものの、長く続けてもと思い退職。営業1人で普通の人の3人分を売り上げる人達のみで立ち上げた会社だったので、もう少し頑張って勉強をすれば良かったとも思う。(ただ今でもよほど疲れていないと、深夜3時ぐらいまで眠れない、メリット・デメリットを取得)",
    },
    {
      id: 6,
      title: "アルバイト(人生で最も良くなかった期間)",
      content:
        "イベント警備(国際会議・コンサート・展示会・撮影など様々なイベント)の仕事に就く。次の仕事までの繋ぎとして就いたのが間違えだった。イベントにより業務内容も都度変わり、働く場所も毎回違い、なんだかんだ楽しめる部分もあり長く続けてしまった。",
    },
    {
      id: 7,
      title: "Web広告業として個人事業主として開業",
      content:
        "高校生の時に行ったwebサイトを作っていたのは、楽しかったのと・ずっと挑戦してみたいと思っていたので、アルバイトを止め開始する。1年ほど経って収入が大きくなったので、個人事業主として開業。(高校生の時にはじめたのは就職してからも1年ほど収入はあったが、副業として続けはせず辞めた)",
    },
    {
      id: 8,
      title: "エンジニアに興味を持つ",
      content:
        "コンテンツの作成の部分は微妙なものの、サイトの構成やどう利益を上げるかなど考えたり、デザインなどをいじっているのは楽しかった。そのため、エンジニアの仕事に就きたいなと考えるようになる。",
    },
    {
      id: 9,
      title: "続けられるか学習",
      content:
        "売り上げも無くなり転職をしようと考える。どうせならエンジニアに挑戦したいと思い、試しに続けられるか学習して見るも、ひたすら楽しむことができたので仕事にしたいと思う。",
    },
    {
      id: 10,
      title: "現在に至る",
      content:
        "エンジニアになりたいと学習したのを除けば、HTMLやCSSを少しいじってwordpressを使いサイト作成やSEOの知識だけ。36歳での未経験のエンジニア志望。色々調べても現実的に考えて難しい・・・。幸いすぐに生活は困らないものの、貯金が減っていくのは悲しいので、厳しそうなら他に働きながら、あきらめられるまで続けるだけ。",
    },
  ];

  return (
    <section id="profile" className="bg-blue-50 py-4 sm:pt-10 sm:pb-20 w-full overflow-x-hidden">
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          プロフィール
        </h2>
        <div className="border-l-8 ml-10 border-gray-700">
          <ul className="mx-6">
            {ProfileLists.map((ProfileList) => (
              <AnimatedItem
                animation="fadeInRight"
                elementType="li"
                className="my-20 bg-gray-300 p-4 relative"
                key={ProfileList.id}
              >
                <Image
                  src="/image_webp/down-arrow.webp"
                  width={40}
                  height={40}
                  alt="下矢印"
                  className="absolute inset-0 my-auto ml-[-48px]"
                />
                <h3 className="text-xl text-gray-800 font-semibold mb-4 pb-2 border-b border-dashed border-gray-700">
                  {ProfileList.title}
                </h3>
                <p>{ProfileList.content}</p>
              </AnimatedItem>
            ))}
          </ul>
        </div>
        <Image
          src="/image_webp/footer-image-portfolio01.webp"
          width={801}
          height={320}
          alt="エンジニアの仕事中の画像"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Profile;
