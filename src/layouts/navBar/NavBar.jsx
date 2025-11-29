import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev === false) {
        return true;
      }
      // si está abierto, ciérralo y limpiar submenus
      setOpenSubmenu(null);
      return false;
    });
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  // abrir submenu: si ya está abierto, no lo cerramos (evita doble tap)
  const openOnlySubmenu = (menuName, e) => {
    // evitar que el click burbujee al document
    if (e && e.stopPropagation) e.stopPropagation();
    if (openSubmenu === menuName) return; // ya abierto -> no hacer nada
    setOpenSubmenu(menuName);
  };

  // bloquear scroll cuando menu abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // cerrar al click/touch fuera (usa pointerdown para ser más fiable en móviles)
  useEffect(() => {
    const handlePointerDownOutside = (e) => {
      if (!menuOpen) return;

      const menuEl = menuRef.current;
      const burgerEl = burgerRef.current;

      if (
        menuEl &&
        !menuEl.contains(e.target) &&
        burgerEl &&
        !burgerEl.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDownOutside);
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
                    <Link to="/sesiones/acompañamiento">Acompañamiento</Link>
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
          <div
            className="hamburgerNav"
            onClick={toggleMenu}
            ref={burgerRef}
            aria-expanded={menuOpen}
          >
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
      <div
        className={`movilNavMenu ${menuOpen ? "active" : ""}`}
        ref={menuRef}
        role="dialog"
        aria-hidden={!menuOpen}
      >
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
              onClick={(e) => openOnlySubmenu("sesiones", e)}
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
                  to="/sesiones/acompañamiento"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Acompañamiento
                </Link>
              </li>
            </ul>
          </li>

          {/* Armonizaciones */}
          <li className="menu-item has-submenu">
            <div
              className="submenu-toggle"
              onClick={(e) => openOnlySubmenu("armonizaciones", e)}
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
                  to="/Armonizaciones/activaciones"
                  onClick={closeMenu}
                  className="submenuLink"
                >
                  Activaciones Energéticas
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
