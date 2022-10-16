import React from 'react'
import { BsMoon } from 'react-icons/Bs';


const Navbar = () => {
  return (
    <>

<nav className='relative w-full flex flex-row items-center justify-between py-8 shadow-lg  mb-10'>

    <h2  className='text-2xl font-bold ml-20'>Where in the world?</h2>
    <h2 className='text-2xl font-bold mr-20 flex '><BsMoon className='mr-2 mt-1'/>Dark Mode</h2>
</nav>
    </>
  )
}

export default Navbar