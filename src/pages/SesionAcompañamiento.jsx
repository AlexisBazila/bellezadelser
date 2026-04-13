import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionAcompañamientoImage from "../assets/images/sesionAcompañamiento.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionAcompañamiento() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Acompañamiento Holístico"}
          duracion={"50 minutos"}
          modalidad={"Online"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Acompañamiento Holístico?"}
          paragraphs={[
            "El Acompañamiento Holístico es un proceso integral de crecimiento personal que combina gestión emocional, conciencia energética y trabajo mental para generar cambios reales y sostenibles.",
            "Es un espacio de acompañamiento consciente que te ayuda a ordenar tu mundo interno y avanzar con mayor claridad y coherencia.",
          ]}
          imageDesktop={SesionAcompañamientoImage}
          imageMobile={SesionAcompañamientoImage}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Te sientes estancado/a, confundido/a o sin rumbo claro",
                "Sabes que quieres cambiar, pero te cuesta sostenerlo en el tiempo",
                "Te cuesta tomar decisiones o confiar en ti",
                "Vives con autoexigencia, culpa o diálogo interno crítico",
                "Repites patrones emocionales, mentales o vinculares",
                "Necesitas claridad, foco y dirección",
                "Buscas un acompañamiento que integre mente, emoción y energía",
                "Quieres avanzar con conciencia, no desde la presión",
              ],
            },
            {
              type: "paragraph",
              text: "Cuando la mente se ordena y el alma comprende, la energía también encuentra su equilibrio.",
            },
          ]}
        />
        <TipoSesionSection tipos={["vivo"]} />
        <SesionSections
          title="Beneficios del Acompañamiento Holístico"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Mayor claridad mental y emocional",
                "Orden interno y foco",
                "Fortalecimiento de la autoestima",
                "Comprensión de patrones y bloqueos",
                "Toma de decisiones más consciente",
                "Cambios sostenibles en el día a día",
                "Mayor conexión con tu bienestar y propósito",
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
                "No es terapia psicológica",
                "No reemplaza tratamientos médicos o terapéuticos cuando son necesarios",
                "Cada proceso es único y personal",
                "Es un trabajo en equipo: yo acompaño y tú te involucras activamente",
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
                "Sesión de acompañamiento holístico personalizada",
                "Espacio de escucha, guía y reflexión consciente",
                "Herramientas prácticas de gestión emocional y mental",
                "Integración energética según lo que el proceso requiera",
                "Recomendaciones prácticas para aplicar en tu vida diaria",
              ],
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            online: {
              latam:
                "https://calendly.com/bellezadelseroficial/acompanamiento?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/acomoneu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
        />
      </div>
    </>
  );
}

export default SesionAcompañamiento;
