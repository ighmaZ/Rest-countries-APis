import React, { useEffect } from 'react'
import axios from 'axios'

const MapInfo = () => {

    useEffect(() => {

            
        axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {

console.log(response);
    
        })
    
    },[])
    
  return (
    <>

    </>
  )
}

export default MapInfo