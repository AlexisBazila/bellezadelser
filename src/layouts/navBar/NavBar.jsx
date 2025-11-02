import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  return (
    <>
      <div className="navBar">
        {/* Menu Desktop */}
        <nav className="desktopNav">
          <Link to="/" className="logoHome">
            <img src={logo} alt="" /> <strong>Belleza del Ser</strong>
          </Link>

          <ul className="menuDiv">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="menu-item has-submenu">
              <Link>
                Sesiones <FaAngleDown />
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/sesiones/reiki">Reiki</Link>
                </li>
                <li>
                  <Link to="/sesiones/registros-akashicos">
                    Registros Akáshicos
                  </Link>
                </li>
                <li>
                  <Link to="/sesiones/coaching">Coaching</Link>
                </li>
              </ul>
            </li>

            <li className="menu-item has-submenu">
              <Link>
                Armonizaciones <FaAngleDown />
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/Armonizaciones/capsulas">Cápsulas</Link>
                </li>
                <li>
                  <Link to="/Armonizaciones/ebooks">eBooks</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/sobre-mi">Sobre mí</Link>
            </li>

            <li>
              <a href="https://institutovalencia.com.ar/tienda/carrito/">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu movil */}
        <nav className="movilNav">
          <div className="hamburgerNav" onClick={toggleMenu}>
            {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </div>

          <Link to="/" className="logoHome">
            <img src={logo} alt="" /> <strong>Belleza del Ser</strong>
          </Link>

          <a
            className="carrito"
            href="https://institutovalencia.com.ar/tienda/carrito/"
          >
            <AiOutlineShoppingCart />
          </a>
        </nav>
      </div>

      {/* Menu responsivo */}
      <div className={`movilNavMenu ${menuOpen ? "active" : ""}`}>
        <ul className="columnMenuDiv">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* Sesiones */}
          <li className="menu-item has-submenu">
            <div
              className="submenu-toggle"
              onClick={() => toggleSubmenu("sesiones")}
            >
              Sesiones{" "}
              <FaAngleDown
                className={`arrow ${
                  openSubmenu === "sesiones" ? "open" : "close"
                }`}
              />
            </div>

            <ul
              className={`submenu ${
                openSubmenu === "sesiones" ? "open" : "close"
              }`}
            >
              <li>
                <Link
                  to="/sesiones/reiki"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Reiki
                </Link>
              </li>
              <li>
                <Link
                  to="/sesiones/registros-akashicos"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Registros Akáshicos
                </Link>
              </li>
              <li>
                <Link
                  to="/sesiones/coaching"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Coaching
                </Link>
              </li>
            </ul>
          </li>

          {/* Armonizaciones */}
          <li className="menu-item has-submenu">
            <div
              className="submenu-toggle"
              onClick={() => toggleSubmenu("armonizaciones")}
            >
              Armonizaciones{" "}
              <FaAngleDown
                className={`arrow ${
                  openSubmenu === "armonizaciones" ? "open" : "close"
                }`}
              />
            </div>
            <ul
              className={`submenu ${
                openSubmenu === "armonizaciones" ? "open" : "close"
              }`}
            >
              <li>
                <Link
                  to="/Armonizaciones/capsulas"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Cápsulas
                </Link>
              </li>
              <li>
                <Link
                  to="/Armonizaciones/ebooks"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  eBooks
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/sobre-mi" onClick={closeMenu}>
              Sobre mí
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
