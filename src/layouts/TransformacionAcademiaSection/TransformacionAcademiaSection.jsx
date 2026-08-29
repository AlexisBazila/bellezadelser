import "./TransformacionAcademiaSection.css";

import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import SmallButton from "../../components/smallButton/SmallButton";

import Transformacion from "../../assets/images/Transformacion.jpg";

function TransformacionAcademiaSection() {
  return (
    <VariableContentSection
      image={Transformacion}
      imagePosition="right"
      backgroundColor="#E7ECD9"
    >
      <div className="MetodoParagraphContainer">
        <h2>Tu transformación puede comenzar hoy</h2>
        <p>
          Todo gran cambio empieza con una decisión. <br /> Da el primer paso
          hacia una vida más plena, abundante y conectada contigo.
        </p>
      </div>

      <div className="TransformacionButton">
        <SmallButton
          caption="Quiero Comenzar Mi Transformación"
          link="#CursosAcademiaSection"
        />
      </div>
    </VariableContentSection>
  );
}

export default TransformacionAcademiaSection;
