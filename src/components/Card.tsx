import React from 'react'
import CountriesListType,{ Country } from '../types/Country'

type CardProps = {
  key: number,
  country: Country
}

const Card = ({key, country}:CardProps) => {
  console.log(country)

    // if(!country.coatOfArms.png) return

  return (
    <section className='w-[70vw] m-auto bg-[#2b3945] my-5 rounded-md shadow-md'>
        <div className='w-[100%] flex-col'>
          <img src={country.flags.svg} 
          alt={`Flag from ${country.name.common}`} 
          className='w-[100%]'
        /></div>
        <div 
        className='px-5 py-2.5'>
          <h2 
          className='font-bold py-2 my-1 text-lg'
          >{country.name.common}</h2>
          <ul 
          className='mb-6 text-base'
          >
            <li><strong className='font-semibold'>Population: </strong>{country.population}</li>
            <li><strong>Region: </strong>{country.region}</li>
            <li><strong>Capital: </strong>{country.capital}</li>
          </ul>
        </div>
    </section>
  )
}

export default Card