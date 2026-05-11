import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionOncologicoImagen from "../assets/images/sesionOncologico.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionReikiOncologico() {
  return (
    <>
      <div>
        <HeroSession
          title={"Reiki Oncológico"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Reiki Oncológico?"}
          paragraphs={[
            "El Reiki Oncológico es un acompañamiento energético bold[amoroso y respetuoso] para personas que atraviesan un diagnóstico oncológico, durante tratamientos o procesos de recuperación.",

            "El Reiki ayuda a bold[armonizar el campo energético, favorecer estados de calma profunda y aliviar tensiones emocionales], acompañando al cuerpo y al alma en un momento de gran sensibilidad.",
          ]}
          imageDesktop={SesionOncologicoImagen}
          imageMobile={SesionOncologicoImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Estás atravesando bold[estrés, miedo o ansiedad frente a un diagnóstico]",
                "Transitas o acompañas bold[quimioterapia, radioterapia u otros tratamientos]",
                "Sientes bold[fatiga física y emocional]",
                "Experimentas bold[dolor o malestar general]",
                "Tienes bold[insomnio o alteraciones en el descanso]",
                "Vives bold[cambios emocionales profundos]",
                "Estás en un proceso de bold[aceptación y transformación personal]",
                "Te encuentras en una etapa de bold[recuperación y fortalecimiento energético]",
              ],
            },
            {
              type: "paragraph",
              text: "El Reiki Oncológico crea un bold[espacio interno de calma, contención y acompañamiento], ayudando a reconectar con la propia fuerza vital y a transitar el proceso con mayor equilibrio y serenidad.",
            },
          ]}
        />
        <TipoSesionSection tipos={["distancia"]} />
        <SesionSections
          title="Este acompañamiento es ideal para:"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Personas con bold[diagnóstico oncológico en cualquier etapa]",
                "Quienes buscan bold[sostén emocional y energético]",
                "Personas que desean atravesar su proceso con bold[mayor calma y conciencia]",
                "Familias que desean bold[acompañar desde el amor y la energía]",
              ],
            },
          ]}
        />
        <SesionSections
          title="Beneficios"
          variant="soft"
          content={[
            {
              type: "list",
              items: [
                "Sensación profunda de calma y contención",
                "Disminución del estrés y la ansiedad",
                "Mejor descanso",
                "Acompañamiento emocional",
                "Fortalecimiento energético",
                "Mayor conexión con la fuerza interior",
              ],
            },
            {
              type: "paragraph",
              text: "Los efectos pueden sentirse de forma inmediata o de manera progresiva en los días siguientes.",
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
                "El Reiki es un acompañamiento energético, no un tratamiento médico",
                "No sustituye quimioterapia, medicación ni indicaciones médicas",
                "Cada persona vive su proceso de manera única",
                "Es un trabajo en equipo: la energía acompaña y el proceso continúa en la vida diaria",
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
                " Sesión energética completa",
                {
                  text: " Informe energético personalizado con:",
                  children: [
                    "Zonas trabajadas",
                    "Percepciones energéticas",
                    "Qué puede estar expresando el cuerpo a nivel energético",
                    "Recomendaciones para los días siguientes",
                  ],
                },
              ],
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            distance: {
              latam:
                "https://calendly.com/bellezadelseroficial/oncoarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/oncoeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Reiki Oncológico"
        />
      </div>
    </>
  );
}

export default SesionReikiOncologico;
