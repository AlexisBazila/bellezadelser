import React from "react";
import "./proximamente.css";
import FirstButton from "../../components/firstButton/FirstButton";
import tiktok from "../../assets/icons/tiktokOrange.svg";
import instagram from "../../assets/icons/instagramOrange.svg";
import facebook from "../../assets/icons/facebookOrange.svg";
import youtube from "../../assets/icons/youtubeOrange.svg";
function Proximamente() {
  return (
    <>
      <div class="construction-container">
        <div class="background-shape">
          <div class="contentProximamente">
            <h1>
              Estamos trabajando en esta sección. Gracias por tu paciencia.
            </h1>
            <div className="button">
              <FirstButton
                caption={"Volver a la página principal"}
                link={"/"}
              />
            </div>
            <div class="socialsProximamente">
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

export default Proximamente;
