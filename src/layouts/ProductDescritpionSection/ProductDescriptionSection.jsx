import React from "react";
import "./productDescriptionSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import useInView from "../../hooks/useInView";

function ProductDescriptionSection({
  subTtitle,
  paragraphs = [],
  imageDesktop,
  imageMobile,
}) {
  const [ref, visible] = useInView();

  return (
    <section className="ProductDescriptionSection" ref={ref}>
      <div className="ProductDescriptionContent">
        <div
          className={`ProductDescriptionPharagraph fade-left ${
            visible ? "show" : ""
          }`}
        >
          <LeftAlignedParagraph subTtitle={subTtitle} paragraphs={paragraphs} />
        </div>

        <div
          className={`ProductDescriptionImage fade-right ${
            visible ? "show" : ""
          }`}
        >
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
