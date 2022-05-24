import React from 'react';
import Footer from '../../Shared/Footer';
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
            <Footer></Footer>

        </div>
    );
};

export default Home;