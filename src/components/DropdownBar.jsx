import React from 'react'
import { Dropdown } from 'flowbite-react'

const DropdownBar = () => {
  return (
    <>
<Dropdown label="Filter by region">
  <Dropdown.Item 
  // onClick={onClick}
  >
    Africa
  </Dropdown.Item>
  <Dropdown.Item>
    America
  </Dropdown.Item>
  <Dropdown.Item>
    Asia
  </Dropdown.Item>
  <Dropdown.Item >
  Europe 
   </Dropdown.Item>
  <Dropdown.Item >
  oceania 
   </Dropdown.Item>
</Dropdown>
    
    </>
  )
}

export default DropdownBar