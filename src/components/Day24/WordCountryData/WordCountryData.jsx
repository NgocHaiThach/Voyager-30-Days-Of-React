import React, { useEffect, useState } from 'react';
import HeaderCountry from './HeaderCountry';
import InputCountry from './InputCountry';
import ListCountry from './ListCountry';
import callApi from '../../../utils/callApi';
import './WordCountryData.css';
import { compare } from '../../../utils/format';
import Loading from './Loading';


export default function WordCountryData() {
    const [listCountry, setListCountry] = useState([]);
    const [filteredData, setFilteredData] = useState(listCountry);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCountryList = async () => {
        setIsLoading(true);
        const res = await callApi('https://restcountries.com/v3.1/all', 'GET');
        setListCountry(res.data.sort(compare));
        setFilteredData(res.data.sort(compare));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCountryList();
    }, []);

    const handlesearchCountries = (searchValue) => {
        const val = (searchValue.search).toLowerCase();

        if (val) {
            const filter = listCountry.filter((item) => (
                item.name?.common.toLowerCase().includes(val) ||
                item.capital?.[0].toLowerCase().includes(val) ||
                item.languages && Object.values(item.languages).some(lang => lang.toLowerCase().includes(val))
            ));
            setFilteredData(filter);
        }
        else {
            setFilteredData(listCountry)
        }
    }


    return (
        <>
            <HeaderCountry listCountry={filteredData} />
            <InputCountry handlesearchCountries={handlesearchCountries} />
            <ListCountry listCountry={filteredData} isLoading={isLoading} />
        </>
    )
}
