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


       
function home(){
fetch('http://localhost:4000/api/shops')
 .then(response => response.json())
      .then(data => setActivity(data))

}      
const[records,setActivity]=useState([]);

useEffect(()=>{home()});
  return (
    <>
  { <div>
  <ul>
  {records.map((record)=>(
 <li>{record.shopName}</li>
 
 
 ))}
 </ul>
 </div> }
 <Header />
 <NavBar />
 <Hero />
 <OfferCard />

    <ShopCard /> 
 <VendorCTA />nn
 <Footer /> 

{/* 
    <div class="flex h-screen justify-center items-center flex-col">
    <div
        class="w-full h-screen bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
        <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                <span class="text-white text-4xl w-1/2 text-center">Here is an example of black overlay on an image</span>
        </div>
    </div>
</div>
      <div
        className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center bg-darken backdrop-brightness-50"
        style={{
          backgroundImage: `url(https://thumbs.dreamstime.com/b/empty-wooden-photo-frame-farm-background-empty-wooden-photo-frame-paddy-farm-background-111650526.jpg)`,
          
        }}
      >
        
       
       
       
      </div>
     
    
     
    
      */}
    </>    
    
    
    
);
};

export default Home;
