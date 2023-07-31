
const Phrases = ({phraseRandom,lenguageEs}) => {
  return (
    <>
    <div className="App__div-phrase">
        <p className="App__phrase">{lenguageEs ?phraseRandom.frase :phraseRandom.phrase}</p>
        
    </div>
    <div className="App__div-author">
      <p className="App__author">Fuente: {phraseRandom.author}</p>
    </div>
    </>






  )
}

export default Phrases

