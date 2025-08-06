"use client";

type HeaderMenuProps = {
  liClass?: string;
  ulClass?: string;
  closeMenu?: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  liClass,
  ulClass,
  closeMenu,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClick = (id: string) => {
    scrollToSection(id);
    if (closeMenu) {
      closeMenu();
    }
  };

  const items = [
    { id: "about", name: "About" },
    { id: "works", name: "Works" },
    { id: "skill", name: "Skills" },
    { id: "profile", name: "Profile" },
  ];

  return (
    <nav>
      <ul className={`${ulClass}`}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`${liClass} p-4 hover:bg-sky-400 hover:text-white cursor-pointer`}
            onClick={() => handleClick(item.id)}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
