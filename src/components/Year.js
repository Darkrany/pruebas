import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';



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
          <button onClick={BackYear} >Año Anterior</button>
          <br/>
          <button onClick={NextYear}>Siguiente Año</button>
          <br/>
          <input onChange={e => setYear(e.target.value)}/>  
          <p>esto va!??</p>

      </div>
  )



}

Year.propTypes = {
    currentYear: PropTypes.number.isRequired
}