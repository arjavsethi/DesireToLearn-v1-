import React from 'react'

import followUs from "../../images/social-girl.svg"
import "./Contact.css"
const LinkTree = () => {
    return (
        <>
        
             <div className=" baground-color-custom  linktree-main" > {/*container contact-border */}

        <h2 className="heading-mid follow-us">Follow Us !  </h2>

        <div className="cont2">
            <span className="child-responsive">
        <img src={followUs} id="followImg" alt="" />
        </span>
        <div className="child"> 
        
        <div className="instagram social"><button className="btn btn-primary "><i className="fab fa-instagram"></i> Instagram</button></div>
        <div className="facebook social" ><button className="btn btn-primary "><i className="fab fa-facebook"></i> Facebook</button></div>
        <div className="telegram social"><button className="btn btn-primary "><i className="fab fa-telegram"></i> Telegram</button></div>
        </div>
        </div>
        </div>
        </>
    )
}

export default LinkTree
