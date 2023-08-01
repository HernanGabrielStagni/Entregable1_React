
const Phrases = ({phraseRandom,lenguageEs}) => {
  return (
    <>
      <div className="App__div-phrase">
          
          <p className="App__phrase">{lenguageEs ?phraseRandom.frase :phraseRandom.phrase}</p>
          <p className="App__author">{lenguageEs ?`Fuente: ${phraseRandom.author}` :`Source:${phraseRandom.author}`}</p>
      
      </div>
    </>






  )
}

export default Phrases

