import React from 'react';
import Header from '../../Shared/Header/Header';

import Products from '../Products/Products';
import Review from '../Review/Review';

import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <Review></Review>
        </>
    );
};

export default Home;