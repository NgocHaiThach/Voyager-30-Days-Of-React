import React, { useState } from 'react'
import './RandomCountry.css';
import { countriesData } from '../../constances/data';

export default function RandomCountry() {
    const index = Math.floor(Math.random() * countriesData.length);
    const initCountry = countriesData[index];
    const [country, setCountry] = useState(initCountry);

    const randomCountry = () => {
        const index = Math.floor(Math.random() * countriesData.length);
        setCountry(countriesData[index])
    }
    return (
        <div className="app">
            <div className='container'>
                <div className="flag">
                    <img src="https://restcountries.eu/data/afg.svg" alt="image_country" className="flag_img" />
                    <span>{country.name}</span>
                </div>
                <div className="des-country">
                    <span><strong>Capital:</strong> {country.capital}</span>
                    <span><strong>Language: </strong> {country.languages}</span>
                    <span><strong>Pupolation: </strong> {country.population}</span>
                    <span><strong>Currency:</strong>  {country.currency}</span>
                </div>
            </div>
            <button onClick={randomCountry}>Random</button>
        </div >
    )
}
