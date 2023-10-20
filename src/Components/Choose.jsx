const Choose = () => {
    return (
        <div className="bg-white text-black">
            <div className="flex flex-col lg:flex-row py-10 max-w-7xl mx-auto gap-5 items-center">
                <div className="lg:w-1/2">
                    <img className="rounded-lg w-[250px] h-[250px] mx-auto" src="https://i.ibb.co/nM0TpP9/logo.png" alt="" />
                </div>
                <div className="lg:w-1/2 p-5 lg:p-0 font-mono flex flex-col justify-center items-center">
                    <h2 className="text-center text-xl font-semibold my-10">Why Choose Us?</h2>
                    <p className="text-xs lg:text-base">
                    People choose us as their preferred car dealer for several compelling reasons. We stand out by offering a vast and diverse selection of high-quality vehicles, ensuring that every customer can find the perfect fit for their needs and preferences. Our commitment to transparency and fair pricing is unwavering, fostering trust with our customers through competitive and straightforward pricing. Our exceptional customer service, coupled with a knowledgeable and friendly team, guides and supports customers through the entire car-buying process. We offer a seamless and stress-free experience, from test drives to financing solutions, making it easy for customers to drive home in their dream car. With a reputation for reliability, integrity, and unwavering customer satisfaction, it is no wonder why people choose us as their trusted car dealer time and time again.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Choose;