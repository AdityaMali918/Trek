import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { MdAccountBalanceWallet } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { FaFortAwesome } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Sidebar from '../Sidebar/Sidebar';
import { SidebarItem } from '../Sidebar/Sidebar';


function Dasboard() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <main className='App'>
        <Sidebar>
            <SidebarItem icon={<FaHome size={30}/>} text="Dashboard" 
            active={location.pathname === '/admin/dashboard/home'}
            onClick={() => handleItemClick('/admin/dashboard/home')} /> 
            <SidebarItem icon={<MdAccountBalanceWallet size={25}/>} text="Account"
            active={location.pathname === '/admin/dashboard/account'}
            onClick={() => handleItemClick('/admin/dashboard/account')} /> 
            <SidebarItem icon={<TbTrekking size={25}/>} text="Treks"
            active={location.pathname === '/admin/dashboard/treks'}
            onClick={() => handleItemClick('/admin/dashboard/treks')} /> 
            <SidebarItem icon={<FaFortAwesome size={25}/>} text="Forts"
            active={location.pathname === '/admin/dashboard/forts'}
            onClick={() => handleItemClick('/admin/dashboard/forts')} /> 
            <SidebarItem icon={<GiCampingTent size={25}/>} text="Camps"
            active={location.pathname === '/admin/dashboard/camps'}
            onClick={() => handleItemClick('/admin/dashboard/camps')} />
            <SidebarItem icon={<IoLogOut size={25}/>} text="Logout"
         />
       
        </Sidebar>
    </main>
  )
}

export default Dasboard