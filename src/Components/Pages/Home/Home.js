import React from 'react';
import BusinessSummary from './BusinessSummary';
import Header from './Header/Header';
import Product from './Product/Product';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Product></Product>
            <BusinessSummary></BusinessSummary>

        </div>
    );
};

export default Home;