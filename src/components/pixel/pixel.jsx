import React, { useState } from "react";
import './pixelStyle.css'


function Pixel(props) {
  

  const [pixelColor, setPixelColor] = useState("white");
  const [prevColor, setprevColor] = useState(pixelColor);
  const [cambiaColor, setCambiaColor] = useState(true);
  const { selectColor,mouseOn } = props;


  function handleChangeColor(event) {
    setPixelColor(selectColor);
    setCambiaColor(false);
  }
  
  function handleOver(){
    if(mouseOn===true){
      setPixelColor(selectColor);
      setCambiaColor(false);
    }
  }
    
  function handleToqueMouse(event){
      setprevColor(pixelColor);
      setPixelColor(selectColor);
  }
  function handleNoTocaMouse(event){
      if(cambiaColor){
          setPixelColor(prevColor);
      }
      setCambiaColor(true);
  }
   

  return (
    <div className="pixel"
      onClick={handleChangeColor}
      onMouseEnter={handleToqueMouse}
      onMouseLeave={handleNoTocaMouse}
      onMouseOver={handleOver}
      style={{ backgroundColor: pixelColor,
                disabled:props.dibujoactivo,
              border: props.borders === true ? '1px groove #565859' : '0' }}>

      </div>
  );
}
export default Pixel;