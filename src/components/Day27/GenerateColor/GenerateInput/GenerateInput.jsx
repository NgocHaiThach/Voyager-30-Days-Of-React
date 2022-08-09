import React, { useState } from 'react';
import './GenerateInput.css';

export default function GenerateInput({ handleGenerateColor }) {
    const [inputNumberm, setInputNumber] = useState(27);

    const onGenerateColor = () => {
        handleGenerateColor(inputNumberm);
    }

    const handleOnKeyPress = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }
    const handleChange = (e) => {
        const val = e.target.value;
        if (!val) {
            setInputNumber(inputNumberm);
        } else {
            setInputNumber(+val);
        }
        console.log(inputNumberm)
    }

    return (
        <div className='generate-color__input'>
            <div className="generate-color__form-group">
                <input
                    value={inputNumberm}
                    onKeyPress={handleOnKeyPress} type='text'
                    onChange={(e) => handleChange(e)} />
            </div>
            <div onClick={onGenerateColor} className="generate-color__button">Generate</div>
        </div>
    )
}
