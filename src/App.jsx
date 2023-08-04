

import './App.css'
import Button from './components/Button'
import Phrases from './components/Phrases'/*importo componente*/
import frases from'./utils/frases.json' /*importo json*/
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'
import Lenguage from './components/Lenguage'
const images = [1,2,3,4,5,6,7,8]

console.log(getRandomArray(frases))

function App() {
 const [phraseRandom, setPhraseRandom] = useState(getRandomArray(frases))
 const [numImages, setNumImages] = useState(getRandomArray(images))
const [lenguageEs, setLenguageEs] = useState(false)

 const appStyles={
  backgroundImage:`url('/fortuna-1/fondo${numImages}.jpg')`,
 
 };
// console.log(lenguageEs)
 getRandomArray(frases)

  return (
    <div style={appStyles} className="App">
      <img className="obj1" src="/icons/Sin título-1.png" alt="" />
      <img className="obj2" src="/icons/Sin título-2.png" alt="" />
      <img className="obj3" src="/icons/Sin título-1.png" alt="" />
      <img className="obj4" src="/icons/Sin título-2.png" alt="" /> 
      <img className="obj5" src="/icons/Sin título-3.png" alt="" />
      <img className="obj6" src="/icons/Sin título-1.png" alt="" />
      <img className="obj7" src="/icons/Sin título-3.png" alt="" />
      <img className="obj8" src="/icons/Sin título-3.png" alt="" />
      <img className="obj9" src="/icons/Sin título-3.png" alt="" />
      <img className="obj10" src="/icons/Sin título-3.png" alt="" />
         {/* <span className="obj1">Obj_1</span>
         <span className="obj2">Obj_2</span> 
         <span className="obj3">Obj_3</span>
         <span className="obj4">Obj_4</span> */}


      <h1 className='App__title'>{lenguageEs?"Grandes Frases" :"Great Phrases"}</h1>
     
     <div className='container__Buton_Lenguage'> 
          
   
          <Button 
             setPhraseRandom={setPhraseRandom}
              setNumImages={setNumImages}
              lenguageEs={lenguageEs}
           />
      
      <Lenguage
          setPhraseRandom={setPhraseRandom}
          setNumImages={setNumImages}
          setLenguageEs={setLenguageEs}
          lenguageEs={lenguageEs}
          /> 
          
       </div>
       <Phrases 
       phraseRandom={phraseRandom}
       lenguageEs={lenguageEs}
       />
     
    </div>
  )
 }

export default App
