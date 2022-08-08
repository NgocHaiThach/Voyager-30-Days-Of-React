import React, { useState } from 'react';
import './ChartCountry.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function ChartCountry({ listCountry, totalPopulationInWord, }) {

    let arrLanguages = [];

    for (let i = 0; i < listCountry.length; i++) {
        listCountry[i].languages && arrLanguages.push(...Object.values(listCountry[i].languages))
    }

    const countLanguages = {}
    for (const element of arrLanguages) {
        if (countLanguages[element]) {
            countLanguages[element] += 1;
        } else {
            countLanguages[element] = 1;
        }
    }

    let topPopulation = []
    topPopulation = (listCountry.sort((a, b) => b.population - a.population).slice(0, 10))
    // topPopulation = (listCountry.slice(0, 10))

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );


    //POPULATION
    const optionsPopulation = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: '10 Most populated countries',
            },
        },
    };

    let lablePopuplation = ['Word']
    let numberofPopulation = [totalPopulationInWord]
    topPopulation.map((item, index) => {
        lablePopuplation.push(item.name.common)
        numberofPopulation.push((item.population))
    });

    const dataPopulation = {
        labels: lablePopuplation,
        datasets: [
            {
                data: numberofPopulation,
                borderColor: 'orange',
                backgroundColor: 'orange',
            },
        ],
    };


    //LANGUAGES
    const optionsLanguages = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: '10 Most spoken languages',
            },
        },
    };


    const arrCountLanguages = Object.entries(countLanguages)

    const sortedCountLanguage = arrCountLanguages.sort((a, b) => {
        const aVal = Object.values(a)[1];
        const bVal = Object.values(b)[1];
        return bVal - aVal;
    });

    let lableLanguages = []
    let numberofLanguages = []
    sortedCountLanguage.slice(0, 10).map((item, index) => {
        lableLanguages.push(item[0])
        numberofLanguages.push((item[1]))
    })




    const dataLanguages = {
        labels: lableLanguages,
        datasets: [
            {
                data: numberofLanguages,
                borderColor: 'orange',
                backgroundColor: 'orange',
            },
        ],
    };

    const [display, setDisplay] = useState(true)
    return (
        <>
            <div className="control-chart">
                <div className='chart-btn' >
                    <div onClick={() => setDisplay(true)} className='btn-control__chart'>POPULATION</div>
                    <div onClick={() => setDisplay(false)} className='btn-control__chart'>LANGUAGES</div>
                </div>
            </div>
            {display ? <Bar options={optionsPopulation} data={dataPopulation} />
                : <Bar options={optionsLanguages} data={dataLanguages} />
            }
        </>

    )
}
