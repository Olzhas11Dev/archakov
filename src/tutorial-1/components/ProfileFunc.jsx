import React from "react"
import "../components/profile.css"

function ProfileFunc(props) {
  const getFirstWord = props.name.split(" ")[0]
  const year = props.registredAt.getFullYear()
  const month = props.registredAt.getMonth()
  const date = props.registredAt.getDate()

  const montoToStr = (num) => {
    return num > 12 || num < 1 ? null : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(",")[num - 1]
  }

  console.log(date, month, year)
  return (
    <div className="profile_main">
      <div>
        Hi <span>{getFirstWord}</span>!
      </div>
      <div> Date of Registration :{`${date} ${montoToStr(month)} ${year}`}</div>
    </div>
  )
}

export default ProfileFunc
