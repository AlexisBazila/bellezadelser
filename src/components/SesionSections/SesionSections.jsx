import React from "react";
import "./SesionSections.css";
import useInView from "../../hooks/useInView";

function SesionSections({ title, content, variant = "light" }) {
  const [ref, visible] = useInView();

  // 🔥 Parser para bold[]
  const parseText = (text) => {
    if (!text) return "";

    const parts = text.split(/(bold\[.*?\])/g);

    return parts.map((part, index) => {
      if (part.startsWith("bold[")) {
        const content = part.replace("bold[", "").replace("]", "");
        return <strong key={index}>{content}</strong>;
      }
      return part;
    });
  };

  // 🔥 Render de listas con soporte bold[]
  const renderList = (items) => {
    return (
      <ul>
        {items.map((item, i) => {
          // 🔹 Item simple (string)
          if (typeof item === "string") {
            return <li key={i}>{parseText(item)}</li>;
          }

          // 🔹 Item con estructura
          return (
            <li key={i}>
              {parseText(item.text)}

              {item.children && (
                <ul className="nested-list">
                  {item.children.map((child, j) => (
                    <li key={j}>{parseText(child)}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section ref={ref} className={`sesion-section ${variant}`}>
      <div className={`sesion-container ${visible ? "visible" : ""}`}>
        <h2 className="sesion-title">{title}</h2>

        <div className="sesion-content">
          {content.map((block, index) => {
            // 🔹 Párrafos
            if (block.type === "paragraph") {
              return <p key={index}>{parseText(block.text)}</p>;
            }

            // 🔹 Listas
            if (block.type === "list") {
              return <div key={index}>{renderList(block.items)}</div>;
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default SesionSections;
