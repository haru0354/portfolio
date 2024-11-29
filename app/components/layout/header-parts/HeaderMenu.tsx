"use client"

type HeaderMenuProps = {
  liClass?: string;
  ulClass?: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ liClass, ulClass }) => {
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
    <nav>
      <ul className={`${ulClass}`}>
        <li
          className={`${liClass} p-4 hover:bg-sky-400 hover:text-white cursor-pointer`}
          onClick={() => scrollToSection("about")}
        >
          <span>About</span>
        </li>
        <li
          className={`${liClass} p-4 hover:bg-sky-400 hover:text-white cursor-pointer`}
          onClick={() => scrollToSection("works")}
        >
          <span>Works</span>
        </li>
        <li
          className={`${liClass} p-4 hover:bg-sky-400 hover:text-white cursor-pointer`}
          onClick={() => scrollToSection("skill")}
        >
          <span>Skills</span>
        </li>
        <li
          className={`${liClass} p-4 hover:bg-sky-400 hover:text-white cursor-pointer`}
          onClick={() => scrollToSection("profile")}
        >
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
