import React, { useState, useEffect, useContext, useRef } from 'react'
import "./header.css"
import Togglee from './Togglee';
import { themeContext } from '../Context';

function Header() {
    const [Toggle, showMenu] = useState(false);
    const [Active, setActive] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const headerRef = useRef(null);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Header background effect
            setScrolled(scrollY > 50);
            
            // Active navigation based on scroll position
            if (scrollY >= 0 && scrollY < 700) {
                setActive(0);
            } else if (scrollY >= 700 && scrollY < 1200) {
                setActive(1);
            } else if (scrollY >= 1200 && scrollY < 1700) {
                setActive(2);
            } else if (scrollY >= 1700 && scrollY < 2200) {
                setActive(3);
            } else if (scrollY >= 2200 && scrollY < 2950) {
                setActive(4);
            } else if (scrollY >= 2950 && scrollY < 3800) {
                setActive(5);
            } else if (scrollY >= 3800) {
                setActive(6);
            }
        };

        const handleMouseMove = (e) => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        if (headerRef.current) {
            headerRef.current.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (headerRef.current) {
                headerRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    const handleNavClick = (num, e) => {
        e.preventDefault();
        setActive(num);
        showMenu(false);
        
        // Add ripple effect
        const ripple = e.currentTarget.querySelector('.nav__ripple');
        if (ripple) {
            ripple.style.left = `${e.nativeEvent.offsetX}px`;
            ripple.style.top = `${e.nativeEvent.offsetY}px`;
            ripple.classList.add('nav__ripple--active');
            setTimeout(() => ripple.classList.remove('nav__ripple--active'), 600);
        }
        
        // Smooth scroll to section
        const sections = ['#home', '#about', '#skills', '#services', '#journey', '#portfolio', '#contact'];
        const targetSection = document.querySelector(sections[num]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { icon: 'uil-estate', text: 'Home', href: '#home' },
        { icon: 'uil-user', text: 'About', href: '#about' },
        { icon: 'uil-brain', text: 'Skills', href: '#skills' },
        { icon: 'uil-briefcase-alt', text: 'Services', href: '#services' },
        { icon: 'uil-map-marker', text: 'Journey', href: '#journey' },
        { icon: 'uil-scenery', text: 'Portfolio', href: '#portfolio' },
        { icon: 'uil-message', text: 'Contact', href: '#contact' }
    ];

    return (
        <header 
            ref={headerRef}
            className={`header ${scrolled ? 'header--scrolled' : ''} ${darkMode ? 'header--dark' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`
            }}
        >
            {/* Dynamic background gradient */}
            <div className="header__gradient"></div>
            
            {/* Floating particles */}
            <div className="header__particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`particle particle--${i + 1}`}></div>
                ))}
            </div>

            <nav className="nav container">
                <div className="nav__brand">
                    <a href="#home" className="nav__logo" onClick={(e) => handleNavClick(0, e)}>
                        <div className="nav__logo-container">
                            <span className="nav__logo-text">Ekanayaka</span>
                            <div className="nav__logo-underline"></div>
                        </div>
                        <div className="nav__logo-dot">
                            <div className="dot-core"></div>
                            <div className="dot-ring"></div>
                        </div>
                    </a>
                </div>

                <div className="nav__center">
                    <div className={Toggle ? "nav__menu nav__menu--active" : "nav__menu"}>
                        <div className="nav__menu-bg"></div>
                        <ul className="nav__list">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav__item">
                                    <a 
                                        href={item.href} 
                                        className={`nav__link ${Active === index ? 'nav__link--active' : ''}`} 
                                        onClick={(e) => handleNavClick(index, e)}
                                    >
                                        <div className="nav__link-bg"></div>
                                        <i className={`uil ${item.icon} nav__icon`}></i>
                                        <span className="nav__text">{item.text}</span>
                                        <div className="nav__ripple"></div>
                                        <div className="nav__glow"></div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="nav__actions">
                    <div className="nav__social">
                        <a href="#" className="nav__social-link" aria-label="GitHub">
                            <i className="uil uil-github"></i>
                            <div className="social-ripple"></div>
                        </a>
                        <a href="#" className="nav__social-link" aria-label="LinkedIn">
                            <i className="uil uil-linkedin"></i>
                            <div className="social-ripple"></div>
                        </a>
                    </div>
                    <Togglee />
                    <button 
                        className="nav__toggle" 
                        onClick={() => showMenu(!Toggle)}
                        aria-label="Toggle menu"
                    >
                        <div className="hamburger-container">
                            <span className="hamburger-line hamburger-line--1"></span>
                            <span className="hamburger-line hamburger-line--2"></span>
                            <span className="hamburger-line hamburger-line--3"></span>
                        </div>
                        <div className="toggle-bg"></div>
                    </button>
                </div>
            </nav>

            {/* Advanced mobile menu overlay */}
            <div 
                className={`nav__overlay ${Toggle ? 'nav__overlay--active' : ''}`}
                onClick={() => showMenu(false)}
            >
                <div className="overlay-pattern"></div>
            </div>

        </header>
    )
}

export default Header