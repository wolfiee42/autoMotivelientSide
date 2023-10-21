import Marquee from "react-fast-marquee";

const ServiceProvided = () => {
    return (
        <div className="bg-gray-200 py-10">
            <h2 className="text-center lg:font-bold font-semibold text-lg lg:text-3xl font-mono py-4">We have collaborated with :</h2>
            <Marquee>
                <div className="w-[200px] mx-auto">
                    <div className="flex items-center gap-10">
                        <img src="https://i.ibb.co/7rLq32g/toyota-Logo.png" alt="" />
                        <img src="https://i.ibb.co/LtQS0Rq/bmwLogo.png" alt="" />
                        <img src="https://i.ibb.co/P9gm7jn/merzLogo.png" alt="" />
                        <img src="https://i.ibb.co/C5Ss33w/fordLogo.png" alt="" />
                        <img src="https://i.ibb.co/ngws1J6/honda-Logo.png" alt="" />
                        <img src="https://i.ibb.co/HXh9Zwr/tesla-Logo.png" alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default ServiceProvided;