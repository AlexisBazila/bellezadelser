import React from "react";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import SmallButton from "../../components/smallButton/SmallButton";
import "./TrasciendeDescriptionSection.css";

function TrasciendeDescriptionSection() {
  return (
    <>
      <section className="TrasciendeDescriptionSection">
        <div className="TrasciendeDescriptionParagraph">
          <h2>
            Hay momentos en la vida en los que el cambio superficial deja de ser
            suficiente.
          </h2>

          <p>
            Porque llega un punto en el que ya no se trata solo de cómo te ves.
            Se trata de cómo te sientes. De la energía que sostienes. De las
            decisiones que tomas. De la identidad que habitas. Y de si la vida
            que hoy estás construyendo realmente refleja la persona en la que
            deseas convertirte.
          </p>

          <p>
            Muchas personas intentan transformar su vida cambiando hábitos,
            rutinas, metas, relaciones o incluso su imagen externa. Pero cuando
            la identidad, la energía y la forma de habitarse internamente no
            cambian… la realidad termina repitiéndose.
          </p>
        </div>
        <div className="TrasciendeDescriptionParagraph">
          <h2>TRASCIENDE™ nace para romper ese patrón.</h2>

          <p>
            No como un programa tradicional. No como una mentoría más. Sino como
            una experiencia profunda y personalizada diseñada para ayudarte a
            reconstruirte desde adentro hacia afuera.
          </p>

          <p>
            Porque la transformación real no ocurre cuando intentas convertirte
            en alguien diferente.
          </p>
        </div>
        <SmallButton caption="Reservar Mi Plaza" link="https://calendly.com/bellezadelseroficial/expeciende" />
      </section>
    </>
  );
}

export default TrasciendeDescriptionSection;
