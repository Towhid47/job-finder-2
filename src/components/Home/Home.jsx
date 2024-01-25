import React from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import FeaturedJobSection from '../FeaturedJobSection/FeaturedJobSection';


const Home = () => {

    return (
        <div>
             <Banner></Banner>
             <CategorySection></CategorySection>  
             <FeaturedJobSection></FeaturedJobSection>          
        </div>
    );
};

export default Home;