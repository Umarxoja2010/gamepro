import React from 'react'
import "../style/kareyya.css"
import rasm1 from "../img/Robert.png"
import rasm2 from "../img/Chiristy.png"
import rasm3 from "../img/Kim.png"
import rasm4 from "../img/3tadumaloq.png"
import rasm5 from "../img/left.png"
import rasm6 from "../img/right.png"
function Kareyya() {
  return (
  <section className='kareyya'>
    <div className="container">
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
        <div className="kareyya_bottom">
            <div className="kareyya_bottom_card">
            <img src={rasm1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
            </div>
            <div className="kareyya_bottom_card">
            <img src={rasm2} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </div>
            <div className="kareyya_bottom_card">
            <img src={rasm3} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
        <div className="kareyya_bottom_pas">
<div className="kareyya_bottom_pas_con1">
    <img src={rasm4} alt="" />
</div>
<div className="kareyya_bottom_pas_con2">
    <img src={rasm5} alt="" />
    <img src={rasm6} alt="" />
</div>
        </div>
    </div>
  </section>
  )
}

export default Kareyya
