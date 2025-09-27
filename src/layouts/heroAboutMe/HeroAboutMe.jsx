import React from "react";
import "./heroAboutMe.css";
function HeroAboutMe() {
  return (
    <section className="heroSectionAbout">
      <div className="overlay">
        <div className="contentHero">
          <div className="paragraphHero">
            <div className="titleAndSubtitleHero">
              <h1 className="title">
                Transformá tu energía, <br />{" "}
                <strong>transformá tu vida.</strong>
              </h1>
              <h2>
                Cursos online de Reiki, Registros Akáshicos y Coaching
                Espiritual.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroAboutMe;
