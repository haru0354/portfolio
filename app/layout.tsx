import type { Metadata } from "next";
import { notoSansJp } from "./utils/font";
import "./globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTopButton from "./components/ui/BackToTopButton";

export const metadata: Metadata = {
  title: {
    default: "「MY PORTFOLIO」30代エンジニア未経験のポートフォリオサイト",
    template: "%s | 「MY PORTFOLIO」",
  },
  description:
    "webエンジニアの自己制作アプリを掲載しています。主にフロントエンドで「Next.js」「React」「TypeScript」バックエンドで「Node.js」が使われたwebアプリを作成しています。30代エンジニア未経験のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <Header />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
