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
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
            </div>
            <div className="col-12 col-md-6 imageHover">
              <figure><img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath:
                    "circle(50% at 50% 50%)"
                }}
              ></img></figure>
            </div>
          </>
        )
        break
      case "left":
        return (
          <>
            <div class="col-12 col-md-6 position-relative imageHover">
              <figure><img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath: "circle(50% at 50% 50%)"
                }}
              ></img></figure>
              <img className="leaf1" src={folha} alt="leaf"></img>
              <img className="leaf2" src={folha2} alt="leaf"></img>
              <img className="leaf3" src={folha3} alt="leaf"></img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
            </div>
          </>
        )
        break
      case "top":
        return (
          <>
            <div class="p-3 col-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
              <img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath: "circle(50% at 50% 50%)"
                }}>
              </img>
            </div>
          </>
        )
        break
      case "noButtonLeft":
        return (
          <>
            <div class="col-12 col-md-6">
              <img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath: "circle(50% at 50% 50%)"
                }}>
              </img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="titleText">{title}</h4>
              <p className="summaryText">{summary}</p>
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
            <div class="col-12 col-md-6 ">
              <img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath: "circle(50% at 50% 50%)"
                }}>
              </img>
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
