import React from 'react'
import "../style/anime.css"
import rasm1 from "../img/abaut_hero1.png"
function Anime() {
  return (
    <section className='abouthero'>
    <div className="container">
<div className="abouthero_wrapper">
    <div className="abouthero_conntact">
        <h6>Home About us</h6>
        <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button>Get in touch</button>
    </div>
    <div className="abouthero_img">
        <img src={rasm1} alt="" />
    </div>
</div>
    </div>
</section>
  )
}

export default Anime
