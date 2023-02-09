import React, { useState } from 'react'
import HomePage from './components/HomePage'
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const Menu = () => {
  return (
    <section className='absolute right-5 top-12 bg-white min-h-[300px] w-[200px] z-[51] flex flex-col items-center'>
      <div>Account</div>
      <div>Settings</div>
    </section>
  )
}

const Layout = ( props:any) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sidebarShrink, setSidebarShrink] = useState(false);

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle)
    console.log(sidebarToggle)
  }

  const handleShrink = () => {
    setSidebarShrink(!sidebarShrink)
    console.log(sidebarShrink)
  }

  return (
    <div className='relative flex'>

      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${ sidebarShrink ? 'w-[96%]' : ''}  absolute right-0 p-[2px] z-50 flex items-center justify-center bg-white shadow-md`}>
        <span className='w-[30px] h-[30px] cursor-pointer text-center font-bold text-white bg-gray-600' onClick={handleToggle}></span>
        <Header />
      </div>

      {/* ${sidebarShrink ?  'w-[95%]' : 'md:w-[82%]'} */}

      <Menu />

      <div className={` ${sidebarToggle ? 'hidden' : 'left-0 w-full md:w-[18%]'} ${sidebarShrink ?  'md:w-[4%] hover:w-[18%] delay-100 duration-500 transition-all' : 'md:w-[18%]'} group relative flex flex-col md:fixed z-50 min-h-screen bg-green-800 transition delay-150`}>
        <span className='lg:hidden w-[50px] h-[50px] cursor-pointer text-center font-bold text-white bg-gray-600' onClick={handleToggle}></span>
        <Sidebar />
        <button onClick={handleShrink} className={` ${ sidebarShrink ? 'text-sm' : ''} absolute bottom-0 w-full bg-green-700 p-3 text-white`}>Shrink</button>
      </div>

      

      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${ sidebarShrink ? 'w-[96%]' : ''} absolute z-40 min-h-screen right-0 bg-blue`}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* ${sidebarShrink ? 'w-[95%]' : 'w-[82%]'} */}
      
    </div>
  )
}

export default Layout;