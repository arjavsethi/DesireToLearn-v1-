import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
const Navbar = () => {
    return (
        <>
  <nav className="navbar navbar-expand-lg  navbar-light bg-light shadow-lg  ">
  <div className="container-fluid">
    <span className="navbar-brand "  > <Link to="/" id="nav-brand"> DesireToLearn</Link></span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
       <ul className="navbar-nav ml-auto">

     
       
        
        <li className="nav-item active ">
          <Link className="nav-link active"  to="/questions" ><span className="nav-li">Questions</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link active"  to="/blog"><span className="nav-li">Blog</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link active"  to="/application"><span className="nav-li">Application</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link active"  to="/contact"><span className="nav-li">Contact</span></Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
