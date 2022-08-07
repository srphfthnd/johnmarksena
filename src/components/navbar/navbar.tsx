import React from 'react';
import './Navbar.scss'

function Navbar() {
    return (
        <div className="nav">
            <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;