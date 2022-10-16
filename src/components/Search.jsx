
import React from 'react'
import SearchBar from './SearchBar'
import DropdownBar from './DropdownBar'

const Search = () => {
  return (
    <div className='flex justify-between px-20'>
    <SearchBar/>
    <DropdownBar/>

    </div>
  )
}

export default Search