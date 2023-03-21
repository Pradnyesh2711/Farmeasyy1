import React, { useEffect } from 'react';
import Blog from '../../Components/Home/Blog/Blog';
import Footer from '../../Components/Home/Footer/Footer';
import Hero from '../../Components/Home/Hero/Hero';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import OfferCard from '../../Components/Home/OfferCard/OfferCard';

import ShopCard from '../../Components/Home/ShopCard/ShopCard';
import VendorCTA from '../../Components/Home/VendorCTA/VendorCTA';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Background Image with 3 sections */}
      <div
        className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://thumbs.dreamstime.com/b/empty-wooden-photo-frame-farm-background-empty-wooden-photo-frame-paddy-farm-background-111650526.jpg)`,
        }}
      >
        <Header />
        <NavBar />
        <Hero />
      </div>
      <OfferCard />
      <ShopCard />
      
      <VendorCTA />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
