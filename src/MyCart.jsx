import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState(data)
    return (
        products.map(product => <>
            <div className='max-w-7xl mx-5 lg:mx-auto my-10'>
                <div className="card card-side flex-col lg:flex-row bg-gray-200 shadow-xl font-mono">
                    <figure className="flex-1"><img className='p-10 lg:p-0' src={product.imageurl} alt={product.name} /></figure>
                    <div className="card-body flex-1">
                        <h2 className="card-title text-base lg:text-2xl uppercase">model :  {product.name}</h2>
                        <p className="lg:text-lg font-semibold">{product.brand}</p>
                        <p className='text-xs lg:text-base'><span className="uppercase font-semibold">description : </span>  {product.description}</p>
                        <p className="uppercase font-bold">Price: ${product.price}</p>
                    </div>
                </div>
            </div>
        </>)

    );
};

export default MyCart;