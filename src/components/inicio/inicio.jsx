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

   const paletaRandom =async()=>{// funcion asincrona 
    
      axios.get('https://www.colr.org/json/colors/random/50')// llamada a la api para generar los colores aleatorios , se piden 50 colores por si alguno llega vacio 
      .then(response => { 
        setPaletaState("loading");// cambia el estado de la paleta a cargando 
        const arrApi= response.data.matching_colors;// arreglo con los colores traidos de la api
       
        const arrFiltro=arrApi.filter(element => { 
           return element!=="";//quita los elementos vacios
        });
        
        const arrGato = arrFiltro.map((value) => {
          return "#"+value;// añade un # a cada color para que sean reconocibles por el selector de colores
        });
        

        let arrFinal = []; 
        for(let i = 0; i < 36; i++) // toma 306 colores de los 50 restantes del filtro
          { 
            arrFinal.push(arrGato[i]);
          }

      setColores(arrFinal);// se pasa el arreglo de 36 colores a la variable que los pasara al selector
      setPaletaState("finish");// cambia el estado de terminado por lo cual aparecera la paleta 
     })
     .catch(() => {
        setPaletaState("fail");// en caso de fallo o error se el estado se cambiara 
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
            
            {/*estado cargando*/}
            {paletaState==="idle"||paletaState==="loading"&& 
              <div className="displayPaleta">
                <h1>Cargando paleta...</h1>
              </div> 
            }

            {/*mostrar paleta*/}
            {paletaState==="finish" &&
              <div className="displayPaleta">
                 <CompactPicker  colors={colores} color={selectColor} onChangeComplete={cambioColor}/>{/* que crea una paleta de coleres*/}
              </div>
            } 

            {/*Error al cargar paleta*/}
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
