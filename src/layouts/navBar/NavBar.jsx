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
      if (!prev) return true;
      setOpenSubmenu(null);
      return false;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(null);
  };

  const openOnlySubmenu = (menuName, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (openSubmenu === menuName) return;
    setOpenSubmenu(menuName);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  useEffect(() => {
    const handlePointerDownOutside = (e) => {
      if (!menuOpen) return;

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
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
        {/* DESKTOP */}
        <nav className="desktopNav">
          <Link to="/" className="logoHome">
            <img src={logo} alt="logo" />
            <h3>Belleza del Ser</h3>
          </Link>

          <div className="menuDesktop">
            <ul className="menuDiv">
              <li>
                <Link to="/">Home</Link>
              </li>

              {/* MEGA MENU */}
              <li className="menu-item mega">
                <span className="mega-trigger">Activar mi bienestar ▾</span>

                <div className="megaMenu">
                  <div className="megaColumn">
                    <h4>Sesiones</h4>
                    <Link to="/sesiones/reiki">Reiki</Link>
                    <Link to="/sesiones/registros-akashicos">
                      Registros Akáshicos
                    </Link>
                    <Link to="/sesiones/acompañamiento">Acompañamiento</Link>
                    <Link to="#">Belleza Holística</Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Otras sanaciones</h4>
                    <Link to="#">Activación</Link>
                    <Link to="#">Bloqueos en el Amor</Link>
                    <Link to="#">Sanación de Útero</Link>
                    <Link to="#">Estrés y Ansiedad</Link>
                    <Link to="#">Chakras</Link>
                    <Link to="#">Energía de Espacios</Link>
                    <Link to="#">Reiki para Mascotas</Link>
                    <Link to="#">Reiki Oncológico</Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Cursos</h4>
                    <Link to="#">Reiki</Link>
                    <Link to="#">Rituales de Belleza</Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Armonizaciones</h4>
                    <Link to="#">Rituales de Belleza</Link>
                  </div>
                </div>
              </li>

              <li>
                <Link to="/sobre-mi">Sobre mí</Link>
              </li>
            </ul>

            <Link to="/carrito" className="carrito">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </nav>

        {/* MOBILE */}
        <nav className="movilNav">
          <div className="hamburgerNav" onClick={toggleMenu} ref={burgerRef}>
            {menuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>

          <Link to="/" className="logoHome">
            <img src={logo} alt="logo" />
            <h3>Belleza del Ser</h3>
          </Link>

          <Link to="/carrito" className="carrito">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div className={`movilNavMenu ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <ul className="columnMenuDiv">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* BIENESTAR */}
          <li className="menu-item has-submenu">
            <div
              className="submenu-toggle"
              onClick={(e) => openOnlySubmenu("bienestar", e)}
            >
              <button className="submenu-btn">Activar mi bienestar ▾</button>
            </div>

            <ul
              className={`submenu ${
                openSubmenu === "bienestar" ? "open" : "close"
              }`}
            >
              <li className="submenuTitle">Sesiones</li>
              <li>
                <Link to="/sesiones/reiki" onClick={closeMenu}>
                  Reiki
                </Link>
              </li>

              <li className="submenuTitle">Otras sanaciones</li>
              <li>
                <Link to="#" onClick={closeMenu}>
                  Activación
                </Link>
              </li>

              <li className="submenuTitle">Cursos</li>
              <li>
                <Link to="#" onClick={closeMenu}>
                  Reiki
                </Link>
              </li>

              <li className="submenuTitle">Armonizaciones</li>
              <li>
                <Link to="#" onClick={closeMenu}>
                  Rituales
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
