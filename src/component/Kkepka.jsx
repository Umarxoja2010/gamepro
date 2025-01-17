import React from 'react'
import "../style/kkepka.css"
import rasm1 from "../img/kepka.png"
function Kkepka() {
  return (
    <section className='kepka'>
    <div className="container">
    <div className="kepka_wrapper">
        <div className="kepka_img">
    <img src={rasm1} alt="" />
        </div>
        <div className="kepka_content">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
    </div>
    </div>
       </section>
  )
}

export default Kkepka
