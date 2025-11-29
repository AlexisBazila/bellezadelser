import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionAcompañamientoImage from "../assets/images/sesionAcompañamiento.png";
import SesionAcompañamientoIMovil from "../assets/images/sesionAcompañamientoMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";

function SesionAcompañamiento() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Acompañamiento Holístico"}
          subtitle={
            "Descubre tu potencial, supera obstáculos y avanza con foco hacia la vida que querés crear."
          }
          duracion={"50 minutos"}
          modalidad={"Online"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Acompañamiento Holístico?"}
          paragraphs={[
            "El Acompañamiento Holístico es un acompañamiento integral que une herramientas de crecimiento personal, gestión emocional y conciencia energética para ayudarte a transformar tu vida desde adentro hacia afuera.",
            "En cada sesión exploramos tus pensamientos, emociones, creencias y hábitos, comprendiendo cómo se relacionan entre sí y cómo influyen en tu bienestar.",
            "Este enfoque te permite ganar claridad, ordenar tu mente, fortalecer tu autoestima y tomar decisiones alineadas con lo que realmente necesitás.",
            "El objetivo es que te sientas más equilibrada, consciente y conectada con vos misma, creando cambios reales y sostenibles en tu día a día.",
          ]}
          imageDesktop={SesionAcompañamientoImage}
          imageMobile={SesionAcompañamientoIMovil}
        />
        <SessionCalendarSection
          links={{
            online: {
              latam: "https:/mpago.la/126Rqtv",
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
