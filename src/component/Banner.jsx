import React from 'react'
import "../style/banner.css"
import rasm1 from "../img/banner1.png"
import rasm2 from "../img/banner2.png"
import rasm3 from "../img/banner3.png"
import rasm4 from "../img/banner4.png"
function Banner() {
  return (
<section className='banner'>
    <div className="container">
<div className="banner_top">
    <h4>Currently Trending Games</h4>
    <button>SEE ALL</button>
</div>
<div className="banner_battom">
    <div className="banner_card">
<img className='banner_card_img' src={rasm1} alt="" />
<span>40 Followers</span>
    </div>
    <div className="banner_card">
<img src={rasm2} alt="" />
<span>40 Followers</span>
    </div>
    <div className="banner_card">
<img src={rasm3} alt="" />
<span>40 Followers</span>
    </div>
    <div className="banner_card">
<img src={rasm4} alt="" />
<span>40 Followers</span>
    </div>
</div>
    </div>
</section>
  )
}

export default Banner
