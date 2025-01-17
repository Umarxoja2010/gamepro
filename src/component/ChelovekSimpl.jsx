import React from 'react'
import "../style/cheloveksimlp.css"
import rasm1 from "../img/spiderkalla.png"
import rasm2 from "../img/ptichka.png"
function ChelovekSimpl() {
  return (
   <section className='cheloveksimpl'>
    <div className="container">
<div className="cheloveksimlp_wrapper">
    <div className="cheloveksimlp_img">
        <img src={rasm1} alt="" />
    </div>
    <div className="cheloveksimpl_content">
        <h3>Lorem Ipsum is simply dummy text.</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
        <div className="cheloveksimpl_card">
            <img src={rasm2} alt="" />
            <p>Lorem Ipsum is simply</p>
        </div>
        <div className="cheloveksimpl_card">
            <img src={rasm2} alt="" />
            <p>Lorem Ipsum is simply</p>
        </div>
        <div className="cheloveksimpl_card">
            <img src={rasm2} alt="" />
            <p>Lorem Ipsum is simply</p>
        </div>
        <div className="cheloveksimpl_card">
            <img src={rasm2} alt="" />
            <p>Lorem Ipsum is simply</p>
        </div>
    </div>
</div>
    </div>
   </section>
  )
}

export default ChelovekSimpl
