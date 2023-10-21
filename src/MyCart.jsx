import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCart = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState(data)


    const handleDeletebtn = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Product has been deleted.',
                    'success'
                )
                fetch(`https://wolfie-automotive-server-side.vercel.app/productdetails/${_id}`, {
                    method: "DELETE",
                })
                const remaining = products.filter(producty => producty._id !== _id);
                setProducts(remaining);
            }
        })

    }


    return (
        <div className="flex justify-center min-h-screen">
            <div>
                {
                    products.map(product => <>
                        <div className='max-w-7xl  mx-5 lg:mx-auto my-10'>
                            <div className="card card-side flex-col lg:flex-row bg-gray-200 shadow-xl font-mono">
                                <figure className="flex-1"><img className='p-10 lg:p-0' src={product.imageurl} alt={product.name} /></figure>
                                <div className="card-body flex-1">
                                    <h2 className="card-title text-base lg:text-2xl uppercase">model :  {product.name}</h2>
                                    <p className="lg:text-lg font-semibold">{product.brand}</p>
                                    <p className='text-xs lg:text-base'><span className="uppercase font-semibold">description : </span>  {product.description}</p>
                                    <p className="uppercase font-bold">Price: ${product.price}</p>
                                    <button onClick={() => handleDeletebtn(product._id)} className="btn w-full bg-red-700 hover:bg-red-500 hover:text-black text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>

    );
};

export default MyCart;