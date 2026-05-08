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

  // 🔥 Parser para bold[]
  const parseText = (text) => {
    if (!text) return "";

    const parts = text.split(/(bold\[.*?\])/g);

    return parts.map((part, index) => {
      if (part.startsWith("bold[")) {
        const content = part.replace("bold[", "").replace("]", "");

        return <strong key={index}>{content}</strong>;
      }

      return part;
    });
  };

  const generateWhatsAppLink = (tipoSesion) => {
    const phone = "34603011499";

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
        {Array.isArray(includes) && includes.length > 0 && (
          <div className="pack-includes">
            <strong>Incluye:</strong>

            <ul>
              {includes.map((item, i) => (
                <li key={i}>{parseText(item)}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Descripción */}
        <div className="pack-description">
          {Array.isArray(description) ? (
            description.map((parrafo, i) => <p key={i}>{parseText(parrafo)}</p>)
          ) : (
            <p>{parseText(description)}</p>
          )}
        </div>

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
            <div className="buttonStore centeredButtons">
              {links[sessionType]?.latam && (
                <div className="paymentOption">
                  <span className="paymentLabel">Argentina</span>

                  <FirstButton
                    caption="Reservar por WhatsApp"
                    link={generateWhatsAppLink(
                      sessionType === "online" ? "en vivo" : "a distancia",
                    )}
                    newTab={true}
                  />
                </div>
              )}

              {links[sessionType]?.world && (
                <div className="paymentOption">
                  <span className="paymentLabel">Internacional</span>

                  <FirstButton
                    caption="PayPal / Tarjeta"
                    link={links[sessionType].world}
                  />
                </div>
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
