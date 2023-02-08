import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Sidebar from './pages/Sidebar'
import Header from './pages/Header'

const Menu = () => {
  return (
    <section className='absolute right-5 top-12 bg-white min-h-[300px] w-[200px] z-[51] flex flex-col items-center'>
      <div>Account</div>
      <div>Settings</div>
    </section>
  )
}

const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle)
  }

  return (
    <div className='relative flex'>

      <div className={` ${sidebarToggle ? 'w-full' : 'w-[82%]'} absolute right-0 p-[2px] z-50 flex items-center justify-center bg-white shadow-md`}>
        <span className='w-[30px] h-[30px] cursor-pointer text-center font-bold text-white bg-gray-600' onClick={handleToggle}></span>
        <Header />
      </div>

      <Menu />

      <div className={` ${sidebarToggle ? 'hidden' : 'left-0 w-full md:w-[18%]'} flex flex-col md:fixed z-50 min-h-screen bg-green-800 transition delay-150`}>
        <span className='lg:hidden w-[50px] h-[50px] cursor-pointer text-center font-bold text-white bg-gray-600' onClick={handleToggle}></span>
        <Sidebar />
      </div>

      <div className={` ${sidebarToggle ? 'w-full' : 'w-[82%]'} absolute z-40 min-h-screen right-0 bg-blue`}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout;