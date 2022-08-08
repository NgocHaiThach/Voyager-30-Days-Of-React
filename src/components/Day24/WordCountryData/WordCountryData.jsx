import React, { useEffect, useState } from 'react';
import HeaderCountry from './HeaderCountry/HeaderCountry';
import InputCountry from './InputCountry/InputCountry';
import ListCountry from './ListCountry';
import callApi from '../../../utils/callApi';
import './WordCountryData.css';
import { compare } from '../../../utils/format';
import ChartCountry from './ChartCountry/ChartCountry';
import Footer from './Footer/Footer';


export default function WordCountryData() {
    const [listCountry, setListCountry] = useState([]);
    const [filteredData, setFilteredData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchCountryList = async () => {
        setIsLoading(true);
        const res = await callApi('https://restcountries.com/v3.1/all', 'GET');
        setListCountry(res.data);
        setFilteredData(res.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCountryList();
    }, []);

    let totalPopulationInWord = 0
    for (let i = 0; i < listCountry.length; i++) {
        totalPopulationInWord += listCountry[i].population
    }



    const handlesearchCountries = (searchValue) => {
        const val = (searchValue.search).toLowerCase();

        if (val) {
            const filter = listCountry.filter((item) => (
                item.name?.common.toLowerCase().includes(val) ||
                item.capital?.[0].toLowerCase().includes(val) ||
                item.languages && Object.values(item.languages).some(lang => lang.toLowerCase().includes(val))
            ));
            setFilteredData(filter.sort(compare));
        }
        else {
            setFilteredData(listCountry.sort(compare));
        }
    }


    return (
        <>
            {filteredData && <HeaderCountry lengthInitData={listCountry.length} lengthFilteredData={filteredData.length} />}
            <InputCountry handlesearchCountries={handlesearchCountries} />
            {filteredData && <ListCountry listCountry={filteredData.sort(compare)} isLoading={isLoading} />}
            {filteredData && <ChartCountry listCountry={filteredData} totalPopulationInWord={totalPopulationInWord} />}
            <Footer />
        </>
    )
}
