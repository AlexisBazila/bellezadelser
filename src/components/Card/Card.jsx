import React from "react";
import "./Card.css";
function Card({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-image">
        {image ? <img src={image} alt={title} /> : "Foto"}
      </div>
      <div className="cardContent">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
