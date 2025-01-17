import React from 'react'
import "../style/footer.css"
import rasm1 from "../img/fecebook.png"
import rasm2 from "../img/instagram.png"
import rasm3 from "../img/twitter.png"
import rasm4 from "../img/Linkaden.png"
function Footer() {
  return (
<section className='footer'>
    <div className="container">
<div className="footer_wrapper">
  <div className="footer_con1">
    <h3>LOGO</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <span>@Logo</span>
  </div>
  <div className="footer_con2">
    <h4>About</h4>
    <ul>
      <li>Zeux</li>
      <li>Portfolio</li>
      <li>Careers</li>
      <li>Contact</li>
    </ul>
  </div>
  <div className="footer_con3">
<h4>Contact us</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<span>+908 89097 890</span>
  </div>
  <div className="footer_con4">
    <img src={rasm1} alt="" />
    <img src={rasm2} alt="" />
    <img src={rasm3} alt="" />
    <img src={rasm4} alt="" />
  </div>
</div>
    </div>
</section>
  )
}

export default Footer
