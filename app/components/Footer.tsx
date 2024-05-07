import Link from "next/link"

const Footer = () => {
  return (
    <footer>
    <div className="bg-blue-500 min-h-[68px] w-full flex flex-grow bottom-0 items-end justify-center">
      <ul className="text-xs text-center mb-3">
        <li className="mb-2 text-white">
          <Link href="/">プライバシーポリシー・免責事項</Link>
        </li>
        <li className="text-black">
          &copy;ポートフォリオサイト
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer