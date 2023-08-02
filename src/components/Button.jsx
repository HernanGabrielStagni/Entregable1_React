
   import frases from '../utils/frases.json'
   import getRandomArray from '../utils/getRandomArray'


   
   const Button = ({setPhraseRandom,setLenguageEs,lenguageEs,setNumImages}) => {
    
    const handleChangePhrase=()=>{
      //esta funcion actualiza el estado con dos nuevos valores. una imagen nueva y un nuevo numero de imagen
        setPhraseRandom(getRandomArray(frases))
        setNumImages(getRandomArray([1,2,3,4,5,6,7,8]))
        
    }

   
  
        return (
         <>
          <button className='App__btn' onClick={handleChangePhrase}>{lenguageEs ?'Ver Nueva Ley' :'Show New Law'}</button>
        
          </>
    
    //aqui se asocia el click con la actualizacuion de los estados y al ser estados en vez de variables se renderizan y muestran en el html
  )
}

export default Button


