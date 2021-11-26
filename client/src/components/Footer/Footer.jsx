import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="#home" className="footer__home"><IoIosArrowUp /></a>

                <div className="footer__links">
                    <a target="_blank" href="https://www.linkedin.com/in/agustin-arenas-barea/" className='footer__link-a'>
                        <FaLinkedinIn />
                    </a>

                    <a target="_blank" href="https://github.com/ArenasAgustin" className='footer__link-a'>
                        <FaGithub />
                    </a>
                </div>

                <hr></hr>

                <div className="footer__copy">
                    <p>
                        <IoCodeSlashSharp /> 2021 - Portfolio by <a href="https://github.com/ArenasAgustin" target="_blank">Agustín Arenas</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}