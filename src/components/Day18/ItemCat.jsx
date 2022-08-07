import React, { useEffect, useState } from 'react'
import callApi from '../../utils/callApi';
import './ItemCat.css';

export default function ItemCat({ item }) {
    const [info, setInfo] = useState([])

    const fetchApiOneCat = async (id) => {
        try {
            const res = await callApi(`https://api.thecatapi.com/v1/images/search?breed_id=${id}`, 'GET');
            console.log("first", res.data[0].url)
            setInfo(res.data[0].url)
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchApiOneCat(item.id)
    }, [])

    return (
        <div className='styleItemCat'>
            <div style={{ overflow: 'hidden' }}>
                <img className='styleImge' src={info} alt="image cat" />
            </div>

            <div className='styleContentItem'>
                <div className='styleName'>{item.name}</div>
                <div className='styleNameCountry'>{item.origin}</div>
                <div className='styleInfoCat'>
                    <span className='styleTitle'>Temperament: </span> {item.temperament}
                </div>
                <div className='styleInfoCat'>
                    <span className='styleTitle'>Life Span: </span> {item.life_span} years
                </div>
                <div className='styleInfoCat'>
                    <span className='styleTitle'>Weight: </span> {item.weight.metric} Kg
                </div>
                <div className='styleInfoCat'>
                    <span className='styleTitle'>Description: </span> {item.description}
                </div>
            </div>
        </div>
    )
}
