type HeaderMenuProps = {
  navClass?: string;
  liClass?: string;
  ulClass?: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ navClass, liClass, ulClass }) => {
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
        <li className={`${liClass}`}>
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            About
          </a>
        </li>
        <li className={`${liClass}`}>
          <a
            onClick={() => scrollToSection("works")}
            className="cursor-pointer"
          >
            Works
          </a>
        </li>
        <li className={`${liClass}`}>
          <a
            onClick={() => scrollToSection("skill")}
            className="cursor-pointer"
          >
            Skills
          </a>
        </li>
        <li className={`${liClass}`}>
          <a
            onClick={() => scrollToSection("profile")}
            className="cursor-pointer"
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
