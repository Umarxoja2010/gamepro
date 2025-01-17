import React from 'react'
import "../style/aboutAvatar.css"
import rasm1 from "../img/COO.png"
import rasm2 from "../img/john1.png"
import rasm3 from "../img/john2.png"
import rasm4 from "../img/john3.png"
import rasm5 from "../img/john4.png"
function AboutAvatar() {
  return (
   <section className='aboutavatar'>
    <div className="container">
        <h4>Our Team</h4>
        <div className="aboutavatar_wrapper">
        <div className="abouravatar_card">
          <img src={rasm2} alt="" />
          <h5>John peter</h5>
          <img className='coo' src={rasm1} alt="" />
        </div>
        <div className="abouravatar_card">
          <img src={rasm3} alt="" />
          <h5>John peter</h5>
          <img className='coo' src={rasm1} alt="" />
        </div>
        <div className="abouravatar_card">
          <img  src={rasm4} alt="" />
          <h5>John peter</h5>
          <img className='coo' src={rasm1} alt="" />
        </div>
        <div className="abouravatar_card">
          <img src={rasm5} alt="" />
          <h5>John peter</h5>
          <img className='coo' src={rasm1} alt="" />
        </div>
        </div>
    </div>
   </section>
  )
}

export default AboutAvatar
