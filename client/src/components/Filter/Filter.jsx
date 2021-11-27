import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import { useDispatch } from "react-redux";
import { filterBySearch, restAll } from "../../redux/actions/index";
import './Filter.scss';

export default function Filter() {
    const dispatch = useDispatch();

    const [search, setSearch] = useState(false);
    const [reset, setReset] = useState(false);

    const [searchValue, setSearchValue] = useState('');
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

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleReset = () => {
        setSearchValue('');
        dispatch(restAll());
        handleShow();
        handleResetSelect();
    };

    useEffect(() => {
        dispatch(filterBySearch(searchValue));
        handleShow();
    }, [search]);

    return (
        <div className="filter">
            <div className={`filter__container ${showFilters ? 'show-container' : ''}`}>
                <div className="filter__container-selects">
                    <Select filterType='status' search={search} reset={reset} />

                    <Select filterType='gender' search={search} reset={reset} />
                </div>

                <div className="filter__container-search-bar">
                    <input
                        type="text"
                        className="filter__search-bar"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search name"
                    />
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