import React from "react"
import styles from "assets/jss/material-kit-react/views/components.js"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import planta1 from "../img/planta1.PNG"
import planta2 from "../img/planta2.png"
import planta3 from "../img/planta3.PNG"

const useStyles = makeStyles(styles)


const Tipologias = React.forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div
      ref={ref}
      id="tipologias-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      {/* <SectionCarousel /> */}

      <div className="p-3 d-flex flex-column justify-content-around justify-content-center align-items-center typologies">
        {/* <h1 className="springardenlogo">EM PERFEITA HARMONIA COM A NATUREZA...</h1> */}
        <h6 className="descubramais">
          As tipologias vão desde o versátil T1 ao imponente T4 com enormes varandas e vistas maravilhosas sobre a cidade do Porto.
        </h6>

      </div>
      <div class="row">
        <div class="col-sm-4 d-flex flex-column align-items-center">
          <h4 className="tipologiasText">T1</h4>
          <img src={planta1} alt="" className="w-100 imageTypologies"></img>
          <br />
          <button>Ver planta</button>
        </div>
        <div class="col-sm-4 d-flex flex-column align-items-center">
          <h4 className="tipologiasText">T2</h4>
          <img src={planta2} alt="" className="w-100 imageTypologies"></img>
          <br />
          <button>Ver planta</button>
        </div>
        <div class="col-sm-4 d-flex flex-column align-items-center">
          <h4 className="tipologiasText">T3</h4>
          <img src={planta3} alt="" className="w-100 imageTypologies"></img>
          <br />
          <button>Ver planta</button>
        </div>

      </div>
    </div>
  )
})

export default Tipologias
