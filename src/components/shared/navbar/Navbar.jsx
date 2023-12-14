import React from 'react'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className='bg-slate-800 flex justify-between p-4'>
        <button onClick={toggleSidebar} className='btn btn-primary'>Collapase</button>

    </div>
  )
}

export default Navbar