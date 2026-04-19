import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionAbundanciaImagen from "../assets/images/sesionAbundancia.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionAbundancia() {
  return (
    <>
      <div>
        <HeroSession
          title={"Activación de Abundancia y Apertura de Caminos"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es Activación de Abundancia y Apertura de Caminos?"}
          paragraphs={[
            "La Activación de Abundancia y Apertura de Caminos es un trabajo energético profundo que acompaña procesos de bold[desbloqueo, orden y expansión], ayudando a que la energía de la abundancia vuelva a fluir de forma natural.",
            "Muchas veces la abundancia se ve limitada por bold[creencias inconscientes, lealtades familiares, miedos, cargas energéticas o experiencias pasadas] que cierran caminos.",
            "Este trabajo busca bold[liberar esos bloqueos y activar el merecimiento y la capacidad de recibir.]",
          ]}
          imageDesktop={SesionAbundanciaImagen}
          imageMobile={SesionAbundanciaImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Experimentas bold[bloqueos económicos repetidos]",
                "Sientes que bold[haces mucho esfuerzo, pero no avanzas]",
                "Atraviesas bold[estancamiento laboral o profesional]",
                "Te cuesta bold[atraer oportunidades o sostener la abundancia]",
                "Aparecen bold[miedos a crecer, ganar o cobrar]",
                "Sientes bold[confusión sobre tu propósito o dirección]",
                "Estás por iniciar un bold[nuevo proyecto o emprendimiento]",
                "Estás cerrando o abriendo ciclos y necesitas bold[ordenar tu energía]",
              ],
            },
            {
              type: "paragraph",
              text: "Esta activación acompaña el proceso de bold[liberar bloqueos y abrirte al merecimiento y la recepción], para que la abundancia pueda expresarse con mayor fluidez.",
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
