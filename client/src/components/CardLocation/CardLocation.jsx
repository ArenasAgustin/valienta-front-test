import React from "react";
import './CardLocation.scss';

export default function CardLocation({ name, type, dimension }) {

    return (
        <div className='card'>
            <header className='card__header'>
                {/* <img className='card__icon' src={image} alt={`image of ${name}`} /> */}
            </header>

            <section className='card__body'>
                <h2 className='card__title'>{name}</h2>

                <ul className='card__about'>
                    <li className='card__about__li card__about__li__title'>Type:</li>
                    <li className='card__about__li'>{type}</li>
                    <li className='card__about__li card__about__li__title'>Dimension:</li>
                    <li className='card__about__li'>{dimension}</li>
                </ul>
            </section>
        </div>
    );
}