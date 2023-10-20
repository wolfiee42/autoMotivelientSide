import { useLoaderData } from "react-router-dom";
import Brandcarinfoo from "./Brandcarinfoo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandCarInfo = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    const data = useLoaderData();
    console.log(data);
    if (data.length < 1) {
        return <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-center my-3">Why Choose Us</h2>
            <Slider {...settings}>
                <div>
                    <img className=" mr-5" src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                </div>

            </Slider>
            <br /><br /><br />

            <h2 className="font-bold text-2xl my-10 text-red-600">At this time, we do not have company cars in our current inventory. Please contact us, and we will assist you in finding the ideal vehicles for your business needs.</h2>
        </div>
    }

    else {
        return (
            <div className="max-w-7xl mx-auto my-10">
                <h2 className="text-3xl font-bold text-center my-3">Why Choose Us</h2>
                <Slider {...settings}>
                    <div>
                        <img className=" mr-5" src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/fnDVh8t/car-rental-instagram-social-media-post-banner-template-501970-38.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/CJHYvtC/black-friday-car-automotive-super-sale-social-media-banner-template-106176-1504.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/XXBT04y/car-rental-instagram-social-media-post-banner-template-501970-39.jpg" alt="" />
                    </div>

                </Slider>
                <br /><br /><br />
                <div>
                    <h2 className="text-3xl font-bold text-center">Products</h2>
                    <div className="grid grid-cols-2 max-w-7xl mx-auto my-10 gap-4">
                        {
                            data.map(datum => <Brandcarinfoo key={datum._id} datum={datum}></Brandcarinfoo>)
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default BrandCarInfo;




