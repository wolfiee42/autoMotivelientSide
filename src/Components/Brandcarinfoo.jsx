import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brandcarinfoo = ({ datum }) => {
    const { _id, brand, imageurl, name, price } = datum;

    const handleDeleteItem = _id => {
        fetch(`http://localhost:5000/cardetails/${brand}/${_id}`, {
            method: "DELETE",
        })
            .then(res => {
                res.json()
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="card w-96 mx-auto bg-gray-200 shadow-xl">
            <figure><img className="p-5" src={imageurl} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">Model Name: {name}</h2>
                <p>Brand: {brand}</p>
                <p>Price: <span className="font-semibold">${price}</span></p>
                <div className="card-actions join flex-row justify-between">
                    <Link to={`/${brand}/${_id}`} className="btn hover:flex-grow bg-gray-700 hover:bg-gray-400 hover:text-black  text-white join-item">Details</Link>

                    <Link to={`/${brand}/${_id}/update`} className="btn bg-gray-700 hover:flex-grow hover:bg-gray-400 hover:text-black text-white join-item">Update</Link>

                    <button onClick={() => handleDeleteItem(_id)} className="btn bg-gray-700 hover:flex-grow hover:bg-gray-400 hover:text-black text-white join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

Brandcarinfoo.propTypes = {
    datum: PropTypes.object,
}

export default Brandcarinfoo;