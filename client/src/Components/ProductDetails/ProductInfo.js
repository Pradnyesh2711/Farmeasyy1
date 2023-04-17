import React from 'react';
import { Link } from 'react-router-dom';
import QuantityButton from '../Common/QuantityButton';
import ShowRating from '../Common/ShowRating';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductInfo =()=> {
  function home(){
    fetch('http://localhost:4000/api/allorders')
     .then(response => response.json())
          .then(data => setActivity(data))
    
    }      
 const[records,setActivity]=useState([]);
   

useEffect(()=>{home()});
const [amount,setAmount]=useState(3);

 const setDecrease=()=>{
    amount>1 ?setAmount(amount -1):setAmount(1);


  }
const setIncrease=()=>{
  setAmount(amount + 1);

}
return (
{records.map((record) => {


    <div className="mx-auto flex flex-wrap justify-between">
      <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={record.image}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-teal-500 text-3xl font-display title-font font-medium mb-2">
          The Catcher in the Rye
        </h1>
        <h2 className="text-sm title-font text-gray-800 tracking-widest mb-2">
          Brand: {brand}
        </h2>
        <div className="mb-2">
          <ShowRating value={4} />
        </div>
        <p className="leading-relaxed tracking-wide text-gray-800 font-sans h-20 overflow-hidden">
          {description}
        </p>
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            ৳ 58.00
          </span>
        </div>
        <td className="justify-center md:justify-end md:flex md:mt-8">
                <div className="flex-1 flex items-end justify-between text-sm">
                                    <div className="border border-gray-300 rounded">
                                      <i onClick={setIncrease} className="fas fa-plus m-1 py-1 px-4 cursor-pointer font-normal text-teal-600">
                                      </i>
                                      <span className="mx-2 text-center w-1 text-gray-900">
                                        {amount}
                                      </span>

                                      <i onClick={setDecrease} className="fas fa-minus m-1 py-1 px-4 cursor-pointer font-normal text-teal-600"></i>
                                    </div>

                                    
                                  </div>
                                
                </td>
              })};
               
                <td>
                
                  <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium tracking-wide text-teal-600 hover:text-teal-800"
                                      >
                                        Remove
                                      </button>
                                    </div>
                </td>
        
      
      </div>
    </div>

   );
};

export default ProductInfo;
