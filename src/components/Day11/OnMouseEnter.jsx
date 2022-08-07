import React, { useState } from 'react'

export default function OnMouseEnter() {
    const [x, setX] = useState('')
    const [y, setY] = useState('')



    const handleMouseEnter = (e) => {
        setX(Math.floor(Math.random() * 90 + 5) + "%")
        setY(Math.floor(Math.random() * 90 + 5) + "%");
        console.log("first", y, x)
    };

    const styleMove = {
        position: 'absolute',
        left: `${x}`,
        top: `${y}`,
        backgroundColor: '#7be5fa',
        padding: '20px',
        borderRadius: '4px',
    }
    return (
        <div style={styleMove} onMouseEnter={handleMouseEnter}>
            30 days of ReactJs
        </div>
    );
}
