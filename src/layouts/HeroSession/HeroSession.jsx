import React from "react";
import "./heroSession.css";
function HeroProduct({ title, subtitle, duracion, modalidad }) {
  return (
    <section className="heroSectionSession">
      <div className="lightHeroSession">
        <div className="contentHeroSession">
          <div className="paragraphHeroSession">
            <div className="titleAndSubtitleHeroSession">
              <h1 className="title">{title}</h1>
              <h2>{subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProduct;
