import React from "react";
import "./sessionCard.css";
import blackLogo from "../../assets/images/black-logo.png";
import SmallButton from "../smallButton/SmallButton";
function SessionsessionCard({ image, title, description }) {
  return (
    <div className="sessionCard">
      <div className="sessionCard-image">
        {image ? <img src={image} alt={title} /> : "Foto"}
      </div>
      <div className="sessionCardContent">
        <div>
          <i>
            <img src={blackLogo} alt="" />
          </i>
        </div>
        <h3 className="sessionCard-title">{title}</h3>
        <p className="sessionCard-description">{description}</p>{" "}
        <div className="sessionCardButton">
          <SmallButton caption={"Agenda Tu Sesión"} />
        </div>
      </div>
    </div>
  );
}

export default SessionsessionCard;
