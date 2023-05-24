import React from 'react';
import { useState } from 'react';

const ContactVendor = () => {

           
  const [message, setMessage] = useState('');

  const handleChange=(event) =>{
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };
  
  let my_array = new Array(2060);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Math.seed = 0;
// console.log(getRandomInt(0, 1000));

// Math.seed = 0;
// console.log(getRandomInt(0, 1000));

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

let emptylist = [];
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

let c = 't';
while (c === 't') {
  c = prompt("Press 't' to continue or press any key to terminate");
  if (c !== 't') {
    break;
  }
  let string1 = prompt("Enter Vegetable:");
  let string2 = prompt("Enter Season:");
  let string3 = prompt("Enter City:");
  let number = parseInt(prompt("Enter Year:"));

  let ind = thisdict[string1][0];
  console.log("Predicted price:", emptylist[ind][number]);
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
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-teal-400"
              required
            />

            {/* <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your Message"
              className="mb-3  block text-sm py-3 px-4 rounded w-full border border-teal-400 outline-none"
            ></textarea> */}
   


            <input
              type="submit"
              value="Sumbit"
              className="cursor-pointer bg-teal-500 hover:bg-teal-700 py-1 px-4 rounded text-white"
              onChange={handleChange}
            />
          </form>
          
        </div>
      </div>
    </div>
    
  );
};

export default ContactVendor;
