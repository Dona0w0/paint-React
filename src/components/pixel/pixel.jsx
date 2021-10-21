import React, { useState } from "react";
import './pixelStyle.css'


function Pixel(props) {
  

  const [pixelColor, setPixelColor] = useState("white");//color default
  const [prevColor, setprevColor] = useState(pixelColor);//color seleccionado
  const [cambiaColor, setCambiaColor] = useState(true);// permite cambiar color
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