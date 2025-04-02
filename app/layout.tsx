import type { Metadata } from "next";
import { notoSansJp } from "./utils/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "「MY PORTFOLIO」30代エンジニア未経験のポートフォリオサイト",
  description: "webエンジニアの自己制作アプリを掲載しています。主にフロントエンドで「Next.js」「React」「TypeScript」バックエンドで「Node.js」が使われたwebアプリを作成しています。30代エンジニア未経験のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
