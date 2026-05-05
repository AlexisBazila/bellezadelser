import React, { useState } from "react";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import "./FQA.css";

function FQA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      pregunta: "¿En qué moneda puedo pagar mi sesión?",
      respuesta: [
        "Las sesiones que están en euros pagas por PayPal en tu moneda local.",
        "Puedes utilizar tarjeta de débito, crédito o Paypal wallet.",
        "Para saber cuánto es en tu moneda local, puedes ver la cotización del euro en el sitio web de tu banco.",
        "Crear tu cuenta de PayPal es gratuito.",
        "Si eres de Argentina, tienes la opción de realizar el pago a través de Mercado Pago y/o transferencia bancaria.",
      ],
    },
    {
      pregunta: "Agendé una sesión y no puedo asistir ¿qué hago?",
      respuesta: [
        "Si algo surge, sólo avísame.",
        "Debes avisar con 48 horas de antelación para no perder tu sesión.",
        "Puedes enviar un email a oficialbellezadelser@gmail.com con tu nombre completo.",
        "También puedes comunicarte por WhatsApp al número que aparece en la web.",
      ],
    },
    {
      pregunta: "¿Según qué zona horaria se agenda mi sesión?",
      respuesta: [
        "La agenda se realiza a través de Calendly.",
        "Al seleccionar la sesión, se abrirá un calendario para elegir día y horario.",
        "Podrás verificar y seleccionar tu zona horaria en el calendario.",
        "Es importante confirmarla antes de reservar.",
      ],
    },
    {
      pregunta: "Quiero regalar una sesión ¿puedo hacerlo?",
      respuesta: [
        "¡Sí, claro! Es algo muy especial y frecuente.",
        "La experiencia se adapta a la persona que la recibe.",
        "Para coordinar el regalo puedes enviar un email o contactar por WhatsApp.",
      ],
    },
    {
      pregunta: "¿Puedo realizarle una sesión a un niño/a?",
      respuesta: [
        "Sí, es posible realizar sesiones a niños y niñas.",
        "Siempre con el consentimiento de sus padres o cuidadores.",
        "Cada caso se evalúa de manera personalizada.",
      ],
    },
    {
      pregunta: "¿Puedo realizar una sesión a otra persona sin que lo sepa?",
      respuesta: [
        "No.",
        "Las sesiones solo se realizan con el consentimiento de la persona.",
        "Respetar el proceso y el libre albedrío es fundamental.",
      ],
    },
  ];

  return (
    <div className="Acordion">
      <div className="titleSession">
        <h2 className="titleSection">Preguntas Frecuentes</h2>
      </div>

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
