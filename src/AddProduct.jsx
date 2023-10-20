import Rating from 'react-rating';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const AddProduct = () => {

    const handleAddProductBtn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageurl = form.imageurl.value;
        const price = form.price.value;
        const description = form.description.value;
        const brand = form.brand.value;

        const car = { name, imageurl, price, description, brand };

        fetch('http://localhost:5000/cardetails', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(car)
        })
        form.reset();
    }


    return (
        <div className="py-10">
            <div className="font-mono max-w-7xl mx-auto">
                <form onSubmit={handleAddProductBtn} className='shadow-lg p-5 bg-gray-200 glass rounded-lg'>
                    <h2 className="text-2xl text-center font-bold">Add Products</h2>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Image</span>
                            </label>
                            <input type="text" name='imageurl' placeholder="Image URL" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Car Brand</span>
                            </label>
                            <select name='brand' className="select select-bordered w-full">
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
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* rows */}
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">About Car</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full justify-center">
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <Rating
                                emptySymbol={<AiOutlineStar className='text-3xl'></AiOutlineStar>}
                                fullSymbol={<AiFillStar className='text-3xl'></AiFillStar>}
                            />
                        </div>
                    </div>
                    <div className="my-5">
                        <button type="submit" className="btn w-full bg-white hover:bg-gray-700 hover:text-white"> Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;