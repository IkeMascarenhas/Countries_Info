// api/httpClient.ts
import axios from "axios";

export const countryapi = axios.create({
  baseURL: "https://restcountries.com/v3.1", // URL base da API
  timeout: 5000, // Tempo limite da requisição (5s)
  headers: { "Content-Type": "application/json" }
});
