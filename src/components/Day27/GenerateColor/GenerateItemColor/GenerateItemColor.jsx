import React, { useState } from 'react';
import './GenerateItemColor.css';

export default function GenerateItemColor({ color }) {
    const [classIcon, setClassNameIcon] = useState('wrapper__generate-color')
    return (
        <div className='generate-color__item' style={{ backgroundColor: `${color}` }}>
            <small>{color}</small>
            <div onClick={(e) => navigator.clipboard.writeText(color)} className={`${classIcon}`}>
                <i className="fa-solid fa-clipboard"></i>
                {/* <div className='generate-color__copied'>a</div> */}
            </div>
        </div>
    )
}
