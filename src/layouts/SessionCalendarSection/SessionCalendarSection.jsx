import React from "react";
import "./sessionCalendarSection.css";
import Card from "../../components/Card/Card";
import photo from "../../assets/images/photoExample.png";
import FirstButton from "../../components/firstButton/FirstButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SessionCalendarSection({ title, caption1, link1, caption2, link2 }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      const target = document.getElementById(elementId);

      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <section className="sessionCalendar" id="sessionCalendar">
      <div className="contentProductsMarked">
        <div>
          <h2 className="titleSection">{title}</h2>
        </div>
        <div className="buttonStore">
          <FirstButton caption={caption1} link={link1} />
          <FirstButton caption={caption2} link={link2} />
        </div>
      </div>
    </section>
  );
}

export default SessionCalendarSection;
