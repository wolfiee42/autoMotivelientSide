import { useLoaderData } from "react-router-dom";
import { saveItems } from "../utilities/utilities";
import toast, { Toaster } from "react-hot-toast";

const Cardetails = () => {
    const carDetails = useLoaderData();
    const { _id, brand, name, imageurl, price, description } = carDetails

    const handleAddToCart = (_id) => {
        toast.success('Successfully Added!')
        saveItems(_id)
    }


    return (
        <div className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl font-mono">
            <figure className="flex-1 p-10 lg:p-0"><img src={imageurl} alt={name} /></figure>
            <div className="card-body flex-1">
                <h2 className="card-title uppercase">model :  {name}</h2>
                <p className="text-lg font-semibold">{brand}</p>
                <p><span className="uppercase font-semibold">description : </span>  {description}</p>
                <p className="uppercase font-bold">Price: ${price}</p>
                <button onClick={() => handleAddToCart(_id)} className="btn w-full bg-gray-700 hover:bg-gray-400 hover:text-black text-white">Add to cart</button>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false} />
        </div>
    );
};

export default Cardetails;