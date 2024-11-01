import React from 'react'
import './SeventhContainer.css'
import Wlogo from './images/Wlogo.PNG'

const SeventhContainer = () => {
  return (
    <>
      <div className="sevenconatiner">
      
        <div className="footerlogo">
        <img src={Wlogo} alt='images' style={{width:150 , height: 70}}  />
        
        </div>
      <div className="footerlist">
           <div className="list">
            <p>Company</p>
            <li>About</li>
            <li>FAQ</li>
           </div>
           <div className="list">
            <p>Terms</p>
            <li>Data Privacy</li>
            <li>Terms</li>
            <li>Accesibility</li>
           </div>
           <div className="list">
            <p>Related</p>
            <li>Find Buyer</li>
            <li>Feedback</li>
           </div>
      </div>
      <div className="footersocial">
          <div className="sociallinks">
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
      </div>
      </div>
      
      </>
    
  )
}

export default SeventhContainer
