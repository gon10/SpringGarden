import React from "react";
import ImageText from "../components/ImageText";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import planta1 from "../img/planta1.PNG";
import planta2 from "../img/planta2.PNG";
import planta3 from "../img/planta3.PNG";
const useStyles = makeStyles(styles);



const Tipologias = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <div
      ref={ref}
      id="tipologias-container"
      className={classNames(classes.main, classes.mainRaised)} 
    >
      {/* <SectionCarousel /> */}
      
      <div className="p-1 d-flex flex-column justify-content-around justify-content-center align-items-center">
              {/* <h1 className="springardenlogo">EM PERFEITA HARMONIA COM A NATUREZA...</h1> */}
              <h7 className="Typologies">
                  As tipologias do Spring Garden Residences vão desde o versátil T1 ao imponente T4 com enormes varandas/terraços e vistas maravilhosas sobre a cidade do Porto. 
              </h7>
      </div>
        <div class="row">
         <div class="col-sm-4">
            <h4 className="tipologiasText">{"T1"}</h4>
            <img src={planta1} alt="image" className="w-100"></img>
         </div>
         <div class="col-sm-4">
             <h4 className="tipologiasText">{"T2"}</h4>
             <img src={planta2} alt="image" className="w-100"></img>
         </div>
         <div class="col-sm-4">
           <h4 className="tipologiasText">{"T3"}</h4>
           <img src={planta3} alt="image" className="w-100"></img>
         </div>
            
        </div>

        
      Tipologias
      <br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      <br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </div>
  );
});

export default Tipologias;
