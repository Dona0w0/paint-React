import  {useState,useRef,Fragment} from 'react';
import './inicioStyle.css'
import Grid from '../grid/grid';
import {CompactPicker } from 'react-color';




function Compilado() {

 const [selectColor, setSelectColor]=useState('Black');
 const [mouseOn, setMouseOn]= useState(false)
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

  function handleReset(){}


  return (

   

    <Fragment>
      <div className="App">

        <div className='botones'>
          <button onClick='handleReset'>Reset</button>
        </div>


        <div className="displayPaleta">
        <CompactPicker color={selectColor} onChangeComplete={cambioColor}/>
        </div>

        <div className='displayImagenGrid'>
        <p>imagen Grid aquí</p>
        </div>

        <div className='displayGrid'>
            <p>disp grid</p>

         <Grid   
          width={Width}
          height={Height}
          selectColor={selectColor}
          mouseOn={mouseOn}/>
       
        </div>


      </div>
      
      </Fragment>
  );
}

export default Compilado;
