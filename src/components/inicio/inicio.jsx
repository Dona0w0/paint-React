import  {useState,Fragment} from 'react';
import './inicioStyle.css'
import Grid from '../grid/grid';
import {CompactPicker } from 'react-color';

function Compilado() {

 const [selectColor, setSelectColor]=useState('white');//color default
 const [mouseOn, setMouseOn]= useState(false);// determina si el mouse esta sobre un pixel
 const [reinicio, setReinicio]=useState(true);
 const [textBoton, setTextBoton]=useState('Borrar Todo');
 const Width=10;
 const Height=10;


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

  return (

    <Fragment>
      <div className="App">
        <h1>React Paint :)</h1>

        <div className="barra">
            <div className='boton'>
              <button onClick={handleReset}>{textBoton}</button>

            </div>
              <div className="displayPaleta">
                 <CompactPicker color={selectColor} onChangeComplete={cambioColor}/>{/*componente importado que crea una paleta de coleres*/}
              </div>            
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
