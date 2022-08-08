import React from 'react';
import './CountryItem.css'

export default function CountryItem({ item }) {
    const { name, capital, population, currencies, languages, flags } = item;
    return (
        <div className="country__item">
            <div className="country__flag">
                <img src={flags.png} alt="Image Country" />
                <h3 className='country__name'>{name.common}</h3>
            </div>
            <div className="country__text">
                <p>
                    <span>
                        Capital:
                    </span> {capital}
                </p>
                <p>
                    <span>
                        Language:
                    </span> {languages && Object.values(item?.languages).map((l, i) => {
                        // console.log(Object.entries(item?.languages))
                        return (
                            <span key={i}> {l}, </span>
                        )
                    })}
                </p>
                <p>
                    <span>
                        Population:
                    </span> {population}
                </p>
                {<p>
                    <span>
                        Currency:
                    </span>
                    {/* {currencies && Object.keys(item?.currencies)[0]} */}
                    {currencies && Object.entries(item?.currencies).map((l, i) => {
                        const [short, full] = l;
                        return (
                            <span key={i}> {full.name} ({short})</span>
                        )
                    })}
                </p>}
            </div>
        </div>
    )
}
