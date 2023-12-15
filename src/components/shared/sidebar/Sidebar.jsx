import React, { useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({showSidebar,toggleSidebar}) => {
  const [showNestedLinks, setShowNestedLinks] = useState(false);
  const [usersActive, setUsersActive] = useState(false);
  const [isArrowUp,setIsArrowUp] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});

  const handleDropdown = (menu, submenuOpen) => {
    if (!submenuOpen) {
      setIsSubmenuOpen((prev) => ({
        [menu]: !prev[menu],
      }));
      setIsArrowUp(prev=>!prev)
    }
  };
  //close users nested links if show sidebar is false
  useEffect(()=>{
    if(showSidebar === false){
      setShowNestedLinks(false)
    }
  },[showSidebar])

  const handleShowNestedLinks = ()=>{
    if(showSidebar===false){
      toggleSidebar(prev=>!prev)
    }
  }
    const handleUsersActive =()=>{
        handleShowNestedLinks()
        handleDropdown("users")
    }
  return (
    <div
    className={`${showSidebar? "w-64" : "w-[88px]" } px-4 sidebar bg-primary h-full  relative duration-300 no-scrollbar overflow-auto `}
  >
        <div className='h-[75px] text-3xl font-bold w-full px-2  py-6 whitespace-nowrap shrink-0 flex gap-4'>
          <span>
          <i class="fa-solid fa-book fa-lg"style={{color: "#ffffff"}} ></i>
          </span>
          {showSidebar&& <h3 className='text-white' >Writter</h3>}  
        </div>
        <div className='mt-5 '>
        <ul className='space-y-4'>

          {/* home */}
          <li className="w-full overflow-hidden capitalize py-4 shrink-0  ">
          <Link to="/"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group font-[300] `}>
               <span className="shrink-0">
               <i class="fa-solid fa-house text-white " ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                Dashboard
                </span>
              </Link>
          </li>
            
            
            {/* users */}

            <li  className="w-full overflow-hidden capitalize py-4 shrink-0  ">
              <Link to="/users"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group cursor-pointer font-[300] `}>
               <span className="shrink-0">
               <i class="fa-regular fa-user" ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                  Users
                </span>
              </Link>
            
            </li>
            {/* posts */}
            <li  className="w-full overflow-hidden capitalize py-4 shrink-0   ">
              <Link to="/posts"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group cursor-pointer font-[300] `}>
               <span className="shrink-0">
               <i class="fa-solid fa-list" ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                  Posts
                </span>
              </Link>
            
            </li>
            {/* categories */}
            <li  className="w-full overflow-hidden capitalize py-4 shrink-0   ">
              <Link to="/categories"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group cursor-pointer font-[300] `}>
               <span className="shrink-0">
               <i class="fa-solid fa-folder" ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                  Categories
                </span>
              </Link>
            
            </li>
            {/* gallery */}
            <li  className="w-full overflow-hidden capitalize py-4 shrink-0   ">
              <Link to="/gallery"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group cursor-pointer font-[300] `}>
               <span className="shrink-0">
               <i class="fa-solid fa-image" ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                  Gallery
                </span>
              </Link>
            
            </li>


            {/* settings */}

            <li  className="w-full overflow-hidden capitalize py-4 shrink-0   ">
              <Link to="/settings"
                className={`navlink text-white
              font-poppins flex items-center  gap-4 w-full rounded-lg pl-4 group cursor-pointer font-[300] `}>
               <span className="shrink-0">
               <i class="fa-solid fa-gear" ></i>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} text-base origin-left duration-200 flex justify-between items-center w-full`}>
                  Settings
                </span>
              </Link>
            
            </li>
    
    
            </ul>
        </div>
    </div>
  )
}

export default Sidebar