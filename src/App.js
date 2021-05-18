import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Header from "./components/Header/Header";
import ImageText from "./components/ImageText";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import image from "./img/inside.jpg";
import image2 from "./img/boavista.jpg";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "components/Carousel/SectionCarousel";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

function App(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Spring Garden Residences"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("img/header_banner.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Welcome to</h1>
                <h3 className={classes.subtitle}>Spring Garden Residences</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <Navbar /> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <ImageText
          image={image}
          title={"SOLUÇÕES ADEQUADAS AO SEU ESTILO DE VIDA!"}
          summary={
            "EdifÍcio de cor serena dotado de uma arquitectura contemporânea e integrando extensos jardins. Com Apartamentos de Tipologia T1, T2, T3 e T4, este bloco de apartamentos tem tudo para se tornar a sua nova casa"
          }
          direction="left"
          bgcolor="#FEFBEA"
        ></ImageText>

        <ImageText
          image={image2}
          title={"ADIRA AO ESTILO DE VIDA DA BOAVISTA!"}
          summary={
            "O empreendimento Spring Garden Residences está a nascer na Boavista. Localizado numa importante artéria do Porto, bastante próximo da baiixa da cidade e das magníficas praias."
          }
          direction="right"
          bgcolor="white"
        ></ImageText>

        <ImageText
          image={image}
          title={"O VERDADEIRO LUXO ESTÁ NOS DETALHES!"}
          summary={
            "O nível dos acabamentos acompanha a qualidade de construção através da adoção de soluções construtivas de eficácia comprovada e da seleção de materiais de marcas conceituadas e de qualidade altíssima."
          }
          direction="left"
          bgcolor="#FEFBEA"
        ></ImageText>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
