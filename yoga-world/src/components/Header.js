import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className="container">
        <h1>Yoga World 🧘🏻‍♀️</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === "#home" ? "active" : ""}
                onClick={() => handleNavClick("#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "#about" ? "active" : ""}
                onClick={() => handleNavClick("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className={activeLink === "#articles" ? "active" : ""}
                onClick={() => handleNavClick("#articles")}
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "#contact" ? "active" : ""}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#api-data"
                className={activeLink === "#api-data" ? "active" : ""}
                onClick={() => handleNavClick("#api-data")}
              >
                API Data
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
