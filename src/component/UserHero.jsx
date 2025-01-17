import React from 'react'
import "../style/userhero.css"
import rasm1 from "../img/news1.png"
import rasm2 from "../img/news2.png"
import rasm3 from "../img/news3.png"
import rasm4 from "../img/news4.png"
import rasm5 from "../img/news5.png"
import rasm6 from "../img/news6.png"
import rasm7 from "../img/news7.png"
import rasm8 from "../img/kepka.png"
import rasm9 from "../img/abaut_hero1.png"
function UserHero() {
  return (
    <section className='userhero'>
        <div className="container">
<h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
<p className='lorim'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<input type="text" placeholder='search' />
<div className="user_wrapper">
<div className="userhero_left">
    <div className="userhero_left_card">
    <img src={rasm8} alt="" />
    <button>John smash</button>
    <h5>Lorem Ipsum is simply dummy text dummy text </h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
    <span className='chizu'></span>
    <div className="userhero_left_card">
    <img src={rasm9} alt="" />
<button>John smash</button>
    <h5>Lorem Ipsum is simply dummy text dummy text </h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
</div>
<div className="userhero_right">
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm1} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn1'>John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm2} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn2'>John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm3} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn3'>John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm4} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn4' >John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm5} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn5' >John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm6} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button  className='btn6'>John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
<div className="userhero_right_card">
    <div className="userhero_right_card_img">
<img src={rasm7} alt="" />
    </div>
    <div className="userhero_right_card_content">
        <button className='btn7'>John smash</button>
 <h4>Lorem Ipsum is simply dummy text dummy text ? </h4>
    </div>
</div>
</div>
</div>
        </div>
    </section>
  )
}

export default UserHero
