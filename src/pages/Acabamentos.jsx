import React from "react"
import styles from "assets/jss/material-kit-react/views/components.js"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
//import SectionCarousel from "components/Carousel/SectionCarousel";
import ImageText from "../components/ImageText"
import imageAcabamentos from "../img/wall.jpg"
import imageBathroom from "../img/banho-2.jpg"
import imageBedroom from "../img/quarto.jpg"
import imageLivingRoom from "../img/sala-1.jpg"
import imageKitchen from "../img/cozinha.jpg"



const useStyles = makeStyles(styles)

const Acabamentos = React.forwardRef((props, ref) => {
  const classes = useStyles()
  return (
    <div
      ref={ref}
      id="acabamentos-container"
      className={classNames(classes.main, classes.mainRaised)}
    >
      <h6 className="descubramais">
        O segredo está nos detalhes!
      </h6>
      {/* <SectionCarousel /> */}

      <div className="containerImagesDetails">
        <div className="boxImagesDetails">
          <img src={imageBedroom} />
          <span>Quartos</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imageLivingRoom} />
          <span>Salas</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imageBathroom} />
          <span>Casas de Banho</span>
        </div>
        <div className="boxImagesDetails">
          <img src={imageKitchen} />
          <span>Cozinhas</span>
        </div>
      </div>

      <h8 className="summaryText">O nível dos acabamentos acompanha a qualidade de construção através da adoção de soluções construtivas de eficácia comprovada e da seleção de materiais de marcas conceituadas e de qualidade altíssima. Começando na fachada e na caixilharia, passando pelas bancadas e carpintarias, até aos equipamentos e eletrodomésticos, a escolha é coerente e a sua qualidade transversal.</h8>
      {/* <ImageText
        image={imageAcabamentos}
        title={""}
        summary={
          "O nível dos acabamentos acompanha a qualidade de construção através da adoção de soluções construtivas de eficácia comprovada e da seleção de materiais de marcas conceituadas e de qualidade altíssima. Começando na fachada e na caixilharia, passando pelas bancadas e carpintarias, até aos equipamentos e eletrodomésticos, a escolha é coerente e a sua qualidade transversal."
        }
        direction="noButtonLeft"
        bgcolor="#f6f4f1"
        separatorlink="/acabamentos"
      ></ImageText>
      <ImageText
        image={imageBathroom}
        title={""}
        summary={
          "A paisagem e a luz natural invadem cada apartamento, onde as varandas contribuem para criar um ambiente acolhedor, relaxante e confortável que o fazem sentir em comunhão com a natureza que o rodeia. Os vastos jardins e as vista soobre a cidade podem ser explorados em todas as habitações. Os apartamentos possuem divisões generosas e os seus acabamentos contemporâneos combinam na perfeição com o contacto com o ar-livre. "
        }
        direction="noButtonRight"
        bgcolor="#f6f4f1"
        separatorlink="/acabamentos"
      ></ImageText> */}
      <h6 className="descubramais">
        Conheça alguns dos principais atributos que pode encontrar nos edifícios Spring Garden Residences:
      </h6>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/marmore.png" />
          <p>Mármore Guangxi White</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/ar-condicionado.png" />
          <p>Ar Condicionado</p>
        </div>
        <div className="square">
          <img className="rs" loading="lazy" src="https://acquadalva.pt/wp-content/uploads/2021/04/pavimento-flutuante.png" />
          <p>Pavimento flutuante</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/eletrodomesticos.png" />
          <p>Eletrodomésticos encastráveis tipo Bosch</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/armario.png" />
          <p>Armário lacado a branco</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/estores.png" />
          <p>Estores interiores nos quartos tipo “Blackout”</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/video.png" />
          <p>Video-Porteiro</p>
        </div>
        <div className="square">
          <img className="rs" src="https://acquadalva.pt/wp-content/uploads/2021/04/aspiracao.png" />
          <p>Aspiração Central</p>
        </div>

      </div>

    </div>
  )
})

export default Acabamentos
