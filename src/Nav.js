import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <h3 className='logo'>MEGACHEL</h3>
            <ul className='nav-links'>
                <Link to='/'>
                <li className='link'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='link'>About</li>
                </Link>
                <Link to='/skate'>
                <li className='link'>Skate</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;