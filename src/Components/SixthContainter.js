import React from 'react'
import './SixthContainter.css'

const SixthContainter = () => {
  return (
    <>
    <div className="Sixcontainer" >
        <div className="heading">
            <h2>How its Works?</h2>
            <div className="para">
                <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            </div>
        </div>
        </div>
        
        <div className="iconcontainer">
            <div className="smallcontainer" style={{backgroundColor:'rgba(232, 251, 255, 1)' ,border:0}}>
            <i class="fa-solid fa-user-plus"></i>
            <div className="subpara">
                <p>Select Your Role and Sign Up</p>
            </div>
            </div>

            <div className="smallcontainer"style={{border:0}}>
            <i class="fa-regular fa-address-card"></i>
            <div className="subpara">
                <p>Buyers Post Your Requirements</p>
            </div>
            </div>

            <div className="smallcontainer" style={{backgroundColor:'rgba(232, 251, 255, 1)',border:0}}>
            <i class="fa-regular fa-handshake"></i>
            <div className="subpara">
                <p> Review, Select, and Contact the Best Suppliers</p>
            </div>
            </div>
           

             
            <div className="smallcontainer"style={{border:0}}>
            <i class="fa-solid fa-pen-to-square"></i>
            <div className="subpara">
                <p> Suppliers Complete your profile and get notified for opportunities</p>
            </div>
            </div>

            <div className="smallcontainer"style={{backgroundColor:'rgba(232, 251, 255, 1)',border:0}}>
            <i class="fa-solid fa-user-check"></i>  
            <div className="subpara">
                <p>Contact to Buyers and Share your Quote for the service</p>
            </div>
            </div>

            <div className="smallcontainer"style={{border:0}}>
            <i class="fa-solid fa-file-pen"></i>
            
            <div className="subpara">
                <p>Both the Parties can Connect and Make Business Leave a Feedback</p>
            </div>
            </div>
        
        </div>
        
    

      
     
    </>
  )
}

export default SixthContainter
