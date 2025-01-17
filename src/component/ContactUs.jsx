import React from 'react'
import "../style/contactus.css"
import rasm1 from "../img/glloob.png"
import rasm3 from "../img/lloc.png"
import rasm4 from "../img/phone 1.png"
import rasm5 from "../img/tarmoqlar.png"

function ContactUs() {
  return (
<section className='contactus'>
    <div className="container">
<h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<img className='contenttt_img' src={rasm1} alt="" />
<div className="contectus_wrapper">
  <div className="contectus_wrapper_card_fether">
<h4>Follow us</h4>
  <div className="contectus_wrapper_card1">
                <img src={rasm5} alt="" />
            </div>
  </div>
            <span className='chiz'></span>
            <div className="contectus_wrapper_card2">
              <img src={rasm4} alt="" />
                <h6 className='hhhh5' >+94 4444 5555 6</h6>
            </div>
            <span className='chiz'></span>
            <div className="contectus_wrapper_card3">
                <img className='loca' src={rasm3} alt="" />
                <h5>but also the leap into electronic 
                typesetting</h5>
            </div>
            
        </div>s

    </div>
</section>
  )
}

export default ContactUs
