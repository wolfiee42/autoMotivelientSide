import { useLoaderData } from 'react-router-dom';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Brands from './Brands';
import Choose from './Choose';
import ServiceProvided from './ServiceProvided';
import Mailus from './Mailus';


// eslint-disable-next-line react/prop-types
const Home = ({ isDarkMode }) => {
    const brandsInfo = useLoaderData();
    const carBrandsinfo = brandsInfo.carBrands;


    return (
        <div>
            <Banner></Banner>
            <Brands isDarkMode={isDarkMode} carBrandsinfo={carBrandsinfo}></Brands>
            <AboutUs></AboutUs>
            <ServiceProvided></ServiceProvided>
            <Choose></Choose>
            <Mailus />

        </div>
    );
};

export default Home;