import React from "react";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";

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
  } = props;

  const getDisplayOrder = () => {
    switch (direction) {
      case "right":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
            </div>
            <div class="col-12 col-md-6 ">
              <img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath:
                    "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)"
                }}
              ></img>
            </div>
          </>
        );
        break;
      case "left":
        return (
          <>
            <div class="col-12 col-md-6 position-relative">
              <img
                src={image}
                alt="image"
                className="w-100"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
                }}
              ></img>
              <img
                className="leaf1"
                src="https://assets.codepen.io/2621168/leaf1.png"
                alt="leaf"
              ></img>
              <img
                className="leaf2"
                src="https://assets.codepen.io/2621168/leaf2.png"
                alt="leaf"
              ></img>
              <img
                className="leaf3"
                src="https://assets.codepen.io/2621168/leaf3.png"
                alt="leaf"
              ></img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
            </div>
          </>
        );
        break;
      case "top":
        return (
          <>
            <div class="p-3 col-12 col-md-12 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                <button>Descubra mais!</button>
              </Link>
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        );
        break;
      case "noButtonLeft":
        return (
          <>
            <div class="col-12 col-md-6">
              <img src={image} alt="image" className="w-100"></img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
            </div>
          </>
        );
        break;
      case "noButtonRight":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
            </div>
            <div class="col-12 col-md-6 ">
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        );
        break;
      case "imagelong":
        return (
          <>
            <div>
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        );
        break;

      default:
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p className="summaryText">{summary}</p>
              <button>Saiba mais</button>
            </div>
            <div class="col-12 col-md-6 ">
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        );
        break;
    }
  };

  return (
    <div
      class="row g-0 p-3"
      style={{ backgroundColor: bgcolor ? bgcolor : "" }}
    >
      {getDisplayOrder()}
    </div>
  );
};

export default ImageText;
