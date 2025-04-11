import { Country } from '../types/Country'
import { Link } from 'react-router-dom'

type CardProps = {
  key: number,
  country: Country
}

const Card = ({country}:CardProps) => {
  return (
    <Link to={`/details/${country.name.common}`} className='w-[100%] m-auto bg-[#2b3945] my-5 rounded-md shadow-md md:max-w-[300px]'>
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
            <li><strong className='font-semibold'>Population: </strong>{country.population.toLocaleString('pt-BR')}</li>
            <li><strong>Region: </strong>{country.region}</li>
            <li><strong>Capital: </strong>{country.capital}</li>
          </ul>
        </div>
    </Link>
  )
}

export default Card