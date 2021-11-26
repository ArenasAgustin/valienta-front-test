import React from "react";
import './NavBar.scss'

export default function NavBar() {
    return (
        <div className='navbar__container'>
            <nav className='navbar__element'>
                <a href="/" className="navbar__logo">
                    <img
                        src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
                        alt="logo Rick and Morty"
                        className="navbar__logo-img"
                    />
                </a>

                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="/home" className="navbar__link">
                            Home
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="/characters" className="navbar__link">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}