import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <Link to='/' onClick={()=>setMenu("home")} ><img src={assets.logo} alt="" /></Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quasi cumque delectus ex ea assumenda reiciendis culpa, obcaecati quis in accusantium optio excepturi provident?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-223-234-4576</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ tomato.com. - All Right Reserved.  
            </p>
        </div>
    )
}
export default Footer