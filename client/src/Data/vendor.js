import { useEffect } from "react";
import {useState} from "react";
import React from "react";

function Vendor() {
     const[records,setRecords]=useState([]);

    useEffect(()=>{
   fetch('http://localhost:4000/api/shops')
     .then(response => response.json())
     .then(data =>setRecords({records:data}))
          .catch(err => console.log(err))
           },[])
return (
<div>

<ul>
  {records.map((list,index)=>(
       <li key={index}>{list._id} |{list.shopName}</li>
  ))}
</ul>


</div>

)

 }






// fetch('http://localhost:4000/api/shops', {
//     method: 'GET',
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))



//    const vendor=[
//   {
//     _id: "4587978a-1734-4ad9-a2ab-484ea833254e",
//     shopName: "Lahey Yatz",
//     logo: "https://i.ibb.co/gTyP52V/logo-3.jpg",
//     banner: "http://dummyimage.com/100x100.png/dddddd/000000",
//     cardBanner: require("../Assets/images/vendorCardBanner/Image-3.jpg").default,
//     rating: 1,
//     city: "Champerico",
//     location: "Kretoria",
//     longitude: -91.912218,
//     "postal code": "11007",
//     name: "Brandais Faull",
//     phone: "506-84-9725",
//     email: "bfaull2@multiply.com",
//     hasOwnDelivery: true,
//     isDeliveryFree: true,
//     status: "Closed"
//   },
// ];

export default Vendor;
