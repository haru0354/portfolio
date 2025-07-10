# ポートフォリオサイトの概要
|ポートフォリオトップ| モーダルと画像スライダー |
|-------|-------|
| ![ポートフォリオトップ](/public/image_webp/portfolio-thumbnail-top-image.webp) | ![モーダルと画像スライダー](/public/image_webp/portfolio-thumbnail-modal-slider.webp)|

「Next.jsのSSG」にて作成されたシンプルなポートフォリオサイトです。

こったデザインよりも、シンプルながらアピールしたいことを考えて、配置などを構成しました。

ポートフォリオは必須だけど、「さらっとしか見ない採用担当の人事も多い」と見聞きしました。

そのため、「流し見だとしても見て欲しい場所は目に入る」ように、考えて構成をしています。

- ファーストビューにが画像でのプログラミング言語セット

- 手間かけて作ったアプリは目立つよう表示

- 学習目的でさっと作成したアプリは目立たないよう表示（但し複数のアプリを作成はアピール）

- 詳細な学習してきた技術はあらためてアピール

- モーダル・スライダーでHTML/CSSだけではないのをアピール

- アニメーションを各箇所で付与

少なくとも「複数の言語を学習してきた」　「複数のオリジナルアプリを作成している」点は認識して貰えるようにはなっているのではないかと思います。

下記URLへデプロイしています。

URL: https://www.haruengineer.com/

## 使用技術

- TypeScript
- Next.js
- Tailwind.CSS
- sharp(画像処理)

## 画像はwebpに変換・圧縮処理

画像ファイルはsharpを使用し、「webp変換」「圧縮」を行っています。

```
「画像のWEBP変換・圧縮コマンド」

- npm run image (圧縮専用コマンド)
- npm run dev
- npm run build
```

publicに配置した画像が、同フォルダ内の「image_webp」に、上記コマンドで新たに作られます。

変換された画像のファイル名はjsonに書き込み、一度変換した画像はスキップする仕様になっています。

詳しくは「scripts」フォルダを参照してください。

## サムネイル画像

|ポートフォリオトップ| workセクション |
|-------|-------|
| ![ポートフォリオトップ](/public/image_webp/portfolio-thumbnail-top-image.webp) | ![workセクション](/public/image_webp/portfolio-thumbnail-main-work.webp) |

|モーダルと画像スライダー| スキルセットの詳細 |
|-------|-------|
| ![モーダルと画像スライダー](/public/image_webp/portfolio-thumbnail-modal-slider.webp) | ![スキルセットの詳細](/public/image_webp/portfolio-thumbnail-skill.webp) |

## セットアップ手順

1. リポジトリをクローン

```
git clone https://github.com/haru0354/portfolio.git

cd portfolio
```

2. 依存関係をインストール

```
npm install
```

3. サーバーを起動

```
npm run dev
```

### コマンドの概要

| コマンド        | 説明                                                 |
| --------------- | ---------------------------------------------------- |
| `npm install`   | フロントエンドの依存関係をインストール               |
| `npm run dev`   | フロントエンドのサーバー起動        |
| `npm run image` | public フォルダの画像の圧縮と拡張子を変更（webp へ） |


## 備考

- 一部の画像はフリー素材の規約により、アップロードをしていません。
