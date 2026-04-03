import React, { useState } from "react";
import "./PackCard.css";
import FirstButton from "../firstButton/FirstButton";
import ButtonAgenda from "../ButtonAgenda/ButtonAgenda";

function PackCard({
  code,
  title,
  modalidad,
  includes = [],
  description,
  sessionName,
  links,
}) {
  const [step, setStep] = useState(1);
  const [sessionType, setSessionType] = useState(null);

  // 🔥 Generador WhatsApp
  const generateWhatsAppLink = (tipoSesion) => {
    const phone = "5493755447658";

    const message = `Hola!
Quisiera agendar el pack ${sessionName} (${tipoSesion}).

Mi nombre es:
Disponibilidad horaria:`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="pack-card">
      <div className="pack-container">
        {/* Código */}
        <span className="pack-code">{code}</span>

        {/* Título */}
        <h2 className="pack-title">{title}</h2>

        {/* Modalidad */}
        <p className="pack-modalidad">
          <strong>Modalidad:</strong> {modalidad}
        </p>

        {/* Incluye */}
        <div className="pack-includes">
          <strong>Incluye:</strong>
          <ul>
            {includes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Descripción */}
        <p className="pack-description">{description}</p>

        {/* 🔥 STEP 1 */}
        {step === 1 && (
          <div className="pack-button">
            <button className="reserve-btn" onClick={() => setStep(2)}>
              Reservar Pack
            </button>
          </div>
        )}

        {/* 🔥 STEP 2 → tipo sesión */}
        {step === 2 && (
          <div className="pack-step">
            <h3>Selecciona modalidad</h3>

            <div className="pack-buttons">
              {links.online && (
                <ButtonAgenda
                  caption="Sesión en Vivo"
                  onClick={() => {
                    setSessionType("online");
                    setStep(3);
                  }}
                />
              )}

              {links.distance && (
                <ButtonAgenda
                  caption="Sesión a Distancia"
                  onClick={() => {
                    setSessionType("distance");
                    setStep(3);
                  }}
                />
              )}
            </div>

            <button className="back-btn" onClick={() => setStep(1)}>
              ← Volver
            </button>
          </div>
        )}

        {/* 🔥 STEP 3 → pago */}
        {step === 3 && sessionType && (
          <div className="pack-step">
            <h3>Selecciona el medio de pago</h3>

            <div className="pack-buttons">
              {/* WhatsApp */}
              {links[sessionType]?.latam && (
                <FirstButton
                  caption={
                    <>
                      <span>Argentina</span>
                      <br />
                      <span>Reservar por WhatsApp</span>
                    </>
                  }
                  link={generateWhatsAppLink(
                    sessionType === "online" ? "en vivo" : "a distancia",
                  )}
                  newTab={true}
                />
              )}

              {/* Internacional */}
              {links[sessionType]?.world && (
                <FirstButton
                  caption={
                    <>
                      <span>Internacional</span>
                      <br />
                      <span>PayPal / Tarjeta</span>
                    </>
                  }
                  link={links[sessionType].world}
                />
              )}
            </div>

            <button className="back-btn" onClick={() => setStep(2)}>
              ← Volver
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PackCard;
