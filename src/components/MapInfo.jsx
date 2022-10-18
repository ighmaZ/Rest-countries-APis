import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MapInfo = () => {

const[countries, setCountries] = useState([]);

    useEffect(() => {      

         axios.get('https://restcountries.com/v3.1/all') 
         .then((response)=> { 
           const data = response.data;
           setCountries(data);
         }
         )

 

    },[])
    
  return (
    <>

<div className='container flex justify-center mt-5 '>
    <div className='flex flex-wrap gap-3 '>
      {countries.map((country) => (

        <div className='ml-20 w-64'>  
          <img src={country.flags.png} className="w-full h-40 rounded" />
        </div>
        
      
      ))}
  {/* <div>
      <span>{country.name}</span>
  </div> */}
  </div>
</div>

    </>
  )
}

export default MapInfo