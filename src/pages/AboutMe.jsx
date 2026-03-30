import React from "react";
import HeroAboutMe from "../layouts/heroAboutMe/HeroAboutMe";
import StorySection from "../layouts/StorySection/StorySection";
import FocusSection from "../layouts/FocusSection/FocusSection";
import MySelfSection from "../layouts/mySelfSection/MySelfSection";
import ContentSection from "../components/ContentSection/ContentSection";

import focus from "../assets/images/focus.png";
import mystory from "../assets/images/mystory.png";
import process from "../assets/images/process.png";

function AboutMe() {
  return (
    <>
      <HeroAboutMe />
      {/* <MySelfSection /> */}
      <ContentSection
        title="Mi historia"
        background="light"
        image={mystory}
        imagePosition="bottom"
        content={[
          "Hace algunos años, en uno de los momentos más desafiantes de mi vida, inicié un profundo camino de búsqueda interior. Necesitaba comprender lo que me estaba pasando, encontrar alivio y recuperar dirección.",

          "Lo que comenzó como una necesidad personal terminó convirtiéndose en una transformación que cambió mi forma de vivir y de entender la vida.",

          "A lo largo de ese proceso exploré distintas herramientas de crecimiento personal y trabajo energético. Me formé, practiqué, cuestioné viejos patrones y aprendí algo que lo cambió todo:",

          {
            type: "bold",
            text: "Cuando transformamos nuestra energía interna, nuestra realidad externa comienza a reorganizarse.",
          },

          "Ese despertar me llevó a reconectar con mi esencia, a recuperar mi poder personal y a comprender que todos tenemos la capacidad de liberar lo que nos bloquea y crear una vida más consciente, próspera y en paz.",

          "Hoy acompaño a personas de distintas partes del mundo en procesos de transformación personal, ayudándolas a comprender su energía, liberar bloqueos internos y reconectar con su propio poder.",

          {
            type: "paragraph",
            content: [
              "Mi misión no es darte respuestas ni soluciones mágicas. Mi misión es acompañarte a ",
              {
                bold: "reconocer tu propia energía, recuperar tu poder interior y abrir posibilidades donde antes solo veías límites.",
              },
            ],
          },

          {
            type: "paragraph",
            content: [
              "De ese proceso de transformación nació ",
              {
                bold: "Belleza del Ser",
              },
              ", un espacio creado para acompañar a las personas a reconectar con su energía, su esencia y su verdadero poder interior.",
            ],
          },

          {
            type: "paragraph",
            content: [
              "Elegí este nombre porque creo profundamente que ",
              {
                bold: "la verdadera belleza no es solo algo que se ve, sino algo que nace desde el interior y se refleja en la forma en que vivimos, sentimos y nos relacionamos con la vida.",
              },
            ],
          },
        ]}
      />
      <ContentSection
        title="Mi Enfoque"
        background="white"
        image={focus}
        imagePosition="bottom"
        content={[
          {
            type: "paragraph",
            content: [
              "Mi trabajo parte de una comprensión simple pero profunda: ",
              {
                bold: "la energía es el origen de mucho de lo que vivimos, sentimos y atraemos.",
              },
            ],
          },

          "Nuestros pensamientos, emociones, creencias y experiencias van creando una frecuencia interna que termina influyendo en nuestras decisiones, nuestras relaciones y en la forma en que experimentamos la vida.",

          "Cuando existen bloqueos internos —emocionales, mentales o energéticos— muchas veces sentimos estancamiento, confusión o repetición de ciertos patrones.",

          "Cuando comenzamos a comprender y ordenar esa energía, algo cambia: la vida empieza a moverse de una manera diferente.",

          "En mis procesos acompaño a las personas a tomar conciencia del poder su energía, liberar cargas acumuladas y generar cambios reales en su forma de vivir.",

          "Para ello utilizo distintas herramientas de trabajo energético y de conciencia, entre ellas:",
          {
            type: "list",
            items: [
              "Reiki",
              "Registros Akáshicos",
              "Ejercicios de conexión energética",
              "Procesos de transformación interior",
            ],
          },

          {
            type: "paragraph",
            content: [
              "Pero más allá de la herramienta, lo más importante para mí es que puedas ",
              {
                bold: "comprender tu propio proceso y desarrollar tu capacidad de sostener esos cambios en tu vida",
              },
            ],
          },
          {
            type: "paragraph",
            content: [
              "No se trata solo de inspirarte por un momento. Se trata de ",
              {
                bold: "generar una transformación que puedas integrar y sostener.",
              },
            ],
          },
        ]}
      />
      <ContentSection
        title="El proceso"
        background="light"
        image={process}
        imagePosition="bottom"
        content={[
          "Cada persona tiene su propia historia, su propio ritmo y su propia sensibilidad. Por eso cada proceso es único.",

          "Mi forma de trabajar es personalizada y está basada en el acompañamiento consciente, la escucha profunda y el respeto por el proceso de cada persona.",

          "En nuestras sesiones trabajamos juntos para abrir espacios internos donde lo que estaba bloqueado pueda comenzar a liberarse y transformarse.",
          {
            type: "paragraph",
            content: [
              "Yo acompaño, sostengo el proceso y aporto herramientas. Pero ",
              {
                bold: "cel verdadero cambio ocurre cuando tú comienzas a reconectar con tu propia energía y con tu capacidad de transformación.",
              },
            ],
          },

          {
            type: "paragraph",
            content: [
              "Porque el poder que transforma tu vida ",
              {
                bold: "no está fuera de ti. Siempre ha estado dentro.",
              },
            ],
          },
        ]}
      />
      <ContentSection
        title="La esencia de Belleza del Ser"
        background="white"
        content={[
          {
            type: "paragraph",
            content: [
              "En ",
              {
                bold: "Belleza del Ser ",
              },
              "  creemos que la verdadera transformación comienza en el interior.",
            ],
          },

          "Creemos que cada persona tiene dentro de sí una energía única, un poder que muchas veces queda oculto bajo bloqueos, miedos, experiencias del pasado o creencias que nos limitan.",

          "También creemos que cuando una persona vuelve a conectar con su energía, algo cambia: ",
          "la vida comienza a ordenarse, los caminos se abren y la realidad empieza a reflejar esa nueva conciencia.",

          "Para nosotros, la belleza no es solo algo que se ve.La verdadera belleza nace cuando una persona vuelve a habitarse con autenticidad, coherencia y conexión con su esencia.",
          {
            type: "bold",
            text: "Belleza del Ser es un espacio para recordar quién eres, liberar lo que te bloquea y abrirte a una vida más consciente, plena y alineada con tu verdadero poder.",
          },
        ]}
      />
    </>
  );
}

export default AboutMe;
