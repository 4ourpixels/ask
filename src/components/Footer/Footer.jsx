import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Bringing the vibrant and diverse flavors of Kenyan cuisine to the heart of Dunsborough, Western Australia.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li>About Us</li>
                        <li><Link to='/order'>Delivery</Link></li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+61 426 630 000</li>
                        <li>contact@africanspicekitchen.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © 2024 African Spice Kitchen - All Rights Reserved</p>
        </div>
    )
}

export default Footer