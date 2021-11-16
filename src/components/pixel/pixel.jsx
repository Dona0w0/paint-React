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
  
  function handleOver(){//checa si el mouse esta presionado
    if(mouseOn===true){
      setPixelColor(selectColor);
      setCambiaColor(false);
    }
  }
  // Yvone no me pegues no supe como pintar el primer cuadrito al rarastrar :( 
  return (
    <div className="pixel"
      onClick={handleChangeColor}
      onMouseOver={handleOver}
      style={{ backgroundColor: pixelColor,
                disabled:props.dibujoactivo,
              border: props.borders === true ? '1px groove #565859' : '0' }}>
      </div>
  );
}
export default Pixel;