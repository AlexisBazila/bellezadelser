import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/images/withe-logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const megaRef = useRef(null);
  const triggerRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);
  const closeMegaMenu = () => setMegaOpen(false);

  // Bloquear scroll cuando algún menú está abierto
  useEffect(() => {
    if (menuOpen || megaOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen, megaOpen]);

  // Cerrar mega menu al hacer click afuera (solo desktop)
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

  const menuSections = [
    {
      title: "Sesiones",
      links: [
        { label: "Reiki", to: "/sesiones/reiki" },
        { label: "Registros Akáshicos", to: "/sesiones/registros-akashicos" },
        {
          label: "Acompañamiento 1 a 1",
          to: "/sesiones/acompañamiento",
        },
        { label: "Packs", to: "/packs" },
      ],
    },
    {
      title: "Belleza Holística",
      links: [
        { label: "Rituales de Belleza", to: "/belleza-holistica/belleza" },
      ],
    },
    {
      title: "Otras sanaciones",
      links: [
        {
          label: "Activación de Abundancia",
          to: "/otras-sanaciones/activacion",
        },
        { label: "Bloqueos en el Amor", to: "/otras-sanaciones/bloqueos" },
        {
          label: "Sanación de Útero",
          to: "/otras-sanaciones/sanacion-de-utero",
        },
        { label: "Estrés y Ansiedad", to: "/otras-sanaciones/sanacion-estres" },
        { label: "Chakras", to: "/otras-sanaciones/chakras" },
        {
          label: "Energía de Espacios",
          to: "/otras-sanaciones/limpieza-de-espacios",
        },
        {
          label: "Reiki para Mascotas",
          to: "/otras-sanaciones/reiki-para-mascotas",
        },
        { label: "Reiki Oncológico", to: "/otras-sanaciones/reiki-oncologico" },
      ],
    },
    {
      title: "Armonizaciones",
      links: [
        {
          label: "Activaciones Energéticas",
          to: "/armonizaciones/activaciones",
        },
        // { label: "eBooks", to: "/armonizaciones/ebooks" },
      ],
    },
  ];

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
                  {menuSections.map((section) => (
                    <div className="megaColumn" key={section.title}>
                      <h4>{section.title}</h4>
                      {section.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={closeMegaMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
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

          <Link to="/" className="logoHome" onClick={closeMenu}>
            <img src={logo} alt="logo" />
            <h3>Belleza del Ser</h3>
          </Link>

          <Link to="/carrito" className="carrito" onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </nav>
      </div>

      {/* MOBILE MENU — fullscreen */}
      <div className={`movilNavMenu ${menuOpen ? "active" : ""}`}>
        <div className="movilNavScroll">
          {/* Home destacado arriba */}
          <Link to="/" className="mobileHomeLink" onClick={closeMenu}>
            Home
          </Link>

          {/* Secciones en cuadros */}
          <div className="mobileSections">
            {menuSections.map((section) => (
              <div className="mobileSection" key={section.title}>
                <h4 className="mobileSectionTitle">{section.title}</h4>
                <ul className="mobileSectionLinks">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} onClick={closeMenu}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sobre mí al final */}
          <Link to="/sobre-mi" className="mobileSobreMi" onClick={closeMenu}>
            Sobre mí
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
