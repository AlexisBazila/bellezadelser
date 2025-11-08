import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (menuName) =>
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);

  return (
    <header className="header-default">
      <nav className="navBar">
        {/* HAMBURGUESA */}
        <div className="hamburgerNav" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="hamburgerIcon"
          />
        </div>

        {/* LOGO */}
        <Link to="/" className="logoHome">
          <img src={logo} alt="Logo" />
          <h3>
            <strong>Belleza del Ser</strong>
          </h3>
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="menuDesktop">
          <ul className={`menuDiv ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="menu-item">
              <span onClick={() => toggleSubmenu("sesiones")}>
                Sesiones <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <ul
                className={`submenu ${
                  openSubmenu === "sesiones" ? "open" : ""
                }`}
              >
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

            <li className="menu-item">
              <span onClick={() => toggleSubmenu("armonizaciones")}>
                Armonizaciones <FontAwesomeIcon icon={faAngleDown} />
              </span>
              <ul
                className={`submenu ${
                  openSubmenu === "armonizaciones" ? "open" : ""
                }`}
              >
                <li>
                  <Link to="/armonizaciones/capsulas">Cápsulas</Link>
                </li>
                <li>
                  <Link to="/armonizaciones/ebooks">eBooks</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/sobre-mi">Sobre mí</Link>
            </li>
          </ul>

          {/* CARRITO */}
          <a
            href="https://bellezadelser.com/tienda/carrito/"
            className="cart-icon"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
