import React from "react";
import "./firstButton.css";

function FirstButton({ caption }) {
  return (
    <a href="#" className="firstButton">
      {caption}
    </a>
  );
}

export default FirstButton;
