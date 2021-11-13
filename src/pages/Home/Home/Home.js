import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import CustomizeDiamond from '../CustomizeDiamond/CustomizeDiamond';

import Products from '../Products/Products';
import Review from '../Review/Review';

import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <CustomizeDiamond></CustomizeDiamond>
            <Review></Review>
            <Footer></Footer>
        </>
    );
};

export default Home;