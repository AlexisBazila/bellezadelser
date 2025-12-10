import React from "react";
import "./TipoSesionSection.css";

export default function TipoSesionSection({ tipos = ["vivo", "distancia"] }) {
  // Diccionario de sesiones disponibles
  const sesiones = {
    vivo: {
      titulo: "Sesión en Vivo",
      descripcion:
        "Conectamos por videollamada para trabajar la energía en tiempo real. Recibes la sesión de manera personalizada, con guía y acompañamiento durante todo el proceso.",
    },
    distancia: {
      titulo: "Sesión a Distancia",
      descripcion:
        "La sesión se realiza sin necesidad de conectarte. Trabajo con tu energía y luego recibes un video con la experiencia completa y las sensaciones canalizadas especialmente para ti.",
    },
  };

  return (
    <section className="tipo-sesion-section">
      <h2 className="titulo-tipo-sesion">Tipos de sesión</h2>

      <div className="cards-container">
        {tipos.map((tipo) =>
          sesiones[tipo] ? (
            <div key={tipo} className="card-sesion">
              <h3>{sesiones[tipo].titulo}</h3>
              <p>{sesiones[tipo].descripcion}</p>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
