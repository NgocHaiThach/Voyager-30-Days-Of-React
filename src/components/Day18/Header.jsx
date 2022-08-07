import React, { useEffect, useState } from 'react'


export default function Header({ listCat }) {

    const container = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '60px',
        backgroundColor: '#a2a2e2',
        padding: '20px'

    }

    const styleSpace = {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',

    }

    const styleNumber = {
        border: '1px dashed white',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        borderRadius: '50%',
        fontSize: '20px',
        color: 'green',
        textAlign: 'center',
        margin: '5px'
    }

    const listCountry = {
        display: 'flex',
        flexWrap: 'wrap',
    }
    const itemCountry = {
        fontSize: '18px',
        margin: '4px',
        padding: '8px',
        backgroundColor: 'white',
        borderRadius: '3px'
    }

    const avrerageCatList = () => {

        let total = 0;
        let totalAge = 0;
        let arrCountry = [];
        const countCountry = {};

        for (let i = 0; i < listCat.length; i++) {
            const weightArr = listCat[i].weight.metric.split(' - ');
            const weightAvg = (+weightArr[0] + +weightArr[1]) / 2;
            total += weightAvg;

            const ageArr = listCat[i].life_span.split(' - ');
            const ageAvg = (+ageArr[0] + +ageArr[1]) / 2;
            totalAge += ageAvg;


            arrCountry.push(listCat[i].origin)

        }

        for (const element of arrCountry) {
            if (countCountry[element]) {
                countCountry[element] += 1;
            } else {
                countCountry[element] = 1;
            }
        }
        // const a = []



        const finalAvgW = total / listCat.length;
        const finalAvgY = totalAge / listCat.length;

        return {
            avgWeight: (finalAvgW).toFixed(2),
            avgAge: (finalAvgY).toFixed(2),
            arrCountry: arrCountry,
            arrCountry: countCountry
        };
    }

    const avg = avrerageCatList();


    return (

        <div style={container}>
            <h1>30 Days Of React</h1>
            <div>Cats Paradise</div>
            <span style={styleSpace}>There are 67 cat breeds</span>
            <div style={styleSpace}>On average a cat can weight about
                <div style={styleNumber}> {avg.avgWeight}</div>Kg and live
                <div style={styleNumber}> {avg.avgAge} </div> years.
            </div>

            <div style={listCountry}>{Object.entries(avg.arrCountry).map((item, index) => {
                const [country, quantity] = item
                return (
                    <div style={itemCountry} key={index} >{country}: {quantity}</div>
                )
            })}</div>
        </div>

    )
}
