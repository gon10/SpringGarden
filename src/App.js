import { createRef } from "react"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import HeaderLinks from "components/Header/HeaderLinks"
import Parallax from "components/Parallax/Parallax"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import "./App.css"
import Header from "./components/Header/Header"
import ImageText from "./components/ImageText"
import Navbar from "./components/Navbar"
import Test from "./components/Test"
import image from "./img/porto.jpg"
import image2 from "./img/boavista.jpg"

import styles from "assets/jss/material-kit-react/views/components.js"
import SectionCarousel from "components/Carousel/SectionCarousel"
import Footer from "components/Footer/Footer"
import Home from "pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import Tipologias from "pages/Tipologias"
import Localizacao from "pages/Localizacao"
import Acabamentos from "pages/Acabamentos"
import Contactos from "pages/Contactos"

import { Suspense } from "react"

const useStyles = makeStyles(styles)

function App(props) {
  const { ...rest } = props
  const classes = useStyles()

  const homeRef = createRef()
  const tipologiasRef = createRef()
  const localizacaoRef = createRef()
  const acabamentosRef = createRef()
  const contactosRef = createRef()

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
          color="darkWhite"
          changeColorOnScroll={{
            height: 40,
            color: "darkWhite"
          }}
          {...rest}
        />
        <Parallax
          image={require("img/exemploImgParalax.jpg").default}
          ref={homeRef}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem hasTxtType="home">
                <div className={classes.brand}>
                  <h1 className={(classes.title, "textParalax")}>
                    Em perfeita
                  </h1>
                  {/* <h1 className={(classes.title, "textParalax")}>
                    harmonia com a Natureza
                  </h1> */}
                  <h1 className={(classes.title, "textParalax")}>
                    harmonia com a{" "}
                    <span
                      class="txt-type-home"
                      data-wait="2000"
                      data-words='["Natureza", "Pila", "Cona"]'
                    ></span>
                  </h1>
                  <h3 className={classes.subtitle}>Spring Garden Residences</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Home />
        <Parallax
          image={require("img/tipologiasParalax.jpg").default}
          ref={tipologiasRef}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem hasTxtType="tipologias">
                <div className={classes.brand}>
                  <h1 className={(classes.title, "textParalax")}>Encontre</h1>
                  <h1 className={(classes.title, "textParalax")}>
                    o seu conforto e{" "}
                    <span
                      class="txt-type-tipologias"
                      data-wait="2000"
                      data-words='["harmonia", "paz do senhor" ]'
                    ></span>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Tipologias />
        <Parallax
          image={require("img/portoParalax.jpg").default}
          ref={localizacaoRef}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem hasTxtType="localizacao">
                <div className={classes.brand}>
                  <h1 className={(classes.title, "textParalax")}>Porto,</h1>
                  <h1 className={(classes.title, "textParalax")}>
                    uma localizaçao{" "}
                    <span
                      class="txt-type-localizacao"
                      data-wait="2000"
                      data-words='["privilegiada", "do caralho"]'
                    ></span>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Localizacao />
        <Parallax
          image={require("img/acabamentosParalax.jpg").default}
          ref={acabamentosRef}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem hasTxtType="acabamentos">
                <div className={classes.brand}>
                  <h1 className={(classes.title, "textParalax")}>Design</h1>
                  <h1 className={(classes.title, "textParalax")}>
                    e acabamentos de{" "}
                    <span
                      class="txt-type-acabamentos"
                      data-wait="2000"
                      data-words='["luxo", "excelencia"]'
                    ></span>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Acabamentos />
        <Parallax image={require("img/folhas.jpg").default} ref={contactosRef}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={(classes.title, "textParalax")}>Descubra</h1>
                  <h1 className={(classes.title, "textParalax")}>
                    a casa dos seus sonhos
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Contactos />
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
  )
}

export default App
