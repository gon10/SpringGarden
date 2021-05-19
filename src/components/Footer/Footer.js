/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";

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
    <>
      <footer class="footer">
        <div class="container bottom_border">
          <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>

              <p class="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                <i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
              </p>
              <p>
                <i class="fa fa-phone"></i> +91-9999878398{" "}
              </p>
              <p>
                <i class="fa fa fa-envelope"></i> info@example.com{" "}
              </p>
            </div>

            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul class="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Image Rectoucing</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Clipping Path</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Ebay & Amazon</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

              <ul class="footer_ul_amrc">
                <li>
                  <a href="http://webenlance.com">Remove Background</a>
                </li>
                <li>
                  <a href="http://webenlance.com">
                    Shadows & Mirror Reflection
                  </a>
                </li>
                <li>
                  <a href="http://webenlance.com">Logo Design</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Vectorization</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="http://webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div class=" col-sm-4 col-md  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul class="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i class="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter fleft padding-right"></i>{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <ul class="foote_bottom_ul_amrc">
            <li>
              <a href="http://webenlance.com">Home</a>
            </li>
            <li>
              <a href="http://webenlance.com">About</a>
            </li>
            <li>
              <a href="http://webenlance.com">Services</a>
            </li>
            <li>
              <a href="http://webenlance.com">Pricing</a>
            </li>
            <li>
              <a href="http://webenlance.com">Blog</a>
            </li>
            <li>
              <a href="http://webenlance.com">Contact</a>
            </li>
          </ul>

          <p class="text-center">
            Copyright @2017 | Designed With by <a href="#">Your Company Name</a>
          </p>

          <ul class="social_footer_ul">
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
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
            <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
              <h3>Localizaçao</h3>
              <p>R. Dom Afonso Henriques 827 Pedrouços, Maia</p>
            </div>
            <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
              <h3>Email</h3>
              <p>geral@spring-residences.pt</p>
            </div>
            <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
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
    </>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
