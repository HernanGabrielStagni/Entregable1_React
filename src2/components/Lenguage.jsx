

import frases from '../utils/frases.json'
import getRandomArray from '../utils/getRandomArray'



const Button = ({setPhraseRandom,setLenguageEs,lenguageEs,setNumImages}) => {
 
 const handleChangePhrase=()=>{
   //esta funcion actualiza el estado con dos nuevos valores. una imagen nueva y un nuevo numero de imagen
     
     setLenguageEs(!(lenguageEs))
     console.log(lenguageEs) 
 }



     return (
      <>
       <button className='App__btn btn__Lenguage' onClick={handleChangePhrase}>{lenguageEs ?'To English' :'A'+' '+'Español'}</button>
     
       </>
 
 //aqui se asocia el click con la actualizacuion de los estados y al ser estados en vez de variables se renderizan y muestran en el html
)
}

export default Button













// import React from 'react'

// const Lenguage = ({setLenguageEs,lenguageEs}) => {
//     const handleLenguege=()=>{
//         setLenguageEs(!(lenguageEs))
//         console.log(lenguageEs) 


//     return (
  
//     <button className='App__btn' onClick={handleLenguege}>Lenguaje</button>
//   )
// }

// export default Lenguage


// }
