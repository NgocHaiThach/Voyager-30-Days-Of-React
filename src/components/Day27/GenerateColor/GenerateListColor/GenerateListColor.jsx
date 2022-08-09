import React from 'react';
import GenerateItemColor from '../GenerateItemColor/GenerateItemColor';
import './GenerateListColor.css';

export default function GenerateListColor({ arrColor }) {
    return (
        <div className='generate-color__list'>
            {arrColor.map((color, index) => (
                <GenerateItemColor color={color} key={index} />
            ))}
        </div>
    )
}
