import { useState } from "react"

import { HamburgerMenuO, HamburgerMenuC, SunFilledIcon, MoonFilledIcon } from "../globals/NavIcons";


const mobileMenu = (toggleTheme, theme) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="mobile-menu">
      <button className="mobile-menu-toggle" onClick={toggle}>
        <HamburgerMenuO/>
      </button>
      {isOpen && (
        <div className="mobile-menu-content" onClick={toggle}>
          <ul>
            <li>
              <button className="mobile-menu-toggle-close">
                <HamburgerMenuC />
              </button>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a onClick={toggleTheme}>
                {theme === "light" ? (
                  <MoonFilledIcon className="icon" size={30} />
                ) : (
                  <SunFilledIcon className="icon" size={30} />
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Navbar = ({ toggleTheme, theme }) => {
  const logo = "{SS}.";
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>{logo}</h1>
        </div>
        {mobileMenu(toggleTheme, theme)}
        {/* desktop menu */}
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a onClick={toggleTheme}>
              {theme === "light" ? (
                <SunFilledIcon className="icon" size={30} />
              ) : (
                <MoonFilledIcon className="icon" size={30} />
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
