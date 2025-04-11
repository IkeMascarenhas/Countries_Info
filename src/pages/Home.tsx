import { useEffect, useState, useRef } from "react";
import Card from "../components/Card";
import { useCountriesList } from "../context/countriesContext";
import getAllCountries from "../services/getAllCountries";
import InputSearch from "../components/InputSearch";
import ErrorMessage from "@/components/ErrorMessage";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      setIsLoading(true)
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
    <>
      <Header fetchData={fetchData}/>
      <InputSearch
        inputCountry={inputCountry}
        setInputCountry={setInputCountry}
      />
      <article className="md:m-auto md:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {error.length > 0 ? (
          <ErrorMessage message={error}/>
        ) : isLoading ? (
          <Loading/>
        ) : (
          currentItems.map((country, index) => (
            <Card key={index} country={country} />
          ))
        )}
      </article>

      <div className="flex justify-center my-4 gap-2 ">
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
      <Footer/>
    </>
  );
};

export default Home;
