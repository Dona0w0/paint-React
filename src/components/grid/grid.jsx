import React, { useRef } from "react";
import CreaLinea from "../fila/fila";
import html2canvas from 'html2canvas';

function Grid(props) {
    const { width, height, selectColor, mouseOn } = props;
    const gridRef=useRef();
    const printRef=useRef();
    
    let fila = [];
  
    for (let i = 0; i < height; i++) {
      fila.push(<CreaLinea key={i} width={width} selectColor={selectColor} mouseOn={mouseOn} />);
    }

    function handlePrint(event) {
      
      printRef.current.innerHTML = '';
      html2canvas(gridRef.current).then(function(canvas) {
          printRef.current.appendChild(canvas);
        });
    }

  return (

    <div className='CGrid' >
      <div id="pixels" ref={gridRef}>
        {fila}
      </div>

      <div id='print'>
        <button onClick={handlePrint}>Imprimir</button>
      </div>
      <div ref={printRef}>
      </div>

      </div>
  );
}      
export default Grid;                                                     