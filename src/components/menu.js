import React from 'react';
import { HashLink } from 'react-router-hash-link';

import logo from '../img/satoriweblogo.png';
import loginIcon from '../img/loginIcon.png';
import facebookIcon from '../img/facebookIcon.png';
import instagramIcon from '../img/instagramIcon.png';
import TopMenuItems from './topMenuItems.js';
import '../style/menu.css';
// import { useState } from 'react';

function Menu() {

    return(
        <div className='menu-container' id='menu'>
            <HashLink to="/#home">
                <div className='menu-logo-container'>
                    <img src={logo} className='menu-logo' alt='satoriweblogo'></img>
                </div>
            </HashLink>
            <div className='menu-items-container' id='menu-items-container'>
                {<TopMenuItems />}
            </div>
            <div className='menu-login-container'>
            <a href='#menu'>
                <div className='menu-login-item'>
                    <img src={loginIcon} className='menu-login-icon' alt='loginIcon'></img>
                </div>
            </a>
            <a href='/'>
                <div className='menu-login-item'>
                    Log In
                </div>
            </a>
            </div>
            <div className='menu-social-container'>
                <a href='https://www.facebook.com/profile.php?id=100094365744388' target='_blank' rel='noreferrer'>
                    <div className='menu-social-item'>
                        <img src={facebookIcon} className='menu-social-icon' alt='facebookIcon'></img>
                    </div>
                </a>
                <a href='https://www.instagram.com/satori_jiujitsu/' target='_blank' rel='noreferrer'>
                    <div className='menu-social-item'>
                        <img src={instagramIcon} className='menu-social-icon' alt='instagramIcon'></img>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Menu;