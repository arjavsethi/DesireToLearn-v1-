import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <> 
    <footer className="footer "> 
      <div className="row">
            <div className="col box-f">
                <h3>About Us</h3><br />
                Desire to Learn isa an Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aperiam veniam molestias! Autem praesentium cumque nam tenetur pariatur fuga ipsam sit ut, accusantium omnis excepturi, dolore tempora deserunt quasi incidunt, aspernatur magnam iste nostrum.

            </div>
            <div className="col box-f">
                <h3>Address</h3><br />
                Indore,India

            </div>
            <div className="col box-f ">
                <h3>Contact US</h3>
                <ul className="p-3">
                    <li>Instagram : <a style={{"textDecoration":"none","color":"inherit"}} href="www.instagram.com/DesireToLearn">@upsc_cdse_desire_to_learn</a></li>
                    <li>Pricing : <i className="fab fa-whatsapp"></i> +91 2365478901</li>
                    <li>WebSite Queries : arjavsethi07@gmail.com</li>
                    
                </ul>
            </div>
        </div>
        <hr style={{marginTop:"-2%"}} />
        <p className="mx-4 px-3" >© 2021, Desire To Learn. All Rights Reserved.</p>
    </footer>

        </>
    )
}

export default Footer
