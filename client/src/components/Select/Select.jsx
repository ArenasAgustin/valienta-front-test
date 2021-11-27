import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { filterByGender, filterByStatus, resetFilterGender, resetFilterStatus } from '../../redux/actions';
import './Select.scss';

export default function Select({ filterType = 'status', search, reset }) {
    const dispatch = useDispatch();

    const filterStatus = ['all', 'Alive', 'Dead', 'unknown'];
    const filterGender = ['all', 'Female', 'Male', 'Genderless', 'unknown'];

    const [filterArray, setFilterArray] = useState(filterType === 'status' ? filterStatus : filterGender);
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
        if (filterType === 'status') {
            if (filter.value !== 'all') dispatch(filterByStatus(filter.value));
            else dispatch(resetFilterStatus());
        }

        else {
            if (filter.value !== 'all') dispatch(filterByGender(filter.value));
            else dispatch(resetFilterGender());
        }
        
    }, [search]);

    useEffect(() => {
        setFilter({
            value: filterArray[0],
            index: 0
        });
    }, [reset]);

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