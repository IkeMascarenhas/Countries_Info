import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCountriesList } from "@/context/countriesContext"
import handleSearchCountry from "@/services/handleSearchCountry"

type InputProps = {
    inputCountry: string,
    setInputCountry: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch = ({inputCountry, setInputCountry}: InputProps) => {
  const {setCountriesList, setIsLoading, setError} = useCountriesList();

  const fetchSearchData = async () => {
    if(inputCountry.length == 0) {
      setError("Insira algo na pesquisa!")
      return
    }
    try{
      setIsLoading(true)
      const data = await handleSearchCountry(inputCountry)
      console.log(data)
      setError(false)
      setIsLoading(false)
      setCountriesList(data)
    } catch(error) {
      console.error(error)
      setError("Ocorreu um erro ao realizar a busca! Certifique-se de inserir um valor válido.")
    }
      
  }

  return (
    <section id="Input" 
    className="flex mx-3 my-7 gap-2"
    >
      <Input type="text" 
      className="w-[80%] p-5 justify-center items-center" 
      placeholder="Search for a country..." 
      value={inputCountry} 
      onChange={(e) => setInputCountry(e.target.value)}
      />
      <Button type="button" 
      className="w-[20%] p-5 overflow-hidden"
      onClick={fetchSearchData}
      >Search</Button>
    </section>
  )
}

export default InputSearch

