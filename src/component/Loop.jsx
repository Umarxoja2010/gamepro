import React from 'react'
import "../style/loop.css"
function Loop() {
  return (
<section className='loop'>
    <div className="container">
<h3>Lorem Ipsum</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
<div className="loop_bottom">
    <div className="loop_bottom_content">
        <h3>Stay in the loop</h3>
        <p>Subscribe to receive the latest news and updates about TDA.
        We promise not to spam you! </p>
    </div>
    <input type="text" placeholder='Enter email address' />
</div>

    </div>
</section>
  )
}

export default Loop
