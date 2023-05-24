import React from 'react';

const ContactVendor = () => {

           
  const [message, setMessage] = useState('');

  const handleChange=(event) =>{
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };

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
            />
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default ContactVendor;
