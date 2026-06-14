import React from "react";
import "./LabelPilares.css";

function LabelPilares({ icon, tag, title, subtitle, description }) {
  return (
    <article className="labelPilares">
      {icon && (
        <div className="labelPilaresIcon">
          <img src={icon} alt="" />
        </div>
      )}

      {tag && <span className="labelPilaresTag">{tag}</span>}

      <h3 className="labelPilaresTitle">{title}</h3>

      {subtitle && <p className="labelPilaresSubtitle">{subtitle}</p>}

      {description && <p className="labelPilaresDescription">{description}</p>}
    </article>
  );
}

export default LabelPilares;
