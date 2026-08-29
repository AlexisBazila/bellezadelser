import React from "react";
import "./CredencialesAcademiaSection.css";

import AñosExperienciaIcon from "../../assets/images/AñosExperiencia.svg";
import MetodoAcademiaIcon from "../../assets/images/MetodoAcademia.svg";
import VidasIcon from "../../assets/images/Vidas.svg";
import ComunidadIcon from "../../assets/images/Comunidad.svg";

function CredencialesAcademiaSection() {
  const credenciales = [
    {
      icon: AñosExperienciaIcon,
      label: "+10 años de experiencia",
    },
    {
      icon: MetodoAcademiaIcon,
      label: "Método propio Arquitectura del Ser",
    },
    {
      icon: VidasIcon,
      label: "Miles de vidas transformadas",
    },
    {
      icon: ComunidadIcon,
      label: "Comunidad global",
    },
  ];

  return (
    <section className="CredencialesAcademiaSection">
      <div className="CredencialesAcademiaContainer">
        {credenciales.map((item, index) => (
          <React.Fragment key={index}>
            <div className="CredencialesAcademiaItem">
              <img
                src={item.icon}
                alt={item.label}
                className="CredencialesAcademiaIcon"
              />
              <span className="CredencialesAcademiaLabel">{item.label}</span>
            </div>

            {index < credenciales.length - 1 && (
              <div
                className="CredencialesAcademiaDivider"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default CredencialesAcademiaSection;
