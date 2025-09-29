import React from "react";
import "./curso.css";
import FirstButton from "../components/firstButton/FirstButton";
import LeftAlignedParagraph from "../components/LeftAlignedParagraph/LeftAlignedParagraph";
import resumeCourseImage from "../assets/images/courseImage.png";
import goalCourseImage from "../assets/images/goalCourse.png";

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
      <section className="includeCourseSection">
        <div className="includeContent">
          <div className="includeTitle">
            <h2>¿Que incluye?</h2>
          </div>
          <p>25 capítulos con material teórico y práctico.</p>
          <p>
            Ejercicios diarios guiados para aplicar la gratitud en tu día a día.
          </p>
          <p>Recursos descargables en PDF.</p>
          <p>Videos explicativos y meditaciones guiadas.</p>
          <p>Acompañamiento virtual durante el proceso.</p>
        </div>
      </section>
      <section className="goalCourseSection">
        <div className="goalCourseContent">
          <div className="goalCourseImage">
            <img src={goalCourseImage} alt="" />
          </div>
          <div className="goalCoursePharagraph">
            <LeftAlignedParagraph
              subTtitle="¿Qué vas a aprender y lograr?"
              paragraphs={[
                "• Reconocer y valorar lo que ya tenés en tu vida.",
                "• Transformar la manera en que percibís las dificultades.",
                "• Elevar tu energía y vibración diaria.",
                "• Crear un hábito consciente de gratitud que te acompañe más allá del taller.",
                "• Desarrollar una actitud más positiva, resiliente y abierta al cambio.",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Curso;
