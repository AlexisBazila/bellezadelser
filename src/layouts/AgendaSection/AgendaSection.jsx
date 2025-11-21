import React from "react";
import CalendlyEmbed from "../../components/CalendlyEmbed/CalendlyEmbed";

function AgendaSection(linkCalendly) {
  return (
    <section>
      <div>
        <CalendlyEmbed
          url={`${linkCalendly}?hide_event_type_details=1&hide_gdpr_banner=1&text_color=3d3d3d&primary_color=c3cfa1`}
        />
      </div>
    </section>
  );
}

export default AgendaSection;
