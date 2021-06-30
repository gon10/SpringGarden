import React from "react"
import styles from "assets/jss/material-kit-react/views/components.js"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import SectionCarousel from "components/Carousel/SectionCarousel"
import ImageText from "../components/ImageText"
import imagePorto from "../img/porto.jpg"
import imageBoavista from "../img/boavista12.jpg"
import imageMapa from "../img/mapa.PNG"
import imageJardBot from "../img/jardimBot.PNG"
import imageCasaMusica from "../img/casamusica.jpg"
import imagePalacio from "../img/palacio.jpg"
import imageFundSerralves from "../img/fundSerralves.jpg"


const useStyles = makeStyles(styles)

const Localizacao = React.forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div
      ref={ref}
      id="localizacao-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <ImageText 
        image={image}
        direction="imagelong"
        bgcolor="rgb(255 255 255 / 16%)"
      ></ImageText> */}

      <h6 className="descubramais">
        UMA OPORTUNIDADe ÚNICA PARA MORAR OU INVESTIR NO PORTO!
      </h6>
      <ImageText
        image={imagePorto}
        title={
          "PORTO, POR DIVERSAS VEZES CONSIDERADA O MELHOR DESTINO EUROPEU."
        }
        summary={
          "Partilha destas características enaltecendo-as através de uma vibrante. atmosfera urbana com total respeito pelo passado, mas voltada para o futuro. Fica a poucas horas de distância das principais capitais europeias e no ponto de convergência de três continentes. De clima ameno, com uma extensa costa de praias paradisíacas e com grande riqueza cultural, histórica e gastronómica, a cidade está também dotado de infraestruturas de excelente qualidade."
        }
        direction="noButtonLeft"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>

      <ImageText
        image={imageBoavista}
        title={
          "PORTO, POR DIVERSAS VEZES CONSIDERADA O MELHOR DESTINO EUROPEU."
        }
        summary={
          "Partilha destas características enaltecendo-as através de uma vibrante. atmosfera urbana com total respeito pelo passado, mas voltada para o futuro. Fica a poucas horas de distância das principais capitais europeias e no ponto de convergência de três continentes. De clima ameno, com uma extensa costa de praias paradisíacas e com grande riqueza cultural, histórica e gastronómica, a cidade está também dotado de infraestruturas de excelente qualidade."
        }
        direction="noButtonRight"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>

      <h6 className="descubramais">
        Um distrito onde a arquitetura, a música e a arte estão em cada esquina!
      </h6>

      <ImageText
        image={imageMapa}
        summary={""}
        direction="top"
        bgcolor="#rgb(86 158 8 / 8%)"
      ></ImageText>


      {/* <div className="containerImagesDetails">
        <div className="boxImagesDetails">
          <img src={imageJardBot} alt="" />
          <span>Jardim Botânico</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imageCasaMusica} alt="" />
          <span>Casa da Música</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imagePalacio} alt="" />
          <span>Palácio de Cristal</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imageFundSerralves} alt="" />
          <span>Fundação Serralves</span>
        </div>
      </div> */}


      <div className="p-3 col-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
        <div className="card">
          <div className="card--image">
            <img src={imageMapa} alt="" />
          </div>
          <div className="card--info info--1">
            <span className="info--text">Fundação Serralves</span>
            <div className="icon">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="info--image">
              <img src={imageFundSerralves} alt="" />
            </div>
          </div>
          <div className="card--info info--2">
            <span className="info--text">Palácio de Cristal</span>
            <div className="icon">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="info--image">
              <img src={imagePalacio} alt="" />
            </div>
          </div>
          <div className="card--info info--3">
            <span className="info--text">Casa da Música</span>
            <div className="icon">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="info--image">
              <img src={imageCasaMusica} alt="" />
            </div>
          </div>
          <div className="card--info info--4">
            <span className="info--text">Jardim Botânico</span>
            <div className="icon">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="info--image">
              <img src={imageJardBot} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>



  )
})

export default Localizacao
