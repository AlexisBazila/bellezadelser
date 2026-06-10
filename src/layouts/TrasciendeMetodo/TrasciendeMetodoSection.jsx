import VariableContentSection from "../../components/VariableContentSection/VariableContentSection";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import fondo from "../../assets/images/fondo.png";
import metodoTrasciende from "../../assets/images/metodoTrasciende.jpg";

import "./TrasciendeMetodoSection.css";
import SmallButton from "../../components/smallButton/SmallButton";

function TrasciendeMetodoSection() {
    return (
        <VariableContentSection
            image={metodoTrasciende}
            imagePosition="right"
        >
            <div className="MetodoParagraphContainer">
                <h2>El Método La Arquitectura del Ser™</h2>
                <p><strong>Un enfoque exclusivo creado por Natalia Batista.</strong></p>
                <p>La Arquitectura del Ser™ es una metodología de transformación integral diseñada para trabajar la estructura interna desde donde una persona piensa, siente, decide, se proyecta y construye su realidad.</p>
            </div>


            <div className="MetodoListContainer">
                <p><strong>Este método integra estratégicamente:</strong></p>

                <ul>
                    <li>Energía</li>
                    <li>Identidad</li>
                    <li>Imagen</li>
                    <li>Bienestar</li>
                    <li>Autoimagen</li>
                    <li>Presencia</li>
                    <li>Manifestación consciente</li>
                    <li>Expansión personal</li>
                </ul>
                
            </div>
            <div className="Metodobutton">
                <SmallButton caption="Estoy lista" link={"/sobre-mi"}/>
            </div>
        </VariableContentSection>
    );
}

export default TrasciendeMetodoSection;
