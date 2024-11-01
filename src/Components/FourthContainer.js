import React from 'react'
import './FourthContainer.css'
const FourthContainer = () => {
  return (
    <>
    <div className="fourthcontainer">
        <div className="videocontainer">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=NWOtyvzTKRRRFY5u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="supplierbtn">
            <button className='buybtn'>Buyer</button>
            <button className='supbtn'>Supplier</button>
          <div className="check_container">
          <i class="fa-regular fa-circle-check"></i><span>Post your requirements.</span><br/>
          <i class="fa-regular fa-circle-check"></i><span>Sit back for multiple suppliers to contact you.</span><br/>
          <i class="fa-regular fa-circle-check"></i><span> Choose among the suppliers based on the ratings and reviews.</span><br/>
          <i class="fa-regular fa-circle-check"></i><span>Post your requirements.</span>

          </div>
        </div>
    </div>
      
    </>
  )
}

export default FourthContainer
