import React from 'react'
import { Dropdown } from 'flowbite-react'

const DropdownBar = ({onSelect}) => {


   const onChange = (e) => {

    const regionName = e.target.value;
    onSelect(regionName);

   }

  return (
    <select onChange={onChange} className="bg-blue-500 border-none rounded text-xl text-white mb-12 cursor-pointer outline-none px-2">
    <option className="option">Filter by Region</option>
    <option className="option" value="Africa">
      Africa
    </option>
    <option className="option" value="America">
    Americas
    </option>
    <option className="option" value="Asia">
      Asia
    </option>
    <option className="option" value="Europe">
      Europe
    </option>
    <option className="option" value="Oceania">
      Oceania
    </option>
  </select>

   
  )
}

export default DropdownBar