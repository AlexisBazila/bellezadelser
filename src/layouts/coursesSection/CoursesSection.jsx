import React from "react";
import "./coursesSection.css";
import SmallButton from "../../components/smallButton/SmallButton";
function CoursesSection() {
  return (
    <section className="coursesSection">
      <div className="titleCourses">
        <h2 className="titleSection">Explora los cursos disponibles </h2>
      </div>
      <div className="cardCourses">
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
      </div>
      <div className="cardCourses">
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
        <div className="card">
          <SmallButton caption={"Saber Más"} />
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
