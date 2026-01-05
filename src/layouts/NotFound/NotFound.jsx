import React from "react";
import "./notFound.css";
import FirstButton from "../../components/firstButton/FirstButton";
import tiktok from "../../assets/icons/tiktokOrange.svg";
import instagram from "../../assets/icons/instagramOrange.svg";
import facebook from "../../assets/icons/facebookOrange.svg";
import youtube from "../../assets/icons/youtubeOrange.svg";
function NotFound() {
  return (
    <>
      <div class="notFoundContainer">
        <div class="notFoundShape">
          <div class="notFoundContent">
            <h1>
              404
              <br />
              Pagina no encontrada
            </h1>
            <h2>No hemos podido encontrar el contenido que estas buscando</h2>
            <div className="button">
              <FirstButton
                caption={"Volver a la página principal"}
                link={"/"}
              />
            </div>
            <div class="notFoundSocials">
              <p>Seguime en redes</p>
              <div class="icons">
                <a
                  href="https://www.tiktok.com/discover/naty-belleza-del-ser"
                  target="_blank"
                >
                  <i>
                    <img src={tiktok} alt="logo de tiktok" />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/naty.bellezadelser/"
                  target="_blank"
                >
                  <i>
                    <img src={instagram} alt="logo de instagram" />
                  </i>
                </a>
                <a href="https://www.facebook.com/coachnatyb" target="_blank">
                  <i>
                    <img src={facebook} alt="logo de facebook" />
                  </i>
                </a>
                <a
                  href="https://www.youtube.com/@naty.bellezadelser"
                  target="_blank"
                >
                  <i>
                    <img src={youtube} alt="logo de youtube" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
