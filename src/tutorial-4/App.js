import { useState } from "react"
import "./App.css"
import EmptyBlock from "./components/EmptyBlock"
import Phrase from "./components/Phrase"

import { adjectivesArr } from "./wordsDb"
import { nounsArr } from "./wordsDb"

const App = () => {
  const [list, setList] = useState([])

  const handleGenerate = () => {
    let randomAdj = Math.round(Math.random() * (adjectivesArr.length - 1))
    let randomAdj2 = Math.round(Math.random() * (adjectivesArr.length - 1))
    let randomNoun = Math.round(Math.random() * (nounsArr.length - 1))
    let phrase = `${adjectivesArr[randomAdj]} ${adjectivesArr[randomAdj2]} ${nounsArr[randomNoun]}`
    setList([...list, { id: Date.now(), phrase }])
  }

  return (
    <div>
      <div className="wrapper">
        {list.length === 0 ? <EmptyBlock /> : <Phrase array={list} />}
        <button className="btn btn_generate" onClick={handleGenerate}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={() => setList([])}>
          Очистить
        </button>
      </div>
    </div>
  )
}

export default App
