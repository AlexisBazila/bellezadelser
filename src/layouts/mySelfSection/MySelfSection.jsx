import React from "react";
import "./mySelfSection.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import storyImage from "../../assets/images/natyStory.jpg";
import focusImage from "../../assets/images/natyFocus.jpg";
import purposeImage from "../../assets/images/natyPurpose.jpg";
import movilstoryImage from "../../assets/images/natyStoryMovil.jpg";
import movilfocusImage from "../../assets/images/natyFocusMovil.jpg";
import movilpurposeImage from "../../assets/images/natyPurposeMovil.jpg";

function SectionBlock({
  title,
  paragraphs,
  image,
  mobileImage,
  reverse = false,
}) {
  return (
    <div className={`sectionBlock ${reverse ? "reverse" : ""}`}>
      <div className="textContent">
        <LeftAlignedParagraph subTtitle={title} paragraphs={paragraphs} />
      </div>

      <div className="imageContent">
        <picture>
          <source media="(max-width: 1160px)" srcSet={mobileImage} />
          <img src={image} alt={title} />
        </picture>
      </div>
    </div>
  );
}

function MySelfSection() {
  return (
    <section className="myselfSection">
      <div className="sectionWrapper">
        <SectionBlock
          title="Mi historia"
          paragraphs={[
            "Hace años, en uno de los momentos más desafiantes de mi vida, inicié un camino de búsqueda interior para encontrar respuestas, alivio y dirección. Lo que comenzó como una necesidad personal se convirtió en una profunda transformación espiritual.",

            "Exploré distintas técnicas de sanación, me formé, practiqué, liberé viejos patrones y descubrí algo que lo cambió todo: <strong>cuando sanamos nuestra energía, nuestra vida comienza a alinearse.</strong>",

            "Ese despertar me llevó a reconectar con mi esencia, a recuperar mi poder y a comprender que todos tenemos la capacidad de liberar lo que nos bloquea creando una vida próspera, estable y en paz.",
            "Hoy, desde ese mismo lugar de conciencia y expansión, acompaño a miles de personas a transformar su energía, elevar su vibración, <strong>liberar bloqueos y activar un nivel de bienestar que deja de ser un ideal para convertirse en una experiencia real.</strong> Mi misión es guiarte a sentir tu energía, a recuperar tu poder interno y a abrir caminos donde antes solo sentías límites.",
          ]}
          image={storyImage}
          mobileImage={movilstoryImage}
        />

        <SectionBlock
          title="Mi enfoque"
          paragraphs={[
            "Mi trabajo se basa en comprender que la energía es el origen de todo, de lo que sentimos, de lo que atraemos y de cómo vivimos. Cuando algo se bloquea a nivel energético, la vida entra en modo resistencia; cuando la energía se ordena, la vida comienza a fluir de formas que antes parecían imposibles.",

            "A través de Reiki, Registros Akáshicos y técnicas de desbloqueo energético profundo, trabajo en tu campo energético para liberar cargas, limpiar memorias emocionales, armonizar tus centros y abrir espacio para una nueva frecuencia.",
            "Para mi, lo fundamental es que puedas sentir la energía, comprender tus procesos y sostener cambios reales, no solo inspirarte por un momento. Acompaño desde la presencia, la escucha y el fortalecimiento de tu propio poder interno.",

            "Mi propósito es guiarte a recuperar tu energía vital, tu fuerza y tu conexión con vos mismo/a. Me inspira ver esa transformación que ocurre cuando alguien deja de vivir desde la carga, la escasez, el miedo o el agotamiento… y comienza a habitarse desde la coherencia, la claridad y la expansión.",
          ]}
          image={focusImage}
          mobileImage={movilfocusImage}
          reverse={true}
        />

        <div className="processSection">
          <img src={purposeImage} alt="Proceso" className="processImg" />
          <img
            src={movilpurposeImage}
            alt="Proceso"
            className="movilProcessImg"
          />
          <div className="processParagraphs">
            <p>
              Cada proceso es único. Por eso trabajo de forma personalizada,
              respetando tus tiempos, tu historia y tu sensibilidad. Se trata de
              acompañarte a abrir caminos internos que después se reflejan en tu
              vida externa.
            </p>
            <p>
              Mi manera de trabajar combina técnica, intuición y una profunda
              conexión espiritual.{" "}
              <strong>
                Sostengo tu energía, pero tu eres parte activa del proceso;
                juntos creamos el espacio para que lo que estaba bloqueado
                comience a liberarse y expandirse.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySelfSection;
