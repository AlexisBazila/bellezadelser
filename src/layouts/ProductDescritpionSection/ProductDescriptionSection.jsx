import React from "react";
import "./productDescriptionSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ProductDescriptionSection({
  subTtitle,
  paragraphs = [],
  imageDesktop,
  imageMobile,
}) {
  return (
    <section className="ProductDescriptionSection">
      <div className="ProductDescriptionContent">
        <div className="ProductDescriptionPharagraph">
          <LeftAlignedParagraph subTtitle={subTtitle} paragraphs={paragraphs} />
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
