import React from 'react'

export default function HeaderCountry({ listCountry }) {
    return (
        <div className='header_country'>
            <div className="title_country">
                World Countries Data
            </div><div className="sub-title_country">
                Currently, we have {listCountry.length} countries
            </div>
        </div>
    )
}
