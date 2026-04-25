import HeroSession from "../layouts/HeroSession/HeroSession";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import SesionUteroImagen from "../assets/images/sesionUtero.png";
import SessionCalendarSection from "../layouts/SessionCalendarSection/SessionCalendarSection";
import TipoSesionSection from "../layouts/TipoSesionSection/TipoSesionSection";
import SesionSections from "../components/SesionSections/SesionSections";

function SesionUtero() {
  return (
    <>
      <div>
        <HeroSession
          title="Sanación de Útero"
          buttonText="Agendar Sesión"
          buttonLink="#sessionCalendar"
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué es la Sanación de Útero?"}
          paragraphs={[
            "La Sanación de Útero acompaña a mujeres en la bold[reconexión con su energía femenina, su historia emocional y su poder creador.]",
            "El útero es un centro energético que guarda bold[memorias propias y heredadas]: vínculos, duelos, sexualidad, maternidad, pérdidas, silencios, pero también placer, bold[creación y sabiduría.]",
            "Esta sanación trabaja a nivel bold[energético, emocional y espiritual], ayudando a liberar cargas antiguas y a devolverle al vientre su lugar de conciencia y poder.",
          ]}
          imageDesktop={SesionUteroImagen}
          imageMobile={SesionUteroImagen}
        />
        <SesionSections
          title="Esta sesión es para ti si…"
          variant="light"
          content={[
            {
              type: "list",
              items: [
                "Experimentas bold[dolores menstruales intensos o recurrentes] (a nivel energético)",
                "Sientes bold[desequilibrios hormonales energéticos]",
                "Percibes bold[desconexión con tu feminidad o tu energía creadora]",
                "Cargas bold[culpa, vergüenza o rechazo hacia tu cuerpo]",
                "Hay bold[heridas con tu madre, hijas o linaje femenino]",
                "Atraviesas o arrastras bold[pérdidas gestacionales o duelos no elaborados]",
                "Has vivido bold[relaciones afectivas dolorosas que dejaron huella]",
                "Sientes bold[bloqueos creativos o dificultad para disfrutar y habitar el placer]",
              ],
            },
            {
              type: "paragraph",
              text: "La Sanación de Útero acompaña un proceso profundo de bold[reconexión, liberación emocional y energética], ayudándote a habitar tu cuerpo desde el amor, la conciencia y el merecimiento.",
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
                "Conexión profunda con tu energía femenina",
                "Liberación emocional",
                "Ligereza en el vientre",
                "Reconciliación con tu cuerpo",
                "Mayor disfrute y creatividad",
                "Fortalecimiento del amor propio",
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
                "Es un trabajo energético y espiritual, no médico",
                "No reemplaza tratamientos ginecológicos",
                "Cada mujer vive su proceso a su ritmo",
                "Es un trabajo en equipo: la energía acompaña y tu sostienes el proceso en tu vida",
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
                  text: "La sesión Incluye informe energético con:",
                  children: [
                    "Qué se trabajó•Qué memorias se percibieron",
                    "Qué pueden significar",
                    "Cómo acompañarte a ti misma los días siguientes",
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
                "https://calendly.com/bellezadelseroficial/sanutevivoeu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
            distance: {
              latam: true,
              world:
                "https://calendly.com/bellezadelseroficial/sanutediseu?hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1",
            },
          }}
          sessionName="Sanación de Útero"
        />
      </div>
    </>
  );
}

export default SesionUtero;
