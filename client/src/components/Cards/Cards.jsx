import React from "react";
import Card from "../Card/Card";

export default function Cards({ cards }) {
    return (
        <div>
            {cards.map((character, index) => {
                return <Card
                    key={index}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    location={character.location}
                    episode={character.episode}
                    id={character._id}
                />;
            })}
        </div>
    );
}
