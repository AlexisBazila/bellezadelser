import React from "react";
import SessionsSection from "../layouts/sessionsSection/SessionsSection";
import HeroProduct from "../layouts/HeroProduct/HeroProduct";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import ArmonizacionesImage from "../assets/images/armonizaciones.png";
function Armonizaciones() {
  return (
    <>
      <div>
        <HeroProduct
          title={"Mini Cápsulas"}
          subtitle={
            "Sesiones que elevan tu vibración y restablecen tu equilibrio interior."
          }
          caption={"Activar Mi Bienestar"}
          link={"#"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué son las mini cápsulas?"}
          paragraphs={[
            "Pequeños encuentros energéticos que ayudan a liberar bloqueos, recuperar el equilibrio y elevar tu vibración para sentir mayor paz y bienestar en tu día a día.",
          ]}
          image={ArmonizacionesImage}
        />
        {/* <SessionsSection /> */}
      </div>
    </>
  );
}

export default Armonizaciones;
