import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionLimpiezaEspaciosImagen from "../assets/images/sesionLimpiezaEspacios.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionLimpiezaEspacios() {
  return (
    <>
      <div>
        <HeroSession
          title={
            "Limpieza Energética de Espacios (Hogar, Locales Comerciales, Oficina)"
          }
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es la Limpieza Energética de Espacios?"}
          paragraphs={[
            "La Limpieza Energética de Espacios es un trabajo que bold[armoniza la energía de un lugar], liberando cargas densas y energías estancadas que pueden afectar el bienestar, el descanso y la armonía.",

            "Los espacios guardan bold[memorias emocionales y energéticas.] Esta limpieza busca restablecer el equilibrio, la liviandad y la sensación de paz, para que el espacio bold[vuelva a acompañar la vida que sucede en él.]",
          ]}
          imageDesktop={SesionLimpiezaEspaciosImagen}
          imageMobile={SesionLimpiezaEspaciosImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Sientes bold[pesadez, incomodidad o energía densa en un espacio]",
                "Descansas bold[mal o hay insomnio dentro del hogar]",
                "Se repiten bold[conflictos o tensiones en una casa o lugar de trabajo]",
                "Percibes bold[ambientes tristes, cargados o estancados]",
                "Estás atravesando una bold[mudanza]",
                "El espacio quedó marcado por bold[separaciones, pérdidas o enfermedades]",
                "Vas a abrir un bold[nuevo local, consultorio o emprendimiento]",
                "Hay lugares donde bold[cuesta vender, avanzar o prosperar]",
              ],
            },
            {
              type: "paragraph",
              text: "Esta sesión acompaña un proceso de bold[limpieza, orden y armonización energética del espacio], ayudando a que la energía vuelva a fluir y sostenga bienestar, claridad y prosperidad",
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
                "Es un trabajo energético, no técnico ni estructural",
                "No reemplaza reformas, arreglos ni tratamientos médicos",
                "Cada espacio responde de manera distinta",
                "El proceso se sostiene con el cuidado energético diario del lugar",
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
                "Limpieza energética completa del espacio",
                "Armonización y protección",
                {
                  text: "Informe escrito personalizado con:",
                  children: [
                    "Qué se trabajó•Qué se percibió",
                    "Qué podía estar expresando el espacio",
                    "Recomendaciones para sostener la energía",
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
          sessionName="Limpieza Energética de Espacios (Hogar, Locales Comerciales, Oficina)"
        />
      </div>
    </>
  );
}

export default SesionLimpiezaEspacios;
