import React from 'react'
import './Header.css';
import logo from './images/logo.png'

const Header = () => {
  return (
    <>
     <div className="headersection">
        <div className="subsection">
            <div className="logo">
              <img src={logo} alt='images' style={{width:100 , height:63,marginLeft:50}} />
            </div>
            <div className="headings">
              <p>Find Suppliers</p>
              <p>Find Service Tags<i class="fa-solid fa-angle-down mx-1" ></i></p>
              <div className="headerbutton">
              <button type="button" class="btn btn-outline-success">Login/Sign Up</button>
              </div>
            </div>

        </div>
     </div>
    </>
  )
}

export default Header
