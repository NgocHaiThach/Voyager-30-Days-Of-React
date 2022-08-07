import React, { useEffect, useState } from 'react';
import HeaderCountry from './HeaderCountry';
import InputCountry from './InputCountry';
import ListCountry from './ListCountry';
import callApi from '../../../utils/callApi';
import './WordCountryData.css';
import { compare } from '../../../utils/format';

export default function WordCountryData() {
    const [listCountry, setListCountry] = useState([]);
    const [filteredData, setFilteredData] = useState(listCountry);

    const fetchCountryList = async () => {
        const res = await callApi('https://restcountries.com/v3.1/all', 'GET');
        setListCountry(res.data.sort(compare));
        setFilteredData(res.data.sort(compare));
    }

    useEffect(() => {
        fetchCountryList();
    }, []);
    const filterLanguages = []

    const handlesearchCountries = (searchValue) => {
        const val = (searchValue.search).toLowerCase();

        if (val) {
            const filter = listCountry.filter((item) => (
                item.name?.common.toLowerCase().includes(val) ||
                item.capital?.[0].toLowerCase().includes(val)
                ||
                item.languages && Object.entries(item.languages).map((lang, index) => {
                    const [short, full] = lang;
                    if (full.toLowerCase().includes(val)) {
                        filterLanguages.push(item)
                        console.log("lang", filterLanguages)
                        setFilteredData(filterLanguages)
                    }

                })

            ));
            // if (filterLanguages.length <= 0) {

            setFilteredData(filter);
            // }
        }
        else {
            setFilteredData(listCountry)
        }
    }


    return (
        <div>
            <HeaderCountry listCountry={filteredData} />
            <InputCountry handlesearchCountries={handlesearchCountries} />
            <ListCountry listCountry={filteredData} />
        </div>
    )
}
