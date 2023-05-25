import React from 'react';
import { useState } from 'react';


const ContactVendor = () => {
  let thisdict = {
    "coriander": [0, 10],
    "potato": [1, 20],
    "onion": [2, 20],
    "fresh tomato": [3, 25],
    "okra": [4, 30],
    "cabbage": [5, 30],
    "cucumber": [6, 40],
    "carrot": [7, 50],
    "pears": [8, 100],
    "apples": [9, 150],
    "grapes": [10, 200],
    "mangoes": [11, 250],
    "strawberries": [12, 300]
  };
  let emptylist=[];
           
  const [message, setMessage] = useState('');
  const[year,setedit]=useState('');

  const handleChange=(event) =>{
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };
  const handleChane=(event) =>{
    // 👇 Get input value from "event"
    setedit(event.target.value);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for (let x of Object.values(thisdict)) {
    let temp = new Array(2060).fill(null);
    temp[2021] = x[1];
    for (let i = 2022; i < temp.length; i++) {
      let last = temp[i - 1] % 10;
      Math.seed = 0;
      let ran = getRandomInt(last, last + 5);
      let sum = ran + x[0];
      temp[i] = temp[i - 1] + sum;
    }
    emptylist.push(temp);
  }
  function getInt(){
    var elemN=document.getElementById("name");
    var elemY=document.getElementById("year");
var prod=elemN.value.toLowerCase();
  var number=elemY.value;
  let ind = thisdict[prod][0];
  alert("Predicted price for the item you asked is:-"+emptylist[ind][number]);
  }
  
  return (
    <div>
      <div className="bg-white rounded m-2 shadow-3xl z-20 pt-5 pb-6 px-2 mt-10 border-t-2 border-teal-400">
        <div>
          <h1 className="text-xl text-gray-800">Contact with Vendor</h1>
          <h3 className="text-base text-gray-700">Send request for Products</h3>
        </div>
        <div className="pt-3">
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-teal-400"
              required
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your Message"
              className="mb-3  block text-sm py-3 px-4 rounded w-full border border-teal-400 outline-none"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer bg-teal-500 hover:bg-teal-700 py-1 px-4 rounded text-white"
            />
          </form>
          <div className="bg-white rounded m-2 shadow-3xl z-20 pt-5 pb-6 px-2 mt-10 border-t-2 border-teal-400">
        <div>
          <h1 className="text-xl text-gray-800">Price Prediction</h1>
          <h3 className="text-base text-gray-700">Ask for Products</h3>
        </div>
        </div>
          {/* <form> */}
            <input
              type="text"
              name="Name"
              id='name'
              placeholder="Name"
              className="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-teal-400"
              required
            />
          
                  <option value="">Prediction Applicable for</option>
        <option value="option1">coriander</option>
        <option value="option2">potato</option>
        <option value="option3">onion</option>
        <option value="option4">fresh tomato</option>
        <option value="option5">okra</option>
        <option value="option6">cabbage</option>
        <option value="option7">cucumber</option>
        <option value="option8">carrot</option>
        <option value="option9">pears</option>
        <option value="option10">Apple</option>
        <option value="option11">grapes</option>
        <option value="option12">Mangoes</option>
        <option value="option13">strawberries</option>
        
            {/* <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your Message"
              className="mb-3  block text-sm py-3 px-4 rounded w-full border border-teal-400 outline-none"
            ></textarea> */}
   
   <input
              type="text"
              name="year"
              id='year'
              placeholder="Name"
              className="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-teal-400"
              required
            />

            <input
              type="button"
              value="Sumbit"
              className="cursor-pointer bg-teal-500 hover:bg-teal-700 py-1 px-4 rounded text-white"
              onClick={getInt}
              
            />
          {/* </form> */}
    
        </div>
      </div>
    </div>
    
  );
};

export default ContactVendor;
