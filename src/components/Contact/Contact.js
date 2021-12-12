import React from 'react'
import MetaData from "../../Metadata"

import "./Contact.css"
const Contact = () => {
    return (
        <>

            <MetaData title="Contact Us"/>
           
           


        <div className="container mt-8 ">
        <h2 className="heading-mid">Contact Us!</h2>  
        
            <form action="https://formsubmit.co/arjavsethi07@gmail.com" method="POST">
  <div className="form-group mb-3">
    <label for="exampleInputEmail1">Email address</label>
    
    <input type="email" name="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: youremail@email.com"/>
    <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mb-3">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="number" name="PhoneNo" className="form-control" id="exampleInputPassword1" placeholder="ex: 0987654321"/>
  </div>
  <div className="form-group mb-3">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" name="desc" className="form-control" id="exampleInputPassword1" placeholder="Tell us"/>
  </div>
  <input type="hidden" name="_autoresponse" value="Thanks For mailing we will get back to you soon!!"/>
            <input type="hidden" name="_next" value=" http://localhost:3000/"/>
  <button type="submit" className="btn btn-primary mt-2 submit-btn ">Submit</button>
</form>
</div>
        </>
    )
}

export default Contact
