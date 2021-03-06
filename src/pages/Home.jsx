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
import homeImage from "../img/logo-removebg.png";
import homeImageLeafes from "../img/6437685_preview.png";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Home = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const { tipologiasRef, localizacaoRef, acabamentosRef, ...rest } = props;
  const classes = useStyles();

  const scrolling = instance => {
    console.log("instance.current.attributes", instance);
    // let node = document.getElementById(instance.current.id);
    window.scrollTo({
      top: instance.current.offsetTop,
      behavior: "smooth"
    });
  };
  console.log("tipologiasRef", tipologiasRef);
  return (
    <>
      {/* <Navbar /> */}
      <div
        ref={ref}
        id="home-container"
        className={classNames(classes.main, classes.mainRaised)}
      >
        {/* <SectionCarousel /> */}
        <h6 className="descubramais">Bem-vindo ao Spring Garden Residences!</h6>

        {/* <div class="p-3 col-12 d-flex flex-row justify-content-center align-items-center">
          <img
            src={homeImageLeafes}
            alt="image"
            style={{
              maxWidth: "130px",
              height: "auto",
              transform: "rotate(90deg)"
            }}
          ></img>
          <img
            src={homeImage}
            alt="image"
            style={{ maxWidth: "130px", height: "auto" }}
          ></img>
          <img
            src={homeImageLeafes}
            alt="image"
            style={{
              maxWidth: "130px",
              height: "auto",
              transform: "rotate(270deg) scaleX(-1)"
            }}
          ></img>
        </div> */}

        <ImageText
          image={image}
          title={t("imagetext.title_typologies")}
          summary={
            "Edif??cio de cor serena dotado de uma arquitectura contempor??nea e integrando extensos jardins. Com Apartamentos de Tipologia T1, T2, T3 e T4, este bloco de apartamentos tem tudo para se tornar a sua nova casa"
          }
          direction="left"
          bgcolor="#f6f4f1"
          separatorlink="/tipologias"
          scrollOnClick={() => scrolling(tipologiasRef)}
        ></ImageText>

        <ImageText
          image={image2}
          title={"ADIRA AO ESTILO DE VIDA DA BOAVISTA!"}
          summary={
            "O empreendimento Spring Garden Residences est?? a nascer na Boavista. Localizado numa importante art??ria do Porto, bastante pr??ximo da baixa da cidade e das magn??ficas praias."
          }
          direction="right"
          bgcolor="#f6f4f1"
          separatorlink="/localizacao"
          scrollOnClick={() => scrolling(localizacaoRef)}
        ></ImageText>

        <ImageText
          image={image}
          title={"O VERDADEIRO LUXO EST?? NOS DETALHES!"}
          summary={
            "O n??vel dos acabamentos acompanha a qualidade de constru????o atrav??s da ado????o de solu????es construtivas de efic??cia comprovada e da sele????o de materiais de marcas conceituadas e de qualidade alt??ssima."
          }
          direction="left"
          bgcolor="#f6f4f1"
          separatorlink="/acabamentos"
          scrollOnClick={() => scrolling(acabamentosRef)}
        ></ImageText>
      </div>
    </>
  );
});

export default Home;
