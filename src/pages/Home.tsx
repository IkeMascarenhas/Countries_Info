import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { useCountriesList } from "../context/countriesContext";
import getAllCountries from "../services/getAllCountries";
import InputSearch from "../components/InputSearch";

const Home = () => {
  const {countriesList, setCountriesList } = useCountriesList();
  const [loading, setLoading] = useState(true);
  const [inputCountry, setInputCountry] = useState("");
  const didFetch = useRef(false);

  
  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchData = async () => {
      const data = await getAllCountries()
      setCountriesList(data)
      setLoading(false)
    }

    fetchData()
    
  }, []);

  return (
    <div>
      <header className="flex m-0 w-[100vw] bg-[#2b3945]">
        <h1 className="text-sm font-semibold p-4 text-white">Where in the world?</h1>
      </header>
      <InputSearch inputCountry={inputCountry} setInputCountry={setInputCountry} />
      <article >
        {loading ? (<h1>Carregando</h1>) : countriesList.map((country, index) => (
         <Card key={index} country={country}/>
))}
      </article>
    </div>
  );
};

export default Home;