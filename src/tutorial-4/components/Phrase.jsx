import React from "react"

function Phrase({ array }) {
  console.log(array)
  return (
    <div className="list">
      {array.map((item) => {
        return (
          <div key={item.id} className="block">
            <h3>{item.phrase}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Phrase
