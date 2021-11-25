import React from "react";
import Card from "../Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions'
import "./Cards.scss";

export default function Cards() {
    const dispatch = useDispatch();
    const characterArray = useSelector(state => state.characterArray);

    const [cards, setCards] = useState(characterArray);

    useEffect(() => {
        dispatch(getAll());
        setCards(characterArray);
    }, [dispatch]);

    useEffect(() => {
        setCards(characterArray);
    }, [characterArray]);

    return (
        <div className='card__container'>
            <div className='cards__container'>
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

            <Pagination />
        </div>
    );
}
