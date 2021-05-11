import "./App.css";
import ImageText from "./components/ImageText";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import image from "./img/inside.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ImageText
          image={image}
          title={"title"}
          summary={"summary"}
          direction="left"
          bgcolor="#ffc107"
        ></ImageText>

        <ImageText
          image={image}
          title={"title 2 "}
          summary={"summary 2 "}
          direction="right"
          bgcolor="#c2ff07"
        ></ImageText>
      </div>
      <Test></Test>
    </div>
  );
}

export default App;
