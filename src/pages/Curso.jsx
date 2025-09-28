import React from "react";
import "./curso.css";
import FirstButton from "../components/firstButton/FirstButton";

function Curso() {
  return (
    <>
      <section className="courseHeroSection">
        <div className="courselightHero">
          <div className="coursecontentHero">
            <div className="courseparagraphHero">
              <div className="coursetitleAndSubtitleHero">
                <h1 className="coursetitle">Reiki Nivel 1</h1>
                <h2>
                  Aprende a canalizar energía para tu bienestar y el de los
                  demás.
                </h2>
                <div className="descriptionCourse">
                  <p>
                    <strong>Duracion</strong> X Dias
                  </p>
                  <p>
                    <strong>Modalidad</strong> Online
                  </p>
                </div>
              </div>
              <div className="priceCourseHero">
                <h3>$000.000</h3>
                <FirstButton caption="Quiero Conectar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resumeCourseSection">
        <div className="resumeCourseContent">
          <div className="resumeCoursePharagraph">
            <LeftAlignedParagraph
              subTtitle="¿En qué consiste este taller?"
              paragraphs={[
                "Este taller de 21 días está diseñado para acompañarte paso a paso en la práctica de la gratitud. A través de reflexiones y ejercicios diarios, vas a incorporar este hábito en tu vida cotidiana y descubrir cómo una mirada agradecida puede transformar tu energía, tus vínculos y tu realidad.",
              ]}
            />
          </div>
          <div className="resumeCourseImage">
            <img src={resumeCourseImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Curso;
