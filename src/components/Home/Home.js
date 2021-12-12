import React from 'react'
import "./Home.css"
import onlineLogo from "../../images/mobileApp2.svg"
import MetaData from '../../Metadata'
import { Link } from 'react-router-dom'
const Home = ({goToTestimonial}) => {
    return (<>
    <MetaData title="Desire To Learn" />
        <div className="home">
           <div className="sigma-parent">           
        <div className="parent">
            <div className="child1">
        <h2 className="heading">ALL YOU NEED IS A<br />  DESIRE TO LEARN!!!!</h2>
        <hr />
        <span className="tagline-desc"> Desire To Learn is an Android application for preparation of government examinations like UPSC ,CDC etc. Here you can find all types of General Knowledge  questions from Past Years . With our years of experience and great results we can assure you your success.</span><br />
        
          <button className="download-button btn btn-primary"> <Link to="/application" style={{color : "white",textDecoration:"none"}}>Download the App now</Link></button> 

          <button className="btn btn-primary testimonial-button" onClick={()=>{goToTestimonial()}}> View Testimonial</button> 
          
          
          <hr />
            </div>
            <div className="child2">
<img className="image-small" src={onlineLogo} alt="" />

            </div>
          
        </div>
      
        </div>
        </div>
        
        </>
    )
}

export default Home;