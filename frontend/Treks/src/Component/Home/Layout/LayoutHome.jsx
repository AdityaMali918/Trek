import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarHome from './Navbar';
function LayoutHome() {
  return (
    <>
    <div className='relative flex flex-col'>
        <main className='flex flex-col relative'>
            <NavbarHome/>
            <section className='h-full flex-1'>
            <Outlet />
            </section>
        </main>
    </div>
    </>
  )
}

export default LayoutHome