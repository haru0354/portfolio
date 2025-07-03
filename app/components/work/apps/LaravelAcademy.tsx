import AppContainer from "../AppContainer";
import AppDetail from "../AppDetail";
import Modal from "../../ui/Modal";

const LaravelAcademy = () => {
  return (
    <AppContainer>
      <AppDetail
        title="「レッスンアカデミー」- 4択/フラッシュカード 学習アプリ -"
        contents={[
          "「4択クイズ」と「フラッシュカード」機能を備えた「Laravel 12」で作成している「学習用Webアプリケーション」です。",
          "複数の4択クイズをまとめた、レッスンを作成することができます。また、作成したレッスンデータを元にフラッシュカードモードが生成されます。",
          "「電車での移動中」「待ち合わせ時間」「すき間時間の利用」",
          "私自身が「プログラミングの学習手段として利用する目的」として、作成をしました。",
        ]}
        src="/image_webp/laravel-academy-lesson-end.webp"
        alt="レッスンアカデミー"
        featureList={[
          "4択から選択して学習していく「レッスンモード」",
          "フラッシュカード（暗記カード）モード",
          "「Laravel Livewire」でページ遷移なく学習に集中",
          "レッスンのCRUDでフラッシュカードも自動生成",
          "解答時に「正誤判定」と「解説」表示",
          "レッスン終了時に間違えた問題を一覧表示",
          "ユーザー認証機能",
        ]}
        techStack={[
          "PHP",
          "Laravel 12",
          "Laravel Livewire（フロントエンド動作)",
          "Alpine.js（簡易的なフロントエンド動作）",
          "認証: Firebase",
          "DB: MySQL",
          "スタイル: Tailwind CSS",
        ]}
        imageRight={false}
      />
      <Modal
        modalType="button"
        title="レッスンアカデミーの詳細"
        firstImage={{
          src: "/image_webp/laravel-academy-lesson-end.webp",
          alt: "レッスンアカデミーのサムネイル",
        }}
        sliderItems={[
          {
            image: "/image_webp/laravel-academy-lesson-start.webp",
            text: "レッスンは4択から答えを選択していくモード",
          },
          {
            image: "/image_webp/laravel-academy-lesson-failed.webp",
            text: "解答後は「正誤判定」と「解説」の表示",
          },
          {
            image: "/image_webp/laravel-academy-lesson-end.webp",
            text: "レッスン終了時に間違えた問題の一覧を表示",
          },
          {
            image: "/image_webp/laravel-academy-flashcard-front.webp",
            text: "フラッシュカード表面はシンプルな画面設計",
          },
          {
            image: "/image_webp/laravel-academy-flashcard-back.webp",
            text: "フラッシュカード裏面は「解説」と「答え」",
          },
        ]}
        explanations={{
          technology:
            "HTML/CSS(TailwindCSS),PHP, Laravel 12, Laravel Livewire, 認証:Laravel Breeze, DB:mysql",
          overview:
            "自分で作成したアプリの公開をする場として作成をしたアプリ。",
          reasonForCreation:
            "私自信のエンジニアの学習手段の利用目的に、作成をしはじめました。「通勤時間」など、すき間時間を利用して「エンジニアの学修」を行えるようにしたいと思ったのが始まりです。また、個人的にPHP / Laravel の学習をしたので、アウトプット目的としても、作成を開始したアプリでもあります。",
          commitment:
            "Laravelのダッシュボードのデザインを使用したり、認証もBreezeをそのまま使用しているので、後々、変更などを考慮していきたいと思っています。Livewireは個人的にはNext.jsを利用している感覚で使えて、記述をしていて楽しかったです。",
        }}
        urls={{
          githubURL: "https://github.com/haru0354/laravel-4choice-academy.git",
        }}
      />
    </AppContainer>
  );
};

export default LaravelAcademy;
