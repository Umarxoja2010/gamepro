import React from 'react'
import "../style/komp.css"
import rasm1 from "../img/kompstol.png"
import rasm2 from "../img/kompnaush.png"
import rasm3 from "../img/komprul.png"
import rasm4 from "../img/kompplay.png"
import rasm5 from "../img/komptet.png"
import rasm6 from "../img/tetris.png"
function Komp() {
  return (
  <section className='komp'>
    <div className="container">
<h2>Our Recent Projects</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<div className="komp_bottom">
<img src={rasm1} alt="" />
<img src={rasm2} alt="" />
<img src={rasm3} alt="" />
<img className='kooo' src={rasm4} alt="" />
<img src={rasm5} alt="" />
<img className='koo' src={rasm6} alt="" />
</div>
<button>SEE ALL</button>
    </div>
  </section>
  )
}

export default Komp
