import React from 'react'
import "./Application.css"
import MetaData from '../../Metadata';
import MyCarousel from '../utils/Carousel';

import playStore from "../../images/getOnPlayStore.svg"
import Footer from '../Footer/Footer';
const Application = () => {
    return (
        <>
            <MetaData title="Download Now"/>
            <div className="container application ">
            <div className="row">
                <div className="col ">
                    <h2 className="whyus">Why Us?</h2>
                    <div>
                        Our App Provides You!
                        <ul>
                            <li>Free Past Three Years Current Affairs</li>
                            <li>Notes of :-<ul>
                                <li>History</li>
                                <li>Enviroment and Managment</li>
                                <li>Economics</li>
                                <li>Geography</li>
                                <li>Art and Culture</li>
                                <li>Science and Technology</li>
                                <li>English</li>
                                </ul>
                            </li>
                            <li>CDSE Previous Year </li>
                            <li>Mock Test Series</li>
                        </ul>
                    </div>
                    </div>
                <div className="col carousel">
               
                <MyCarousel first="https://play-lh.googleusercontent.com/MFSzn_Ptu0gGwScyxYMdj2IyvNtdR6NIEgYDVreuXzYNquvkPGMRZfl33LpkeTGghdw=w1366-h635-rw" second="https://play-lh.googleusercontent.com/6cwsOHmV2TUNo5VN8N_ai7o2-F7yGrti-hJbzPgBjxgzd2u06SpxMf4vzzLkS8kLRA=w1366-h635-rw" third="https://play-lh.googleusercontent.com/pe4zAfZDMB6yRfLjnODUByWXweUt6nMlGMit_PHUQxNr3zA06mZNTfHCiZeizxzFDA=w1366-h635-rw"/>

                </div>
        <div className="second-box   ">     
                <h2 className="downloadNow text-center">Download Now!</h2>
            <div className="row">
                <div className="col">
                    <a href="https://play.google.com/store/apps/details?id=com.dtl.desireToLearn"><img src={playStore} className="getOnPlayStore" alt="" /></a>
                </div>
                <div className="col appDetails">
               <ul>
                   <li>Name   : Desire to Learn</li>
                   <li>Rating : 4.5/5</li>
                   <li>Size   : 26 MB</li>
                   <li>Version : 2.2.5</li>
               </ul>
                </div>
            </div>
        </div>



            </div>
           
            </div>
            <div className="footer-app">      <Footer/>
            </div>
           
      
        </>
    )
}

export default Application
