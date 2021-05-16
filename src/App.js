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

import styles from "assets/jss/material-kit-react/views/components.js";

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
        <ImageText
          image={image}
          title={"title"}
          summary={"summary"}
          direction="left"
          bgcolor="#FEFBEA"
        ></ImageText>

        <ImageText
          image={image}
          title={"title 2 "}
          summary={"summary 2 "}
          direction="right"
          bgcolor="#afd4b6b0"
        ></ImageText>

        <ImageText
          image={image}
          title={"A Mariana é linda"}
          summary={"O Gonçalo gosta muito da Mariana"}
          direction="top"
          bgcolor="#f072f1"
        ></ImageText>
      </div>
      <Test></Test>
    </div>
  );
}

export default App;
