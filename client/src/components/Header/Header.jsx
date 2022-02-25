import React from "react";
import Rick from '../../assets/rick.png'
import Logo from '../../assets/Logo-txt.png'
import './Header.scss'

export default function Header({ page = "Home" }) {
    return (
        <div className='header__container'>
            {
                page === "Home" ?
                    <div className='header__title'>
                        <img
                            src={Logo}
                            alt='logo Rick and Morty'
                            className='header__logo'
                        />

                        <h2 className='header__subtitle'>Front-End Test</h2>
                    </div>

                    :
                    <div className='header__title about'>
                        <img
                            src={Rick}
                            alt='Rick'
                            className='header__logo'
                        />

                        <h2 className='header__subtitle'>Front-End Test</h2>
                        <h1 className='header__subtitle-name'>Agustin Arenas</h1>
                    </div>
            }
        </div>
    );
}