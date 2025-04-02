import { useState } from "react"
import Input from "../components/Input"
const Home = () => {

    const [inputCountry, setInputCountry] = useState(String)
    
  return (
    <div>
        <header>
            <h1>Where in the world?</h1>
        </header>
        <Input/>
        <article>
            
        </article>
    </div>
  )
}

export default Home