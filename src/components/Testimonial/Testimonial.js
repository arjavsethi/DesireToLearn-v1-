import React from 'react'

import "./Testimonial.css"
import video1 from "../../images/upsc_cds_desire_to_learn_20211129_1.mp4"
import video2 from "../../images/upsc_cds_desire_to_learn_20211129_2.mp4"
const Testimonial = () => {
    return (
        <>
        <div  className="testimonial-bg mb-4">
<h2 className="heading-mid testimonials-head pt-3"> Testimonials!!</h2> 
        <div className="row ">
            <div className="col">
            <div className="testimonialContainer">
           <iframe className="iFrame" width="560" height="315" src="https://www.youtube.com/embed/KGAu7N95XuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div> </div>
           <div className="col">
            
            <video  width="400" controls className="video1">
    <source src={video1} type="video/mp4"/>
    <source src="mov_bbb.ogg" type="video/ogg"/>
    Your browser does not support HTML video.
        </video>
           
           </div>
           <div className="col">
            
            <video width="400"  controls className="video1">
  <source src={video2} type="video/mp4"/>
  <source src="mov_bbb.ogg" type="video/ogg"/>
  Your browser does not support HTML video.
</video>
           
           </div>
           </div>
           </div>
        </>
    )
};

export default Testimonial
