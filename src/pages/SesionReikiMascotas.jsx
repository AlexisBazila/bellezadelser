import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionMascotasImagen from "../assets/images/sesionMascotas.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionReikiMascotas() {
  return (
    <>
      <div>
        <HeroSession
          title={"Reiki para Mascotas"}
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Reiki para Mascotas?"}
          paragraphs={[
            "El Reiki para Mascotas es un acompañamiento energético diseñado para bold[animales que atraviesan procesos físicos, emocionales o energéticos], respetando siempre su sensibilidad y su ritmo natural.",

            "El Reiki actúa de forma bold[suave y profunda], ayudando a equilibrar su campo energético, fortalecer su energía vital y bold[generar estados de calma, bienestar y armonía.]",
          ]}
          imageDesktop={SesionMascotasImagen}
          imageMobile={SesionMascotasImagen}
        />
        <SesionSections
          title="El Reiki puede acompañar a tu mascota si..."
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Vive bold[estrés, ansiedad o miedo] (viajes, mudanzas, fuegos artificiales, visitas al veterinario o cambios en el hogar)",
                "Está atravesando procesos de bold[enfermedad o recuperación]",
                "Presenta bold[dolores físicos o malestar general]",
                "Ha tenido bold[cambios de comportamiento]",
                "Se encuentra en etapas de bold[envejecimiento]",
                "Necesita acompañamiento en bold[momentos delicados o de final de vida]",
                "Es una mascota adoptada con bold[historia de abandono o trauma]",
              ],
            },
            {
              type: "paragraph",
              text: "El Reiki bold[no reemplaza la atención veterinaria], sino que actúa como un bold[acompañamiento energético complementario.]",
            },
          ]}
        />
        <TipoSesionSection tipos={["distancia"]} />
        <SesionSections
          title="Beneficios"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Mayor calma y relajación.",
                "Disminución del estrés.",
                "Mejor adaptación a cambios.",
                "Acompañamiento en procesos de sanación.",
                "Bienestar integral.",
                "Fortalecimiento del vínculo con su familia humana.",
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
                "Cada mascota responde de manera distinta",
                "El Reiki es un trabajo en equipo: la energía acompaña y el entorno sostiene el proceso",
                "Este servicio no reemplaza tratamientos médicos ni veterinarios",
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
                {
                  text: "un informe energético detallado, donde te cuento:",
                  children: [
                    "Qué zonas trabajé",
                    "Qué se percibió a nivel energético",
                    "Qué significan esas sensaciones",
                    "Cómo acompañar a tu mascota los días siguientes",
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
                "https://calendly.com/bellezadelseroficial/reimasarg?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
              world:
                "https://calendly.com/bellezadelseroficial/reimaseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Reiki para Mascotas"
        />
      </div>
    </>
  );
}

export default SesionReikiMascotas;
