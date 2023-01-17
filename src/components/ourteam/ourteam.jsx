import React from 'react'
import "./ourteam.css"

function ourteam() {
  return (
    <section className='ourteam'>
      <div className="title">
        our team
      </div>
      <div className="images">
        <div className="owl-carousel ourteam-carousel">
          <div className="ourteam-item"><img src={require("../assets/images/our team/1.webp")} alt="" /></div>
          <div className="ourteam-item"><img src={require("../assets/images/our team/2.webp")} alt="" /></div>
          <div className="ourteam-item"><img src={require("../assets/images/our team/3.webp")} alt="" /></div>
          <div className="ourteam-item"><img src={require("../assets/images/our team/2.webp")} alt="" /></div>
          <div className="ourteam-item"><img src={require("../assets/images/our team/1.webp")} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default ourteam