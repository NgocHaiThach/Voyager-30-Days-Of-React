import React from 'react'

export default function Ex2() {
    const styleContainer = {
        margin: '20px',
        backgroundColor: '#a8ecf9',
        borderRadius: '8px',
    }

    const styleHeader = {
        paddingTop: '25px',
        textAlign: 'center'
    }

    const styleDes = {
        padding: '25px 0 ',
        textAlign: 'center'

    }

    const styleDivInput = {
        display: 'flex',
        justifyContent: 'center',
    }

    const styleInput = {
        padding: '8px',
        marginLeft: '12px',
        border: 'none',
        borderRadius: '6px',
        outline: 'none'
    }

    const styleBtn = {
        margin: '25px 0',
        width: '280px',
        height: '30px',
        backgroundColor: '#f17474',
        border: 'none',
        borderRadius: '6px',
        textAlign: 'center',
        outline: 'none',
        color: 'white',
        cursor: 'pointer',
    }

    return (
        <div style={styleContainer} className='container'>
            <h1 style={styleHeader} className='header'>SUBSCRIBE</h1>
            <p style={styleDes}>Sign up width your email address to receive news and updates.</p>
            <div style={styleDivInput}>
                <input style={styleInput} type="text" placeholder='First name' />
                <input style={styleInput} type="text" placeholder='Last name' />
                <input style={styleInput} type="text" placeholder='Email' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={styleBtn}>Subscribe</button>
            </div>
        </div>
    )
}
