import { useState } from 'react'
import { Route, Routes } from "react-router-dom";


import HomePage from './Component/Home/HomePage';
import AdminLogin from './Component/Admin/AdminLogin';
import Home from './Component/Admin/Pages/Home';
import Account from './Component/Admin/Pages/Account';
import Layout from './Component/Admin/Layout/Layout';
import Trek from './Component/Admin/Pages/Trek';
import Camp from './Component/Admin/Pages/Camp';
import Fort from './Component/Admin/Pages/Fort';
import AddTrek from './Component/Admin/Pages/AddTrek';
import NavbarHome from './Component/Home/Layout/Navbar';
import LayoutHome from './Component/Home/Layout/LayoutHome';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index  element={<HomePage />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path='/navbar' element={<NavbarHome/>} />
      </Route>
        <Route path="/admin/dashboard" element={<Layout />}>
          <Route index path="/admin/dashboard/home" element={<Home />} />
          <Route path="/admin/dashboard/account" element={<Account />} />
          <Route path="/admin/dashboard/treks" element={<Trek />} />
          <Route path="/admin/dashboard/camps" element={<Camp />} />
          <Route path="/admin/dashboard/forts" element={<Fort />} />
          <Route path="/admin/dashboard/addtrek/:name" element={<AddTrek />} />
        </Route>


      </Routes>
      
    </>
  )
}

export default App
