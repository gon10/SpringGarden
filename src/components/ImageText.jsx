import React from "react";
import Button from "components/CustomButtons/Button.js";

const ImageText = props => {
  const { image, direction, title, summary, bgcolor } = props;

  const getDisplayOrder = () => {
    switch (direction) {
      case "right":
        return (
          <>
            <div class="p-3 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4>{title}</h4>
              <p>{summary}</p>
              <button>Descubra mais!</button>
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
              <button>Descubra mais!</button>
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
              <button>Descubra mais!</button>
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
