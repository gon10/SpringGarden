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

const useStyles = makeStyles(styles);

function App(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <Router>
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
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/tipologias">
          <Tipologias />
        </Route>
        <Route path="/localizacao">
          <Localizacao />
        </Route>

        <Route path="/acabamentos">
          <Acabamentos />
        </Route>
        <Route path="/contactos">
          <Contactos />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
