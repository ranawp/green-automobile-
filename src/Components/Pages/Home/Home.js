import React from 'react';
import Footer from '../../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import Header from './Header/Header';
import HomeProductreview from './HomeProductreview';
import NewsStaller from './NewsStaller';
import Product from './Product/Product';
import TeamMemeber from './TeamMemeber';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Product></Product>
            <BusinessSummary></BusinessSummary>
            <TeamMemeber></TeamMemeber>
            <HomeProductreview></HomeProductreview>
            <NewsStaller></NewsStaller>


        </div>
    );
};

export default Home;