import React from 'react'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='bg-slate-800 flex justify-between p-4'>
        <button onClick={toggleSidebar} >
        <i class="fa-solid fa-bars fa-2xl" style={{color: "#ffffff",width:'40px'}}></i>
        </button>

        <div className='w-6 h-6 bg-white rounded-full p-4 flex justify-center items-center'>
        <i class="fa-solid fa-user"></i>
        </div>

    </div>
  )
}

export default Navbar