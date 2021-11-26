import React from 'react';
import './Pagination.scss';

export default function Pagination({ pages, currentPage, handleClick, maxPageNumberLimit, minPageNumberLimit, handleNext, handlePrev }) {

    return (
        <ul className='pagination'>
            <li
                className='pagination__item'
                onClick={handlePrev}
                disabled={currentPage === pages[0] ? true : false}
            >
                <span className='pagination__item-text'>{'<'}</span>
            </li>
            {
                pages.map(number => (
                    number < maxPageNumberLimit + 1 && number > minPageNumberLimit
                        ? <li
                            key={number}
                            className={currentPage === number ? 'pagination__item-active' : 'pagination__item'}
                            id={number}
                            onClick={handleClick}
                        >
                            <span className='pagination__item-text'>{number}</span>
                        </li>

                        : null
                ))
            }
            <li
                className='pagination__item'
                onClick={handleNext}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
                <span className='pagination__item-text'>{'>'}</span>
            </li>
        </ul>
    );
}