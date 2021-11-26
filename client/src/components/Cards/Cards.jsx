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

    //number of cards
    const [currentPage, setCurrentPage] = useState(1);
    const [countCards, setCountCards] = useState(12);

    //number of buttons
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    //buttons array
    const pages = [];
    for (let i = 1; i <= Math.ceil(cards.length / countCards); i++) pages.push(i);

    //function to change the page
    const handleClick = event => {
        setCurrentPage(Number(event.target.id))
    }

    //page changes
    const indexLastItem = currentPage * countCards;
    const indexFirstItem = indexLastItem - countCards;
    const cardsPagesArray = cards.slice(indexFirstItem, indexLastItem);

    //function of prev
    const handleNext = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    //function of next
    const handlePrev = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return (
        <div className='card__container'>
            <div className='cards__container'>
                {cardsPagesArray.map((character, index) => {
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

            <Pagination
                pages={pages}
                handleClick={handleClick}
                currentPage={currentPage}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
}
