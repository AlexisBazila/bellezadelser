import React from "react";
import "./productDescriptionSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ProductDescriptionSection({ subTtitle, paragraphs = [], image }) {
  return (
    <section className="ProductDescriptionSection">
      <div className="ProductDescriptionContent">
        <div className="ProductDescriptionPharagraph">
          <LeftAlignedParagraph subTtitle={subTtitle} paragraphs={paragraphs} />
        </div>
        <div className="ProductDescriptionImage">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ProductDescriptionSection;
