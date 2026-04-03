import React from "react";
import "./firstButton.css";

function FirstButton({ caption, link, newTab = false }) {
  return (
    <a
      href={link}
      className="firstButton secondAgendaButton"
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {caption}
    </a>
  );
}

export default FirstButton;
