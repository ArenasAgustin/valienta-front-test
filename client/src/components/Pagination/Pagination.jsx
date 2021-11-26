import React from 'react';
import './Pagination.scss';

export default function Pagination({ pages, page, handleClick, maxPageNumberLimit, minPageNumberLimit, handleNext, handlePrev }) {
    console.log('Pagination.jsx: pages: ', pages);

    return (
        <ul className='pagination'>
            <li
                className='pagination__item'
                onClick={handlePrev}
                disabled={page.currentPage === pages[0] ? true : false}
            >
                {'<'}
            </li>
            {
                pages.map(number => (
                    number < maxPageNumberLimit + 1 && number > minPageNumberLimit
                        ? <li
                            key={number}
                            className={page.currentPage === number ? 'pagination__item-active' : 'pagination__item'}
                            id={number}
                            onClick={handleClick}
                        >
                            {number}
                        </li>

                        : null
                ))
            }
            <li
                className='pagination__item'
                onClick={handleNext}
                disabled={page.currentPage === pages[pages.length - 1] ? true : false}
            >
                {'>'}
            </li>
        </ul>
    );
}