import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionBloqueosImagen from "../assets/images/sesionBloqueos.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionBloqueos() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sanación de Bloqueos en el Amor"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es Sanación de Bloqueos en el Amor?"}
          paragraphs={[
            "La Sanación de Bloqueos en el Amor es un trabajo energético y emocional que acompaña la bold[liberación de patrones inconscientes] que dificultan vivir vínculos sanos y conscientes.",
            "Muchas veces no es que “no llegue el amor”, sino que existen bold[heridas, miedos o creencias] que cierran el corazón o atraen relaciones dolorosas.",
            "Esta sanación busca bold[ordenar la energía del amor, restaurar la confianza y abrir el corazón desde un lugar seguro.]",
          ]}
          imageDesktop={SesionBloqueosImagen}
          imageMobile={SesionBloqueosImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Te cuesta bold[sostener relaciones estables y sanas]",
                "Repites bold[vínculos dolorosos o tóxicos]",
                "Sientes bold[miedo a amar o a ser amado/a]",
                "Experimentas bold[apego, dependencia emocional o celos]",
                "Hay heridas de bold[abandono o rechazo que siguen activas]",
                "Cargas bold[duelos por rupturas no resueltas]",
                "Necesitas un bold[cierre energético con exparejas]",
                "Sientes bloqueos para bold[abrirte a una nueva relación]",
              ],
            },
            {
              type: "paragraph",
              text: "Esta sanación acompaña el proceso de liberar memorias emocionales, ordenar la energía del corazón y abrirte a vínculos más conscientes y amorosos.",
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
                "Mayor amor propio",
                "Liberación de vínculos del pasado",
                "Claridad emocional",
                "Apertura a relaciones más sanas",
                "Reducción del apego y la dependencia",
                "Sensación de un corazón más liviano y consciente",
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
                "Es un trabajo energético y emocional, no terapia psicológica",
                "No reemplaza procesos terapéuticos cuando son necesarios",
                "Cada persona vive su proceso a su ritmo",
                "Es un trabajo en equipo: la energía acompaña y tu accionas",
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
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué se trabajó",
                    "Qué bloqueos se detectaron",
                    "Qué patrones aparecieron",
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
              latam: true,
              world:
                "https://calendly.com/bellezadelseroficial/sanavivoeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              latam: true,
              world:
                "https://calendly.com/bellezadelseroficial/sanadiseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Sanación de Bloqueos en el Amor"
        />
      </div>
    </>
  );
}

export default SesionBloqueos;
