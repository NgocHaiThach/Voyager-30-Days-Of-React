import React, { useRef, useState, } from 'react';
import './InputCountry.css';

export default function InputCountry({ handlesearchCountries }) {

    const [search, setSearch] = useState('');
    const typingTimoutRef = useRef(null);

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handlesearchCountries) {
                handlesearchCountries(formvalues)
            }
        }, 300)

    }

    return (
        <div className='controls-country'>
            <input
                value={search}
                onChange={onSearch}
                className='search__input'
                type="text"
                placeholder='Search countries by name, city, languages' />
            <i style={{ color: 'orange', fontSize: "4rem" }} className="fa-solid fa-chart-bar" />
        </div>
    )
}
