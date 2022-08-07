import Header from './Header'
import React, { useEffect, useState } from 'react'
import ListCat from './ListCat';



export default function CatParadise() {

    const [listCat, setListCat] = useState([]);

    const fetchCatList = async () => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        try {
            const res = await fetch(url);
            const data = await res.json();
            setListCat(data);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCatList()
    }, [])

    return (
        <div>
            <Header listCat={listCat} />
            <ListCat listCat={listCat} />
        </div>

    )
}
