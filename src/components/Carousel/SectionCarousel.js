import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "img/exterior.PNG";
import image2 from "img/cozinha.PNG";
import image3 from "img/sala.PNG";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <div className="p-1 d-flex flex-column justify-content-around justify-content-center align-items-center">
              <h1 className="springardenlogo">EM PERFEITA HARMONIA COM A NATUREZA...</h1>
              <h5 className="springardenIntro">
                O Sping Garden Residences está a nascer na Boavista. Um projecto com características únicas concebido para famílias que valorizam a exclusividade, o conforto e a tranquilidade numa localização privilegiada.
                <br />
                Descubra!
              </h5>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      {/*<h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>*/}
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      {/*<h4>
                        <LocationOn className="slick-icons" />
                        Somewhere Beyond, United States
                      </h4>*/}
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      {/*<h4>
                        <LocationOn className="slick-icons" />
                        Yellowstone National Park, United States
                      </h4>*/}
                    </div>
                  </div>
                </Carousel>
              </Card>
              <h6 className="descubramais">
                  Deslize e descubra!
              </h6>

            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
