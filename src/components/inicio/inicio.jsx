import  {useState,Fragment} from 'react';
import './inicioStyle.css'
import Grid from '../grid/grid';
import {CompactPicker } from 'react-color';

function Compilado() {

 const [selectColor, setSelectColor]=useState('white');
 const [mouseOn, setMouseOn]= useState(false);
 const [reinicio, setReinicio]=useState(true);
 const [textBoton, setTextBoton]=useState('Borrar Todo');
 const Width=10;
 const Height=10;


  function cambioColor(color){
      setSelectColor(color.hex)
    }

  document.body.onmousedown = function() {
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
                 <CompactPicker color={selectColor} onChangeComplete={cambioColor}/>
              </div>            
          </div>

        { reinicio &&
        <div className='displayGrid' >
         <Grid   
          width={Width}
          height={Height}
          selectColor={selectColor}
          mouseOn={mouseOn}/>
        </div>
        }

      </div>
      
      </Fragment>
  );
}

export default Compilado;
