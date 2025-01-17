import "../style/header.css"
import rasm1 from "../img/header_logo.png"
import rasm2 from "../img/burger.webp"
import { NavLink } from 'react-router-dom'
import { useRef } from "react"
function Header() {
  let modal = useRef()
   function openModal (){
    modal.current.classList.add("show")
    }
    
    function closeModal(){
    modal.current.classList.remove("show")
    }
  return (
   <header className='header'>
    <div className="modal"  ref={modal}>
      <div onClick={closeModal} className="xbtn">X</div>
    < NavLink to={"/"}>
    Home
    </NavLink>
    <NavLink to={"/about"}>
    About us
    </NavLink>
    <NavLink to={"/portfolio"}>
    Portfolio
    </NavLink>
    <NavLink to={"/news"}>
    News
    </NavLink>
    <NavLink to={"/contact"} >
    <button >Contact us</button>
    </NavLink>
    </div>
   <div className="container">
<div className="header_wrapper">
  <img  src={rasm1} alt=""  />
  <div className="header_con2">
    <NavLink to={"/"}>
    Home
    </NavLink>
    <NavLink to={"/about"}>
    About us
    </NavLink>
    <NavLink to={"/portfolio"}>
    Portfolio
    </NavLink>
    <NavLink to={"/news"}>
    News
    </NavLink>
    <NavLink to={"/contact"} >
    <button >Contact us</button>
    </NavLink>

  </div>

  <img   onClick={openModal} className="burger"  src={rasm2} alt="" />
</div>

    </div>
   </header>
  )
}

export default Header
