import React from "react";
import HeroAboutMe from "../layouts/heroAboutMe/HeroAboutMe";
import StorySection from "../layouts/StorySection/StorySection";
import FocusSection from "../layouts/FocusSection/FocusSection";
import MySelfSection from "../layouts/mySelfSection/MySelfSection";
import ContentSection from "../components/ContentSection/ContentSection";

import storyImage from "../assets/images/natyStory.jpg";

function AboutMe() {
  return (
    <>
      <HeroAboutMe />
      {/* <MySelfSection /> */}
      <ContentSection
        title="Mi historia"
        background="light"
        image={storyImage}
        imagePosition="bottom"
        content={[
          "Mi trabajo parte de una comprensión simple pero profunda: la energía es el origen de mucho de lo que vivimos, sentimos y atraemos.",

          "Nuestros pensamientos, emociones, creencias y experiencias van creando una frecuencia interna que termina influyendo en nuestras decisiones, nuestras relaciones y en la forma en que experimentamos la vida.",

          "Cuando existen bloqueos internos —emocionales, mentales o energéticos— muchas veces sentimos estancamiento, confusión o repetición de ciertos patrones.",

          "Cuando comenzamos a comprender y ordenar esa energía, algo cambia: la vida empieza a moverse de una manera diferente.",

          "En mis procesos acompaño a las personas a tomar conciencia del poder su energía, liberar cargas acumuladas y generar cambios reales en su forma de vivir.",

          "Para ello utilizo distintas herramientas de trabajo energético y de conciencia, entre ellas:",
          "•Reiki",
          "•Registros Akáshicos",
          "•Ejercicios de conexión energética",
          "•Procesos de transformación interior",

          "Pero más allá de la herramienta, lo más importante para mí es que puedas comprender tu propio proceso y desarrollar tu capacidad de sostener esos cambios en tu vida.",

          "No se trata solo de inspirarte por un momento. Se trata de generar una transformación que puedas integrar y sostener.",
        ]}
      />
      <ContentSection
        title="Mi Enfoque"
        background="white"
        image={storyImage}
        imagePosition="bottom"
        content={[
          "Mi trabajo parte de una comprensión simple pero profunda: la energía es el origen de mucho de lo que vivimos, sentimos y atraemos.",
          "Nuestros pensamientos, emociones, creencias y experiencias van creando una frecuencia interna que termina influyendo en nuestras decisiones, nuestras relaciones y en la forma en que experimentamos la vida.",
        ]}
      />
    </>
  );
}

export default AboutMe;
