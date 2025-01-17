import React from 'react'
import "../style/say.css"
function Say() {
  return (
   <section className='say'>
    <div className="container">
<h3>Say hello</h3>
<p>Lorem Ipsum is simply dummy text of the printing .</p>
<div className="say_bottom">
    <div className="say_bottom_top">
        <div className="say_bottom_top_right">
            <h5>First Name</h5>
            <input type="text" />
        </div>
        <div className="say_bottom_top_left">
            <h5>Last Name</h5>
            <input type="text" name="" id="" />
        </div>
    </div>
    <div className="say_bottom_top_orta">
        <h5>Email Address</h5>
        <input className='innppuutt' type="text" />
    </div>
    <div className="say_bottom_bottom">
<h5>Message</h5>
<input className='iiinp' type="text" />
    </div>
</div>
<button>Get in touch</button>
    </div>
   </section>
  )
}

export default Say
