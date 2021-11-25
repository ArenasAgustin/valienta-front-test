import React from "react";
import Cards from "../components/Cards/Cards";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../redux/actions'


export default function Home() {
    const dispatch = useDispatch();
    const characterArray = useSelector(state => state.characterArray);

    const [cards, setCards] = useState(characterArray);

    useEffect(() => {
        dispatch(getAll());
        setCards(characterArray);
    }, [dispatch]);

    return (
        <div>
            <Cards cards={cards} />
        </div>
    );
}