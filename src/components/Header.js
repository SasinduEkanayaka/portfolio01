import React, { useState, useEffect, useContext } from 'react'
import "./header.css"
import Togglee from './Togglee';
import { themeContext } from '../Context';

function Header() {
    const [Toggle, showMenu] = useState(false);
    const [Active, setActive] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            setScrolled(scrollY > 50);

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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (num, e) => {
        e.preventDefault();
        setActive(num);
        showMenu(false);

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
        <header className={`header ${scrolled ? 'header--scrolled' : ''} ${darkMode ? 'header--dark' : ''}`}>
            <nav className="nav container">
                <a href="#home" className="nav__logo" onClick={(e) => handleNavClick(0, e)}>
                    Ekanayaka
                </a>

                <div className={Toggle ? "nav__menu nav__menu--active" : "nav__menu"}>
                    <ul className="nav__list">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav__item">
                                <a
                                    href={item.href}
                                    className={`nav__link ${Active === index ? 'nav__link--active' : ''}`}
                                    onClick={(e) => handleNavClick(index, e)}
                                >
                                    <i className={`uil ${item.icon} nav__icon`}></i>
                                    <span className="nav__text">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav__actions">
                    <div className="nav__social">
                        <a href="#" className="nav__social-link" aria-label="GitHub">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="#" className="nav__social-link" aria-label="LinkedIn">
                            <i className="uil uil-linkedin"></i>
                        </a>
                    </div>
                    <Togglee />
                    <button
                        className="nav__toggle"
                        onClick={() => showMenu(!Toggle)}
                        aria-label="Toggle menu"
                        aria-expanded={Toggle}
                    >
                        <i className={`uil ${Toggle ? 'uil-times' : 'uil-bars'}`}></i>
                    </button>
                </div>
            </nav>

            <div
                className={`nav__overlay ${Toggle ? 'nav__overlay--active' : ''}`}
                onClick={() => showMenu(false)}
            ></div>
        </header>
    )
}

export default Header
