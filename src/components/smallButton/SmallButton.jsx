import React from "react";
import "./smallButton.css";

function SmallButton({ caption, link }) {
  return (
    <a href={link} className="SmallButton">
      {caption}
    </a>
  );
}

export default SmallButton;
