import { useLoaderData } from 'react-router-dom';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Brands from './Brands';


const Home = () => {
    const brandsInfo = useLoaderData();
    const carBrandsinfo = brandsInfo.carBrands;
    return (
        <div>
            <Banner></Banner>
            <Brands carBrandsinfo={carBrandsinfo}></Brands>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;