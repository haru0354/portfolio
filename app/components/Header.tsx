"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed h-16 w-full border-b mb-16 bg-white z-10">
      <div className="flex justify-between items-center mx-auto h-16 mb-16 max-w-[1050px]">
        <Link href="/">
          <h1>
            <Image
              src="/logo-portfolio.png"
              alt="マイポートフォリオ(30代エンジニアのポートフォリオ)"
              width="200"
              height="48"
              priority
            />
          </h1>
        </Link>
        <ul className="flex">
          <li className="mx-4">
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              About
            </a>
          </li>
          <li className="mx-4">
            <a
              onClick={() => scrollToSection("works")}
              className="cursor-pointer"
            >
              Works
            </a>
          </li>
          <li className="mx-4">
            <a
              onClick={() => scrollToSection("skill")}
              className="cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li className="mx-4">
            <a
              onClick={() => scrollToSection("profile")}
              className="cursor-pointer"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
