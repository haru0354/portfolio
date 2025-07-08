import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./header-parts/HamburgerMenu";
import HeaderMenu from "./header-parts/HeaderMenu";
import AnimatedItem from "../ui/AnimatedItem";

const Header = () => {
  return (
    <AnimatedItem elementType="header" animation="fadeInOpacity" className="fixed h-16 w-full border-b mb-16 bg-white z-10">
        <div className="flex justify-between items-center mx-auto h-16 mb-16 max-w-[1050px]">
          <Link href="/">
            <Image
              src="/image_webp/logo-portfolio.webp"
              width="200"
              height="48"
              alt="マイポートフォリオ(30代エンジニア未経験のポートフォリオ)"
              priority
            />
          </Link>
          <HeaderMenu ulClass="hidden sm:flex" />
          <HamburgerMenu />
        </div>
    </AnimatedItem>
  );
};

export default Header;
