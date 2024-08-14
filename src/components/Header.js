import React,{ useState } from 'react'
import "./header.css"
import Togglee from './Togglee';

function Header() {
    const[Toggle, showMenu] = useState(false);
    const[Active, setActive] = useState(0);

    window.onscroll = () => {
        if(window.scrollY >= 0) {
            setActive(0)
        }
        if(window.scrollY >= 700) {
            setActive(1)
        }
        if (window.scrollY >= 1300){
            setActive(2)
        }
        if (window.scrollY >= 1900){
            setActive(3)
        }
        if (window.scrollY >= 3300){
            setActive(4)
        }
        if (window.scrollY >= 3800){
            setActive(5)
        }
    }

    function clickNav(num) {
        setActive(num)
    }
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">EkanayakaSS</a>
            <Togglee />
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className={Active === 0 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(0)}>
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className={Active === 1 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(1)}>
                            <i class="uil uil-info-circle nav__icon"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className={Active === 2 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(2)}>
                            <i class="uil uil-brain nav__icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className={Active === 3 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(3)}>
                            <i class="uil uil-book-reader nav__icon"></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className={Active === 4 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(4)}>
                            <i class="uil uil-suitcase-alt nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className={Active === 5 ? "nav__link active-link" : "nav__link"} onClick={() => clickNav(5)}>
                            <i class="uil uil-suitcase-alt nav__icon"></i> Hire me
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header