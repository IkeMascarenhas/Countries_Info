import { countryapi } from "../api/httpClient"

const getAllCountries = async () => {
    try {
        const response = await countryapi.get('/all')
        return response.data
    } catch (error) {
        console.error("Ocorreu um erro" + error)
        return null
    }
}

export default getAllCountries