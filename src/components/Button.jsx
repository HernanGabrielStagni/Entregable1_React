
   import frases from '../utils/frases.json'
   import getRandomArray from '../utils/getRandomArray'


   
   const Button = ({setPhraseRandom, setNumImages}) => {
    const handleChangePhrase=()=>{
        setPhraseRandom(getRandomArray(frases))
        setNumImages(getRandomArray([1,2,3,4,5,6,7,8]))
    }
        return (
    <button className='App__btn' onClick={handleChangePhrase}>Pruebe Suerte</button>
  )
}

export default Button


