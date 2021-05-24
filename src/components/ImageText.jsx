import React from "react";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";


const ImageText = props => {
  const { image, direction, title, summary, bgcolor, separatorlink } = props;

  const getDisplayOrder = () => {
    switch (direction) {
      case "right":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p>{summary}</p>
              <Link className={"nav-buton"} to={separatorlink}>
                  <button>Descubra mais!</button>
              </Link>
            </div>
            <div class="col-12 col-md-6 ">
              <img src={image} alt="image" className="w-100"></img>
            </div>
          </>
        );
        break;
      case "left":
        return (
          <>
            <div class="col-12 col-md-6 ">
              <img src={image} alt="image" className="w-100"></img>
            </div>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p class="mariana">{summary}</p>
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
              <p>{summary}</p>
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
              <div class="col-12 col-md-6 ">
                <img src={image} alt="image" className="w-100"></img>
              </div>
              <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h4>{title}</h4>
                <p class="mariana">{summary}</p>
              </div>
            </>
          );
          break;
          case "noButtonRight":
            return (
              <>
                <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <h4>{title}</h4>
                  <p>{summary}</p>
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
              <p>{summary}</p>
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
