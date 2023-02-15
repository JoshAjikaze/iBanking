import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app-redux/store'
import { showSidebar, hideSidebar } from '../app-redux/togglers/sidebarToggler'

import React, { useState } from 'react'
import HomePage from './components/HomePage'
import { Routes, Route, Link } from 'react-router-dom'



import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import FooterComponent from './components/Footer'

const Layout = (props: any) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sidebarShrink, setSidebarShrink] = useState(false);

  const toggle = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch()


  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle)
  }

  const handleShrink = () => {
    setSidebarShrink(!sidebarShrink)
  }

  console.log(sidebarShrink, "Sidebar Shrink State")
  console.log(sidebarToggle, "Sidebar Toggle State")



  return (
    <div className='relative flex min-h-screen'>



      {/* container for the header component */}
      <div className={` ${ sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} absolute right-0 p-[2px] z-50 flex items-center justify-center bg-white  dark:bg-gray-900 dark:text-white shadow-md`}>
        <span className='w-[30px] h-[30px] cursor-pointer text-center font-bold' onClick={handleToggle}>&#9776;</span>
        <Header />
      </div>

      {/* Container for the sidebar component */}
      <div className={` ${sidebarToggle ? 'hidden' : 'left-0 w-full md:w-[18%]'} ${sidebarShrink ? 'md:w-[4%] hover:w-[18%]' : 'md:w-[18%]'} group relative flex flex-col md:fixed z-50 min-h-screen bg-green-800 dark:bg-gray-900 transition ease-in-out delay-150`}>
        <span className='absolute lg:hidden w-[50px] h-[50px] cursor-pointer text-center font-bold text-white' onClick={handleToggle}>&#10006;</span>
        
        <Sidebar />
        
        <p onClick={handleShrink} className='hidden w-full md:flex absolute bottom-0 right-0 p-2 bg-green-900 text-white dark:bg-gray-700 '>
          { !toggle ?
            <button className='w-full' onClick={() => { dispatch(showSidebar()) }}>
              &#10094;
            </button>
            :
            <button className='w-full' onClick={() => { dispatch(hideSidebar()) }}>
              &#10095;
            </button>
          }
        </p>
      </div>


      {/* Container for the main component */}
      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} absolute z-40 min-h-screen right-0 bg-blue`}>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Container for the footer component */}
      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} absolute bottom-0 right-0  z-40 flex items-center justify-center shadow-md`}>
        <FooterComponent />
      </div>

    </div>
  )
}

export default Layout;