import { useLoaderData } from 'react-router-dom';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Brands from './Brands';
import Choose from './Choose';
import ServiceProvided from './ServiceProvided';


const Home = ({isDarkMode}) => {
    const brandsInfo = useLoaderData();
    const carBrandsinfo = brandsInfo.carBrands;
    

    return (
        <div>
            <Banner></Banner>
            <Brands isDarkMode={isDarkMode} carBrandsinfo={carBrandsinfo}></Brands>
            <AboutUs></AboutUs>
            <ServiceProvided></ServiceProvided>
            <Choose></Choose>
           
        </div>
    );
};

export default Home;