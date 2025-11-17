import React from "react";
import "./iconLeftAlignedParagraph.css";

const IconLeftAlignedParagraph = ({ logo, subTtitle, paragraphs = [] }) => {
  return (
    <div className="iconLeftAlignedParagraph">
      <div className="logoTitle">
        <i className="leftAlignedLogo">
          <img src={logo} alt="" />
        </i>
        <h2>{subTtitle}</h2>
      </div>

      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};

export default IconLeftAlignedParagraph;
