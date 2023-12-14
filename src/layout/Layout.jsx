import React, { useState } from 'react'
import Sidebar from '../components/shared/sidebar/Sidebar'
import Navbar from '../components/shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [showSidebar,setShowSidebar] = useState(true);
  return (
    <div className='w-full h-full overflow-hidden'>
        <div className='w-full h-screen flex'>
            <div className={ `h-full relative ${showSidebar?'w-80':'w-20'} duration-300 overflow-y-auto`}>
                <Sidebar showSidebar={showSidebar} ></Sidebar>
            </div> 
            <div className='w-full h-screen' >
                <Navbar toggleSidebar = {()=>setShowSidebar(prev=>!prev)}></Navbar>
                <div className='h-full overflow-auto p-4 bg-slate-300'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Layout