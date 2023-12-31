const AboutUs = () => {
    return (
        <div className="bg-black text-gray-500 lg:text-white">
            <div className="flex py-10 max-w-7xl lg:mx-auto gap-5 flex-col mx-4 lg:flex-row-reverse">
                <div>
                    <img className="rounded-lg" src="https://i.ibb.co/M2PtR9m/aboutUs.jpg" alt="" />
                </div>
                <div className=" font-mono flex flex-col justify-center items-center">
                    <h2 className="text-center text-base lg:text-xl font-semibold">About Us</h2>
                    <p className="text-xs lg:text-base">
                        At our car showroom, we offer an exceptional automotive experience designed to delight car enthusiasts and buyers alike. Our showroom showcases a curated selection of top-quality vehicles, ranging from elegant sedans to powerful SUVs and sporty coupes. With a passion for performance, style, and innovation, we aim to provide our customers with the finest in the world of automobiles. Our knowledgeable staff is here to guide you through every step of your car-buying journey, ensuring that you drive away in the vehicle of your dreams. We take pride in offering not just cars, but a gateway to a world of unparalleled driving pleasure and sophistication.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;