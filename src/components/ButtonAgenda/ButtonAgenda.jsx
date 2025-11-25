import React from "react";
import "./buttonAgenda.css";

function ButtonAgenda({ caption, onClick }) {
  return (
    <button className="buttonAgenda" onClick={onClick}>
      {caption}
    </button>
  );
}

export default ButtonAgenda;
