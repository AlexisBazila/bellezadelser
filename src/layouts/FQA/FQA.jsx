import React, { useState } from "react";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import "./FQA.css";

function FQA() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      pregunta: "¿En qué moneda puedo pagar mi sesión?",
      respuesta:
        "Las sesiones que están en euros pagas por PayPal en tu moneda local. <br/> Puedes utilizar tarjeta de débito, crédito o Paypal wallet. <br/> Para saber cuánto es en tu moneda local, puedes ver la cotización del euro en el sitio web de tu banco. <br/> Crear tu cuenta de PayPal y tener tu cuenta de PayPal es gratuito. <br/> Si eres de Argentina, tienes la opción de realizar el pago a través de Mercado Pago.",
    },
    {
      pregunta: "¿Agendé una sesión y no puedo asistir ¿qué hago?",
      respuesta:
        "Si algo surge, sólo avísame. Debes avisar con 48 horas de antelación para no perder tu sesión. Simplemente me envías un email a oficialbellezadelser@gmail.com diciéndome qué sesión necesitas reagendar junto con tu nombre completo, o un WhatsApp a través del número telefónico que aparece en la web.",
    },
    {
      pregunta: "¿Según qué zona horaria se agenda mi sesión?",
      respuesta:
        "La agenda se realiza a través de Calendly. Al seleccionar la sesión, se abrirá un calendario para elegir día y horario. <br/> En la parte superior o inferior del calendario (según tu dispositivo) podrás verificar y seleccionar tu zona horaria. Es importante confirmarla antes de reservar, ya que los recordatorios se envían automáticamente ajustados a esa zona horaria.",
    },
    {
      pregunta: "Quiero regalar una sesión ¿puedo hacerlo?",
      respuesta:
        "¡Sí, claro! De hecho, es algo que lo hacen mucho y a mi me hace muy feliz ser parte de un momento tan especial. Puedes hacerlo sin problema; la experiencia se adapta a la persona que la recibe, respetando sus tiempos y su proceso. <br/> Para coordinar el regalo y los detalles, te invito a contactarte conmigo, simplemente me envías un email a oficialbellezadelser@gmail.com o un WhatsApp a través del número telefónico que aparece en la web.",
    },
    {
      pregunta: "¿Puedo realizarle una sesión a un niño/a?",
      respuesta:
        "Sí, es posible realizar sesiones de Reiki a niños y niñas, teniendo en cuenta su edad y sensibilidad, y siempre con el consentimiento de sus padres o cuidadores. <br/> Cada caso se evalúa de manera personalizada. Para más información, te invito a contactarte conmigo, simplemente me envías un email a oficialbellezadelser@gmail.com o un WhatsApp a través del número telefónico que aparece en la web.",
    },
    {
      pregunta: "¿Puedo realizar una sesión a otra persona sin que lo sepa?",
      respuesta:
        "No. En Belleza del ser, las sesiones de Reiki y sanación energética solo se realizan con el consentimiento de la persona que va a recibirla. <br/> Respetar el libre albedrío, los tiempos y el proceso de cada alma es fundamental en este tipo de acompañamiento.",
    },
  ];

  return (
    <div className="Acordion">
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
