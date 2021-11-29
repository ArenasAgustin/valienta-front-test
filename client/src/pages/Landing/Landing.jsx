import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll, getAllLocations } from '../../redux/actions'
import './Landing.scss'

export default function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
        dispatch(getAllLocations());
    }, [dispatch]);

    return (
        <div className='landing__background'>
            <div className='landing__container'>
                <Link className='landing__button' to='/home'>
                    <p className='landing__button-txt'>
                        START
                    </p>

                    <div className="landing__button-opacity"></div>
                </Link>
            </div>
        </div>
    );
}