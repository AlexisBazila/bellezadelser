import React from "react";
import { useLocation } from "react-router-dom";
import "./CheckAgenda.css";
import FirstButton from "../../components/firstButton/FirstButton";
import tiktok from "../../assets/icons/tiktokOrange.svg";
import instagram from "../../assets/icons/instagramOrange.svg";
import facebook from "../../assets/icons/facebookOrange.svg";
import youtube from "../../assets/icons/youtubeOrange.svg";

function CheckAgenda() {
  // Obtener parámetros de Calendly
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // Datos desde Calendly
  const assignedTo = params.get("assigned_to");
  const eventName = params.get("event_type_name");
  const start = params.get("event_start_time");
  const end = params.get("event_end_time");
  const inviteeName = params.get("invitee_full_name");
  const inviteeEmail = params.get("invitee_email");

  // Formatear fechas si existen
  const formattedStart = start
    ? new Date(start).toLocaleString("es-AR", {
        dateStyle: "long",
        timeStyle: "short",
      })
    : null;

  const formattedEnd = end
    ? new Date(end).toLocaleString("es-AR", {
        dateStyle: "long",
        timeStyle: "short",
      })
    : null;

  return (
    <>
      <div className="CheckagAnda-container">
        <div className="background-shape">
          <div className="contentCheckagAnda">
            <h1>¡Tu sesión ha sido agendada!</h1>
            <p>
              Gracias por reservar tu espacio. En breve recibirás un correo con
              todos los detalles de tu sesión.
            </p>

            {/* Mostrar información si fue enviada por Calendly */}
            {eventName && (
              <div className="sessionInfo">
                <p>
                  <strong>Tipo de sesión:</strong> {eventName}
                </p>
                {inviteeName && (
                  <p>
                    <strong>Nombre:</strong> {inviteeName}
                  </p>
                )}
                {inviteeEmail && (
                  <p>
                    <strong>Email:</strong> {inviteeEmail}
                  </p>
                )}
                {assignedTo && (
                  <p>
                    <strong>Facilitadora:</strong> {assignedTo}
                  </p>
                )}
                {formattedStart && (
                  <p>
                    <strong>Inicio:</strong> {formattedStart}
                  </p>
                )}
                {formattedEnd && (
                  <p>
                    <strong>Fin:</strong> {formattedEnd}
                  </p>
                )}
              </div>
            )}

            <div className="button">
              <FirstButton
                caption={"Volver a la página principal"}
                link={"/"}
              />
            </div>

            <div className="socialsCheckagAnda">
              <p>Seguime en redes</p>
              <div className="icons">
                <a
                  href="https://www.tiktok.com/discover/naty-belleza-del-ser"
                  target="_blank"
                >
                  <i>
                    <img src={tiktok} alt="logotipo de tiktok" />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/naty.bellezadelser/"
                  target="_blank"
                >
                  <i>
                    <img src={instagram} alt="logotipo de instagram" />
                  </i>
                </a>
                <a href="https://www.facebook.com/coachnatyb" target="_blank">
                  <i>
                    <img src={facebook} alt="logotipo de facebook" />
                  </i>
                </a>
                <a
                  href="https://www.youtube.com/@naty.bellezadelser"
                  target="_blank"
                >
                  <i>
                    <img src={youtube} alt="logotipo de youtube" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckAgenda;
