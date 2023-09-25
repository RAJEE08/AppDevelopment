import React from 'react';
import './footer.css';
import { LuFacebook ,LuTwitter ,LuInstagram } from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className="footer-contact">
        <h5 id='c'>Contact Us</h5>
        <div className='end'>
          <p>Email: rajeerajee428@gmail.com</p>
          <p>Phone: +91 9500766155</p>
          <Link to='pp'>privacy policy</Link>
          <div className='e'>
          &copy; Your Company Name 2023
          </div>
          <div className='social-content'>
          <a href="https://www.instagram.com/your-instagram-account">
          <LuInstagram  fontSize={30} color='white'/>
          </a>
          <a href="https://www.facebook.com/your-facebook-page">
          <LuFacebook fontSize={30} color='white'/>
          </a>
          <a href="https://twitter.com/your-twitter-account">
          <LuTwitter fontSize={30} color='white'/>
          </a>
          </div>
        </div>
      </div>
  );
}

export default Footer;