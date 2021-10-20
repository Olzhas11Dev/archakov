let input = document.querySelector("input")
let btn = document.querySelector("button")
let content = document.querySelector(".content")
let arr = []

handleClickAdd = () => {
  arr.push(input.value)
  console.log(arr)
  render()
  input.value = ""
}

handleClickRemove = (index) => {
  arr.splice(index, 1)
  render()
}

render = () => {
  content.innerHTML = ""
  arr.map((element, index) => {
    let div = document.createElement("div")
    div.innerHTML = element

    let remButton = document.createElement("button")
    remButton.innerHTML = "delete"
    div.appendChild(remButton)

    remButton.addEventListener("click", () => {
      handleClickRemove(index)
    })

    content.appendChild(div) //clean it later otherwise it will dublicate
  })
}

btn.addEventListener("click", handleClickAdd)
