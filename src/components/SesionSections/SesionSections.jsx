import React from "react";
import "./SesionSections.css";

function SesionSections({ title, content, variant = "light" }) {
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

  const renderList = (items) => {
    return (
      <ul>
        {items.map((item, i) => {
          if (typeof item === "string") {
            return <li key={i}>{parseText(item)}</li>;
          }

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
    <section className={`sesion-section ${variant}`}>
      <div className="sesion-container">
        <h2 className="sesion-title">{title}</h2>

        <div className="sesion-content">
          {content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{parseText(block.text)}</p>;
            }

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
