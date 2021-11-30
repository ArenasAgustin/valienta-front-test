import React, { useEffect, useState } from "react";
import Select from "../Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { resetLocation, resetEpisode } from "../../redux/actions/index";
import './FilterLocationEpisode.scss';

export default function Filter({ locationOrEpisode }) {
    const dispatch = useDispatch();

    const nameLocations = useSelector(state => state.nameLocations);
    const typeLocations = useSelector(state => state.typeLocations);
    const nameEpisodes = useSelector(state => state.nameEpisodes);
    const codeEpisodes = useSelector(state => state.codeEpisodes);

    const [nameArrayLocation, setNameArrayLocation] = useState([]);
    const [typeArrayLocation, setTypeArrayLocation] = useState([]);
    const [nameArrayEpisode, setNameArrayEpisode] = useState([]);
    const [codeArrayEpisode, setCodeArrayEpisode] = useState([]);

    const [search, setSearch] = useState(false);
    const [reset, setReset] = useState(false);

    const [showFilters, setShowFilters] = useState(false);

    const handleShow = () => {
        setShowFilters(prev => !prev);
    };

    const handleSearch = () => {
        setSearch(prev => !prev);
    };

    const handleReset = () => {
        locationOrEpisode === 'location' ? dispatch(resetLocation()) : dispatch(resetEpisode());
        handleShow();
        setReset(prev => !prev);
    };

    useEffect(() => {
        handleShow();
    }, [search]);

    useEffect(() => {
        setNameArrayLocation(nameLocations);
        setTypeArrayLocation(typeLocations);
    }, [nameLocations, typeLocations]);

    useEffect(() => {
        setNameArrayEpisode(nameEpisodes);
        setCodeArrayEpisode(codeEpisodes);
    }, [nameEpisodes, codeEpisodes]);

    return (
        <div className="filter-LE">
            <div className={`filter__container ${showFilters ? 'show-container' : ''}`}>
                <div className="filter__container-selects">
                    <Select
                        arraySelect={locationOrEpisode === 'location' ? nameArrayLocation : nameArrayEpisode}
                        search={search}
                        reset={reset}
                        filterType={locationOrEpisode === 'location' ? 'nameLocation' : 'nameEpisode'}
                    />

                    <Select
                        arraySelect={locationOrEpisode === 'location' ? typeArrayLocation : codeArrayEpisode}
                        search={search}
                        reset={reset}
                        filterType={locationOrEpisode === 'location' ? 'typeLocation' : 'codeEpisode'}
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