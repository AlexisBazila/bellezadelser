import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <a href="#" className="logoHome">
        <strong>Belleza del Ser</strong>
      </a>
      <div className="menuDiv">
        <a href="#">Cursos</a>
        <a href="#">Armonizaciones</a>
        <a href="#">Sobre mi</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  );
}

export default NavBar;
