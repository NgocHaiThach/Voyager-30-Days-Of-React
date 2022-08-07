import React, { useEffect } from 'react'
import callApi from '../../utils/callApi'
import ItemCat from './ItemCat'

export default function ListCat({ listCat }) {
    return (
        <>
            {listCat.map((item, index) => (
                <ItemCat key={index} item={item} />
            ))
            }
        </>

    )
}
