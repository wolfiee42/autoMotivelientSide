import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brandcarinfoo = ({ datum }) => {
    const { _id, brand, imageurl, name, price } = datum;

    return (
        <div className="card w-96 mx-auto bg-gray-200 shadow-xl">
            <figure><img className="p-5" src={imageurl} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">Model Name: {name}</h2>
                <p>Brand: {brand}</p>
                <p>Price: <span className="font-semibold">${price}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/${brand}/${_id}`} className="btn w-full bg-gray-700 hover:bg-gray-400 hover:text-black text-white">Details</Link>
                </div>
            </div>
        </div>
    );
};

Brandcarinfoo.propTypes = {
    datum: PropTypes.object,
}

export default Brandcarinfoo;