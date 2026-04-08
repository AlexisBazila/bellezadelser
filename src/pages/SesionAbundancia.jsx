import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionAbundanciaImagen from "../assets/images/sesionAbundancia.png";
import SesionReikiIMovil from "../assets/images/sesionReikiMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionAbundancia() {
  return (
    <>
      <div>
        <HeroSession title={"Activación de Abundancia y Apertura de Caminos"} />
        <ProductDescriptionSection
          subTtitle={"¿Qué es Activación de Abundancia y Apertura de Caminos?"}
          paragraphs={[
            "La Activación de Abundancia y Apertura de Caminos es un trabajo energético profundo que acompaña procesos de desbloqueo, orden y expansión, ayudando a que la energía de la abundancia vuelva a fluir de forma natural.",
            "Muchas veces la abundancia se ve limitada por creencias inconscientes, lealtades familiares, miedos, cargas energéticas o experiencias pasadas que cierran caminos.",
            "Este trabajo busca liberar esos bloqueos y activar el merecimiento y la capacidad de recibir.",
          ]}
          imageDesktop={SesionAbundanciaImagen}
          imageMobile={SesionReikiIMovil}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Experimentas bloqueos económicos repetidos",
                "Sientes que haces mucho esfuerzo, pero no avanzas",
                "Atraviesas estancamiento laboral o profesional",
                "Te cuesta atraer oportunidades o sostener la abundancia",
                "Aparecen miedos a crecer, ganar o cobrar",
                "Sientes confusión sobre tu propósito o dirección",
                "Estás por iniciar un nuevo proyecto o emprendimiento",
                "Estás cerrando o abriendo ciclos y necesitas ordenar tu energía",
              ],
            },
            {
              type: "paragraph",
              text: "Esta activación acompaña el proceso de liberar bloqueos y abrirte al merecimiento y la recepción, para que la abundancia pueda expresarse con mayor fluidez.",
            },
          ]}
        />
        <TipoSesionSection />
        <SesionSections
          title="Beneficios"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Mayor claridad y enfoque.",
                "Sensación de avance y movimiento.",
                "Apertura a nuevas oportunidades.",
                "Mayor confianza y merecimiento.",
                "Fluidez económica y laboral.",
                "Energía alineada con la expansión.",
              ],
            },
          ]}
        />
        <SesionSections
          title="Importante saber"
          variant="strong"
          content={[
            {
              type: "list",
              items: [
                "Es un trabajo energético, no mágico ni inmediato.",
                "No reemplaza acciones concretas ni decisiones personales.",
                "Cada persona vive su proceso a su ritmo.",
                "Es un trabajo en equipo: la energía acompaña y tu accionas.",
              ],
            },
          ]}
        />
        <SesionSections
          title="Incluye"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                { text: " Sesión energética completa." },
                {
                  text: "Informe energético con:",
                  children: [
                    "Qué se trabajó",
                    "Qué bloqueos se detectaron",
                    "Qué pueden estar representando",
                    "Recomendaciones para sostener la activación",
                  ],
                },
              ],
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            online: {
              latam: true,
              world: "https://calendly.com/bellezadelseroficial/",
            },
            distance: {
              latam: true,
              world: "https://calendly.com/bellezadelseroficial/",
            },
          }}
          sessionName="Reiki Usui"
        />
      </div>
    </>
  );
}

export default SesionAbundancia;
