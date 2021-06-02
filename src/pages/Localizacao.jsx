import React from "react";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SectionCarousel from "components/Carousel/SectionCarousel";
import ImageText from "../components/ImageText";
import image from "../img/porto.jpg";
import imagePalacio from "../img/palaciocristal.jpg";
const useStyles = makeStyles(styles);

const Localizacao = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div
      ref={ref}
      id="localizacao-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <ImageText 
        image={image}
        direction="imagelong"
        bgcolor="rgb(255 255 255 / 16%)"
      ></ImageText> */}

      <h6 className="descubramais">
        UMA OPORTUNIDADe ÚNICA PARA MORAR OU INVESTIR NO PORTO!
      </h6>
      <br />
      <br />
      <ImageText
        image={imagePalacio}
        title={
          "PORTO, POR DIVERSAS VEZES CONSIDERADA O MELHOR DESTINO EUROPEU."
        }
        summary={
          "Partilha destas características enaltecendo-as através de uma vibrante. atmosfera urbana com total respeito pelo passado, mas voltada para o futuro. Fica a poucas horas de distância das principais capitais europeias e no ponto de convergência de três continentes. De clima ameno, com uma extensa costa de praias paradisíacas e com grande riqueza cultural, histórica e gastronómica, a cidade está também dotado de infraestruturas de excelente qualidade."
        }
        direction="noButtonLeft"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>

      <ImageText
        image={imagePalacio}
        title={
          "PORTO, POR DIVERSAS VEZES CONSIDERADA O MELHOR DESTINO EUROPEU."
        }
        summary={
          "Partilha destas características enaltecendo-as através de uma vibrante. atmosfera urbana com total respeito pelo passado, mas voltada para o futuro. Fica a poucas horas de distância das principais capitais europeias e no ponto de convergência de três continentes. De clima ameno, com uma extensa costa de praias paradisíacas e com grande riqueza cultural, histórica e gastronómica, a cidade está também dotado de infraestruturas de excelente qualidade."
        }
        direction="noButtonRight"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>
      <br />
      <br />
    </div>
  );
});

export default Localizacao;
