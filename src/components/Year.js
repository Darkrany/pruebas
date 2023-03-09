
import { useState } from 'react';




export  function Year() {

  const currentYear = new Date().getFullYear();
  
  const [YearCounter, setYear] = useState(currentYear)
 
  const BackYear = () => {
     
    setYear(YearCounter-1);
  }


  
  const NextYear = () =>{

    setYear(YearCounter+1);
  }

  return (
    <div>
        
        <p>{YearCounter}</p>
        <button onClick={() => setAhora(Date.now())} >Camiar ahora</button>

          <button onClick={BackYear} >Año Anterior</button>
          <br/>
          <button onClick={NextYear}>Siguiente Año</button>
          <br/>
          <input type="number" onChange={e => setYear(e.target.value)}/>

      </div>
  )



}
