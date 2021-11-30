import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    filterByGender,
    filterByStatus,
    resetFilterGender,
    resetFilterStatus,
    resetFilterNameLocation,
    filterByNameLocation,
    filterByTypeLocation,
    resetFilterTypeLocation,
    filterByNameEpisode,
    resetFilterNameEpisode,
    filterByCodeEpisode,
    resetFilterCodeEpisode
} from '../../redux/actions';
import './Select.scss';

export default function Select({ filterType, search, reset, arraySelect }) {
    const dispatch = useDispatch();

    const [filterArray, setFilterArray] = useState(arraySelect);
    const [filter, setFilter] = useState({
        value: filterArray[0],
        index: 0
    });

    const handleChange = (index) => {
        setFilter({
            value: filterArray[index],
            index,
        });
    }

    useEffect(() => {
        switch (filterType) {
            case 'status':
                if (filter.value !== 'all' && filter.value) dispatch(filterByStatus(filter.value))
                else dispatch(resetFilterStatus())
                break;

            case 'gender':
                if (filter.value !== 'all' && filter.value) dispatch(filterByGender(filter.value))
                else dispatch(resetFilterGender())
                break;

            case 'nameLocation':
                if (filter.value !== 'all' && filter.value) dispatch(filterByNameLocation(filter.value));
                else dispatch(resetFilterNameLocation());
                break;

            case 'typeLocation':
                if (filter.value !== 'all' && filter.value) dispatch(filterByTypeLocation(filter.value));
                else dispatch(resetFilterTypeLocation());
                break;

            case 'nameEpisode':
                if (filter.value !== 'all' && filter.value) dispatch(filterByNameEpisode(filter.value));
                else dispatch(resetFilterNameEpisode());
                break;

            case 'codeEpisode':
                if (filter.value !== 'all' && filter.value) dispatch(filterByCodeEpisode(filter.value));
                else dispatch(resetFilterCodeEpisode());
                break;

            default:
                break;
        }

    }, [search]);

    useEffect(() => {
        setFilter({
            value: filterArray[0],
            index: 0
        });
    }, [reset]);

    useEffect(() => {
        setFilterArray(arraySelect);
    }, [arraySelect]);

    return (
        <div className="select-box">
            <div className="select-box__current" tabindex="1">
                {
                    filterArray.map((item, index) => {
                        return (
                            <div className="select-box__value" key={index}>
                                <input
                                    className="select-box__input"
                                    type="radio"
                                    id={index}
                                    value={index}
                                    checked={filter.index === index ? 'checked' : ''}
                                />
                                <p className="select-box__input-text">{item}</p>
                            </div>
                        )
                    })
                }

                <img
                    className="select-box__icon"
                    src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                    alt="Arrow Icon"
                    aria-hidden="true"
                />
            </div>

            <ul className="select-box__list">
                {
                    filterArray.map((item, index) => {
                        return (
                            <li key={index}>
                                <label
                                    className="select-box__option"
                                    for={index}
                                    aria-hidden="aria-hidden"
                                    onClick={() => handleChange(index)}
                                >
                                    {item}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}