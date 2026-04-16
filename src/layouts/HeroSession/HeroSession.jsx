import React from "react";
import "./heroSession.css";
import FirstButton from "../../components/firstButton/FirstButton";

function HeroProduct({
  title,
  subtitle,
  duracion,
  modalidad,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="heroSectionSession">
      <div className="lightHeroSession">
        <div className="contentHeroSession">
          <div className="paragraphHeroSession">
            <div className="titleAndSubtitleHeroSession">
              <h1 className="title">{title}</h1>
              {subtitle && <h2>{subtitle}</h2>}
            </div>
            {buttonLink && buttonText && (
              <div className="heroButton">
                <FirstButton caption={buttonText} link={buttonLink} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProduct;
