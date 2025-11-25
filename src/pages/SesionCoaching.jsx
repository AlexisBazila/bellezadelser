import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionCoachingImage from "../assets/images/sesionCoaching.png";
import SesionCoachingIMovil from "../assets/images/sesionCoachingMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";

function SesionCoaching() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Coaching"}
          subtitle={
            "Descubre tu potencial, supera obstáculos y avanza con foco hacia la vida que querés crear."
          }
          duracion={"60 minutos"}
          modalidad={"Online"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Coaching Holistico?"}
          paragraphs={[
            "El Coaching Holístico es un acompañamiento integral que une herramientas de crecimiento personal, gestión emocional y conciencia energética para ayudarte a transformar tu vida desde adentro hacia afuera.",
            "En cada sesión exploramos tus pensamientos, emociones, creencias y hábitos, comprendiendo cómo se relacionan entre sí y cómo influyen en tu bienestar.",
            "Este enfoque te permite ganar claridad, ordenar tu mente, fortalecer tu autoestima y tomar decisiones alineadas con lo que realmente necesitás.",
            "El objetivo es que te sientas más equilibrada, consciente y conectada con vos misma, creando cambios reales y sostenibles en tu día a día.",
          ]}
          imageDesktop={SesionCoachingImage}
          imageMobile={SesionCoachingIMovil}
        />
        <SessionCalendarSection
          links={{
            online: {
              latam: "https://mpago.la/link-guia",
              world: "https://paypal.com/holistica",
            },
          }}
        />
      </div>
    </>
  );
}

export default SesionCoaching;
