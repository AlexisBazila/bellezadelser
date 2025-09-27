import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" className="logoHome">
        <strong>Belleza del Ser</strong>
      </Link>
      <div className="menuDiv">
        <Link to="/cursos">Cursos</Link>
        <Link to="/armonizaciones">Armonizaciones</Link>
        <Link to="/sobre-mi">Sobre mi</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </div>
  );
}

export default NavBar;
