import React from "react";
import "./ProductsMarkedSection.css";
import Card from "../../components/Card/Card";
import photo from "../../assets/images/photoExample.png";
import FirstButton from "../../components/firstButton/FirstButton";
function ProductsMarkedSection({ title, caption, link }) {
  return (
    <section className="smalProductsMarked">
      <div className="contentProductsMarked">
        <div>
          <h2 className="titleSection">{title}</h2>
        </div>
        <div className="buttonStore">
          <FirstButton caption={caption} link={link} />
        </div>
        <div className="cardsProductsMarked">
          {/* <Card
            image={photo}
            title="Armonización con cristales"
            description="Energía de piedras naturales para equilibrar cuerpo y mente."
          />
          <Card
            image={photo}
            title="Armonización sonora"
            description="Vibraciones de cuencos y sonidos que relajan y armonizan tu interior."
          />
          <Card
            image={photo}
            title="Limpieza energética"
            description="Eliminación de cargas negativas para renovar tu campo energético."
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ProductsMarkedSection;
