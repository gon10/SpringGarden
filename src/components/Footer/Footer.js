/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import nav_logo from "../../img/logo-removebg.png";
import SectionPills from "./SectionPills";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className="row">
          <a className="home-style navbar-brand">
            <img
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
              className="footer-logo"
              src={nav_logo}
              alt="logo"
            ></img>
          </a>
        </div>
        <div className="row">
          {/* <SectionPills /> */}
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h3>Localizaçao</h3>
            <p>R. Dom Afonso Henriques 827 Pedrouços, Maia</p>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h3>Email</h3>
            <p>geral@spring-residences.pt</p>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h3>Contactos</h3>
            <p>+351919429518 +351 913050087</p>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            &copy; SPRING GARDEN RESIDENCES {1900 + new Date().getYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
