import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from './utilities/utilities';

const MyCart = () => {
    const [items, setItem] = useState([])
    const data = useLoaderData();

    useEffect(() => {
        const savedData = getStoredData();
        const purchased = data.filter(datum => savedData.includes(datum._id))
        setItem(purchased)
    }, [data])
    console.log(items);
    const { imageurl, name, brand, description, price } = items || {}

    return (

        items.map(item => <>
            <div className='max-w-7xl mx-auto my-10'>
                <div className="card card-side bg-gray-200 shadow-xl font-mono">
                    <figure className="flex-1"><img src={item.imageurl} alt={item.name} /></figure>
                    <div className="card-body flex-1">
                        <h2 className="card-title uppercase">model :  {item.name}</h2>
                        <p className="text-lg font-semibold">{item.brand}</p>
                        <p><span className="uppercase font-semibold">description : </span>  {item.description}</p>
                        <p className="uppercase font-bold">Price: ${item.price}</p>
                    </div>
                </div>
            </div>
        </>)

    );
};

export default MyCart;