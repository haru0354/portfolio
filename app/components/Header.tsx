"use client";

import Link from "next/link";
import HamburgerMenu from "./portfolio/HamburgerMenu";
import HeaderMenu from "./portfolio/HeaderMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed h-16 w-full border-b mb-16 bg-white z-10">
      <div className="flex justify-between items-center mx-auto h-16 mb-16 max-w-[1050px]">
        <Link href="/">
          <h1>
            <Image
              src="/image_webp/logo-portfolio.webp"
              width="200"
              height="48"
              alt="マイポートフォリオ(30代エンジニア未経験のポートフォリオ)"
              priority
            />
          </h1>
        </Link>
        <HeaderMenu liClass="mx-4" ulClass="hidden sm:flex" />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
