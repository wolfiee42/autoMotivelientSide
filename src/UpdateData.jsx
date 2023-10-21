import toast, { Toaster } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const UpdateData = () => {

    const data = useLoaderData();

    const { _id, brand, name, imageurl, price, description } = data

    const handleUpdateProductBtn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageurl = form.imageurl.value;
        const price = form.price.value;
        const description = form.description.value;
        const brand = form.brand.value;

        const car = { name, imageurl, price, description, brand };

        fetch(`http://localhost:5000/cardetails/brand/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                const update = data.modifiedCount;
                if (update) {
                    toast.success('Information Updated Successfully!')
                }
            })


    }

    return (
        <div className="py-10">
            <div className="font-mono max-w-7xl mx-auto">
                <form onSubmit={handleUpdateProductBtn} className='shadow-lg p-5 bg-gray-200 glass rounded-lg'>
                    <h2 className="text-2xl text-center font-bold">Update Product</h2>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Image</span>
                            </label>
                            <input type="text" defaultValue={imageurl} name='imageurl' placeholder="Image URL" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input defaultValue={name} type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Brand</span>
                            </label>
                            <select defaultValue={brand} name='brand' className="select select-bordered w-full">
                                <option disabled selected>Brand Names</option>
                                <option>BMW Motors</option>
                                <option>Ford Motor Company</option>
                                <option>Toyota</option>
                                <option>Mercedes-Benz</option>
                                <option>Tesla</option>
                                <option>Honda Motor Company</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car price</span>
                            </label>
                            <input defaultValue={price} type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">About Car</span>
                            </label>
                            <input defaultValue={description} type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full justify-center">
                            <label className="label">
                                <span className="label-text">Rating of Car</span>
                            </label>
                            <Rating
                                emptySymbol={<AiOutlineStar className='text-3xl'></AiOutlineStar>}
                                fullSymbol={<AiFillStar className='text-3xl'></AiFillStar>}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <button type="submit" className="btn w-full bg-gray-700 hover:bg-gray-400 hover:text-black text-white">Update Product</button>
                    </div>
                </form>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false} />
        </div>
    );
};

export default UpdateData;