import React from "react";
import SmallButton from "../../components/smallButton/SmallButton";
import "./InversionTrasciendeSection.css";

function InversionTrasciendeSection() {
  return (
    <section className="InversionTrasciendeSection">
      <div className="InversionTrasciendeContainer">
        <h2 className="InversionTitle">Inversión</h2>

        <p className="InversionSubtitle">
          TRASCIENDE™ - Una experiencia premium de transformación integral
        </p>

        <div className="InversionCard">
          <div className="InversionOriginalPriceContainer">
            <span className="InversionOriginalLabel">Valorado</span>

            <span className="InversionOriginalPrice">
              <s>3.497€</s>
            </span>
          </div>

          <div className="InversionCurrentPriceContainer">
            <span className="InversionCurrentLabel">Precio</span>

            <h3 className="InversionCurrentPrice">999€</h3>

            <span className="InversionInstallments">(única cuota de 999€)</span>
          </div>
        </div>

        <div className="InversionButton">
          <SmallButton caption="Solicitar Mi Plaza" link="https://calendly.com/bellezadelseroficial/expeciende" />
        </div>

        <p className="InversionFootnote">
          Precio especial Edición Fundadora. Plazas limitadas.
        </p>

        <p className="InversionFootnote">Acompañamiento premium exclusivo.</p>
      </div>
    </section>
  );
}

export default InversionTrasciendeSection;
