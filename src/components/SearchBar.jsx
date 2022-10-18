import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {

   const[search, setSearch] = useState("");


   const submitHandler = (e) => {

      e.preventDefault();

      onSearch(search);
   }


  return (
 
    <>
    <form
     onSubmit={submitHandler}>
    <input
     className=' px-36 py-4 text-center  shadow-lg border-none text-blue-600'
     type="text" 
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     placeholder='search for a country' />
     <button type='submit'>hi</button>
     </form>
    </>
  )
}

export default SearchBar