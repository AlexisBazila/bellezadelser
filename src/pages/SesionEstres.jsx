import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionEstresImagen from "../assets/images/sesionEstres.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionEstres() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sanación para el Estrés y la Ansiedad Consciente"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={
            "¿Qué es la Sanación para el Estrés y la Ansiedad Consciente?"
          }
          paragraphs={[
            "La Sanación para el Estrés y la Ansiedad Consciente es un acompañamiento bold[energético y emocional] para personas que viven con tensión constante, sobrecarga mental o dificultad para relajarse y habitar el presente.",

            "Este trabajo ayuda al bold[sistema nervioso a regularse], al cuerpo a salir del estado de alerta permanente y crea un bold[espacio seguro de contención, calma y reconexión interna.]",
          ]}
          imageDesktop={SesionEstresImagen}
          imageMobile={SesionEstresImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes bold[estrés crónico o acumulado]",
                "Vives con bold[ansiedad, nerviosismo o inquietud constante]",
                "Tu mente está bold[acelerada o con pensamientos repetitivos]",
                "Experimentas bold[agotamiento emocional]",
                "Te cuesta bold[descansar, relajarte o dormir profundamente]",
                "Percibes bold[tensión corporal frecuente]",
                "Te mueves desde la bold[exigencia, la autoexigencia o el control excesivo]",
              ],
            },
            {
              type: "paragraph",
              text: "Esta sanación acompaña el proceso de bold[calmar la mente, relajar el cuerpo y regular el sistema energético], ayudándote a volver a un estado de presencia, equilibrio y calma interior",
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
                "Calma mental y emocional",
                "Regulación del sistema nervioso",
                "Mejor descanso y calidad de sueño",
                "Mayor presencia y claridad",
                "Sensación de seguridad interna",
                "Reducción de la ansiedad sostenida en el tiempo",
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
                "Es un trabajo energético complementario, no médico",
                "No reemplaza tratamientos médicos ni psicológicos",
                "Cada persona responde de forma distinta",
                "Es un trabajo en equipo: la energía acompaña y tu integras hábitos conscientes",
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
                "Sesión energética completa",
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué se trabajó",
                    "Qué zonas estaban más cargadas",
                    "Qué puede estar generando el estrés a nivel energético",
                    "Recomendaciones para sostener la calma",
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
              world:
                "https://calendly.com/bellezadelseroficial/sanaestresvivoeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              latam: true,
              world:
                "https://calendly.com/bellezadelseroficial/sanaestresdiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Sanación para el Estrés y la Ansiedad Consciente"
        />
      </div>
    </>
  );
}

export default SesionEstres;
