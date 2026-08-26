import { useEffect } from "react";
import "./TestHotmart.css";

function TestHotmart() {
  useEffect(() => {
    // Evita inyectar el script dos veces (React StrictMode monta los efectos 2 veces en desarrollo)
    if (
      document.querySelector(
        'script[src="https://static.hotmart.com/checkout/widget.min.js"]',
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);
    // sin cleanup: el widget queda cargado mientras la página viva, igual que en el snippet oficial
  }, []);

  return (
    <section className="TestHotmartSection">
      <div className="TestHotmartCard">
        <div className="TestHotmartIcon">✨</div>

        <span className="TestHotmartTag">Prueba interna</span>

        <h1 className="TestHotmartTitle">Academia Belleza del Ser</h1>

        <p className="TestHotmartSubtitle">
          Estamos probando la integración de pagos para la membresía de 9 meses.
          Este botón abre el checkout de Hotmart en un pop-up, sin salir del
          sitio.
        </p>

        <a
          href="https://pay.hotmart.com/I106926912N?checkoutMode=2"
          className=" TestHotmartButton"
          onClick={(e) => e.preventDefault()}
        >
          Quiero mi lugar
        </a>

        <p className="TestHotmartFootnote">
          El pago no se procesará realmente — solo estamos validando la
          integración.
        </p>
      </div>
    </section>
  );
}

export default TestHotmart;
