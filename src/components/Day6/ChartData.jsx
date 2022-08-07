import React from 'react';
import { tenHighestPopulation } from '../../constances/data';
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


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

let lableProduct = []
let numberofLabel = []
tenHighestPopulation.map((item, index) => {
    lableProduct.push(item.country)
    numberofLabel.push((item.population))
})

export const data = {
    labels: lableProduct,
    datasets: [
        {
            data: numberofLabel,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export function ChartData() {
    return <Bar options={options} data={data} />;
}
