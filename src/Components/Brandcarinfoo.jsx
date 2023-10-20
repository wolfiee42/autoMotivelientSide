const Brandcarinfoo = ({ datum }) => {
    console.log(datum);
    const { brand, imageurl, name, price } = datum
    return (
        <div className="card w-96 mx-auto bg-gray-200 shadow-xl">
            <figure><img className="p-5" src={imageurl} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">Model Name: {name}</h2>
                <p>Brand: {brand}</p>
                <p>Price: <span className="font-semibold">${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Brandcarinfoo;