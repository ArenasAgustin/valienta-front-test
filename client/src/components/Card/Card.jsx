import React from "react";

export default function Card({ name, image, id, status, species, gender, location, episode }) {
    return (
        <div class="card">
            <header class="card__header">
                <img class="card__icon" src={image} alt={`image of ${name}`} />
            </header>

            <section class="card__body">
                <h2 class="card__title">{name}</h2>
                <span class="card__duration">{status} - {species}</span>

                <ul class="card__knowledge">
                    <li>Gender</li>
                    <li>{gender}</li>
                    <li>Last known location:</li>
                    <li>{location.name}</li>
                    <li>First seen in:</li>
                    <li>{episode.name}</li>
                </ul>
            </section>
        </div>
    );
}