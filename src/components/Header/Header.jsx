

import { useState, useEffect } from "react";
import Logo from "../../assets/icons/Logo";
import WebIcon from "../../assets/icons/WebIcon";
import SideMenus from "../SideMenus/SideMenus";

const navItems = [
  { id: "homes", label: "Homes" },
  { id: "experiences", label: "Experiences" },
  { id: "services", label: "Services" },
];

const Header = () => {
  const [active, setActive] = useState("homes");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-[0_4px_14px_rgba(0,0,0,0.1)] py-4.5 xl:py-3.5" : "py-4.5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="w-full">
          <div className="logo-main max-w-[102px]">
            <Logo />
          </div>
        </div>
        <nav className="primary-navs max-lg:hidden w-full flex justify-center">
          <ul className="flex items-center gap-x-10 text-md text-gray font-normal">
            {navItems.map((item) => (
              <li key={item.id} className="hover:text-black duration-300">
                <a
                  href="#"
                  className={item.id === active ? "text-black" : ""}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="menu-navs w-full flex justify-end">
          <ul className="flex items-center gap-x-4">
            <li className="max-sm:hidden">
              <a
                href="#"
                className="hover:bg-[#f2f2f2] rounded-[40px] inline-block py-2 px-4 duration-300 text-md font-normal"
              >
                Become a host
              </a>
            </li>
            <li>
              <a href="#">
                <div className="w-10 h-10 bg-[#f2f2f2] hover:bg-gray-200 duration-300 rounded-full flex justify-center items-center">
                  <WebIcon />
                </div>
              </a>
            </li>
            <li>
              <SideMenus/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

