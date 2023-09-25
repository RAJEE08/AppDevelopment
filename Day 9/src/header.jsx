import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <div className='header'>
            <header className='opp'>
                    <Link to="/Home" id='home'>Home</Link>
                    <Link to="/Contact" id='contact'>Contact</Link>
                    <Link to="/AboutUs" id='aboutus'>About Us</Link>
                    <Link to="/Organs" id='organ'>About Organ Donation</Link>
                    <Link to="/Article" id='article'>Article</Link>
                    <Link to="/" id='signout'>Sign Out</Link>
            </header>
        </div>
    );
}

export default Header;