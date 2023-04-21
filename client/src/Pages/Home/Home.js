import React, { useEffect } from 'react';
import {useState} from "react";
import Blog from '../../Components/Home/Blog/Blog';
import Footer from '../../Components/Home/Footer/Footer';
import Hero from '../../Components/Home/Hero/Hero';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import OfferCard from '../../Components/Home/OfferCard/OfferCard';
import ShopCard from '../../Components/Home/ShopCard/ShopCard';
import VendorCTA from '../../Components/Home/VendorCTA/VendorCTA';

const Home = () => {
   sessionStorage.setItem("itemCount",-1);

  return(   

<>
 <Header />
 <NavBar />
 <Hero />
 <OfferCard />

    <ShopCard /> 
 <VendorCTA />
 <Footer /> 

    </>    
    
    
    
);
};

export default Home;
