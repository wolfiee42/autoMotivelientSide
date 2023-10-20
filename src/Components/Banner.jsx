const   Banner = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat  bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/p4m4QWT/dmitry-timofeew-UU18rj-Wi-Qmo-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg font-mono ">
                    <h1 className=" mb-2 lg:mb-5 lg:text-5xl text-gray-500 lg:text-white font-semibold">Wolfie Auto Motive</h1>
                    <p className="lg:mb-5 text-gray-500 lg:text-white text-xs lg:text-base">Driving Dreams, Delivering Excellence</p>
                    <p className="lg:mb-5 text-gray-500 lg:text-white text-xs lg:text-base">Cruise into the future of automotive excellence at our cutting-edge car showroom. Wea re your gateway to a world of extraordinary driving experiences. Immerse yourself in a showroom filled with the latest, most advanced vehicles that seamlessly blend power, style, and innovation. Our mission is to turn your automotive dreams into reality. Step inside, and let us drive your passion for cars.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;