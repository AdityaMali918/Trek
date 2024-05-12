import React from 'react'
import Dasboard from '../Dashboard/Dasboard'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='flex '>
        <div  className="">
            <Dasboard/>
        </div>
        <div className="flex-1 w-full "> 
        <Outlet />
      </div>
    </div>
  )
}

export default Layout