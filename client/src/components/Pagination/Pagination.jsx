import React from 'react';
import './Pagination.scss';

export default function Pagination() {
    return (
        <div className='pagination'>
            <div className='pagination__item'>
                <span className='pagination__item-text'>{'<'}</span>
            </div>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                    <div key={item} className='pagination__item'>
                        <span className='pagination__item-text'>{item}</span>
                    </div>
                ))
            }
            <div className='pagination__item'>
                <span className='pagination__item-text'>{'>'}</span>
            </div>
        </div>
    );
}