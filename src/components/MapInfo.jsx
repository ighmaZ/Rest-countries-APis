import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';
import DropdownBar from './DropdownBar';

const MapInfo = () => {

const[countries, setCountries] = useState([]);



useEffect(() => {       // to get all countries

  axios.get('https://restcountries.com/v3.1/all') 
  .then((response)=> { 
    const data = response.data;
    setCountries(data);
  }
  )
},[])

  const getCountryByInput = async (countryName) => {
    
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

      const data = await res.json();
      setCountries(data);

    } 


  const getCountryByFilter = async (countryName) => {
    
      const res = await fetch(`https://restcountries.com/v2/region/${region}`);

      const data = await res.json();
      setCountries(data);

    }
     

    
  return (
    <>

<div className='flex justify-between px-20'>
    <SearchBar onSearch={getCountryByInput}/>
    <DropdownBar/>
    </div>



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

  </div>
</div>

    </>
  )
}

export default MapInfo