

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
      <h1 className='App__title'>{lenguageEs ?"Lasdfaeyes de Murphy" :"murphy's laws"}</h1>
     
     
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
       
       <Phrases 
       phraseRandom={phraseRandom}
       lenguageEs={lenguageEs}
       
       />
     
    </div>
  )
 }

export default App
