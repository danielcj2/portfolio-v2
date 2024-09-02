import { useLenis } from "lenis/react";
import Logo from "../assets/icons/logo.svg?react";

const Header = () => {
  const lenis = useLenis();

  const NavLink = ({ link }) => {
    return (
      <a
        href={`/#${link}`}
        className="capitalize"
        onClick={() => lenis.scrollTo(`#${link}`)}
      >
        {link}
      </a>
    );
  };

  return (
    <div className="fixed flex w-full justify-between px-10 py-7">
      <a
        href="#hero"
        onClick={() => lenis.scrollTo("#hero")}
        className="h-auto w-[54px] cursor-pointer"
      >
        <Logo className="h-full w-full" />
      </a>
      <nav className="flex gap-3">
        <NavLink link="about" />
        <NavLink link="skills" />
        <NavLink link="work" />
        <NavLink link="contact" />
      </nav>
    </div>
  );
};

export default Header;
