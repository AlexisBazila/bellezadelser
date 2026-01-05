import React from "react";
import SmallButton from "../../components/smallButton/SmallButton";
import logo from "../../assets/images/withe-logo.png";
import "./footerBar.css";

import { RxEnvelopeClosed } from "react-icons/rx";
import { FiPhone, FiMapPin } from "react-icons/fi";
import {
  AiFillTikTok,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

import tiktok from "../../assets/icons/tiktok.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import mail from "../../assets/icons/mail.svg";
import telefono from "../../assets/icons/telefono.svg";

function FooterBar() {
  return (
    <div className="footerBar">
      <div className="contentFooter">
        <div className="navNewsletter">
          <div className="navFooter">
            <div className="navFooterBar">
              <div className="logo">
                <img src={logo} alt="logotipo de formas circulares" />
                <h3>
                  <strong>Belleza del Ser</strong>
                </h3>
              </div>

              <div className="menuFooterDiv">
                <a href="/">Home</a>
                <a href="/sesiones/reiki">Sesiones</a>
                <a href="/Armonizaciones/activaciones">Armonizaciones</a>
                <a href="/sobre-mi">Sobre mi</a>
              </div>
            </div>
          </div>

          <div className="socialMedia">
            <p>Seguime en redes</p>
            <div className="iconSocial">
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

        <div className="contactFooter">
          <div className="contact">
            <a href="mailto:oficialbellezadelser@gmai.com">
              <i>
                <img src={mail} alt="" />
              </i>
              oficialbellezadelser@gmail.com
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
