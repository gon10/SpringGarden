import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Background = () => {
  return (
    <div>
      <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="top-container flex">
          <h1>
            Welcome to.
            <br />
            Spring Garden Residences.
          </h1>
          {/* offset can be cahnged in node modules wowjs default file */}
          <button
            className="background-arrow-button"
            data-wow-offset="0"
            onClick={() => {
              // let node = document.getElementById(
              //   this.props.aboutRef.current.props.id
              // );
              // window.scrollTo({
              //   top: node.offsetTop,
              //   behavior: "smooth"
              // });
            }}
          >
            <FontAwesomeIcon
              className="background-arrow-icon"
              icon={faChevronDown}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Background;
