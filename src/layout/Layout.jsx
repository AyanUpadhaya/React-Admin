import { useState } from 'react'
import Sidebar from '../components/shared/sidebar/Sidebar'
import Navbar from '../components/shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [showSidebar,setShowSidebar] = useState(true);
  return (
    <div className='bg-[#fafafa] w-full h-screen overflow-hidden'>
        <div className='flex items-start h-full '>
            <div className={ `h-full `}>
                <Sidebar showSidebar={showSidebar} toggleSidebar={()=>setShowSidebar(prev=>!prev)} ></Sidebar>
            </div> 
            <div className='h-full flex-1 w-full overflow-hidden' >
                <Navbar toggleSidebar = {()=>setShowSidebar(prev=>!prev)}></Navbar>
                <div className="h-[calc(100%-80px)] overflow-auto p-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Layout