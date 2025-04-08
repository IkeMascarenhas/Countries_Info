import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { useCountriesList } from "../context/countriesContext";
import getAllCountries from "../services/getAllCountries";
import InputSearch from "../components/InputSearch";
import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [inputCountry, setInputCountry] = useState("");
  const didFetch = useRef(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // você pode ajustar o valor que quiser
  const {
    countriesList,
    setCountriesList,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useCountriesList();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = countriesList.slice(startIndex, endIndex);

  const fetchData = async () => {
    try {
      const data = await getAllCountries();
      setCountriesList(data);
      setIsLoading(false);
    } catch (error) {
      setError("Ocorreu um erro  ao realizar a busca. Por favor, tente novamente!");
      console.error(error);
    }
  };

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchData();
  }, []);

  return (
    <div>
      <header className="flex m-0 w-[100vw] bg-[#2b3945]" onClick={fetchData}>
        <h1 className="text-sm font-semibold p-4 text-white">
          Where in the world?
        </h1>
      </header>
      <InputSearch
        inputCountry={inputCountry}
        setInputCountry={setInputCountry}
      />
      <article className="md:m-auto md:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {error.length > 0 ? (
          <ErrorMessage message={error}/>
        ) : isLoading ? (
          <h1>Carregando</h1>
        ) : (
          currentItems.map((country, index) => (
            <Card key={index} country={country} />
          ))
        )}
      </article>

      <div className="flex justify-center mt-4 gap-2">
        <Button
          
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-black "
        >
          Previous
        </Button>
        <Button
          
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={endIndex >= countriesList.length}
          className="bg-black "
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Home;
