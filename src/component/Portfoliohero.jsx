import React from 'react'
import "../style/portfolioHero.css"
import rasm1 from "../img/user.png"
import rasm2 from "../img/location.png"
import rasm3 from "../img/Server.png"
function Portfoliohero() {
  return (
   <section className='portfoliohero'>
    <div className="container">
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <div className="portfoliohero_wrapper">
            <div className="portfoliohero_wrapper_card1">
                <img src={rasm1} alt="" />
                <h5>90+
                Clients</h5>
            </div>
            <span className='chiziq'></span>
            <div className="portfoliohero_wrapper_card2">
                <img src={rasm2} alt="" />
                <h5>30+
                Countries</h5>
            </div>
            <span className='chiziq'></span>
            <div className="portfoliohero_wrapper_card3">
                <img src={rasm3} alt="" />
                <h5>50+
                Projects</h5>
            </div>
            
        </div>
    </div>
   </section>
  )
}

export default Portfoliohero
