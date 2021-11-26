import React from "react";
import './Header.scss'

export default function Header() {
    return (
        <div className='header__container'>
            <div className='header__title'>
                <img
                    src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
                    alt='logo Rick and Morty'
                    className='header__logo'
                />

                <h2 className='header__subtitle'>Front-End Test</h2>
            </div>
        </div>
    );
}