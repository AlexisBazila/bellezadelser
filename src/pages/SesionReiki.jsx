import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionReikiImage from "../assets/images/sesionReiki.png";
import SesionReikiIMovil from "../assets/images/sesionReikiMovil.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";

function SesionReiki() {
  return (
    <>
      <div>
        <HeroSession
          title={"Sesión de Reiki"}
          subtitle={
            "Equilibra tu energía, libera bloqueos y recupera la armonía interior a través de la sanación con Reiki."
          }
          duracion={"50 minutos"}
          modalidad={"Online y a Distancia"}
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
        <TipoSesionSection />
        <SessionCalendarSection
          links={{
            online: {
              // latam: "https://mpago.la/19RE6ZU",
              world:
                "https://calendly.com/bellezadelseroficial/reikioneu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              // latam: "https://mpago.la/2jXJn7i",
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
