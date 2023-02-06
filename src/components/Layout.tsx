import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Sidebar from './pages/Sidebar'
import Header from './pages/Header'

const Layout = () => {
  return (
    <div className='relative grid grid-cols-12'>
      <div className="absolute w-full lg:w-9/12 shadow-md right-0 bg-gray-300">
        <Header />
      </div>
      <div className='min-h-screen hidden lg:block lg:col-span-3 bg-green-900'>
        <Sidebar />
      </div>
      <div className='col-span-12 lg:col-span-9 bg-gray-500'>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout