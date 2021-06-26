import React from 'react'
import Footer from './footer-1.png'
import Insta from './insta.png'
import twitter from './twitter.png'
import Facebook from './facebok.png'
import './section7.css'
function Section7(){
    return(
        <section className="footer">
        <div className="container">
   
            <div className="footerrow">
                <div className="col icon__footer">
                    <div className="img__wrapper">
                        <img src={Footer} alt=""/>
                    </div>

                    <h1 className="footer__icon">
                       <p icon__name> being the</p> 
                        <span className="icon__name--second">parent</span>
                    </h1>
                </div>

                <div className="col">
                    <ul>
                        <li>About us</li>
                        <li>Advertise with us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>Privacy</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li>Terms of service</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
            </div>
                 
            <div className="socialmedia row">
                <div className="instagram">
                    <img src={Insta}/>
                </div>
                <div className="twitter">
                    <img src={twitter} alt=""/>
                </div>
                <div className="facebook">
                    <img src={Facebook} alt=""/>
                </div>
            </div>

            <p className="footer__copyright">Copyright © 2020 Mykids Ventures Private Limited.</p>
        </div>
    </section>
    )
}
export default Section7


