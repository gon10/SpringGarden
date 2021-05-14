import "./App.css";
import ImageText from "./components/ImageText";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import image from "./img/inside.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <ImageText
          image={image}
          title={"title"}
          summary={"summary"}
          direction="left"
          bgcolor="#FEFBEA"
        ></ImageText>

        <ImageText
          image={image}
          title={"title 2 "}
          summary={"summary 2 "}
          direction="right"
          bgcolor="#afd4b6b0"
        ></ImageText>

        <ImageText
          image={image}
          title={"A Mariana é linda"}
          summary={"O Gonçalo gosta muito da Mariana"}
          direction="top"
          bgcolor="#f072f1"
        ></ImageText>
      </div>
      <Test></Test>
    </div>
  );
}

export default App;
