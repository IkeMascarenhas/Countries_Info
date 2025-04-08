import { countryapi } from '@/api/httpClient'


const handleSearchCountry = async (inputCountry:string) => {
  try {
    const response = await countryapi.get(`/name/${inputCountry}`)
    return response.data
  } catch (error) {
    console.error(error)
    return error

  }

}

export default handleSearchCountry