import React from 'react';
import './HeaderCountry.css';

export default function HeaderCountry({ lengthInitData, lengthFilteredData }) {
    return (
        <div className='header_country'>
            <div className="title_country">
                World Countries Data
            </div>
            <div className="sub-title_country">
                Currently, we have {lengthInitData} countries
            </div>
            {lengthFilteredData !== 250 &&
                <div className="length_country">
                    {lengthFilteredData} satisfied the search criteria
                </div>}
        </div>
    )
}
