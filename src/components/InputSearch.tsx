import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type InputProps = {
    inputCountry: string,
    setInputCountry: React.Dispatch<React.SetStateAction<string>>
}

const InputSearch = ({inputCountry, setInputCountry}: InputProps) => {
  return (
    <section id="Input" 
    className="flex mx-3 my-7 gap-2"
    >
      <Input type="email" 
      className="w-[80%] p-5 justify-center items-center" 
      placeholder="Search for a country..." 
      value={inputCountry} 
      onChange={(e) => setInputCountry(e.target.value)}
      />
      <Button type="submit" 
      className="w-[20%] p-5"
      >Search</Button>
    </section>
  )
}

export default InputSearch

