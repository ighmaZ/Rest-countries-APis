import React, { useState } from 'react'

const SearchBar = () => {

   const[search, setSearch] = useState("");


  return (
 
    <>
    <input
     className='w-5/12 text-center  shadow-lg border-none text-blue-600'
     type="text" 
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     placeholder='search for a country' />
    </>
  )
}

export default SearchBar