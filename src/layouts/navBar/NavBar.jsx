import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <h3>
        <strong>LOGO</strong>
      </h3>
      <div className="menuDiv">
        <a href="#">Home</a>
        <a href="#">Cursos</a>
        <a href="#">Sobre mi</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  );
}

export default NavBar;
