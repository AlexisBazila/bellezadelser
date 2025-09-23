import React from "react";
import SmallButton from "../../components/smallButton/SmallButton";
import "./FooterBar.css";

import { RxEnvelopeClosed } from "react-icons/rx";
import { FiPhone, FiMapPin } from "react-icons/fi";
import {
  AiFillTikTok,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

function FooterBar() {
  return (
    <div className="footerBar">
      <div className="contentFooter">
        <div className="navNewsletter">
          <div className="navFooter">
            <div className="navFooterBar">
              <h3>
                <strong>Belleza del Ser</strong>
              </h3>
              <div className="menuFooterDiv">
                <a href="#">Home</a>
                <a href="#">Cursos</a>
                <a href="#">Sobre mi</a>
                <a href="#">Contacto</a>
              </div>
            </div>
          </div>
          <div className="newsletterFooter">
            <div className="textNwsletter">
              <h4>Newsletter</h4>
              <p>
                Un recordatorio de luz y sanación en tu bandeja de entrada.
                Sumate a la comunidad.
              </p>
            </div>
            <div className="formNewsletter">
              <input type="text" placeholder="Email" />
              <SmallButton caption={"Suscribirme"} />
            </div>
          </div>
        </div>
        <div className="contactFooter">
          <div className="contact">
            <a href="#">
              <i>
                <RxEnvelopeClosed />
              </i>
              contacto@ejemplo.com
            </a>
            <a href="#">
              <i>
                <FiPhone />
              </i>
              +34 000 000000
            </a>
            <a href="#">
              <i>
                <FiMapPin />
              </i>
              Ubicación, Ejemplo
            </a>
          </div>
          <div className="socialMedia">
            <p>Seguime en redes</p>
            <div className="iconSocial">
              <a href="#">
                <i>
                  <AiFillTikTok />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiFillInstagram />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiFillFacebook />
                </i>
              </a>
              <a href="#">
                <i>
                  <AiFillYoutube />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="registredFooter">
        <p>© 2025 Naty Belleza del Ser. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default FooterBar;
