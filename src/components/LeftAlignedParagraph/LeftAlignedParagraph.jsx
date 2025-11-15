import React from "react";
import "./LeftAlignedParagraph.css";
import logo from "../../assets/images/withe-logo.png";

const LeftAlignedParagraph = ({ subTtitle, paragraphs = [] }) => {
  return (
    <div className="LeftAlignedParagraph">
      <div className="logoTitle">
        <i className="leftAlignedLogo">
          <img src={logo} alt="" />
        </i>
        <h2>{subTtitle}</h2>
      </div>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LeftAlignedParagraph;
