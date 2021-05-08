import React from "react";
import Background from "./Background";

const Navbar = () => {
  return (
    <div>
      <Background
        // ref={this.navEffect}
        id="my-background"
        // aboutRef={this.about}
        bounceIn={"wow bounceIn"}
      />
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container">
          <a
            className="home-style navbar-brand"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            Back to Space
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                onClick={() => {
                  this.scrolling(this.about);
                }}
                className="btn-style nav-item nav-link"
              >
                About
              </a>
              <a
                onClick={() => {
                  this.scrolling(this.projects);
                }}
                className="btn-style nav-item nav-link"
              >
                Projects
              </a>
              <a
                onClick={() => {
                  this.scrolling(this.contact);
                }}
                className="btn-style nav-item nav-link"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
