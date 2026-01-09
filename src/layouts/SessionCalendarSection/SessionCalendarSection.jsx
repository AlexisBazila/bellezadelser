import React, { useState, useEffect } from "react";
import "./sessionCalendarSection.css";
import FirstButton from "../../components/firstButton/FirstButton";
import ButtonAgenda from "../../components/ButtonAgenda/ButtonAgenda";
import { useLocation } from "react-router-dom";

function SessionCalendarSection({ links }) {
  const { hash } = useLocation();
  const [step, setStep] = useState(1);
  const [sessionType, setSessionType] = useState(null);

  // 🔥 Detectar si hay solo 1 tipo de sesión disponible
  useEffect(() => {
    const availableTypes = Object.keys(links);
    if (availableTypes.length === 1) {
      setSessionType(availableTypes[0]);
      setStep(2);
    }
  }, [links]);

  // Scroll automático si hay hash
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target)
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  return (
    <section className="sessionCalendar" id="sessionCalendar">
      <div className="contentProductsMarked">
        <h2 className="titleSection">Agenda tu sesión</h2>

        {/* STEP 1 → si hay más de una modalidad */}
        {step === 1 && (
          <div className="buttonStore centeredButtons">
            {links.online && (
              <ButtonAgenda
                caption="Sesión en Vivo"
                onClick={() => {
                  setSessionType("online");
                  setStep(2);
                }}
              />
            )}

            {links.distance && (
              <ButtonAgenda
                caption="Sesión a Distancia"
                onClick={() => {
                  setSessionType("distance");
                  setStep(2);
                }}
              />
            )}
          </div>
        )}

        {/* STEP 2 → mostrar regiones segun la modalidad seleccionada */}
        {step === 2 && sessionType && (
          <>
            <h3 className="subtitle">Selecciona el medio de pago</h3>

            <div className="buttonStore centeredButtons">
              {links[sessionType]?.latam && (
                <FirstButton
                  caption="Mercado Pago"
                  link={links[sessionType].latam}
                />
              )}

              {links[sessionType]?.world && (
                <FirstButton
                  caption="Paypal / Tarjeta de crédito"
                  link={links[sessionType].world}
                />
              )}
            </div>

            {/* volver solo si hay más de un tipo de sesión */}
            {Object.keys(links).length > 1 && (
              <div className="backButton">
                <button onClick={() => setStep(1)}>← Volver</button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default SessionCalendarSection;
