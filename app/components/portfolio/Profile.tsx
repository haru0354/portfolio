import AnimatedItem from "../lib/AnimatedItem";

const Profile = () => {
  const ProfileLists = [
    {
      id: 1,
      title: "大学受験予定も家庭事業で就職の道へ",
      content: "高校最後の夏・・・家族の病気の関係で受験でなく就職をすることを決意。その後、就職先(食品関係の貿易会社)の内定を獲得",
    },
    {
      id: 2,
      title: "高校最後の秋ぐらいにアフィリエイトを開始",
      content: "就職先も決まり、働く日までの間に収入を得たいと思い、ブログやHPでアフィリエイトを開始。無料ブログやHPビルダーを使用し、htmlやcssを学びつつ収益を得ていく。",
    },
    {
      id: 3,
      title: "1年半ほど働いた会社を退職",
      content: "もともと営業と内勤の",
    },
    {
      id: 4,
      title: "賃貸の不動産会社へ就職",
      content: "個人相手の営業に興味があったので",
    },
    {
      id: 5,
      title: "仕事自体は楽しかったが退職(長期労働時間と低収入)",
      content: "深夜2時ぐらい帰宅の朝7時起きの毎日。",
    },
    {
      id: 6,
      title: "22",
      content: "33",
    },
    {
      id: 7,
      title: "Web広告業として個人事業主として開業",
      content: "33",
    },
  ];

  return (
    <section id="profile" className="bg-blue-50 pt-10 pb-20 w-full">
      <div className="max-w-[1050px] mx-auto">
        <h2 className="block w-full text-3xl text-center font-bold my-10 ">
          プロフィール
        </h2>
        <div className="border-l-8 ml-10 border-gray-700 relative">
          <ul className="mx-6">
            {ProfileLists.map((ProfileList) => (
              <AnimatedItem
                animation="fadeInRight"
                elementType="li"
                className="my-20 bg-gray-300 p-4 "
              >
                <h3 className="text-xl text-gray-800 font-semibold mb-4 pb-2 border-b border-dashed border-gray-700">
                  {ProfileList.title}
                </h3>
                <p>{ProfileList.content}</p>
                <img src="/down-arrow.png" alt="下矢印" className="absolute mt-[-64px] ml-[-64px]"/>
              </AnimatedItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
