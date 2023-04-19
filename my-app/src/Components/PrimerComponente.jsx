import React from 'react'
import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom';


// const PrimerComponente = ()=> {
//   return(
//     <div>
//      <LinkRouter to = './Home'/>
//     </div>
//   )
// };

const PrimerComponente=()=>{
  return(
    <div>
            <button onClick={<LinkRouter to = './Home'/>}>Boton </button>
      <h1>Hola</h1>
    </div>
  )
}

// const PrimerComponente = () => {

//   const [start,setStart]=useState(0);

//   console.log(start);

//   return (
//     <div>
//       <button onClick={()=>setStart(start+1)}>Boton </button>
//       <h1>{start}</h1>
//     </div>
//   )
// }

export default PrimerComponente
