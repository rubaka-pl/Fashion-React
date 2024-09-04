import React, { useState, useEffect } from 'react';
import menuIcon from "./../../img/icons/menu.png";
import closeIcon from "./../../img/icons/close.svg";
import logoImg from "./../../img/icons/logo.svg";
import './header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // при клике на оверлей
    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt='logo' />
                        <span>Fashion</span>
                    </div>
                    <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li>
                                <a href="#!" className={`header__navBtn ${isMenuOpen ? 'active' : ''}`}>SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={`header__nav-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu" />
                    </div>
                </div>
            </div>
            {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;
