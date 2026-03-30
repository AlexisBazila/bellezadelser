import React from "react";
import "./TipoSesionSection.css";

export default function TipoSesionSection({ tipos = ["vivo", "distancia"] }) {
  // Diccionario de sesiones disponibles
  const sesiones = {
    vivo: {
      titulo: "Sesión Online",
      descripcion: "Por videollamada",
    },
    distancia: {
      titulo: "Sesión a Distancia",
      descripcion: "Sin conexión en vivo",
    },
  };

  return (
    <section className="tipo-sesion-section">
      <h2 className="titulo-tipo-sesion">¿Cómo es una sesión?</h2>

      <div className="cards-container">
        {tipos.map((tipo) =>
          sesiones[tipo] ? (
            <div key={tipo} className="card-sesion">
              <h3>{sesiones[tipo].titulo}</h3>
              <p>{sesiones[tipo].descripcion}</p>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
