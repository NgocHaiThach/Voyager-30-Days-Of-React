import React from 'react'

export default function Ex4() {

    // Hexadecimal color generator
    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    const GeneratorCom = () => {
        const color = hexaColor();
        return (
            <div style={{ backgroundColor: `${color}`, margin: '0 10px', textAlign: 'center', padding: '30px 30px' }} >
                {color}
            </div>
        )
    }

    return (
        <div>
            <GeneratorCom />
            <GeneratorCom />
            <GeneratorCom />
            <GeneratorCom />
            <GeneratorCom />
            <GeneratorCom />
        </div>
    )
}
