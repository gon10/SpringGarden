import React from "react"
import styles from "assets/jss/material-kit-react/views/components.js"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import SectionCarousel from "components/Carousel/SectionCarousel"
const useStyles = makeStyles(styles)

const Contactos = React.forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div
      ref={ref}
      id="contactos-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <SectionCarousel /> */}

      <h6 className="descubramais">
        Venha conhecer o Spring Garden Residences!
      </h6>

      <h6>Stand de vendas no local do empreendimento com o sgeuinte horário de atendimento:
        <p>Segunda a Sábado: 9:00h-18:00h</p>
        <p>Domingos e Feriados: Apenas por marcação</p>
      </h6>
      <div className="row">
        {/* <SectionPills /> */}
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3>Localização</h3>
          <p>R. Dom Afonso Henriques 827 Pedrouços, Maia</p>
        </div>
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3>E-mail</h3>
          <p>geral@spring-residences.pt</p>
        </div>
        <div className="info col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h3>Telemóvel</h3>
          <p>+351 919429518 +351 913050087</p>
        </div>
      </div>

    </div>
  )
})

export default Contactos
