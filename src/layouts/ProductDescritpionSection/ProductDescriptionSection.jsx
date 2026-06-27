import React from "react";
import "./productDescriptionSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ProductDescriptionSection({
  subTtitle,
  paragraphs = [],
  imageDesktop,
  imageMobile,
}) {
  // Parser string → HTML
  const parseText = (text) => {
    if (!text) return "";

    return text.replace(/bold\[(.*?)\]/g, "<strong>$1</strong>");
  };

  // Procesamos todos los párrafos
  const parsedParagraphs = paragraphs.map((p) => parseText(p));

  return (
    <section className="ProductDescriptionSection">
      <div className="ProductDescriptionContent">
        <div className="ProductDescriptionPharagraph">
          <LeftAlignedParagraph
            subTtitle={subTtitle}
            paragraphs={parsedParagraphs}
          />
        </div>

        <div className="ProductDescriptionImage">
          <picture>
            <source media="(max-width: 1160px)" srcSet={imageMobile} />
            <img src={imageDesktop} alt={subTtitle} />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default ProductDescriptionSection;
