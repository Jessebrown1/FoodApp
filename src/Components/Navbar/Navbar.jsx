import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import Switch from './Switch';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {getTotalCartAmount}= useContext(StoreContext)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link> 
            <ul className='navbar-menu'>
            <Link to='/'><li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link> 
                <li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={() => setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search-icon" />
                <div className="navbar-seach-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon" /></Link> 
                    <div className={getTotalCartAmount()===0? "" : "dot"}></div>
                </div>
                
                
                <Switch isDarkMode={isDarkMode} onToggle={toggleTheme} />
            </div>
        </div>
    );
}

export default Navbar;