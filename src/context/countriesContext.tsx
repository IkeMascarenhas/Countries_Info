import React, { createContext, useContext, useState, ReactNode } from 'react';
import CountriesListType from '../types/Country';

interface countriesContextType {
    countriesList: CountriesListType;
    setCountriesList: React.Dispatch<React.SetStateAction<any>>;
    isLoading: Boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<any>>
    error: string;
    setError: React.Dispatch<React.SetStateAction<any>>
}

const countriesListContext = createContext<countriesContextType | undefined>(undefined);

interface CountriesProviderProps {
    children: ReactNode;
}

function CountriesListProvider({ children }: CountriesProviderProps) {
    const [countriesList, setCountriesList] = useState<CountriesListType>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    return (
        <countriesListContext.Provider value={{countriesList, setCountriesList, isLoading, setIsLoading, error, setError}}>
            {children}
        </countriesListContext.Provider>
    );
}

function useCountriesList(): countriesContextType {
    const context = useContext(countriesListContext);
    if (!context) {
        throw new Error('useCountriesList deve ser usado dentro de um countriesListProvider');
    }
    return context;
}

export {CountriesListProvider, useCountriesList}