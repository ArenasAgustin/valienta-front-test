import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss'

export default function Landing() {
    return (
        <div className='landing__background'>
            <div className='landing__container'>
                <a className='landing__button' href='/home'>
                    <p className='landing__button-txt'>
                        START
                    </p>

                    <div className="landing__button-opacity"></div>
                </a>
            </div>
        </div>
    );
}