import React from 'react'
import "../style/jang.css"
import rasm1 from "../img/telefon.png"
import rasm2 from "../img/komputer.png"
import rasm3 from "../img/ps.png"
import rasm4 from "../img/achki.png"
import rasm5 from "../img/kubik.png"
import rasm6 from "../img/kub.png"
import rasm7 from "../img/arrow 1.png"
function Jang() {
  return (
<section className='jang'>
    <div className="container">
<div className="jang_top">
    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
</div>
<div className="jang_bottom">
    <div className="jang_card">
    <img className='jaa' src={rasm1} alt="" />
    <span>Mobile Game Development</span>
    <img src={rasm7} alt="" />
       
    </div>
    <div className="jang_card">
    <img className='jaa' src={rasm2} alt="" />
    <span>PC Game Development</span>

    <img src={rasm7} alt="" />
    </div>
    <div className="jang_card">
    <img className='jaa' src={rasm3} alt="" />
    <span>PS4 Game Development</span>

    <img src={rasm7} alt="" />
    </div>
    <div className="jang_card">
    <img className='jaa' src={rasm4} alt="" />
    <span>AR/VR Solutions</span>

    <img src={rasm7} alt="" />
    </div>
</div>
<div className="jang_bottom_pas">
    <div className="jang_card">
    <img className='jaa' src={rasm5} alt="" />
    <span>AR/ VR design</span>

    <img src={rasm7} alt="" />
    </div>
    <div className="jang_card">
    <img className='jaa' src={rasm6} alt="" />
    <span>3D Modelings</span>

    <img src={rasm7} alt="" />
    </div>
    </div>
    </div>
</section>
  )
}

export default Jang
