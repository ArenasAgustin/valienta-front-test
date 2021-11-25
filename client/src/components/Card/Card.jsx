import React from "react";
import './Card.scss';

export default function Card({ name, image, id, status, species, gender, location, episode }) {
    const statusSelector = () => {
        switch (status) {
            case 'Alive':
                return 'card__status__alive';
            case 'Dead':
                return 'card__status__dead';
            default:
                return 'card__status__unknown';
        }
    }

    return (
        <div className='card'>
            <header className='card__header'>
                <img className='card__icon' src={image} alt={`image of ${name}`} />
            </header>

            <section className='card__body'>
                <h2 className='card__title'>{name}</h2>
                <span className='card__description'>
                    <div className={`card__status ${statusSelector()}`}></div>
                    {status} - {species}
                </span>

                <ul className='card__about'>
                    <li className='card__about__li card__about__li__title'>Gender:</li>
                    <li className='card__about__li'>{gender}</li>
                    <li className='card__about__li card__about__li__title'>Last known location:</li>
                    {
                        location.name 
                        ? <li className='card__about__li'>{location.name}</li>
                        : <li className='card__about__li'>unknown</li>
                    }
                    <li className='card__about__li card__about__li__title'>First seen in:</li>
                    {
                        episode.name 
                        ? <li className='card__about__li'>{episode.name}</li>
                        : <li className='card__about__li'>unknown</li>
                    }
                </ul>
            </section>
        </div>
    );
}