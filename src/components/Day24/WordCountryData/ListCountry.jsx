import React from 'react';
import CountryItem from './CountryItem/CountryItem';
import Loading from './Loading/Loading';

export default function ListCountry({ listCountry, isLoading }) {


    return (
        <div className='list__country'>
            {isLoading ? <Loading /> :
                <div className="contries__wrapper">
                    {listCountry.map((item, index) => (
                        <CountryItem key={index} item={item} />
                    ))}
                </div>}
        </div>
    )
}
