import React from "react";
import './filaStyle.css'
import Pixel from "../pixel/pixel";

 function CreaLinea(props) {
  const {width, selectColor, mouseOn } = props;

  let pixels = []; //arreglo para guardar las lineas de pixeles

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectColor={selectColor} mouseOn={mouseOn}   />);//agreca cada pixel con sus respectivas props
  }

  return <div className="fila">{pixels}</div>;
}
export default CreaLinea;