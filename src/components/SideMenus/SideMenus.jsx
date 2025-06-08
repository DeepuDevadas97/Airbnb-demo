import { useState, useRef, useEffect } from "react";
import Hamburger from "../../assets/icons/Hamburger";
import Help from "../../assets/icons/Help";
import HomeIcon from "../../assets/icons/HomeIcon";

const SideMenus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className="bg-transparent border-0 outline-0 focus:ring-0 cursor-pointer"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleMenu}
      >
        <div className="w-10 h-10 bg-[#f2f2f2] hover:bg-gray-200 rounded-full duration-300 flex justify-center items-center">
          <Hamburger />
        </div>
      </button>

      <div
        className={`
          absolute right-0 mt-[19px] z-10 w-[280px] origin-top-right bg-white ring-0 focus:outline-none
          transform transition-all duration-200 shadow-xl rounded-[12px] px-5 sidemenu-card
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="py-1" role="none">
          <nav>
            <ul>
              <li className="py-2 border-b border-gray-200 max-lg:block hidden">
                <a
                  href="#"
                  className="block text-sm text-black font-medium py-2 hover:bg-gray-100 duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-sm text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                  Experiences
                </a>
                <a
                  href="#"
                  className="block text-sm text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                  Services
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                  <Help />
                  <span>Help Centre</span>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a
                  href="#"
                  className="flex items-center justify-between gap-4 text-sm text-black font-normal py-1 hover:bg-gray-100 duration-300"
                >
                  <div>
                    <p className="font-medium mb-1">Become a host</p>
                    <p className="text-[12px] leading-4 text-gray">It's easy to start hosting and earn extra income.</p>
                  </div>
                  <div><HomeIcon/></div>
                </a>
              </li>
              <li className="py-2 border-b border-gray-200">
                <a
                  href="#"
                  className="text-sm block text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                 Refer a host
                </a>
                 <a
                  href="#"
                  className="text-sm block text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                 Find a co-host
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-sm block text-black font-normal py-2 hover:bg-gray-100 duration-300"
                >
                 Log in or sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideMenus;
