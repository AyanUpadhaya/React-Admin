import React, { useRef, useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import UsersSvg from '../../svg/UsersSvg';
import Menu from '../../utils/Menu';







const Sidebar = ({showSidebar}) => {
  const [showNestedLinks, setShowNestedLinks] = useState(false);
  const [usersActive, setUsersActive] = useState(false);
  const [isArrowUp,setIsArrowUp] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const submenuRef = useRef({});
  const employeeMenuRef = useRef({});

  const menulist = [
    {
      title:'All Employees',
      path:"/employees",
    },
    {
      title:'Employee Category',
      path:"/employee-category",
    },
];

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
              <Menu handleMenu={()=>handleDropdown("employees")} 
              svg={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
              <path d="M17.8575 14.3467C16.3175 13.5583 14.3192 12.9167 12 12.9167C9.68082 12.9167 7.68249 13.5583 6.14249 14.3467C5.22582 14.8142 4.66666 15.7583 4.66666 16.785V19.3333H19.3333V16.785C19.3333 15.7583 18.7742 14.8142 17.8575 14.3467ZM17.5 17.5H6.49999V16.785C6.49999 16.4367 6.68332 16.125 6.97666 15.9783C8.06749 15.4192 9.82749 14.75 12 14.75C14.1725 14.75 15.9325 15.4192 17.0233 15.9783C17.3167 16.125 17.5 16.4367 17.5 16.785V17.5Z" />
              <path d="M9.96499 12H14.035C15.1442 12 15.9967 11.0283 15.85 9.92834L15.5567 7.68251C15.2725 5.94084 13.76 4.66667 12 4.66667C10.24 4.66667 8.72749 5.94084 8.44332 7.68251L8.14999 9.92834C8.00332 11.0283 8.85582 12 9.96499 12ZM10.2583 7.95751C10.405 7.11417 11.1383 6.50001 12 6.50001C12.8617 6.50001 13.595 7.11417 13.7417 7.95751L14.035 10.1667H9.96499L10.2583 7.95751Z" />
              </svg>
              } menutitle={'Employees'} 
              showSidebar={showSidebar} 
              menuitem={'employees'} 
              submenuRef={employeeMenuRef} 
              isSubmenuOpen={isSubmenuOpen} 
              isArrowUp={isArrowUp} 
              menulist={menulist}
              
               ></Menu>

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