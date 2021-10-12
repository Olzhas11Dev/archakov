import React, { Component } from "react"
import "../components/profile.css"

export default class ProfileClass extends Component {
  montoToStr = (num) => {
    return num > 12 || num < 1 ? null : "январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь".split(",")[num - 1]
  }

  render() {
    return (
      <div className="profile_main">
        <div>
          Hi <span>{this.props.name.split(" ")[0]}!</span>
        </div>
        <div>
          Date of Registration :
          {`
           ${this.props.registredAt.getDate()}
          ${this.montoToStr(this.props.registredAt.getMonth())} 
          ${this.props.registredAt.getFullYear()} 
        `}
        </div>
      </div>
    )
  }
}
