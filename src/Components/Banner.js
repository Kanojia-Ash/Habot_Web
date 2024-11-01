import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
    <div className="bannercontainer">
        
     <div className="poster">
   <h1 style={{fontWeight:600}}>Are You a Supplier?</h1>
   <h1>Explore Matching Opportunities</h1>
   <div className="bannerbutton" style={{marginTop:35}}>
    <button><i class="fa-solid fa-briefcase"></i>Search your required service here</button>
    <button><i class="fa-solid fa-location-dot"></i>Search your desired loaction here</button>
    <button type="button" class="btn btn-success" style={{ padding: 13,borderRadius:0 ,fontSize:14}}>Search</button>
    <div className="next_para">
        <p style={{fontWeight:600}}>Are you a buyer? <a style={{marginLeft:4 ,fontSize:14,fontWeight:300,color:'#fff'}} href='/'>Click here if you are looking to post a requirements</a></p>
    </div>
   </div>
   
</div>
    </div>
      
    </>
  )
}

export default Banner
