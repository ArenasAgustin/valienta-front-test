import React from "react";
import Card from "../CardLocation/CardLocation";
import Pagination from "../Pagination/Pagination";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
/* import { getAll } from '../../redux/actions' */
import "./CardsLocations.scss";
import FilterLocation from "../FilterLocation/FilterLocation";
import Loading from "../Loading/Loading";

export default function CardsLocations() {
    /* const locationsArray = useSelector(state => state.locationsArray); */
    const filteredCharacterArray = useSelector(state => state.filteredLocationsArray);

    const [cards, setCards] = useState([]);

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
        <div className='card-location__container-background'>
            <div className="card__container">
                <FilterLocation />

                {cardsPagesArray.length
                    ? <>
                        <div className='cards__container'>
                            {cardsPagesArray.map((location, index) => {
                                return <Card
                                    key={index}
                                    name={location.name}
                                    type={location.type}
                                    dimension={location.dimension}
                                    url={location.url}
                                    residents={location.residents}
                                    id={location.id}
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
