import { useLenis } from "lenis/react";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "../assets/icons/logo.svg?react";

const Header = () => {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 150 ? setScrolled(true) : setScrolled(false);
  });

  /** Takes a `link` prop which is used to create a link that smoothly scrolls
   * to the corresponding section when clicked. **/
  const NavLink = ({ link }) => {
    let hashed = `#${link}`;
    return (
      <a
        href={hashed}
        className="text-sm uppercase"
        onClick={() => lenis.scrollTo(hashed)}
      >
        {link}
      </a>
    );
  };

  return (
    <div className="fixed flex w-full items-start justify-between px-10 py-7">
      <a
        href="#hero"
        onClick={() => lenis.scrollTo("#hero")}
        className="h-auto w-[54px] cursor-pointer"
      >
        <Logo className="h-full w-full" />
      </a>
      <nav
        className={`flex flex-col gap-2 text-right ${scrolled ? "bg-bg-dark" : ""} mr-[-0.75rem] rounded-lg p-3`}
      >
        <NavLink link="about" />
        <NavLink link="skills" />
        <NavLink link="work" />
        <NavLink link="contact" />
      </nav>
    </div>
  );
};

export default Header;
