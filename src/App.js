import { createRef } from "react";
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
import image from "./img/porto.jpg";
import image2 from "./img/boavista.jpg";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionCarousel from "components/Carousel/SectionCarousel";
import Footer from "components/Footer/Footer";
import Home from "pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Tipologias from "pages/Tipologias";
import Localizacao from "pages/Localizacao";
import Acabamentos from "pages/Acabamentos";
import Contactos from "pages/Contactos";

import { Suspense } from "react";

const useStyles = makeStyles(styles);

function App(props) {
  const { ...rest } = props;
  const classes = useStyles();

  const homeRef = createRef();
  const tipologiasRef = createRef();
  const localizacaoRef = createRef();
  const acabamentosRef = createRef();
  const contactosRef = createRef();

  const scrolling = instance => {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth"
    });
  };
  return (
    <Suspense fallback="loading">
      <Router>
        <Header
          brand="Spring Garden Residences"
          rightLinks={
            <HeaderLinks
              homeRef={homeRef}
              tipologiasRef={tipologiasRef}
              localizacaoRef={localizacaoRef}
              acabamentosRef={acabamentosRef}
              contactosRef={contactosRef}
            />
          }
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
                  <h3 className={classes.subtitle}>
                    Spring Garden Residences!
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Home ref={homeRef} />
        <Parallax image={require("img/tipologiasParalax.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Encontre o seu conforto e harmonia</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Tipologias ref={tipologiasRef} />
        <Parallax image={require("img/portoParalax.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
            <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Porto, uma localizaçao privilegiada</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Localizacao ref={localizacaoRef} />
        <Parallax image={require("img/acabamentosParalax.jpg").default}>
          <div className={classes.container}>
            <GridContainer>
            <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Design e acabamentos de luxo</h1>

                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Acabamentos ref={acabamentosRef} />
        <Parallax image={require("img/contatosParalax.jpeg").default}>
          <div className={classes.container}>
            <GridContainer>
            <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Descubra mais, contacte-nos</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Contactos ref={contactosRef} />
        {/* <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/#tipologias">
            <Tipologias />
          </Route>
          <Route path="/#localizacao">
            <Localizacao />
          </Route>

          <Route path="/#acabamentos">
            <Acabamentos />
          </Route>
          <Route path="/#contactos">
            <Contactos />
          </Route>
        </Switch> */}
        
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
