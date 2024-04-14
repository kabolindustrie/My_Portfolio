import { useState } from "react";
import crossSvg from "../assets/images/hero/cross.svg";
import menuSvg from "../assets/images/hero/menu.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleNav() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div>
      <nav className="bg-white z-50 fixed top-0 w-full shadow">
        <div className="main-nav bg-white max-w-3xl mx-auto p-4 flex items-center justify-between flex-wrap md:p-5">
          <a
            href="#top"
            aria-label="Accueil du portfolio"
            className="text-lg lg:text-xl"
          >
            Amine{" "}
            <span className="font-bold">
              K <span className="text-rose-600">.</span>
            </span>
          </a>
          <button
            aria-controls="main-navlist"
            aria-expanded={menuOpen ? "true" : "false"}
            id="menu-toggle"
            onClick={toggleNav}
            className="cursor-pointer w-7 md:hidden"
          >
            <img
              width="28"
              height="28"
              src={menuOpen ? crossSvg : menuSvg}
              alt="ouvrir et fermer le menu"
            />
          </button>
          <ul
            id="main-navlist"
            className={`bg-white text-center w-full pt-4 text-gray-800 md:w-auto md:block md:mr-6 ${menuOpen ? '' : 'hidden'}`}
          >
            {/* <li className="block py-3 md:inline md:py-0 md:mr-6">
              <a
                href="#cv"
                className="text-sm uppercase font-semibold hover:text-rose-600"
              >
                CV
              </a>
            </li> */}
            <li className="block py-3 md:inline md:py-0 md:mr-6">
              <a
                href="#compétences"
                className="text-sm uppercase font-semibold hover:text-rose-600"
              >
                Compétences
              </a>
            </li>
            <li className="block py-3 md:inline md:py-0 md:mr-6">
              <a
                href="#projects"
                className="text-sm uppercase font-semibold hover:text-rose-600"
              >
                Projets
              </a>
            </li>
            <li className="block py-3 md:inline md:py-0 md:mr-6">
              <a
                href="#contact"
                className="text-sm uppercase font-semibold hover:text-rose-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
