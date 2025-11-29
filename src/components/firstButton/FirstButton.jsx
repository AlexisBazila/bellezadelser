import React from "react";
import "./firstButton.css";

function FirstButton({ caption, link }) {
  return (
    <a href={link} className="firstButton secondAgendaButton">
      {caption}
    </a>
  );
}

export default FirstButton;
