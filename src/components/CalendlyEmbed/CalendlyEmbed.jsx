import { useEffect, useRef } from "react";

export default function CalendlyEmbed({ url, height = 700 }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Si el script ya existe, no lo volvemos a cargar
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    ></div>
  );
}
