import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return(

        <header>
            <nav>
                <ul>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;