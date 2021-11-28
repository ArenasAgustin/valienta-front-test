import React from "react";
import Rick from '../../assets/rick.png'
import './Header.scss'

export default function Header({ page = "Home" }) {
    return (
        <div className='header__container'>
            {
                page === "Home" ?
                    <div className='header__title'>
                        <img
                            src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
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