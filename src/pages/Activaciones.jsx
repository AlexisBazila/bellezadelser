import React from "react";
import ProductsMarkedSection from "../layouts/ProductsMarkedSection/ProductsMarkedSection";
import HeroProduct from "../layouts/HeroProduct/HeroProduct";
import ProductDescriptionSection from "../layouts/ProductDescritpionSection/ProductDescriptionSection";
import ArmonizacionesImage from "../assets/images/armonizaciones.png";
import ArmonizacionesMovil from "../assets/images/ArmonizacionesMovil.png";
function Activaciones() {
  return (
    <>
      <div>
        <HeroProduct
          title={"Activaciones Energéticas"}
          subtitle={
            "Sesiones que elevan tu vibración y restablecen tu equilibrio interior."
          }
          caption={"Activar Mi Bienestar"}
          link={"#"}
        />
        <ProductDescriptionSection
          subTtitle={"¿Qué son las Activaciones Energéticas?"}
          paragraphs={[
            "Pequeños encuentros energéticos que ayudan a liberar bloqueos, recuperar el equilibrio y elevar tu vibración para sentir mayor paz y bienestar en tu día a día.",
          ]}
          imageDesktop={ArmonizacionesImage}
          imageMobile={ArmonizacionesMovil}
        />
        <ProductsMarkedSection
          title={"Activaciones Energéticas"}
          caption={"Ir a la tienda →"}
          link={"https://bellezadelser.com/tienda/test/"}
        />
      </div>
    </>
  );
}

export default Activaciones;
