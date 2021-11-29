import React from "react";
import Card from "../Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
/* import { getAll } from '../../redux/actions' */
import "./Cards.scss";
import Filter from "../Filter/Filter";
import Loading from "../Loading/Loading";

export default function Cards() {
    /* const dispatch = useDispatch(); */
    /* const characterArray = useSelector(state => state.characterArray); */
    const filteredCharacterArray = useSelector(state => state.filteredCharacterArray);

    const [cards, setCards] = useState([]);

    /* useEffect(() => {
        dispatch(getAll());
        setCards(filteredCharacterArray);
    }, [dispatch]); */

    useEffect(() => {
        setCards(filteredCharacterArray);
    }, [filteredCharacterArray]);

    //number of cards
    const [page, setPage] = useState({
        currentPage: 1,
        countCards: 12,
    });

    //number of buttons
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    //buttons array
    const pages = [];
    for (let i = 1; i <= Math.ceil(cards.length / page.countCards); i++) pages.push(i);

    //function to change the page
    const handleClick = event => {
        setPage({
            ...page,
            currentPage: Number(event.target.id)
        })
    }

    //page changes
    const indexLastItem = page.currentPage * page.countCards;
    const indexFirstItem = indexLastItem - page.countCards;
    const cardsPagesArray = cards.slice(indexFirstItem, indexLastItem);

    //function of next
    const handleNext = () => {
        if (page.currentPage < pages[pages.length - 1]) {
            setPage({
                ...page,
                currentPage: page.currentPage + 1
            });
        }

        if (page.currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    //function of prev
    const handlePrev = () => {
        if (page.currentPage > 1) {
            setPage({
                ...page,
                currentPage: page.currentPage - 1
            });
        }

        if ((page.currentPage - 1) % pageNumberLimit === 0 && page.currentPage !== 1) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return (
        <div className='card__container-background'>
            <div className="card__container">
                <Filter />

                {cardsPagesArray.length
                    ? <>
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
                            page={page}
                            maxPageNumberLimit={maxPageNumberLimit}
                            minPageNumberLimit={minPageNumberLimit}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                    </>

                    : <Loading />
                }
            </div>
        </div>
    );
}
