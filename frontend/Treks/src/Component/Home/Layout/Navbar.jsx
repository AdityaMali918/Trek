// import React from 'react'
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
// import { Link, useParams, Navigate } from "react-router-dom";
// import {User} from "@nextui-org/react";

// function NavbarHome() {

//   const navParams = ["Home","Trek","Forts","Camping","About Us","Contact Us"]
//   return (
//    <>
  
//   <div className='flex justify-start items-center border-b-1 border-black absolute'>
//     <div>
//     <img src="/Images/Logo.jpg" height={60} width={60}  alt="Logo" />
//     </div>
//      {
//       navParams.map((n,i)=>(
//         <div key={i} className='rounded-xl border-2 border-gray-300 mx-2 px-3 py-1 cursor-pointer hover:bg-orange-200'>{n}</div>
//       ))
//      }
//       <div className='w-auto mr-64 flex justify-end items-center relative' >
//   <User   
//       name="Junior Garcia"
//       className='right-1 top-2'
//       description={(
//         <div size="sm" isExternal>
//           @jrgarciadev
//         </div>
//       )}
//       avatarProps={{
//         src: "https://avatars.githubusercontent.com/u/30373425?v=4"
//       }}
//     />
//   </div>
//   </div>
//   </>
//   )
// }

// export default NavbarHome

import React from 'react';
import { Link, useParams, Navigate } from "react-router-dom";
import { User } from "@nextui-org/react";
import { TbTrekking } from "react-icons/tb";
import { FaFortAwesome } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";
import { FaCampground } from "react-icons/fa6"
import { FaUsers } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function NavbarHome() {
  const navParams = [
    { name: "Home", icon: FaMountain },
    { name: "Trek", icon: TbTrekking },
    { name: "Forts", icon: FaFortAwesome },
    { name: "Camping", icon: FaCampground },
    { name: "About Us", icon: FaUsers },
    { name: "Contact Us", icon: FaPhoneAlt }
  ];

  return (
    <div className='flex justify-between items-center border-b-1 border-black'>
      <div className='flex justify-center items-center italic'>
        <img src="/Images/Logo.jpg" height={55} width={60} alt="Logo" />
        <span>Trekkers</span>
      </div>
      <div className='flex justify-end items-center'>
        {
          navParams.map((n, i) => (
            <div key={i} className='flex justify-center items-center rounded-2xl border-2 border-gray-300 mx-2 px-3 py-1 cursor-pointer hover:bg-orange-500 hover:text-white'>
              {n.icon && <n.icon className="mr-1" />}
              <span className='px-1'>{n.name}</span>
            </div>
          ))
        }
      </div>
      <div className='mr-1'>
        <User
          name="Junior Garcia"
          description={(
            <div size="sm">
              @jrgarciadev
            </div>
          )}
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
          }}
        />
      </div>
    </div>
  );
}

export default NavbarHome;
