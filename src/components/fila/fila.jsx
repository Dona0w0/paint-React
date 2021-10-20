import React from "react";
import './filaStyle.css'
import Pixel from "../pixel/pixel";

 function CreaLinea(props) {
  const {width, selectColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectColor={selectColor} />);
  }

  return <div className="fila">{pixels}</div>;
}
export default CreaLinea;