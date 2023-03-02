import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app-redux/store'
import { showSidebar, hideSidebar } from '../app-redux/togglers/sidebarToggler'

import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import Sidebar from './components/Sidebar'
import Header from './components/Header'
import FooterComponent from './components/Footer'
import AdminUserMgt from './components/AdminUserMgt/AdminUserMgt'
import AdminCreate from './components/AdminUserMgt/AdminCreate'
import AdminEdit from './components/AdminUserMgt/AdminEdit'
import AdminView from './components/AdminUserMgt/AdminView'
import AdminIndex from './components/AdminUserMgt/AdminIndex'

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
      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} fixed right-0 pr-10 md:pr-0 md:p-[2px] z-50 flex items-center justify-center bg-white  dark:bg-gray-900 dark:text-white shadow-md`}>
        <span className='w-[30px] h-[30px] cursor-pointer text-center font-bold' onClick={handleToggle}>&#9776;</span>
        <Header />
      </div>

      {/* Container for the sidebar component */}
      <div className={` ${sidebarToggle ? 'hidden' : 'left-0 w-full lg:w-[18%]'} ${sidebarShrink ? 'lg:w-[4%] hover:w-[18%]' : 'lg:w-[18%]'} group relative flex flex-col md:fixed z-50 min-h-screen bg-iBankingDarkGreen dark:bg-gray-900 transition ease-in-out delay-150`}>

        <span className='absolute right-0 top-4 z-50 lg:hidden w-[50px] h-[50px] cursor-pointer text-center font-bold text-white' onClick={handleToggle}>&#10006;</span>

        <Sidebar />

        <p onClick={handleShrink} className='hidden w-full lg:flex absolute bottom-0 right-0 p-2 bg-green-900 text-white dark:bg-gray-700 '>
          {!toggle ?
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
      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} absolute z-40 min-h-screen right-0 bg-blue flex items-center justify-center`}>
        <Routes>

          <Route path="admin" element={<AdminUserMgt />}>
            <Route path="index" element={<AdminIndex />} />
            <Route path="create" element={<AdminCreate />} />
            <Route path="view" element={<AdminView />} />
            <Route path="edit" element={<AdminEdit />} />
          </Route>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="*" element={
            <div className='text-3xl text-center font-bold'>
              <p className='flex'>
                <p>This Page Is Not Available</p>
                {/* <p className='animate-spin text-5xl'>&#128527;</p> */}
                <p className='animate-bounce text-5xl'>&#128521;</p>
              </p>
              <p className='text-lg'>Please Check Later </p>
            </div>
          } />
        </Routes>
      </div>

      {/* Container for the footer component */}
      <div className={` ${sidebarToggle || sidebarShrink ? 'w-full' : 'w-[82%]'} ${sidebarShrink ? 'w-[96%]' : ''} fixed bottom-0 right-0  z-40 flex items-center justify-center shadow-md`}>
        <FooterComponent />
      </div>

    </div>
  )
}

export default Layout;