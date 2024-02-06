import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer'>
          <div className="heading1">
            <h2 className="h5footer">Quick Order</h2>
            <div className="contact">
                <p>(+91) 9115763681 </p>
                <h5>   random_support@gmail.com   </h5>
            

        <a href="#"><FaInstagram/><i className='bx bxl-instagram'></i></a>
        <a href=""><FaPinterest/> <i className='bx bxl-pinterest' ></i></a>
        <a href="#"><FaTwitter/><i className='bx bxl-twitter' ></i></a>
        <a href="#"><FaFacebook/><i className='bx bxl-facebook' ></i></a>
    </div>
            </div>
            <div className="menu">
                <p>Search</p>   
                <p>About us</p>
                <p>Wishlist</p>
            </div>
            <div id="Account">
                <h3>Account</h3>
             
                <p>Wishlist</p>
                <p>Specials</p>
            </div>

    </div>
       
  )
}
export default Footer;