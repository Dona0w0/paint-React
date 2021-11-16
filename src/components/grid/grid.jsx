import React, { useRef } from "react";
import CreaLinea from "../fila/fila";
import "./gridStyle.css"
import html2canvas from 'html2canvas';

function Grid(props) {
    const { width, height, selectColor, mouseOn } = props;
    const gridRef=useRef();//variable que referencia al grid
    const printRef=useRef();// variable que guarda la foto del grid
    
    let fila = [];
  
    for (let i = 0; i < height; i++) { //agrega cada linea con sus respectivas props
      fila.push(<CreaLinea key={i} width={width} selectColor={selectColor} mouseOn={mouseOn} />);
    }

    function handlePrint(event) { 
      printRef.current.innerHTML = '';
      html2canvas(gridRef.current).then(function(canvas) // componente que nos ayuda a obtener una imagen del html
       {
          printRef.current.appendChild(canvas);
       });
    }

  return (
    <div className='CGrid' >
      <div className='print'>
        <button onClick={handlePrint}>Imprimir</button>
      </div>

      <div className="foto">
        <p>Foto</p>
        <div  ref={printRef}>
        </div> 
      </div>

      <div className="pixels" ref={gridRef}>
        {fila}
      </div>
      
      </div>
  );
}      
export default Grid;                                                     