import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionReikiImage from "../assets/images/sesionReiki.png";
import SesionReikiIMovil from "../assets/images/sesionReikiMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionReiki() {
  return (
    <>
      <div>
        <HeroSession title={"Reiki Usui – Sanación Energética Integral"} />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Reiki Usui?"}
          paragraphs={[
            "El Reiki Usui es una técnica de sanación energética de origen japonés que acompaña al Ser de forma integral: cuerpo, emoción, mente y energía.",
            "Es un método suave y no invasivo que ayuda a ordenar el campo energético para que la energía vuelva a fluir de manera natural, según lo que cada persona necesita en ese momento.",
          ]}
          imageDesktop={SesionReikiImage}
          imageMobile={SesionReikiIMovil}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes estrés, cansancio, ansiedad o confusión sin un motivo claro",
                "Percibes que algo no está bien, aunque no sepas explicarlo",
                "Necesitas equilibrio y armonización energética general",
                "Tu cuerpo y tu energía piden pausa, orden y descanso",
                "Quieres iniciar un proceso de sanación sin forzar, desde un lugar amoroso",
              ],
            },
            {
              type: "paragraph",
              text: "El Reiki actúa como un ordenador energético, acompañando el equilibrio incluso cuando la mente aún no tiene respuestas.",
            },
          ]}
        />
        <TipoSesionSection />
        <SesionSections
          title="Beneficios del Reiki Usui"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Equilibrio energético integral",
                "Disminución del estrés",
                "Mayor calma y claridad",
                "Mejor descanso",
                "Sensación de contención y paz",
                "Acompañamiento en procesos de cambio",
                "Conexión con el propio cuerpo y energía",
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
                "El Reiki es un acompañamiento energético complementario",
                "No reemplaza tratamientos ni terapias médicas",
                "Cada proceso es único y personal",
                "Es un trabajo en equipo: la energía acompaña y tú sostienes el proceso en tu vida diaria",
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
                { text: "Sesión energética completa" },
                { text: "Escaneo y armonización del campo energético" },
                { text: "Trabajo sobre centros energéticos (chakras)" },
                { text: "Limpieza energética y sellado de protección" },
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué se trabajó en la sesión",
                    "Bloqueos energéticos detectados",
                    "Lectura del cuerpo y la energía",
                    "Recomendaciones prácticas para integrar el proceso",
                  ],
                },
              ],
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            online: {
              // latam: "https://mpago.la/19RE6ZU",
              latam:
                "https://calendly.com/bellezadelseroficial/reikivivo?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/reikioneu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              // latam: "https://mpago.la/2jXJn7i",
              latam:
                "https://calendly.com/bellezadelseroficial/reiki?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/reikidiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
        />
      </div>
    </>
  );
}

export default SesionReiki;
