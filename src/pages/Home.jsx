import React from "react";

import ImageText from "../components/ImageText";
import Navbar from "../components/Navbar";
import Test from "../components/Test";
import image from "../img/sala-1.jpg";
import image2 from "../img/boavista.PNG";
import Parallax from "components/Parallax/Parallax";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "components/Carousel/SectionCarousel";
import { useTranslation } from "react-i18next";
import homeImage from "../img/sg-removebg.png";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Home = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <>
      {/* <Navbar /> */}
      <div
        ref={ref}
        id="home-container"
        className={classNames(classes.main, classes.mainRaised)}
      >
        {/* <SectionCarousel /> */}
        <div class="p-3 col-12 d-flex flex-column justify-content-center align-items-center">
          <img
            src={homeImage}
            alt="image"
            style={{ maxWidth: "200px", height: "auto" }}
          ></img>
          <h6 className="descubramais"></h6>
        </div>

        <ImageText
          image={image}
          title={t("imagetext.title_typologies")}
          summary={
            "EdifÍcio de cor serena dotado de uma arquitectura contemporânea e integrando extensos jardins. Com Apartamentos de Tipologia T1, T2, T3 e T4, este bloco de apartamentos tem tudo para se tornar a sua nova casa"
          }
          direction="left"
          bgcolor="#f6f4f1"
          separatorlink="/tipologias"
        ></ImageText>

        <ImageText
          image={image2}
          title={"ADIRA AO ESTILO DE VIDA DA BOAVISTA!"}
          summary={
            "O empreendimento Spring Garden Residences está a nascer na Boavista. Localizado numa importante artéria do Porto, bastante próximo da baixa da cidade e das magníficas praias."
          }
          direction="right"
          bgcolor="#f6f4f1"
          separatorlink="/localizacao"
        ></ImageText>

        <ImageText
          image={image}
          title={"O VERDADEIRO LUXO ESTÁ NOS DETALHES!"}
          summary={
            "O nível dos acabamentos acompanha a qualidade de construção através da adoção de soluções construtivas de eficácia comprovada e da seleção de materiais de marcas conceituadas e de qualidade altíssima."
          }
          direction="left"
          bgcolor="#f6f4f1"
          separatorlink="/acabamentos"
        ></ImageText>
      </div>
    </>
  );
});

export default Home;
