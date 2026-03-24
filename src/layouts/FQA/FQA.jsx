import React, { useState } from "react";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";

function FQA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { pregunta: "algo1?", respuesta: "respuesta1" },
    { pregunta: "algo2?", respuesta: "respuesta2" },
    { pregunta: "algo3?", respuesta: "respuesta3" },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <AccordionMenu
          key={index}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
          isOpen={activeIndex === index}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default FQA;
