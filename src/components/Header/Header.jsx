import React, { useEffect } from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
// @material-ui/icons
import Menu from "@material-ui/icons/Menu"
// core components
// import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import styles from "assets/jss/material-kit-react/components/headerStyle.js"
import nav_logo from "../../img/logo-removebg.png"

import backgroundHome from "../../img/exemploImgParalax.jpg"
import backgroundTipologias from "../../img/tipologiasParalax.jpg"
import backgroundLocalizacao from "../../img/portoParalax.jpg"
import backgroundAcabamentos from "../../img/acabamentosParalax.jpg"
import backgroundContactos from "../../img/folhas.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(styles)

export default function Header(props) {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange)
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange)
      }
    }
  })
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props
    const windowsScrollTop = window.pageYOffset
    console.log("windowsScrollTop", windowsScrollTop)
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes.displayNone)
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes.displayNone)
    }
    if (windowsScrollTop < rightLinks.props.tipologiasRef.current.offsetTop - 40) {
      document.documentElement.style.setProperty(
        "--background-image-url",
        `url(${backgroundHome})`
      )
    } else if (windowsScrollTop >= rightLinks.props.tipologiasRef.current.offsetTop - 40 && windowsScrollTop < rightLinks.props.acabamentosRef.current.offsetTop - 40) {
      document.documentElement.style.setProperty(
        "--background-image-url",
        `url(${backgroundTipologias})`
      )
    } else if (windowsScrollTop >= rightLinks.props.acabamentosRef.current.offsetTop - 40 && windowsScrollTop < rightLinks.props.localizacaoRef.current.offsetTop - 40) {
      document.documentElement.style.setProperty(
        "--background-image-url",
        `url(${backgroundAcabamentos})`
      )
    } else if (windowsScrollTop >= rightLinks.props.localizacaoRef.current.offsetTop - 40 && windowsScrollTop < rightLinks.props.contactosRef.current.offsetTop - 40) {
      document.documentElement.style.setProperty(
        "--background-image-url",
        `url(${backgroundLocalizacao})`
      )
    } else if (windowsScrollTop >= rightLinks.props.contactosRef.current.offsetTop - 40) {
      document.documentElement.style.setProperty(
        "--background-image-url",
        `url(${backgroundContactos})`
      )
    }
  }
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.displayNone]: true
  })
  const brandComponent = <Button className={classes.title}>{brand}</Button>

  useEffect(() => {
    // Update the document title using the browser API
    console.log("rightLinks", rightLinks)

  }, [rightLinks])


  return (
    <AppBar className={`${appBarClasses}`}>
      <a
        className="scrolTopButton"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            <>
              {/* {brandComponent} */}
              <a
                className="home-style navbar-brand"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
                }}
              >
                <img className="nav-logo" src={nav_logo} alt="logo"></img>
              </a>
            </>
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  )
}

Header.defaultProp = {
  color: "white"
}

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
    "darkWhite"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
      "darkWhite"
    ]).isRequired
  })
}
