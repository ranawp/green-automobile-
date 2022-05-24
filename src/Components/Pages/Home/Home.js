import React from 'react';
import BusinessSummary from './BusinessSummary';
import Header from './Header/Header';
import HomeProductreview from './HomeProductreview';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Product></Product>
            <BusinessSummary></BusinessSummary>
            <HomeProductreview></HomeProductreview>

        </div>
    );
};

export default Home;