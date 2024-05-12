// import React from 'react'
// import { IoSearch } from "react-icons/io5";
// import { TbTrekking } from "react-icons/tb";
// import { FaFortAwesome } from "react-icons/fa";
// import { FaCampground } from "react-icons/fa6"
// import { TbWorldSearch } from "react-icons/tb";
// function HomePage() {

//   const navParams = [
//     { name: "Explore", icon: TbWorldSearch },
//     { name: "Trek", icon: TbTrekking },
//     { name: "Forts", icon: FaFortAwesome },
//     { name: "Camping", icon: FaCampground },

//   ];

//   return (
//     <>
//     <div>
//     <header className=' relative '>
//     <img src="Images/AI/Rajgad.jpg" width={120} height={120} className="w-full h-[600px]"alt="" />
//       <div className='absolute flex flex-col top-5 left-5'>
//         <div>
//           <h1>EXPLORE MAHARASHTRA WITH TREKKERS</h1>
//         </div>
//         <div className='bg-white shadow-lg flex justify-center items-center rounded-3xl'>
//             <span className='pl-2'> < IoSearch size={25} /></span>
//           <input type="text"  className="border my-2 py-2 px-3 rounded-2xl w-96 m-3" placeholder='Search for treks,forts and many more' />
//         </div>
//         <div className='flex justify-between  items-center text-start border-b-1 border-black mt-2'>
//           {
//             navParams.map((n,i)=>(
//               <div>
//                 <span className=''>{n.icon && <n.icon className="mr-1" size={25} />}</span>
//                 <h4>{n.name}</h4>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </header>

//     <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-orange-500 text-6xl my-1">Explore the Maharashtra with Trekkers</h1>

//     </div>
//     </>
//   )
// }

// export default HomePage

import React from 'react';
import { IoSearch } from "react-icons/io5";
import { TbTrekking } from "react-icons/tb";
import { FaFortAwesome } from "react-icons/fa";
import { FaCampground } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";

function HomePage() {
  const navParams = [
    { name: "Explore", icon: TbWorldSearch },
    { name: "Trek", icon: TbTrekking },
    { name: "Forts", icon: FaFortAwesome },
    { name: "Camping", icon: FaCampground },
  ];

  const upcom=[
    {name:"Harihar Fort",date:"10/5/2024", time:"6am-5pm", days:"1", price:"600",image:"Harihar.jpg"},
    {name:"Pawana Dam",date:"10/5/2024", time:"6am-6pm", days:"2", price:"900",image:"camp.jpg"},
    {name:"Rajgad Fort",date:"10/5/2024", time:"6am-8pm", days:"2", price:"600",image:"Rajgad.jpg"},
  ]

  return (
    <div className=''>
      <header className='relative m-2 rounded-lg'>
        <img src="Images/AI/devkund.jpg" width={120} height={120} className="w-full h-[600px] rounded-lg" alt="" />
        <div className='absolute flex flex-col top-48 left-[330px]'>
          <div>
            <h1 className="text-white text-4xl font-semibold">EXPLORE MAHARASHTRA WITH TREKKERS</h1>
          </div>
          <div className='bg-white shadow-lg flex justify-center w[280px] items-center rounded-3xl mt-5'>
            <span className='pl-2'><IoSearch size={25} /></span>
            <input type="text" className="border my-2 py-2 px-3 rounded-2xl w-full m-3" placeholder='Search for treks, forts, and many more' />
          </div>
          <div className='flex justify-between items-center text-start  mt-5'>
            {navParams.map((n, i) => (
              <div key={i} className="flex flex-col items-center  p-5 rounded-xl hover:bg-slate-300 cursor-pointer">
                {n.icon && <n.icon className="mr-1 text-orange-500" size={25} />}
                <h4 className="text-white">{n.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </header>
      {/* <h1 className="text-start bg-clip-text text-transparent bg-gradient-to-r m-2 from-red-500 via-orange-400 to-orange-500 text-4xl my-1">Upcoming treks....</h1>
      <div className='flex justify-evenly mt-3'>

      <div className='flex flex-col justify-between items-center m-2'>
        { upcom.map((n,i)=>(
          <div className='flex m-2 w-full rounded-lg border-2 border-black'>

          <img src={`Images/AI/${n.image}`} width={80} height={60} className=' rounded-l-lg' alt="" />
          <div className='flex flex-col justify-evenly'>
           <h1>{n.name}</h1>
           <div className='text-gray-400 text-sm'>Date{n.date}</div>
           <div className='text-gray-400 text-sm'>Time:{n.time}</div>
           <div className='text-gray-400 text-sm'>Days:{n.days}</div>
           <div className='text text-end font-bold'>Price:{n.price} Rs</div>
          </div>

       </div>
        ))}
        
       </div>

       <div>
        <img src="Images/AI/trek2.jpeg" className="w-[600px] h-[500px]" alt="" srcset="" />
       </div>

      </div> */}
       <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Upcoming Treks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcom.map((n, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`Images/AI/${n.image}`} className="w-full h-48 object-cover" alt={n.name} />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{n.name}</h2>
              <p className="text-sm text-gray-600 mb-1">Date: {n.date}</p>
              <p className="text-sm text-gray-600 mb-1">Time: {n.time}</p>
              <p className="text-sm text-gray-600 mb-1">Duration: {n.days} Days</p>
              <p className="text-sm text-gray-600 mb-4">Price: {n.price} Rs</p>
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-red-600 hover:to-orange-600 transition duration-300">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default HomePage;
