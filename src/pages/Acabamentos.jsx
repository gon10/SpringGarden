import React from "react";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SectionCarousel from "components/Carousel/SectionCarousel";
const useStyles = makeStyles(styles);

const Acabamentos = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div
      ref={ref}
      id="acabamentos-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <SectionCarousel /> */}
      <div>
          <h5 className="summaryText">
          O nível dos acabamentos acompanha a qualidade de construção através da adoção de soluções construtivas de eficácia comprovada e da seleção de materiais de marcas conceituadas e de qualidade altíssima. Começando na fachada e na caixilharia, passando pelas bancadas e carpintarias, até aos equipamentos e eletrodomésticos, a escolha é coerente e a sua qualidade transversal.
          </h5>
      </div>

        <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center"}}> 
          <div className="square">
            <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/marmore.png"/>
              <p>Mármore Guangxi White</p>
          </div>
          <div className="square">
            <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/ar-condicionado.png"/>
              <p>Ar Condicionado</p>
          </div>
          <div className="square">
                <img className="rs" loading="lazy" src="https://acquadalva.pt/wp-content/uploads/2021/04/pavimento-flutuante.png"/>
                <p>Pavimento flutuante</p>
          </div>
          <div className="square">
                <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/eletrodomesticos.png"/>
                <p>Eletrodomésticos encastráveis tipo Bosch</p>
          </div>
          <div className="square">
               <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/armario.png"/>
               <p>Armário lacado a branco</p>
          </div>
          <div className="square">
                <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/estores.png"/>
                <p>Estores interiores nos quartos tipo “Blackout”</p>
          </div>
          <div className="square">
                <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/video.png"/>
                <p>Video-Porteiro</p>
          </div>
          <div className="square">
                <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/aspiracao.png"/>
                <p>Aspiração Central</p>
          </div>

        </div>

    </div>
  );
});

export default Acabamentos;
