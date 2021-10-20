import React, { useRef } from "react";
import CreaLinea from "../fila/fila";


function Grid(props) {
    const { width, height, selectColor, mouseOn } = props;
    const panelRef = useRef();
  
    let fila = [];
  
    for (let i = 0; i < height; i++) {
      fila.push(<CreaLinea key={i} width={width} selectColor={selectColor} mouseOn={mouseOn} />);
    }

  return (
      <div id="pixels" ref={panelRef}>
        {fila}
      </div>
      
  );
}      
export default Grid;                                                     