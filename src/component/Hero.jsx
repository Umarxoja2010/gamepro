import React from 'react'
import "../style/hero.css"
import rasm1 from "../img/joy_stick 1.png"
function Hero() {
  return (
   <section className='hero'>
    <div className="container">
<div className="hero_wrapper">
    <div className="hero_con1">
        <h5>3D game Dev </h5>
        <h2>Work that we produce for our clients</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        <button>Get more details</button>
    </div>
    <div className="hero_img">
        <img src={rasm1} alt="" />
    </div>
</div>
    </div>
   </section>
  )
}

export default Hero
