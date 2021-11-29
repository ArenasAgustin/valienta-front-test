import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { resetLocation } from "../../redux/actions/index";
import './FilterLocation.scss';

export default function Filter() {
    const dispatch = useDispatch();

    const nameLocations = useSelector(state => state.nameLocations);
    const typeLocations = useSelector(state => state.typeLocations);

    const [nameArray, setNameArray] = useState([]);
    const [typeArray, setTypeArray] = useState([]);

    const [search, setSearch] = useState(false);
    const [reset, setReset] = useState(false);

    const [showFilters, setShowFilters] = useState(false);

    const handleShow = () => {
        setShowFilters(prev => !prev);
    };

    const handleResetSelect = () => {
        setReset(prev => !prev);
    };

    const handleSearch = () => {
        setSearch(prev => !prev);
    };

    const handleReset = () => {
        dispatch(resetLocation());
        handleShow();
        handleResetSelect();
    };

    useEffect(() => {
        handleShow();
    }, [search]);

    useEffect(() => {
        setNameArray(nameLocations);
        setTypeArray(typeLocations);
    }, [nameLocations, typeLocations]);

    return (
        <div className="filter">
            <div className={`filter__container ${showFilters ? 'show-container' : ''}`}>
                <div className="filter__container-selects">
                    <Select arraySelect={nameArray} search={search} reset={reset} filterType='nameLocation'/>

                    <Select arraySelect={typeArray} search={search} reset={reset} filterType='typeLocation'/>
                </div>

                <div className="filter__container-buttons">
                    <div className='filter__buttons' onClick={handleSearch}>
                        <span>Search</span>
                    </div>

                    <div className='filter__buttons' onClick={handleReset}>
                        <span>Reset</span>
                    </div>
                </div>
            </div>

            <div className='filter__button' onClick={handleShow}>
                <span>Filters</span>
            </div>
        </div>
    );
}