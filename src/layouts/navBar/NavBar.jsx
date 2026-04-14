import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [megaOpen, setMegaOpen] = useState(false);

  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const megaRef = useRef(null);
  const triggerRef = useRef(null);

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

  const closeMegaMenu = () => setMegaOpen(false);

  const openOnlySubmenu = (menuName, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (openSubmenu === menuName) return;
    setOpenSubmenu(menuName);
  };

  // 🔥 Bloquear scroll (sin salto feo)
  useEffect(() => {
    if (menuOpen || megaOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [menuOpen, megaOpen]);

  // 🔥 Cerrar mobile al hacer click afuera
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

  // 🔥 Cerrar mega menu al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!megaOpen) return;

      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setMegaOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [megaOpen]);

  return (
    <>
      <div className="navBar">
        {/* DESKTOP */}
        <nav className="desktopNav">
          <Link to="/" className="logoHome" onClick={closeMegaMenu}>
            <img src={logo} alt="logo" />
            <h3>Belleza del Ser</h3>
          </Link>

          <div className="menuDesktop">
            <ul className="menuDiv">
              <li>
                <Link to="/" onClick={closeMegaMenu}>
                  Home
                </Link>
              </li>

              {/* MEGA MENU */}
              <li className="menu-item mega">
                <button
                  ref={triggerRef}
                  className={`mega-trigger ${megaOpen ? "active" : ""}`}
                  onClick={() => setMegaOpen((prev) => !prev)}
                >
                  Activar mi bienestar ▾
                </button>

                <div
                  ref={megaRef}
                  className={`megaMenu ${megaOpen ? "open" : ""}`}
                >
                  <div className="megaColumn">
                    <h4>Sesiones</h4>
                    <Link to="/sesiones/reiki" onClick={closeMegaMenu}>
                      Reiki
                    </Link>
                    <Link
                      to="/sesiones/registros-akashicos"
                      onClick={closeMegaMenu}
                    >
                      Registros Akáshicos
                    </Link>
                    <Link to="/sesiones/acompañamiento" onClick={closeMegaMenu}>
                      Acompañamiento
                    </Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Belleza Holística</h4>
                    <Link
                      to="/belleza-holistica/belleza"
                      onClick={closeMegaMenu}
                    >
                      Rituales de Belleza
                    </Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Otras sanaciones</h4>
                    <Link
                      to="/otras-sanaciones/activacion"
                      onClick={closeMegaMenu}
                    >
                      Activación
                    </Link>
                    <Link
                      to="/otras-sanaciones/bloqueos"
                      onClick={closeMegaMenu}
                    >
                      Bloqueos en el Amor
                    </Link>
                    <Link
                      to="/otras-sanaciones/sanacion-de-utero"
                      onClick={closeMegaMenu}
                    >
                      Sanación de Útero
                    </Link>
                    <Link
                      to="/otras-sanaciones/sanacion-estres"
                      onClick={closeMegaMenu}
                    >
                      Estrés y Ansiedad
                    </Link>
                    <Link
                      to="/otras-sanaciones/chakras"
                      onClick={closeMegaMenu}
                    >
                      Chakras
                    </Link>
                    <Link
                      to="/otras-sanaciones/limpieza-de-espacios"
                      onClick={closeMegaMenu}
                    >
                      Energía de Espacios
                    </Link>
                    <Link
                      to="/otras-sanaciones/reiki-para-mascotas"
                      onClick={closeMegaMenu}
                    >
                      Reiki para Mascotas
                    </Link>
                    <Link
                      to="/otras-sanaciones/reiki-oncologico"
                      onClick={closeMegaMenu}
                    >
                      Reiki Oncológico
                    </Link>
                  </div>

                  <div className="megaColumn">
                    <h4>Armonizaciones</h4>
                    <Link
                      to="/armonizaciones/activaciones"
                      onClick={closeMegaMenu}
                    >
                      Activaciones Energéticas
                    </Link>
                    <Link to="/armonizaciones/ebooks" onClick={closeMegaMenu}>
                      eBooks
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <Link to="/sobre-mi" onClick={closeMegaMenu}>
                  Sobre mí
                </Link>
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
