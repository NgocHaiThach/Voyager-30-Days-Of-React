import React, { useEffect, useRef, useState } from 'react';
import './GenerateColor.css';
import GenerateInput from './GenerateInput/GenerateInput';
import GenerateListColor from './GenerateListColor/GenerateListColor';
import Header from './Header/Header';

export default function GenerateColor() {

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    const [arrColor, setArrColor] = useState([])

    const handleGenerateColor = (number) => {
        const arrGenerate = [];
        for (let i = 0; i < number; i++) {
            const color = hexaColor();
            arrGenerate.push(color);
        }
        setArrColor(arrGenerate)
    }
    console.log(arrColor)
    useEffect(() => {
        handleGenerateColor(27)
    }, [])
    return (
        <div className='color-app'>
            <Header />
            <GenerateInput handleGenerateColor={handleGenerateColor} />
            <GenerateListColor arrColor={arrColor} />
        </div>
    )
}
