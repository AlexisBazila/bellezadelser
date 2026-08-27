import React from "react";
import "./CaracteristicasAcademia.css";
import CursoIcon from "../../assets/images/Curso.svg";
import ProgramaIcon from "../../assets/images/Programa.svg";
import MentoriaIcon from "../../assets/images/Mentoria.svg";
import ExperienciaIcon from "../../assets/images/Experiencia.svg";

function CaracteristicasAcademia() {
  const caracteristicas = [
    {
      icon: CursoIcon,
      title: "Cursos",
      subtitle: "Formaciones Online.",
    },
    {
      icon: ProgramaIcon,
      title: "Programas",
      subtitle: "Transformación 360º.",
    },
    {
      icon: MentoriaIcon,
      title: "Mentorías",
      subtitle: "Acompañamiento Personalizado.",
    },
    {
      icon: ExperienciaIcon,
      title: "Experiencias",
      subtitle: "Encuentros de conexión y expansión.",
    },
  ];

  return (
    <section className="CaracteristicasAcademiaSection">
      <div className="CaracteristicasAcademiaTitle">
        <h2>En la Academia encontrarás</h2>
        <p>Todo lo que necesitas para transformar tu vida.</p>
      </div>

      <div className="CaracteristicasAcademiaGrid">
        {caracteristicas.map((item, index) => (
          <div className="CaracteristicasAcademiaCard" key={index}>
            <img
              src={item.icon}
              alt={item.title}
              className="CaracteristicasAcademiaIcon"
            />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaracteristicasAcademia;
