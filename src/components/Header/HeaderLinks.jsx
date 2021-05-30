/*eslint-disable*/
import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [btnText, setBtnText] = useState("en");

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const {
    homeRef,
    tipologiasRef,
    localizacaoRef,
    acabamentosRef,
    contactosRef
  } = props;

  useEffect(() => {
    setBtnText(i18n.language);
    return () => {};
  }, [i18n.language]);

  const scrolling = instance => {
    console.log("instance.current.attributes", instance);
    let node = document.getElementById(instance.current.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth"
    });
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Home"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        /> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={"nav-buton"} to="/#home">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
              scrolling(homeRef);
            }}
          >
            {t("header.home")}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={"nav-buton"} to="/#tipologias">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
              scrolling(tipologiasRef);
            }}
          >
            {t("header.apartments")}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={"nav-buton"} to="/#localizacao">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
              scrolling(localizacaoRef);
            }}
          >
            {t("header.localization")}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={"nav-buton"} to="/#acabamentos">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
              scrolling(acabamentosRef);
            }}
          >
            {t("header.details")}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={"nav-buton"} to="/#contactos">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
              scrolling(contactosRef);
            }}
          >
            {t("header.contacts")}
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText={btnText.toUpperCase()}
          className={"nav-buton"}
          // dropdownHeader="Dropdown Header"
          buttonProps={{
            className: classes.navLink + " nav-buton",
            color: "transparent"
          }}
          dropdownList={["EN", { divider: true }, "PT"]}
          onClick={ele => {
            changeLanguage(ele.toLowerCase());
            return ele;
          }}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}

        {/*<Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>*/}
      </ListItem>
    </List>
  );
}
