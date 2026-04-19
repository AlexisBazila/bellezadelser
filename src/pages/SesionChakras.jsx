import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionChakrasImagen from "../assets/images/sesionChakras.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionChakras() {
  return (
    <>
      <div>
        <HeroSession
          title={"Limpieza y Alineación de chakras"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es la Limpieza y Alineación de Chakras?"}
          paragraphs={[
            "La Limpieza y Alineación de Chakras es un trabajo energético que acompaña la bold[liberación de bloqueos y la armonización del flujo vital], ayudando a equilibrar bold[cuerpo, mente y emociones.]",

            "Cuando la energía se desordena por estrés o experiencias intensas, pueden aparecer bold[cansancio, confusión o sensación de estancamiento.] Esta sesión busca bold[ordenar y realinear la energía] para que vuelva a fluir de forma más equilibrada y consciente.",
          ]}
          imageDesktop={SesionChakrasImagen}
          imageMobile={SesionChakrasImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes bold[estrés, ansiedad o sobrecarga mental]",
                "Experimentas bold[cansancio físico o falta de energía]",
                "Percibes bold[bloqueos emocionales repetitivos]",
                "Te cuesta bold[expresarte con claridad o tomar decisiones]",
                "Atraviesas bold[momentos de baja autoestima]",
                "Sientes bold[estancamiento en distintas áreas de tu vida]",
                "Percibes bold[desconexión espiritual o falta de alineación interna]",
              ],
            },
            {
              type: "paragraph",
              text: "Esta sesión acompaña un proceso de bold[limpieza, armonización y alineación de los chakras], favoreciendo un equilibrio integral entre cuerpo, mente y energía.",
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
                "Equilibrio energético integral",
                "Más vitalidad y energía",
                "Calma emocional",
                "Claridad mental",
                "Mejor conexión contigo mismo",
                "Armonía entre cuerpo, mente y emoción",
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
                "Es un trabajo energético, no reemplaza tratamientos médicos",
                "Cada persona responde de forma distinta",
                "Es un trabajo en equipo: la energía acompaña y tu sostienes el proceso en tu vida diaria",
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
                "Chakras trabajados",
                "Qué se percibió en cada uno",
                "Qué pueden estar expresando esos bloqueos",
                "Recomendaciones personalizadas",
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
          sessionName="Limpieza y Alineación de chakras"
        />
      </div>
    </>
  );
}

export default SesionChakras;
