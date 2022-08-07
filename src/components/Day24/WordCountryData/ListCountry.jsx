import React from 'react';
import CountryItem from './CountryItem';

export default function ListCountry({ listCountry }) {


    return (
        <div className='list__country'>
            <div className="contries__wrapper">
                {listCountry.map((item, index) => (
                    <CountryItem key={index} item={item} />
                ))}

            </div>
        </div>
    )
}
