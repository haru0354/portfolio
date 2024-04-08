import Image from "next/image";
import Link from "next/link";

const SideMenu = () => {
  const sideMenuLists = [
    {
      id: 1,
      name: "-TOP(profile)-",
      src: "/merlion.jpg",
      slug: "/",
      alt: "プロフィール",
    },
    {
      id: 2,
      name: "-skill-",
      src: "/merlion.jpg",
      slug: "/skill",
      alt: "スキル",
    },
    { id: 3, name: "-work-", src: "/merlion.jpg", slug: "/work", alt: "作品" },
  ];

  return (
    <div className="bg-gray-200 w-[220px] h-full fixed ">
      <ul>
        {sideMenuLists.map((sideMenuList) => {
          return (
            <Link href={sideMenuList.slug} key={sideMenuList.id}>
              <li className=" text-center p-4 hover:bg-blue-200">
                <Image
                  src={sideMenuList.src}
                  width={200}
                  height={180}
                  alt={sideMenuList.alt}
                  className="m-auto block"
                />
                <p className="mt-3">{sideMenuList.name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
