import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StepBack } from "lucide-react";
import handleSearchCountry from "@/services/handleSearchCountry";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { useState } from "react";
import { Country } from "@/types/Country";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState<Country>();
  const [loading, setLoading] = useState(false)
  const { country } = useParams<{ country: string }>();

  useEffect(() => {
    if (!country) return;
    const fetchDetailsData = async () => {
      try {
        setLoading(true)
        const data = await handleSearchCountry(country);
        setLoading(false)
        console.log(data);
        setCountryDetails(data[0]);
      } catch (error) {}
    };
    fetchDetailsData();
  }, []);

  return (
    <>
      <Header />
      <main className="w-[80%] mx-auto my-6 flex flex-col gap-8 md:max-w-[50vw]">
      <Link to="/">
          <Button className="shadow">
            <StepBack />
            Back
          </Button>
        </Link>
        {loading ? <Loading /> : ( 
        <article className="flex flex-col gap-5">
          <img src={countryDetails?.flags.svg} />
          <h1 className="font-semibold text-xl">
            {countryDetails?.name.common}
          </h1>
          <ul>
            <li>
              <strong>Native Name</strong>:{" "}
              {countryDetails?.name.nativeName &&
                Object.values(countryDetails.name.nativeName)[0]?.official}
            </li>

            <li>
              <strong>Population: </strong>
              {countryDetails?.population.toLocaleString("pt-br")}
            </li>
            <li>
              <strong>Region: </strong>
              {countryDetails?.region}
            </li>
            <li>
              <strong>Sub Region: </strong>
              {countryDetails?.subregion}
            </li>
            <li className="mb-5">
              <strong>Capital: </strong>
              {countryDetails?.capital}
            </li>

            <li className="">
              <strong>Top Level Domain: </strong>
              {countryDetails?.tld}
            </li>
            <li className="">
              <strong>Currencies: </strong>
              {countryDetails?.currencies &&
    Object.values(countryDetails.currencies)[0]?.name}
            </li>
            <li className="">
              <strong>Languages: </strong>
              {countryDetails?.languages &&
    Object.values(countryDetails.languages)}
            </li>
          </ul>
        </article>
        )}
        
      </main>
      <Footer/>
    </>
  );
};

export default CountryDetails;
