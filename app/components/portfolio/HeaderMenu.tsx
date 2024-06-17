type HeaderMenuProps = {
  navClass?: string;
  liClass?: string;
  ulClass?: string;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  navClass,
  liClass,
  ulClass,
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

  return (
    <nav>
      <ul className={`${ulClass}`}>
        <a className="cursor-pointer" onClick={() => scrollToSection("about")}>
          <li
            className={`${liClass} p-4 hover:bg-sky-400 hover:text-white`}
          >
            About
          </li>
        </a>
        <a onClick={() => scrollToSection("works")} className="cursor-pointer">
          <li className={`${liClass} p-4 hover:bg-sky-400 hover:text-white`}>
            Works
          </li>
        </a>
        <a onClick={() => scrollToSection("skill")} className="cursor-pointer">
          <li className={`${liClass} p-4 hover:bg-sky-400 hover:text-white`}>
            Skills
          </li>
        </a>
        <a
          onClick={() => scrollToSection("profile")}
          className="cursor-pointer"
        >
          <li className={`${liClass} p-4 hover:bg-sky-400 hover:text-white`}>
            Profile
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
