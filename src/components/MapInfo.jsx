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

<div className='container flex justify-center mt-20 '>
    <div className='flex flex-wrap gap-3 '>
      {countries.map((country) => (

        <div className='ml-36 w-64'>  
          <img src={country.flags.png} className="w-full h-40 rounded" />
          <div className="p-5">
                <h3>{country.name.common}</h3>
                <h6>
                  {" "}
                  Population:{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </h6>
                <h6> Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
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