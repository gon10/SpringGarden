import React, { useEffect, useRef, useState } from "react";
import Background from "./Background";
import nav_logo from "../img/logo-removebg.png";

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = e => {
    if (navRef.current) {
      console.log(
        "navRef.current.getBoundingClientRect().height",
        navRef.current.getBoundingClientRect().height
      );
      console.log("window.scroll", window.scrollY);
      setScrolled(
        window.scrollY > 2 * navRef.current.getBoundingClientRect().height
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        ref={navRef}
        id="navbar"
        className={`navbar navbar-expand-lg navbar-dark ${
          scrolled ? "fade-in-nav" : ""
        }`}
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
            <img className="nav-logo" src={nav_logo} alt="logo"></img>
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
      <Background
        // ref={this.navEffect}
        id="my-background"
        // aboutRef={this.about}
        bounceIn={"wow bounceIn"}
      />
    </div>
  );
};

export default Navbar;
