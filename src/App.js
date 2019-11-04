import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SketchPicker } from "react-color";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ColorPickers from "./components/colorpickers";
import Header from "./components/header";
import CombinedColors from "./components/combinedcolors";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
function App() {
  let key = 0;
  // const [color,setColor]=useState({colors:[]})
  const [colors, setColors] = useState([]);
  const [keyval, setKeyVal] = useState(0);
  const [picker, setPickers] = useState([]);

  const handleChangeComplete = (color, key) => {
    // setColors([...colors, {color,key:keyval}]);
    console.log(color);
    console.log(key);
    let a = colors.map(function(item) {
      return item.key == key ? { tempcolor: color, key: key } : item;
    });
    // console.log("getfruit is ",a)
    setColors(a);
    console.log("colors are ", colors);
  };

  const handleAddPickers = () => {
    setPickers([...picker, { key: keyval }]);
    setColors([...colors, { tempcolor: { hex: "#FFFFFF" }, key: keyval }]);
    setKeyVal(keyval + 1);
    console.log(colors);
  };
  return (
    <div className="App">
      <Container className="justify-content-md-center">
        <Header></Header>
        <Row>
          <Col md={6} sm={12}>
            {/* <SketchPicker onChangeComplete={handleChangeComplete}></SketchPicker> */}
            <ColorPickers
              name={colors}
              colors={colors}
              onChangeComplete={handleChangeComplete}
            ></ColorPickers>
            {/* <button onClick={handleAddPickers} style={{fontSize:"5rem"}}>+</button> */}
            <Fab color="primary" aria-label="add" onClick={handleAddPickers}>
              <AddIcon />
            </Fab>
          </Col>
          <Col md={6} sm={12}>
            <CombinedColors colors={colors}></CombinedColors>
          </Col>
        </Row>
        <hr className="hr-class"></hr>
        <p style={{color:"white"}}>Created by Alex Dushevski @tehheavy <a href="https://github.com/Tehheavy">https://github.com/Tehheavy</a></p>
      </Container>
    </div>
  );
}

export default App;
