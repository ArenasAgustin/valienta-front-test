import React from "react";
import { GoRepo } from "react-icons/go";
import './About.scss'

export default function About() {
    return (
        <div className='about__link'>
            <h1>Repository link:</h1>

            <a
                href='https://github.com/ArenasAgustin/valienta-front-test/'
                target='_blank'
                className='about__link-repository'
            >
                <GoRepo />
            </a>
        </div>
    )
}