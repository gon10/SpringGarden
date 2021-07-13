import React from "react";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ImageText from "../components/ImageText";
import imageStand from "../img/stand.jpg";
import SectionCarousel from "components/Carousel/SectionCarousel";
const useStyles = makeStyles(styles);

const Contactos = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div
      ref={ref}
      id="contactos-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <SectionCarousel /> */}

      <h6 className="descubramais">
        Venha conhecer o Spring Garden Residences!
      </h6>
      <ImageText
        image={imageStand}
        summary={"Horário de atendimento"}
        summary2={"Segunda a Sábado: 10h-19h"}
        summary3={"Domingos e Feriados: Apenas por marcação"}
        direction="noButtonLeftExtraSummary"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>

      {/* <div className="row">
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="titleText">Localização</h3>
          <p className="contactsText">R. Dom Afonso Henriques 827 Pedrouços, Maia</p>
        </div>
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="titleText">E-mail</h3>
          <p className="contactsText">geral@spring-residences.pt</p>
        </div>
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3 className="titleText">Telemóvel</h3>
          <p className="contactsText">+351 919429518 +351 913050087</p>
        </div>
      </div> */}
    </div>
  );
});

export default Contactos;
