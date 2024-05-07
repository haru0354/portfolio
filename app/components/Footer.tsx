import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-500 py-2 w-full ">
        <ul className="text-xs text-center">
          <li className="mb-1 text-white">
            <Link href="/">プライバシーポリシー・免責事項</Link>
          </li>
          <li className="text-black">&copy;ポートフォリオサイト</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
