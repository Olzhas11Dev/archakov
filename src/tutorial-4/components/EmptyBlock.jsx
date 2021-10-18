import React from "react"

function EmptyBlock() {
  return (
    <div>
      <div className="block empty-block">
        <img src="./img/ghost.png" width="32px" height="32px" alt="Ghost"></img>
        <h2>Список фраз пустой</h2>
        <p>
          Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”
        </p>
      </div>
    </div>
  )
}

export default EmptyBlock
