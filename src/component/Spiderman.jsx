import React from 'react'
import "../style/spiderman.css"
import rasm1 from "../img/spiderman.png"
function Spiderman() {
  return (
<section className='spiderman'>
    <div className="container">
<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
<h3>Lorem Ipsum</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
<img className='spider' src={rasm1} alt="" />
    </div>
</section>
  )
}

export default Spiderman
