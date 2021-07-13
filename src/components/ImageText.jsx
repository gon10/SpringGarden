import React from "react"
import Button from "components/CustomButtons/Button.js"
import { Link } from "react-router-dom"

import folha from "../img/folha-removebg.png"
import folha2 from "../img/folha2-removebg.png"
import folha3 from "../img/folha3-removebg.png"

const ImageText = props => {
  const {
    image,
    image2,
    image3,
    direction,
    title,
    summary,
    summary2,
    summary3,
    bgcolor,
    separatorlink
  } = props

  const getDisplayOrder = () => {
    switch (direction) {
      case "right":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"imageTextBtn"} to={separatorlink}>
                Descubra mais!<span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
            <div className="col-12 col-md-6 imageHover">
              <figure>
                <img
                  src={image}
                  alt="image"
                  className="w-100"
                // style={{
                //   clipPath:
                //     "circle(50% at 50% 50%)"
                // }}
                ></img>
              </figure>
            </div>
          </>
        )
        break
      case "left":
        return (
          <>
            <div class="col-12 col-md-6 position-relative imageHover order-2 order-md-1">
              <figure>
                <img
                  src={image}
                  alt="image"
                  className="w-100"
                // style={{
                //   clipPath: "circle(50% at 50% 50%)"
                // }}
                ></img>
              </figure>
              <img className="leaf1" src={folha} alt="leaf"></img>
              <img className="leaf2" src={folha2} alt="leaf"></img>
              <img className="leaf3" src={folha3} alt="leaf"></img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center order-1 order-md-2">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"imageTextBtn"} to={separatorlink}>
                Descubra mais!<span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </>
        )
        break
      case "top":
        return (
          <>
            <div className="p-3 col-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
              <img
                src={image}
                alt="image"
                className="w-70"
              // style={{
              //   clipPath: "circle(50% at 50% 50%)"
              // }}
              ></img>
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              {/* <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link> */}
            </div>
          </>
        )
        break
      case "noButtonLeft":
        return (
          <>
            <div class="col-12 col-md-6 imageHover order-2 order-md-1">
              <figure>
                <img
                  src={image}
                  alt="image"
                  className="w-100"
                // style={{
                //   clipPath: "circle(50% at 50% 50%)"
                // }}
                ></img>
              </figure>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center order-1 order-md-2">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
            </div>
          </>
        )
        break
      case "noButtonLeftExtraSummary":
        return (
          <>
            <div className="col-12 col-md-6 imageHover order-2 order-md-1">
              <figure>
                <img
                  src={image}
                  alt="image"
                  className="w-100"
                // style={{
                //   clipPath: "circle(50% at 50% 50%)"
                // }}
                ></img>
              </figure>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center order-1 order-md-2">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <p className="summaryText">{summary2}</p>
              <p className="summaryText">{summary3}</p>
              <div className="row">
                {/* <SectionPills /> */}
                <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                  <h3 className="titleText">Localização</h3>
                  <p className="contactsText">
                    R. Dom Afonso Henriques 827 Pedrouços, Maia
                  </p>
                </div>
                <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                  <h3 className="titleText">E-mail</h3>
                  <p className="contactsText">geral@spring-residences.pt</p>
                </div>
                <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                  <h3 className="titleText">Telemóvel</h3>
                  <p className="contactsText">+351 919429518 </p>
                  <p className="contactsText">+351 913050087 </p>
                </div>
              </div>
            </div>
          </>
        )
        break
      case "noButtonRight":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
            </div>
            <div class="col-12 col-md-6 imageHover">
              <figure>
                <img
                  src={image}
                  alt="image"
                  className="w-100"
                // style={{
                //   clipPath: "circle(50% at 50% 50%)"
                // }}
                ></img>
              </figure>
            </div>
          </>
        )
        break
      case "imagelong":
        return (
          <>
            <div>
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        )
        break

      default:
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <button>Saiba mais</button>
            </div>
            <div class="col-12 col-md-6 ">
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        )
        break
    }
  }

  return (
    <div
      class="row g-0 p-3"
      style={{ backgroundColor: bgcolor ? bgcolor : "" }}
    >
      {getDisplayOrder()}
    </div>
  )
}

export default ImageText
