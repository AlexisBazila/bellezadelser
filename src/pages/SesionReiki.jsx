import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionReikiImage from "../assets/images/sesionReiki.png";
import SesionReikiIMovil from "../assets/images/sesionReikiMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";

function SesionReiki() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Reiki"}
          subtitle={
            "Equilibra tu energía, libera bloqueos y recupera la armonía interior a través de la sanación con Reiki."
          }
          duracion={"60 minutos"}
          modalidad={"Online"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Reiki?"}
          paragraphs={[
            "El Reiki es una práctica energética japonesa que busca restablecer el equilibrio natural del cuerpo, la mente y las emociones. A través de la imposición de manos, el terapeuta canaliza energía vital para armonizar los centros energéticos, liberar tensiones, aliviar el estrés y favorecer un estado profundo de bienestar interior.",
            "Es una terapia suave, no invasiva y apta para todas las personas, ideal para acompañarte en momentos de cansancio, bloqueo emocional, ansiedad o cuando simplemente necesitás reconectar con tu energía y encontrar calma.",
          ]}
          imageDesktop={SesionReikiImage}
          imageMobile={SesionReikiIMovil}
        />
        <SessionCalendarSection
          title={"Agenda tu sesión"}
          caption1={"Latinoamerica →"}
          link1={"https://mpago.la/2EYc429"}
          caption2={"Europa y Norteamerica →"}
          link2={"https://calendly.com/alexisabazila/30min?month=2025-11"}
        />
      </div>
    </>
  );
}

export default SesionReiki;
