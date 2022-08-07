import React from 'react'

export default function HexaDecimalColor() {
    const dayItem = {
        width: '60px',
        heigth: '60px',
        padding: '30px',
        backgroundColor: 'green',
        textAlign: 'center',
        margin: '2px'
    }

    const listNum = {
        margin: '100px',
        display: 'flex',
        flexWrap: 'wrap',
    }

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    const generatorColor = () => {
        let arrColor = [];
        for (let i = 0; i < 32; i++) {
            const color = hexaColor();
            arrColor.push(color);
        }
        return arrColor;
    }

    const Colors = ({ num }) => {
        const list = generatorColor();
        const renderList = list.map((item, index) => (
            <div key={index} style={{
                width: '60px',
                heigth: '60px',
                padding: '30px',
                backgroundColor: `${item}`,
                textAlign: 'center',
                margin: '2px'
            }}>
                {item}
            </div>
        ))
        return renderList

    }


    return (
        <>
            <h3 style={{ textAlign: 'center' }}>30 Days Of React</h3>
            <div style={{ textAlign: 'center' }}>Hexaldecinal  Colors</div>
            <div style={listNum}>
                <Colors />
            </div>
        </>
    )
}
