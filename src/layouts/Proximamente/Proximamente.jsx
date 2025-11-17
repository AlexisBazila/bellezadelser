import React from "react";
import "./proximamente.css";
import FirstButton from "../../components/firstButton/FirstButton";
function Proximamente() {
  return (
    <>
      <div class="construction-container">
        <div class="background-shape">
          <div class="content">
            <h1>
              Estamos trabajando en esta sección. Gracias por tu paciencia.
            </h1>
            <div className="button">
              <FirstButton caption={"Volver a la página principal"} />
            </div>
            <div class="socials">
              <p>Seguime en redes</p>
              <div class="icons">
                <a href="https://www.tiktok.com/discover/naty-belleza-del-ser">
                  <i class="bi bi-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/naty.bellezadelser/">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/coachnatyb">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.youtube.com/@naty.bellezadelser">
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Proximamente;
