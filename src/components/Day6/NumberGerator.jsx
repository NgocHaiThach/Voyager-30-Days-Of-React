import React from 'react'

export default function () {
    const dayList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    const dayItemOdd = {
        width: '60px',
        heigth: '60px',
        padding: '30px',
        backgroundColor: 'green',
        textAlign: 'center',
        margin: '2px'
    }
    const dayItemEven = {
        width: '60px',
        heigth: '60px',
        padding: '30px',
        backgroundColor: 'yellow',
        textAlign: 'center',
        margin: '2px'
    }

    const dayItemPrime = {
        width: '60px',
        heigth: '60px',
        padding: '30px',
        backgroundColor: 'red',
        textAlign: 'center',
        margin: '2px'
    }

    const listNum = {
        margin: '100px',
        display: 'flex',
        flexWrap: 'wrap',
    }

    const isPrime = (num) => {
        let d = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                d += 1;
            }
        }
        if (d === 2)
            return true
        return false
    }

    const Days = ({ days }) => {
        const list = days.map((day, index) => (
            isPrime(day) ?
                <DaysPrime key={index} day={day} />
                : <div key={index} style={day % 2 === 0 ? dayItemOdd : dayItemEven}>
                    {day}
                </div>
        ))
        return list
    }

    const DaysPrime = ({ day }) => {
        return (
            <div style={dayItemPrime}>
                {day}
            </div>
        )
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>30 Days Of React</h3>
            <div style={{ textAlign: 'center' }}> Number  Generator</div>
            <div style={listNum}>
                <Days days={dayList} />
            </div>
        </>
    )
}
