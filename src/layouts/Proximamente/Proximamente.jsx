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
                <a href="https://www.tiktok.com/discover/naty-belleza-del-ser">
                  <i>
                    <img src={tiktok} alt="" />
                  </i>
                </a>
                <a href="https://www.instagram.com/naty.bellezadelser/">
                  <i>
                    <img src={instagram} alt="" />
                  </i>
                </a>
                <a href="https://www.facebook.com/coachnatyb">
                  <i>
                    <img src={facebook} alt="" />
                  </i>
                </a>
                <a href="https://www.youtube.com/@naty.bellezadelser">
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
