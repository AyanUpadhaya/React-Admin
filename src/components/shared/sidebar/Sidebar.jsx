import React, { useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import UsersSvg from '../../svg/UsersSvg';







const Sidebar = ({showSidebar}) => {
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
    <div className='h-full bg-slate-800 text-white p-4'>
        <div className='my-5 text-3xl font-bold'>
        {showSidebar&& <h3 className='text-white'>Dashboard</h3>}
            
        </div>
        <div className='p-4'>
            {showSidebar&& <ul className='space-y-4'>
                <li className='font-semibold text-sm btn w-full bg-transparent text-white border-0'>Home</li>
                {/* users */}

            <li  className="w-full overflow-hidden capitalize shrink-0 ">
              <div onClick={()=>{
                handleUsersActive()
              }}
                className={`navlink text-white
              font-poppins flex items-center gap-4 w-full p-4 cursor-pointer font-bold `}>
               <span className="shrink-0">
                <UsersSvg/>
               </span>
                <span className={` ${!showSidebar ? 'hidden' : 'block'} origin-left duration-200 flex justify-between items-center w-full`}>
                  Users
                  <i className={`${isArrowUp? 'rotate-180 duration-300':'rotate-0 duration-300'} fa-solid fa-chevron-down`}></i>
                </span>
              </div>
              {/* nested submenu */}
              {showSidebar && (<ul ref={(ref) => (submenuRef.current["users"] = ref)}
                  className={`flex flex-col gap-1 duration-300 dropdown-menu pl-10`}
                  style={{
                    maxHeight: isSubmenuOpen["users"]
                      ? `${submenuRef.current["users"]?.scrollHeight}px`
                      : "0",
                  }}>
                {/* users  */}

            <li>
              <Link
                to="/users"
                className={`nested text-white font-poppins flex items-center gap-4 w-full p-4 cursor-pointer `}
                  onClick={(e) => {
                    e.stopPropagation();
                    
                  }}
              >
              
                

                <span
                  className={` ${showSidebar ? "block" : "hidden"} origin-left duration-300 font-poppins`}
                >
                 All Users
                </span>
              </Link>
            </li>

            {/* Team */}

            <li>
            <Link
                to="/team"
                className={`
                text-white font-poppins flex items-center gap-4 w-full p-4 cursor-pointer `}
                  onClick={(e) => {
                    e.stopPropagation();

                  }}
              >
              
                

                <span
                  className={` ${showSidebar ? "block" : "hidden"} origin-left duration-300 font-poppins`}
                >
                 Teams
                </span>
              </Link>
            </li>

              </ul>)}
            </li>
    
            </ul>}
        </div>
    </div>
  )
}

export default Sidebar