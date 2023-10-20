import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Brands = ({ carBrandsinfo }) => {

    return (
        <div className='grid lg:grid-cols-3 bg-white py-10 gap-4'>
            {
                carBrandsinfo.map(brands => <> <div>
                    <Link to={`/${brands.name}`}>
                        <div className="card w-96 mx-auto bg-gray-200 shadow-xl hover:cursor-pointer">
                            <figure><img className='w-[200px] h-[200px] p-4' src={brands.logoUrl} alt={brands.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{brands.name}</h2>
                            </div>
                        </div>
                    </Link>
                </div></>)
            }

        </div>
    );
};

Brands.propTypes = {
    carBrandsinfo: PropTypes.array
}

export default Brands;