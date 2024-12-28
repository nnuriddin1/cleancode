import { color } from "../utils/colors";
import { style } from "../utils/style";
import search from "../assets/Search.png";
import buy from "../assets/Buy.png";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav
      className={`flex items-center justify-between pr-5 pl-5 md:pr-20 md:pl-20 ${style.paddingTop}`}
    >
      <h1 className="font-bold text-[24px] md:text-[33px]">
        <span className="text-[#FFA75E]">E</span>Food
      </h1>
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </button>
      {/* Nav Links */}
      <ul
        className={`fixed inset-0 bg-white flex flex-col items-center gap-6 pt-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:static md:flex md:flex-row md:gap-10 md:pt-0 md:translate-x-0 text-[#363853] font-medium text-[18px]`}
      >
        <li onClick={toggleMenu}>
          <a href="#" className={`${color.orangeText}`}>
            Home
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#" className={`${color.orangeText}`}>
            Service
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#" className={`${color.orangeText}`}>
            Top cities
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#" className={`${color.orangeText}`}>
            Contract
          </a>
        </li>
        <li onClick={toggleMenu}>
          <img src={search} className={`${style.icon}`} alt="Search" />
        </li>
        <li onClick={toggleMenu}>
          <img src={buy} className={`${style.icon}`} alt="Buy" />
        </li>
        <li onClick={toggleMenu}>
          <button className={`${style.button}`}>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
