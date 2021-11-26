import React from "react";
import './NavBar.scss'

export default function NavBar() {
    return (
        <div className='navbar__container'>
            <nav className='navbar__element'>
                <a href="/" className="navbar__logo">
                    <img
                        src="https://i.pinimg.com/originals/36/60/b1/3660b1fbf2ecd990202c611b6a9942df.png"
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