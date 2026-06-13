import React, { useState } from "react";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import "./FQA.css";

function FQA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      pregunta: "¿En qué moneda puedo pagar mi sesión?",
      respuesta: [
        {
          type: "paragraph",
          content:
            "Las sesiones que están en euros se abonan mediante PayPal en tu moneda local.",
        },
        {
          type: "list",
          items: [
            "Puedes utilizar tarjeta de débito.",
            "Puedes utilizar tarjeta de crédito.",
            "También puedes pagar con saldo de PayPal (Paypal Wallet).",
            "Crear una cuenta de PayPal es gratuito.",
          ],
        },
        {
          type: "paragraph",
          content:
            "Para conocer el importe aproximado en tu moneda local puedes consultar la cotización del euro en tu banco.",
        },
        {
          type: "paragraph",
          content:
            "Si te encuentras en Argentina, también existe la posibilidad de abonar mediante Mercado Pago o transferencia bancaria.",
        },
      ],
    },

    {
      pregunta: "Agendé una sesión y no puedo asistir ¿qué hago?",
      respuesta: [
        {
          type: "paragraph",
          content:
            "Si surge algún imprevisto, simplemente comunícate para reprogramar tu sesión.",
        },
        {
          type: "paragraph",
          content:
            "Es importante avisar con al menos 48 horas de anticipación para no perder el turno reservado.",
        },
        {
          type: "paragraph",
          content:
            "Puedes escribir a oficialbellezadelser@gmail.com indicando tu nombre completo.",
        },
        {
          type: "paragraph",
          content:
            "También puedes comunicarte a través de WhatsApp utilizando los medios de contacto disponibles en la web.",
        },
      ],
    },

    {
      pregunta: "¿Según qué zona horaria se agenda mi sesión?",
      respuesta: [
        {
          type: "paragraph",
          content: "Las reservas se gestionan a través de Calendly.",
        },
        {
          type: "paragraph",
          content:
            "Al seleccionar tu sesión accederás a un calendario donde podrás elegir el día y horario disponible.",
        },
        {
          type: "paragraph",
          content:
            "Antes de confirmar la reserva podrás verificar o modificar tu zona horaria.",
        },
        {
          type: "paragraph",
          content:
            "Es importante revisar este dato para evitar confusiones con el horario de la sesión.",
        },
      ],
    },

    {
      pregunta: "Quiero regalar una sesión ¿puedo hacerlo?",
      respuesta: [
        {
          type: "paragraph",
          content:
            "Sí, puedes regalar cualquiera de las experiencias disponibles.",
        },
        {
          type: "paragraph",
          content:
            "Cada proceso se adapta a la persona que lo recibe, respetando su momento y necesidades particulares.",
        },
        {
          type: "paragraph",
          content:
            "Para coordinar el regalo puedes comunicarte por correo electrónico o WhatsApp.",
        },
      ],
    },

    {
      pregunta: "¿Puedo realizarle una sesión a un niño/a?",
      respuesta: [
        {
          type: "paragraph",
          content: "Sí, es posible trabajar con niños y niñas.",
        },
        {
          type: "paragraph",
          content:
            "Siempre será necesario contar con el consentimiento de sus padres o responsables.",
        },
        {
          type: "paragraph",
          content:
            "Cada situación se evalúa previamente para determinar cuál es la mejor forma de acompañar el proceso.",
        },
      ],
    },

    {
      pregunta: "¿Puedo realizar una sesión a otra persona sin que lo sepa?",
      respuesta: [
        {
          type: "paragraph",
          content: "No.",
        },
        {
          type: "paragraph",
          content:
            "Las sesiones únicamente se realizan con el consentimiento explícito de la persona involucrada.",
        },
        {
          type: "paragraph",
          content:
            "El respeto por el libre albedrío y los procesos personales forma parte fundamental de la filosofía de trabajo de Belleza del Ser.",
        },
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
