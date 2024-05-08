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
    <header className="max-w-[1050px] mx-auto">
      <div className="flex justify-between items-center mx-2 h-16">
        <Link href="/">
          <h1>
            <Image
              src="/logo.png"
              alt="ポートフォリオサイトのロゴ"
              width="220"
              height="52"
              priority
              className="w-[160px] h-auto md:w-[220px]"
            />
          </h1>
        </Link>
        <ul className="flex">
          <li className="mx-4">
            <a onClick={() => scrollToSection("about")} className="cursor-pointer">
              About
            </a>
          </li>
          <li className="mx-4">
            {" "}
            <a onClick={() => scrollToSection("works")} className="cursor-pointer">
              Works
            </a>
          </li>
          <li className="mx-4">
            <a onClick={() => scrollToSection("skill")} className="cursor-pointer">
              Skill
            </a>
          </li>
          <li className="mx-4">
            {" "}
            <a onClick={() => scrollToSection("profile")} className="cursor-pointer">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
