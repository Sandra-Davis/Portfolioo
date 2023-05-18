import React, { useState } from 'react'
import "./header.css"

export const Header = () => {
    window.addEventListener("scroll",function(){
        const header=document.querySelector(".header");
        // when the scroll is higher than 200 viewport height
        if(this.scrollY>=560)header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const [Toggle,showMenu]=useState(false);
    const [activeNav,setActiveNav]=useState("#home");
  return (
    <div>
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Sandra Davis</a>

                <div className={Toggle?"nav__menu show-menu":"nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={()=>{
                                setActiveNav("#home")
                            }}  className={activeNav==="#home"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={()=>{
                                setActiveNav("#about")
                            }}  className={activeNav==="#about"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={()=>{
                                setActiveNav("#skills")
                            }}  className={activeNav==="#skills"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#services" onClick={()=>{
                                setActiveNav("#services")
                            }}  className={activeNav==="#services"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#portfolio" onClick={()=>{
                                setActiveNav("#portfolio")
                            }}  className={activeNav==="#portfolio"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={()=>{
                                setActiveNav("#contact")
                            }}  className={activeNav==="#contact"?"nav__link active-link":"nav__link"}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" onClick={()=>{showMenu(!Toggle)}}>
                    <i class="uil uil-times"></i>
                    </div>
                </div>
                <div className="nav__toggle" onClick={()=>{showMenu(!Toggle)}}><i class="uil uil-apps"></i></div>
            </nav>
        </header>
    </div>
  )
}
