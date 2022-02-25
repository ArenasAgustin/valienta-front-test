import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import './NavBar.scss'

export default function NavBar() {
    return (
        <div className='navbar__container'>
            <nav className='navbar__element'>
                <Link to="/" className="navbar__logo">
                    <img
                        src={Logo}
                        alt="logo Rick and Morty"
                        className="navbar__logo-img"
                    />
                </Link>

                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/home" className="navbar__link">
                            Home
                        </Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/location" className="navbar__link">
                            Location
                        </Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/episode" className="navbar__link">
                            Episode
                        </Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/about" className="navbar__link">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}