import React from "react";
import SmallButton from "../../components/smallButton/SmallButton";
import logo from "../../assets/images/withe-logo.png";
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
              <div className="logo">
                <img src={logo} alt="" />
                <h3>
                  <strong>Belleza del Ser</strong>
                </h3>
              </div>

              <div className="menuFooterDiv">
                <a href="#">Home</a>
                <a href="#">Sesiones</a>
                <a href="#">Armonizaciones</a>
                <a href="#">Sobre mi</a>
              </div>
            </div>
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
