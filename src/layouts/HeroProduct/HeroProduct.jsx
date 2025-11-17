import React from "react";
import "./heroProduct.css";
import FirstButton from "../../components/firstButton/FirstButton";
function HeroProduct({ title, subtitle, caption, link }) {
  return (
    <section className="heroSectionProduct">
      <div className="lightHero">
        <div className="contentHeroProduct">
          <div className="paragraphHeroProduct">
            <div className="titleAndSubtitleHeroProduct">
              <h1 className="title">{title}</h1>
              <h2>{subtitle}</h2>
            </div>
            <FirstButton caption={caption} link={link} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProduct;
