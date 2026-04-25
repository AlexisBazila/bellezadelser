import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionBellezaImagen from "../assets/images/sesionBelleza.png";
import SesionSections from "../components/SesionSections/SesionSections";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";

function SesionBelleza() {
  return (
    <>
      <div>
        <HeroSession
          title={"Ritual de Belleza Holística Personalizado"}
          subtitle={
            "Cuidado consciente de la piel – Energía – Presencia – Bienestar"
          }
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          paragraphs={[
            "El Ritual de Belleza Holística Personalizado es una bold[experiencia integral de cuidado consciente del rostro y la piel, que combina energía, masaje facial, presencia y regulación del sistema nervioso.]",
            "No es un tratamiento estético tradicional.No es una rutina mecánica.",
            "Es un bold[ritual profundo de reconexión con el cuerpo], donde el rostro se trabaja como un bold[mapa emocional y energético], y la piel como reflejo del equilibrio interno.",
          ]}
          imageDesktop={SesionBellezaImagen}
          imageMobile={SesionBellezaImagen}
        />
        <SesionSections
          title="Este ritual es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes tu bold[piel apagada, cansada o tensionada]",
                "Acumulas bold[estrés en rostro, mandíbula, cuello u hombros]",
                "Notas bold[tensión mental reflejada en la piel]",
                "Buscas un cuidado bold[profundo, consciente y respetuoso]",
                "Quieres mejorar la vitalidad de la piel bold[sin agresión]",
                "Necesitas bold[bajar revoluciones y volver al cuerpo]",
                "Deseas un espacio real de bold[autocuidado y pausa]",
              ],
            },
          ]}
        />
        <SesionSections
          title="¿Qué hace único a este ritual?"
          variant="white"
          content={[
            {
              type: "list",
              items: [
                "Es bold[100% personalizado]",
                "Integra bold[cuidado consciente de la piel + masaje facial + energía]",
                "Trabaja bold[tensiones profundas del rostro]",
                "No sigue protocolos estandarizados",
                "Respeta los bold[ritmos naturales del cuerpo y la piel]",
                "La piel se cuida desde la bold[presencia], no desde la exigencia",
              ],
            },
            {
              type: "paragraph",
              text: "Este ritual bold[no fuerza resultados.]",
            },
            {
              type: "paragraph",
              text: "Crea las condiciones para que la piel vuelva a su equilibrio natural.",
            },
            {
              type: "paragraph",
              text: "(Productos y técnicas se adaptan a tu piel y a tu momento vital).",
            },
          ]}
        />
        <SesionSections
          title="Masaje facial holístico (eje central del ritual)"
          variant="light"
          content={[
            {
              type: "paragraph",
              text: "Incluye técnicas conscientes como:",
            },
            {
              type: "list",
              items: [
                "Masaje facial profundo y lento",
                "Liberación de tensiones en mandíbula, pómulos y frente",
                "Trabajo en cuello, nuca y hombros",
                "Estimulación de puntos energéticos del rostro",
                "Movimientos que inducen calma y regulación del sistema nervioso",
              ],
            },
            {
              type: "paragraph",
              text: "El masaje no busca solo “tonificar”,",
            },
            {
              type: "paragraph",
              text: "busca bold[liberar lo que la piel está sosteniendo.]",
            },
          ]}
        />
        <SesionSections
          title="Energía & bienestar"
          variant="white"
          content={[
            {
              type: "list",
              items: [
                "Limpieza energética del campo personal",
                "Armonización energética del rostro y el cuerpo",
                "Trabajo en centros energéticos vinculados al descanso y la vitalidad",
                "Integración de energía de calma, suavidad y presencia",
                "Sellado energético final",
              ],
            },
          ]}
        />
        <SesionSections
          title="¿Cómo es la experiencia?"
          variant="strong"
          content={[
            {
              type: "list",
              items: [
                "Se realiza de forma online (Zoom o videollamada)",
                "En un espacio cuidado, lento y consciente",
                "Cada ritual es único, adaptado a tu piel, tu energía y tu momento vital",
              ],
            },
          ]}
        />
        <SesionSections
          title=" ¿Qué se suele sentir después?"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Piel más relajada y vital.",
                "Sensación de liviandad en el rostro.",
                "Descanso profundo.",
                "Calma mental.",
                "Menos tensión en mandíbula, cuello y hombros.",
                "Bienestar general sostenido.",
              ],
            },
          ]}
        />
        <SesionSections
          title=" Importante saber"
          variant="white"
          content={[
            {
              type: "list",
              items: [
                "No es un tratamiento médico ni dermatológico.",
                "No reemplaza tratamientos clínicos.",
                "No es invasivo ni agresivo.",
                "Respeta los ritmos naturales de la piel.",
                "El bienestar se construye de forma progresiva.",
              ],
            },
          ]}
        />
        <SesionSections
          title="Duración del ritual"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Duración aproximada: bold[90 minutos]",
                "Ritmo lento y respetuoso",
                "Puede repetirse de forma periódica según necesidad",
              ],
            },
            {
              type: "paragraph",
              text: "La piel no necesita más exigencia.",
            },
            {
              type: "paragraph",
              text: "Necesita presencia, cuidado y energía en equilibrio.",
            },
          ]}
        />
        <SessionCalendarSection
          links={{
            distance: {
              latam: true,
              world:
                "https://calendly.com/bellezadelseroficial/ritueu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Ritual de Belleza Holística Personalizado"
        />
      </div>
    </>
  );
}

export default SesionBelleza;
