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
        <HeroSession title={"Reiki Oncológico"} />
        <ProductDescriptionSection
          subTtitle={"¿Qué es el Reiki Oncológico?"}
          paragraphs={[
            "El Reiki Oncológico es un acompañamiento energético amoroso y respetuoso para personas que atraviesan un diagnóstico oncológico, durante tratamientos o procesos de recuperación.",

            "El Reiki ayuda a armonizar el campo energético, favorecer estados de calma profunda y aliviar tensiones emocionales, acompañando al cuerpo y al alma en un momento de gran sensibilidad.",
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
                "Estás atravesando estrés, miedo o ansiedad frente a un diagnóstico",
                "Transitas o acompañas quimioterapia, radioterapia u otros tratamientos",
                "Sientes fatiga física y emocional",
                "Experimentas dolor o malestar general",
                "Tienes insomnio o alteraciones en el descanso",
                "Vives cambios emocionales profundos",
                "Estás en un proceso de aceptación y transformación personal",
                "Te encuentras en una etapa de recuperación y fortalecimiento energético",
              ],
            },
            {
              type: "paragraph",
              text: "El Reiki Oncológico crea un espacio interno de calma, contención y acompañamiento, ayudando a reconectar con la propia fuerza vital y a transitar el proceso con mayor equilibrio y serenidad.",
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
                "Personas con diagnóstico oncológico en cualquier etapa",
                "Quienes buscan sostén emocional y energético",
                "Personas que desean atravesar su proceso con mayor calma y conciencia",
                "Familias que desean acompañar desde el amor y la energía",
              ],
            },
          ]}
        />
        <SesionSections
          title="Beneficios"
          variant="white"
          content={[
            {
              type: "list",
              items: [
                "Ambientes livianos y armónicos.",
                "Mejor descanso y bienestar.",
                "Menos tensión emocional.",
                "Mayor claridad y enfoque.",
                "Espacios que acompañan procesos de crecimiento.",
                "Mayor fluidez en trabajo y relaciones.",
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
              latam: true,
              world: "https://calendly.com/bellezadelseroficial/",
            },
          }}
          sessionName="Reiki Oncológico"
        />
      </div>
    </>
  );
}

export default SesionReikiOncologico;
