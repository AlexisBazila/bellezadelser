import React, { useState, useEffect } from "react"; // ⬅️ agrega useEffect
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  // 👇 NUEVO: bloquea scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza por seguridad
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="navBar">
        {/* Menu Desktop */}
        <nav className="desktopNav">
          <Link to="/" className="logoHome">
            <img src={logo} alt="" /> <h3>Belleza del Ser</h3>
          </Link>

          <div className="menuDesktop">
            <ul className="menuDiv">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li className="menu-item has-submenu">
                <Link>Sesiones ▾</Link>
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
                <Link>Armonizaciones ▾</Link>
                <ul className="submenu">
                  <li>
                    <Link to="/Armonizaciones/activaciones">
                      Activaciones Energéticas
                    </Link>
                  </li>
                  <li>
                    <Link to="/Armonizaciones/ebooks">eBooks</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/sobre-mi">Sobre mí</Link>
              </li>
            </ul>
            <a href="https://bellezadelser.com/tienda/carrito">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </nav>

        {/* Menu movil */}
        <nav className="movilNav">
          <div className="hamburgerNav" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="fa-solid fa-xmark hamburgerIcon"></i>
            ) : (
              <i className="fa-solid fa-bars hamburgerIcon"></i>
            )}
          </div>

          <Link to="/" className="logoHome">
            <img src={logo} alt="" /> <h3>Belleza del Ser</h3>
          </Link>

          <a
            className="carrito"
            href="https://bellezadelser.com/tienda/carrito"
          >
            <i className="fa-solid fa-cart-shopping"></i>
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
              <label htmlFor="submenu-sesiones"> Sesiones ▾ </label>
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
              <label htmlFor="submenu-armonizaciones">Armonizaciones ▾</label>
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
