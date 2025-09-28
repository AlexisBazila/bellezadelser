import React from "react";
import "./coursesSection.css";
import Card from "../../components/Card/Card";
import photo from "../../assets/images/photoExample.png";
import SmallButton from "../../components/smallButton/SmallButton";
function CoursesSection() {
  return (
    <section className="coursesSection">
      <div className="titleCourses">
        <h2 className="titleSection">Explora los cursos disponibles </h2>
      </div>
      <div className="cardCourses">
        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />
        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />

        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />

        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />

        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />

        <Card
          image={photo}
          title="Reiki Nivel 1"
          description="Aprendé a canalizar la energía para tu propio bienestar y el de los demás. Una formación práctica e introductoria para dar tus primeros pasos en el mundo del Reiki."
        />
      </div>
      <div className="coursesButton">
        <SmallButton caption={"Ver Otros Cursos"} />
      </div>
    </section>
  );
}

export default CoursesSection;
