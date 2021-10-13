import React from "react"

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault() //prevent restart page
    const infoData = {
      name: event.target[0].value.trim(),
      password: event.target[1].value.trim(),
    }
    let { name, password } = infoData //destructuring

    if (name === "" || password === "") {
      alert("please add the value")
    } else {
      console.log(name, password)

      // Clean them again
      event.target[0].value = ""
      event.target[1].value = ""
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
