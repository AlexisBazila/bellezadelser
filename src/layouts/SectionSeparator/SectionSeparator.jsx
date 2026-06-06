import React from "react";
import "./SectionSeparator.css";

function SectionSeparator({
  title,
  paragraph = "",
  backgroundColor = "#E7ECD9",
  textColor = "#3C3C3C",
  className = "",
}) {
  const style = {
    backgroundColor,
    color: textColor,
  };

  return (
    <section className={`SectionSeparator ${className}`} style={style}>
      {paragraph ? (
        <div className="SectionSeparatorSplit">
          <div className="SectionSeparatorParagraph">
            <p>{paragraph}</p>
          </div>

          <div className="SectionSeparatorDivider"></div>

          <div className="SectionSeparatorTitleContainer">
            <h2>{title}</h2>
          </div>
        </div>
      ) : (
        <div className="SectionSeparatorCentered">
          <h2>{title}</h2>
        </div>
      )}
    </section>
  );
}

export default SectionSeparator;
