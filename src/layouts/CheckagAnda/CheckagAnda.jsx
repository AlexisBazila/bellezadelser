import React from "react";
import "./CheckagAnda.css";
import FirstButton from "../../components/firstButton/FirstButton";
import tiktok from "../../assets/icons/tiktokOrange.svg";
import instagram from "../../assets/icons/instagramOrange.svg";
import facebook from "../../assets/icons/facebookOrange.svg";
import youtube from "../../assets/icons/youtubeOrange.svg";
function Proximamente() {
  return (
    <>
      <div class="CheckagAnda-container">
        <div class="background-shape">
          <div class="contentCheckagAnda">
            <h1>Tu sesion ha sido agendada!</h1>
            <p>En brebe deberas recibir un correo con todos los detalles</p>
            <div className="button">
              <FirstButton
                caption={"Volver a la página principal"}
                link={"/"}
              />
            </div>
            <div class="socialsCheckagAnda">
              <p>Seguime en redes</p>
              <div class="icons">
                <a
                  href="https://www.tiktok.com/discover/naty-belleza-del-ser"
                  target="_blank"
                >
                  <i>
                    <img src={tiktok} alt="" />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/naty.bellezadelser/"
                  target="_blank"
                >
                  <i>
                    <img src={instagram} alt="" />
                  </i>
                </a>
                <a href="https://www.facebook.com/coachnatyb" target="_blank">
                  <i>
                    <img src={facebook} alt="" />
                  </i>
                </a>
                <a
                  href="https://www.youtube.com/@naty.bellezadelser"
                  target="_blank"
                >
                  <i>
                    <img src={youtube} alt="" />
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

export default Proximamente;
