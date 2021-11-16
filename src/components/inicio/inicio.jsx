import  {useState,Fragment, useEffect} from 'react';
import './inicioStyle.css'
import Grid from '../grid/grid';
import {CompactPicker } from 'react-color';
import axios from 'axios';

function Compilado() {

 const [selectColor, setSelectColor]=useState('white');//color default
 const [mouseOn, setMouseOn]= useState(false);// determina si el mouse esta sobre un pixel
 const [reinicio, setReinicio]=useState(true);
 const [textBoton, setTextBoton]=useState('Borrar Todo');
 const [paletaState, setPaletaState]=useState('idle');
 const [colores, setColores]=useState([]);
 const Width=10;
 const Height=10;

//Arreglo de paleta de colores

  function cambioColor(color){// funcion que obtiene el codico del color seleccionado en la paleta
      setSelectColor(color.hex)//lo guarda en set color el cual sera enviado a grid 
    }

  document.body.onmousedown = function() {//  nos ayuda a saber si el botol clic esta seleccionado o no
    setMouseOn(true);
    }
  
  document.body.onmouseup = function() {
    setMouseOn(false);
    }

  function handleReset(){
    setReinicio(!reinicio);
    if(textBoton==='Borrar Todo')
      setTextBoton('crear');
      else
      setTextBoton('Borrar Todo');
  }

   const paletaRandom =async()=>{
    
      axios.get('https://www.colr.org/json/colors/random/50')
      .then(response => { 
        setPaletaState('loading');
        const arrApi= response.data.matching_colors;
        const arrGato = arrApi.map((value) => {
          return '#' + value;
        });
        
        const arrFiltro=arrGato.filter(element => { 
           return element !== '#';
        });
      
        const arrFinal = []; 
        for(let i = 0; i < 36; i++) 
          { 
            arrFinal.push(arrFiltro[i]);
          }

      setColores(arrFinal);
      //setPaletaState("finish");
     })
     .catch(() => {
        setPaletaState("fail");
     })
    }
    
  useEffect(()=>{paletaRandom()},[]);

  return (

    <Fragment>
      <div className="App">
        <h1>React Paint :) </h1>

        <div className="barra">
            <div className='boton'>
              <button onClick={handleReset}>{textBoton}</button>
            </div>

            {paletaState==="idle"||paletaState==="loading"&&
              <div className="displayPaleta">
                <h1>Cargando paleta...</h1>
              </div> 
            }

            {paletaState==="finish" &&
              <div className="displayPaleta">
                 <CompactPicker  colors={colores} color={selectColor} onChangeComplete={cambioColor}/>{/* que crea una paleta de coleres*/}
              </div>
            } 

            {paletaState==="fail"&&
            <div className="displayPaleta">
              <p>falla en la carga de paleta</p>
              <p>Por favor refresca la pagina</p>
            </div> 
            }
           
        </div>


        { reinicio &&
        <div className='displayGrid' >
         <Grid   
          width={Width}
          height={Height}
          selectColor={selectColor}
          mouseOn={mouseOn}/>{/*imprime contenido del archivo grid y pasa las props que necesita*/}
        </div>
        }

      </div>
      
      </Fragment>
  );
}

export default Compilado;
