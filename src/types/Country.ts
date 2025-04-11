export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
    altSpellings: string[];
    area: number;
    capital: string[];
    capitalInfo: { latlng: [number, number] };
    car: { signs: string[]; side: string };
    cca2: string;
    cca3: string;
    ccn3: string;
    coatOfArms: { png?: string; svg?: string };
    continents: string[];
    currencies: Record<string, { name: string; symbol: string }>;
    demonyms: Record<string, { f: string; m: string }>;
    flag: string;
    flags: { png: string; svg: string };
    idd: { root: string; suffixes: string[] };
    independent: boolean;
    landlocked: boolean;
    languages: Record<string, string>;
    latlng: [number, number];
    maps: { googleMaps: string; openStreetMaps: string };
    population: number;
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: Record<string, { official: string; common: string }>;
    unMember: boolean;
    };
    
type CountriesListType = Country[]

const initialCountry = {
  name: {
    common: "",
    official: "",
    nativeName: {},
  },
  altSpellings: [],
  area: 0,
  capital: [],
  capitalInfo: { latlng: [0, 0] },
  car: { signs: [], side: "" },
  cca2: "",
  cca3: "",
  ccn3: "",
  coatOfArms: { png: "", svg: "" },
  continents: [],
  currencies: {},
  demonyms: {},
  flag: "",
  flags: { png: "", svg: "" },
  idd: { root: "", suffixes: [] },
  independent: false,
  landlocked: false,
  languages: {},
  latlng: [0, 0],
  maps: { googleMaps: "", openStreetMaps: "" },
  population: 0,
  region: "",
  startOfWeek: "",
  status: "",
  timezones: [],
  tld: [],
  translations: {},
  unMember: false,
};

export default CountriesListType